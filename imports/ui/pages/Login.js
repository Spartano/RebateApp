import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleLogin from '../../modules/login';
//import { Meteor } from 'meteor/meteor';



export default class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
    this.props.changeBg(0);

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
            browserHistory.push('/rebate');
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
          browserHistory.push('/rebate');
      });
  }

  render() {
    return (
      <div className="Login">

        {/*<h4 className="headline-bg">Login to claim your rebate</h4>*/}

        <div className="login-buttons">
          <Button bsStyle="primary" data-social-login="loginWithFacebook" onClick={this.loginWithFacebook} className="heartbeatOne">
            <i className="fa fa-facebook fa-4x"></i> 
          </Button>

          <Button bsStyle="danger"  onClick={this.loginWithGoogle} className="heartbeatTwo">
            <i className="fa fa-google fa-4x"></i>  
          </Button>
        </div>
      </div>
    );
  }
}
