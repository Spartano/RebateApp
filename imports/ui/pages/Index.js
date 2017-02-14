import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './Login';

class Index extends React.Component {

  render() {
    return (
      <div className="Index">
        <Jumbotron className="text-center" style={{ backgroundColor: '#1abc9c', /* Green */
    color: '#ffffff'}}>
          <h1>Hello and Welcome!</h1>
          <p>Inside of this page you will see all the rebates you have inserted until now, and the current state of each one of them.</p>
          <h1> <small>We ussualy take one week to process and confirm each rebate.</small> </h1>
            <p>Thank you and happy hunting!</p>

            <LinkContainer to="/documents">
              <Button bsStyle="warning">My Rebates</Button>
            </LinkContainer>
        </Jumbotron>
      </div>
    )
  }
}

export default Index;
