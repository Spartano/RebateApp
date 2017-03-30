/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import rebateEditor from '../../modules/rebate-editor.js';
//import accessCamera from '../../modules/access-camera.js';

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
                       "class": "img-thumbnail"
                   }).appendTo(image_holder);

               }
               image_holder.show();
               reader.readAsDataURL(e.target.files[0]);
           }else {
              Bert.alert("This browser does not support FileReader. Contact admin@email.com");
          }
  }

  componentDidMount() {
    rebateEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="email"]').focus(); }, 0);
    //accessCamera();
  }

  render() {
    const { doc } = this.props;

    return (<form
      ref={ form => (this.documentEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
      className="rebate-container"
    >

    <div className="email-code">
      <FormGroup>
        <ControlLabel className="emailControl has-error">Paypal Email Address</ControlLabel>
        <FormControl
          type="email"
          name="email"
          defaultValue={ doc && doc.title }
          placeholder="myemail@example.com"
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel className="rebateControl">Rebate Code</ControlLabel>
        <FormControl
          type="text"
          name="rebate"
          defaultValue={ doc && doc.title }
          placeholder="MYCODE123-10-LONELY"
        />
      </FormGroup>
    </div>

      <FormGroup className="upload-area">
        <ControlLabel className="receiptControl">Picture of Receipt</ControlLabel>
        <p className="alert alert-success text-center">
          <span>click or drag</span>
          <input type="file" name="receipt_holder" onChange={this.onUserInput.bind(this)}/>
        </p>
          <div className="showImage" id="receipt_holder">

          </div>
      </FormGroup>

      <Button type="submit" bsStyle="success" className="rebate-submit">
        {/*{ doc && doc._id ? 'Save Changes' : 'Submit' }*/}
       
        <i className="fa fa-send-o fa-3x"></i> 
      </Button>
    </form>);
  }
}

RebateEditor.propTypes = {
  doc: React.PropTypes.object,
};
