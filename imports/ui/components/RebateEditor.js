/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import rebateEditor from '../../modules/rebate-editor.js';
import uploadToAmazonS3 from '../../modules/uploadToAmazonS3';

export default class RebateEditor extends React.Component {

  onUserInput(e) {
      e.preventDefault();
      console.log(e.target.name)
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

  componentDidMount() {
    rebateEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="email"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.documentEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Paypal Email</ControlLabel>
        <FormControl
          type="email"
          name="email"
          defaultValue={ doc && doc.title }
          placeholder="Insert paypal email to wich you want you're money acredited!"
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Rebate Code</ControlLabel>
        <FormControl
          type="text"
          name="rebate"
          defaultValue={ doc && doc.title }
          placeholder="Insert rebate code you have found on bottle!"
        />
      </FormGroup>
      <FormGroup className="upload-area">
        <p className="alert alert-success text-center">
          <span >Upload Rebate foto by click or drag</span>
          <input type="file" name="rebate_holder" onChange={this.onUserInput.bind(this)}/>
        </p>
          <div className="showImage" id="rebate_holder">

          </div>
      </FormGroup>

      <FormGroup className="upload-area">
        <p className="alert alert-success text-center">
          <span >Upload Receipt foto by click or drag</span>
          <input type="file" name="receipt_holder" onChange={this.onUserInput.bind(this)}/>
        </p>
          <div className="showImage" id="receipt_holder">

          </div>
      </FormGroup>

      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Rebate Code' }
      </Button>
    </form>);
  }
}

RebateEditor.propTypes = {
  doc: React.PropTypes.object,
};
