import '/imports/startup/server';

Meteor.publish('userData', function() {

  var currentUser;
  currentUser = this.userId;
  if (currentUser) {
    return Meteor.users.find({
      _id: currentUser
    }, {
      fields: {
        "services.facebook.name": 1,
      }
    });
  } else {
    return this.ready();
  }
});
