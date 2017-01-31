import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './Login';

class Index extends React.Component {


  loginWithFacebook() {

      let  options = {
          requestPermissions: [ 'email' ]
        };

      Meteor[ "loginWithFacebook" ]( options, ( error ) => {
        if ( error ) {
          Bert.alert( error.message, 'danger' );
        }
      });
  }

  loginWithGoogle() {

      let  options = {
          requestPermissions: [ 'email' ]
        };

      Meteor[ "loginWithGoogle" ]( options, ( error ) => {
        if ( error ) {
          Bert.alert( error.message, 'danger' );
        }
      });
  }

  render() {
    return (
      <div className="Index">
        <Jumbotron className="text-center">
          <div className="row">
                <div className="col-xs-12 col-sm-6">
                          <Login />
                </div>
                <div className="col-xs-12 col-sm-6">
                      <div className="page-header">
                      <h3>Sign In to LONELY iTEM</h3>
                      <p>Hey there team maties! Come on aboard!</p>
                      </div>
                      <ul className="btn-list">
                      <li>
                        <Button bsStyle="primary" data-social-login="loginWithFacebook" onClick={this.loginWithFacebook}>
                          <i className="fa fa-facebook"></i> Continue with Facebook
                        </Button>

                      </li>
                      <li>
                        <Button bsStyle="danger"  onClick={this.loginWithGoogle}>
                          <i className="fa fa-google"></i> Continue with Google
                        </Button>
                      </li>
                      <li>
                        <LinkContainer to="signup">
                          <Button bsStyle="success">
                            <i className="fa fa-envelope"></i> Signup With Email
                          </Button>
                        </LinkContainer>

                      </li>
                      </ul>
                </div>
          </div>
        </Jumbotron>
      </div>
    )
  }
}

export default Index;
