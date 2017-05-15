import { Meteor } from 'meteor/meteor';

import Codes from '../codes';

Meteor.publish('codes.list', function() {

  if ( Roles.userIsInRole( this.userId, 'admin' ) ) {
    return Codes.find();
  } else {
    this.ready();
    return
  }
});
