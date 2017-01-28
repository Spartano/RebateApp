import React from 'react';
import ReactDOM from 'react-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import ImagePreview from '../components/ImagePreview';
import { Jumbotron } from 'react-bootstrap';

import { Slingshot } from 'meteor/edgee:slingshot';
import uploadToAmazonS3 from '../../modules/uploadToAmazonS3';

import Files from '../../api/files/files.js';



class Upload extends React.Component {

  componentWillMount() {
      Session.set( "currentFiles", 0 );
      Session.set( "keyOne", "" );
  }

onUserInput(e) {
    e.preventDefault();

  if( Session.get("currentFiles") < 2) {
    uploadToAmazonS3({event: e});
    const counter = Session.get("currentFiles") + 1;
    Session.set( "currentFiles", counter);
  }else{
      Bert.alert("No more than 2 files", 'danger');
  }
}

render() {

  const images = this.props.filePreviews.map( image => <ImagePreview url={image} /> )


  return(
    <div className="Index">

      <Jumbotron className="text-center">
        <h4 className="page-header">Upload a File to Amazon S3</h4>

              {images}

        <div className="upload-area">
        <form id="upload">

          <p className="alert alert-success text-center">
            <span >Upload Rebate foto by click or drag</span>
            <input type="file" onChange={this.onUserInput.bind(this)}/>
          </p>
          <p className="alert alert-success text-center">
            <span >Upload Receipt foto by click or drag</span>
            <input type="file" onChange={this.onUserInput.bind(this)}/>
          </p>
        </form>
      </div>
      </Jumbotron>
    </div>
  )
 }
}


Upload.propTypes = {
  rebates: React.PropTypes.array,
  filePreviews: React.PropTypes.array
};
export default Upload;
