import React from 'react';
import ReactDOM from 'react-dom';
import Style from 'style-it';

import { Bert } from 'meteor/themeteorchef:bert';
import ImagePreview from '../components/ImagePreview';
import { Jumbotron, Button } from 'react-bootstrap';

import uploadToAmazonS3 from '../../modules/uploadToAmazonS3';


class UploadRebate extends React.Component {

onUserInput(e) {
    e.preventDefault();    

      if (typeof (FileReader) != "undefined") {

             var image_holder = $(`#${e.target.name}`);
             image_holder.empty();

             var reader = new FileReader();
             reader.onload = function (e) {
                 $("<img />", {
                     "src": e.target.result,
                     "class": "thumb-image"
                 }).appendTo(image_holder);

             }
             image_holder.show();
             reader.readAsDataURL(e.target.files[0]);
         }else {
            Bert.alert("This browser does not support FileReader.Caontact admin@email.com");
        }
}

render() {
  return(

    <div className="Index">

      <Jumbotron className="text-center">
        <h4 className="page-header">Upload a File to Amazon S3</h4>

        <div className="upload-area form-group">
        <form id="upload">

          <p className="alert alert-success text-center">
            <span >Upload Rebate foto by click or drag</span>
            <input type="file" name="rebate-holder" onChange={this.onUserInput.bind(this)}/>
          </p>
            <div className="showImage" id="rebate-holder">

            </div>

            <br/>
          <p className="alert alert-success text-center">
            <span >Upload Receipt foto by click or drag</span>
            <input type="file" name="receipt-holder" onChange={this.onUserInput.bind(this)}/>
          </p>
            <div className="showImage" id="receipt-holder"></div>
        </form>
      </div>
      </Jumbotron>
    </div>
  )
 }
}


UploadRebate.propTypes = {
  rebates: React.PropTypes.array,
  filePreviews: React.PropTypes.array
};
export default UploadRebate
