import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './Login';

class Index extends React.Component {

  render() {
    return (
      <div className="Index">
        <Jumbotron className="text-center">
          <h1>Hello from index</h1>
        </Jumbotron>
      </div>
    )
  }
}

export default Index;
