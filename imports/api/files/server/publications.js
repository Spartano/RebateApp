import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Files from '../files';

Meteor.publish('files.list', () => {
  var data = Files.find( { "userId": this.userId } );

  if ( data ) {
    return data;
  }

  return this.ready();
});
