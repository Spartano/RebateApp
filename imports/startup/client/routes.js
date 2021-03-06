/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';
import Documents from '../../ui/pages/Documents.js';
import NewDocument from '../../ui/pages/NewDocument.js';

import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import Success from '../../ui/pages/Success.js'
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';


// importing upload component for our Route
import NewRebate from '../../ui/pages/NewRebate.js'
import Admin from '../../ui/pages/AdminDocuments.js';
import ViewInserted from '../../ui/containers/AdminDocumentsList.js';
import ViewCodes from '../../ui/containers/CodesDocumentsList.js';

import ViewVerified from '../../ui/components/adminComponents/VerifiedDocumentsList.js';

import GenerateCodes from '../../ui/pages/GenerateCodes.js'

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};



Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        {/*<IndexRoute name="index" component={ Login } />       */}
        <Route name="rebate" path="/rebate" component={ NewRebate }  onEnter={ authenticate }/>
        <Route name="success" path="/success" component={ Success } />


        <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate } />
        <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate } />

        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />


        <Route name="upload" path="/upload" component={ NewRebate }  onEnter={ authenticate }/>


        <Route name="admin" path="/admin" component={ Admin } onEnter={ authenticate }>
          <Route path="/admin/inserted" component = { ViewInserted } />
          <Route path="/admin/verified" component={ ViewInserted } />
          <Route path="/admin/processed" component={ ViewInserted } />
          <Route path="/admin/generateCodes" component={ GenerateCodes } />
          <Route path="/admin/viewCodes" component={ ViewCodes } />
          <Route path="/admin/payRebates" component={ ViewVerified } />
      </Route>
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
