import { Slingshot } from 'meteor/edgee:slingshot';
import { storeUrlInDatabase } from '../api/files/methods.js';
import { browserHistory } from 'react-router';

let _getFileFromInput = ( input ) => input.files[0];
let _setPlaceholderText = ( string = "Click or Drag a file Here to Uploads", span) => {
  document.querySelectorAll('.alert span ').innerText = string;
};

let _addUrlToDatabase = ( urls,email, rebate ) => {
  storeUrlInDatabase.call({ urls, email, rebate }, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason , 'warning');
      _setPlaceholderText('Warning from database');
    }else{
      Bert.alert( "File uploaded to Amazon S3!", "success");
      _setPlaceholderText();

    }
  });
}

let _uploadFileToAmazon= (files, email, rebate) => {
  let urls = [];
  const metaContext = { avatarId: 'Victor' }
  const uploader = new Slingshot.Upload('uploadToAmazonS3', metaContext);

files.map( (file, index) => {
  uploader.send( file, ( error, url ) => {
    if (error) {
      Bert.alert( error.message , 'warning');
      _setPlaceholderText('warning from amazon');
    }else{
       urls.push( url );
       if(index == 1){
         _addUrlToDatabase ( urls, email, rebate )
       }
    }
  });
})

};

export default  function uploadToAmazonS3( { email, rebate, rebate_holder, receipt_holder }, component ) {
  let rebateFile = _getFileFromInput( rebate_holder );
  let receiptFile = _getFileFromInput( receipt_holder );

 _setPlaceholderText( `Uploading ${rebateFile.name}...`,  );

 _uploadFileToAmazon( [ rebateFile, receiptFile ], email, rebate );
  component.documentEditorForm.reset();
}
