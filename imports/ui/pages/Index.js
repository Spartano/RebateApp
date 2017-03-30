import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './Login';

class Index extends React.Component {

  render() {
    return (
      <div className="index">    
        <Button bsStyle="warning" className="enter-button">ENTER</Button>
      </div>
    )
  }
}

export default Index;
