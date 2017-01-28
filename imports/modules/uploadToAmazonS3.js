import { Slingshot } from 'meteor/edgee:slingshot';
import { storeUrlInDatabase } from '../api/files/methods.js';

let _getFileFromInput = ( event ) => event.target.files[0];
let _setPlaceholderText = ( string = "Click or Drag a file Here to Uploads", span) => {
  document.querySelector('.alert span ').innerText = string;
};

let _addUrlToDatabase = ( url ) => {
  storeUrlInDatabase.call({ url }, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'warning');
      _setPlaceholderText('Warning from database');
    }else{
      Bert.alert( "File uploaded to Amazon S3!", "success");
      _setPlaceholderText();
    }
  });
}

let _uploadFileToAmazon= (file) => {
  const metaContext = { avatarId: 'Victor' }
  const uploader = new Slingshot.Upload('uploadToAmazonS3', metaContext);

  uploader.send( file, ( error, url ) => {
    if (error) {
      Bert.alert( error.message, 'warning');
      _setPlaceholderText('warning from amazon');
    }else{
      _addUrlToDatabase( url );
      if(Session.equals("keyOne", "")){
         Session.set( "keyOne", url);
      }else{
         Session.set( "keyTwo", url);
      }

    }
  });
};

export default  function uploadToAmazonS3(options) {
  let file = _getFileFromInput( options.event );
 _setPlaceholderText( `Uploading ${file.name}...`,  );
 _uploadFileToAmazon( file );
}
