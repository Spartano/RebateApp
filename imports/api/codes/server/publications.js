import { Meteor } from 'meteor/meteor';

import Codes from '../codes';

Meteor.publish('codes.list', () => {

  var data = Codes.find( {} );

  if ( data ) {
    return data;
  }

  return this.ready();
});
