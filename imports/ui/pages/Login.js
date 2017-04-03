import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleLogin from '../../modules/login';
//import { Meteor } from 'meteor/meteor';



export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  componentWillUpdate() {
      this.setState ({
      loggedIn: this.ifLoggedIn()
    })
  }

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

  //Only render component after 
  ifLoggedIn() {
    return Meteor.user() ? true : false;
  }

  render() {


    return (
      <div className="Login">
      {this.state.loggedIn ?
        <div className="success-buttons">
            <Link to={'/documents'}>
                <Button bsStyle="primary">
                    <h4>MY</h4>
                    <h4>REBATES</h4>
                    <i className="fa fa-th-list fa-4x"></i> 
                </Button>
            </Link>

            <Link to="/rebate">
              <Button bsStyle="success">
                  <h4>NEW</h4>
                  <h4>REBATE</h4>
                  <div>
                      <i className="fa fa-usd fa-4x"></i>  
                  </div>
              </Button>
            </Link>


        </div>
        : 
        <div className="login-buttons">
          <Button bsStyle="primary" data-social-login="loginWithFacebook" onClick={this.loginWithFacebook} className="heartbeatOne">
            <i className="fa fa-facebook fa-4x"></i> 
          </Button>
          <Button bsStyle="danger"  onClick={this.loginWithGoogle} className="heartbeatTwo">
            <i className="fa fa-google fa-4x"></i>  
          </Button>
        </div>
      } 
      </div>
    );
  }
}


