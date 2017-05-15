import { Slingshot } from 'meteor/edgee:slingshot';
import { storeUrlInDatabase } from '../api/files/methods.js';
import { browserHistory } from 'react-router';
import rebateEditor from './rebate-editor.js';

let _getFileFromInput = ( input ) => input.files[0];
let _setPlaceholderText = ( string = "Click or Drag a file Here to Uploads", span) => {
  document.querySelectorAll('.alert span ').innerText = string;
};

let _addUrlToDatabase = ( url, email, rebate ) => {
  //storeUrlInDatabase is were all magic happens
  storeUrlInDatabase.call({ url, email, rebate }, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason , 'warning');
      _setPlaceholderText('Warning from database');
    }else{
      Bert.alert( "Rebate Submitted Successfully!", "success");
      browserHistory.push('/success');
      receipt_holder.empty();
      _setPlaceholderText();
    }
  });
}

let _uploadFileToAmazon= (file, email, rebate) => {
  const metaContext = { avatarId: 'Victor' }
  const uploader = new Slingshot.Upload('uploadToAmazonS3', metaContext);

  uploader.send( file, ( error, url ) => {
    if (error) {
      Bert.alert( error.message , 'warning');
      _setPlaceholderText('warning from amazon');
    }else{
         _addUrlToDatabase ( url, email, rebate );
       }
    });
};

export default  function uploadToAmazonS3( { email, rebate, receipt_holder }, component ) {
  let receiptFile = _getFileFromInput( receipt_holder );

 _setPlaceholderText( `Uploading ${receiptFile.name}...`,  );

 _uploadFileToAmazon( receiptFile, email, rebate );
  component.documentEditorForm.reset();
}
