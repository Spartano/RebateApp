
import React, { Component } from 'react';

import { Modal, Button, Form, FormGroup, Col, ControlLabel, Checkbox, InputGroup, FormControl } from 'react-bootstrap';
import { storeCodesInDatabase } from '../../api/codes/methods.js';
import { seedCollection, clearCollection } from '../../api/seederMethods.js';

var retailers = [
  "JackDaniels",
  "Corona"
];


class GenerateCodes extends Component {

handleSubmit(e) {
 e.preventDefault();
 const quantity = Number((document.querySelector('#quantity-codes')).value);
 const amount = Number((document.querySelector('#rebate-amount')).value);
 const brand = (document.querySelector('#brand-id')).value;


 storeCodesInDatabase.call({quantity, amount, brand}, ( error ) => {
   if ( error ) {
     Bert.alert( error.reason , 'warning');
   }else{
     Bert.alert( "Codes generated!", "success");
   }
 });

}

  render() {
    return (
      <div>
        <h1>GENERATE CODES</h1>

        <Form horizontal>
          <FormGroup controlId="quantity-codes">
            <Col componentClass={ControlLabel} sm={3}>
              Number of Codes
            </Col>
            <Col sm={6}>
              <FormControl type="number" placeholder="10"/>
            </Col>
          </FormGroup>
          <FormGroup controlId="rebate-amount">
            <Col componentClass={ControlLabel} sm={3}>
              Rebate Amount
            </Col>
            <Col sm={6}>
              <FormControl type="number" placeholder="12$"/>
            </Col>
          </FormGroup>
          <FormGroup controlId="brand-id">
            <Col componentClass={ControlLabel} sm={3}>
              Brand
            </Col>
            <Col sm={6}>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                {
                  retailers.map( retailer => <option value={retailer}> {retailer} </option>)
                }
              </FormControl>
            </Col>
          </FormGroup>
          <button type="submit" className="btn btn-default btn-success col-sm-2 col-sm-offset-5" onClick={this.handleSubmit}><span className="fa fa-id-card"></span> Generate Codes</button>
        </Form>
      </div>
    );
  }
};


export default GenerateCodes;
