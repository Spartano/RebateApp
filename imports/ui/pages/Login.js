import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }


    loginWithFacebook() {
        let  options = {
            requestPermissions: [ 'email' ]
          };

        Meteor[ "loginWithFacebook" ]( options, ( error ) => {
          if ( error ) {
            Bert.alert( error.message, 'danger' );
          }else{            
              browserHistory.push('/');
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
            browserHistory.push('/');
        });
    }

  render() {
    return (
      <div className="Login">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 6 }>
            <h4 className="page-header">Login</h4>
            <form
              ref={ form => (this.loginForm = form) }
              className="login"
              onSubmit={ this.handleSubmit }
            >
              <FormGroup>
                <ControlLabel>Email Address</ControlLabel>
                <FormControl
                  type="email"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  <span className="pull-left">Password</span>
                  <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
                </ControlLabel>
                <FormControl
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Login</Button>
              <Link className="pull-right" to="/signup">Register</Link>
            </form>
          </Col>
          <Col xs={ 12 } sm={ 6 } md={ 6 }>
              <div className="page-header">
              <h3>Sign In to LONELY iTEM</h3>
              <p>One Click Login via</p>
              </div>
              <ul className="btn-list">
              <li>
                <Button bsStyle="primary" data-social-login="loginWithFacebook" onClick={this.loginWithFacebook}>
                  <i className="fa fa-facebook"></i> Facebook
                </Button>

              </li>
              <li>
                <Button bsStyle="danger"  onClick={this.loginWithGoogle}>
                  <i className="fa fa-google"></i>  Google
                </Button>
              </li>
              </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
