import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './Login';
import { Link } from 'react-router';


class Index extends React.Component {
  componentDidMount() {
    this.props.changeBg(0);
  }

  render() {
    return (

         
            
      <Link to={'/login'}>
        <div className="index">    
          <Button bsStyle="warning" className="enter-button">ENTER</Button>
        </div>
      </Link>
    )
  }
}

export default Index;
