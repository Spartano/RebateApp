import React, { Component } from 'react';

import { Button, Modal, Alert } from 'react-bootstrap';

//the tools for GET AND POST

import request from 'request';

const wellStyles = {maxWidth: 500, margin: '0 auto 10px'};

export default class ViewVerified extends Component {
  constructor(props) {
    super(props);

    this.state = {
    token: '',
    alertVisible: false,
    expires_in: 0
    }
  }

  getToken() {
      var that = this;

      var options = { method: 'POST',
        url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
        headers:
         { 'postman-token': '3913fb34-cead-2185-9659-578ec340385f',
           'cache-control': 'no-cache',
           'content-type': 'application/x-www-form-urlencoded',
           authorization: 'Basic RU9KMlMtWjZPb05fbGVfS1MxZDc1d3NaNnkwU0ZkVnNZOTE4M0l2eEZ5WnA6RUNsdXNNRVVrOGU5aWhJN1pkVkxGNWNaNnkwU0ZkVnNZOTE4M0l2eEZ5WnA=' },
        form: { grant_type: 'client_credentials' },
        withCredentials: false
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

      //////////////////////here is were the magic happens
      that.setState({
        token: JSON.parse(body).access_token,
        alertVisible: true,
        expires_in: JSON.parse(body).expires_in
      })

        ////////////////////////////////////////////////////
      });
  }

  payAllRebates(){
    console.log('i will pay all rebates using the token')
  }

  render() {

    return (
      <div>
        <div className="well" style={wellStyles}>
          <Button bsStyle="primary" bsSize="large" block onClick={this.getToken.bind(this)} >Get Unique Token</Button>

        </div>
      {  this.state.alertVisible ?

            <Alert bsStyle="success" >
              <h4>Very Good!</h4>
              <p>Every time you want to use PayPal API you will need an acces token.</p>
              <p>Every time you refresh or reload the page you will need to generate it again by cliking the <Button bsStyle="info">GET UNIQUE TOKEN</Button> button</p>
              <Alert bsStyle="info"><p>{this.state.token}</p></Alert>
              <Button bsStyle="info">This TOKEN expires in {Math.floor(this.state.expires_in/3600)} hours and {Math.floor((this.state.expires_in/60)%60)} minutes</Button>
              <p>
                <br/>
                <Button bsStyle="danger"  onClick={this.payAllRebates.bind(this)}>Pay All</Button>
                <span> or </span>
                <Button >Hide Alert</Button>
              </p>
            </Alert>

      : '' }



      </div>

    );
  }
};
