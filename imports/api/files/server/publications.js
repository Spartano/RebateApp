import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Files from '../files';

Meteor.publish('files.list', function() {

  if ( Roles.userIsInRole( this.userId, 'admin') ) {

    return Files.find({});
  } else {
    return Files.find({ owner: this.userId });
  }
});
