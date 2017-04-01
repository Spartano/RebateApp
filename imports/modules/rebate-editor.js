/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import uploadToAmazonS3 from './uploadToAmazonS3';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Document updated!' : 'Document added!';
  const upsert = {
    email: document.querySelector('[name="email"]').value.trim(),
    rebate: document.querySelector('[name="rebate"]').value.trim(),
    receipt_holder: document.querySelector('[name="receipt_holder"]')
  };

  uploadToAmazonS3(upsert, component);
};



const validate = () => {
  $(component.documentEditorForm).validate({
    rules: {
      email: {
        required: true,
      },
      rebate: {
        required: true,
      },
       receipt_holder: {
            required: true,
        }
    },
    messages: {
      email: {
        required: 'Please enter a valid email address',
      },
      rebate: {
        required: 'This rebate code is not valid',
      },      
      receipt_holder: {
        required: "Please upload a photo of your receipt",
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function rebateEditor(options) {
  component = options.component;
  validate();
}


