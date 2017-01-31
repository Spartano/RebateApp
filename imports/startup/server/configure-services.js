

// // first, remove configuration entry in case service is already configured
// ServiceConfiguration.configurations.remove({
//   service: "google"
// });
// ServiceConfiguration.configurations.insert({
//   service: "google",
//   clientId: "123456789",
//   loginStyle: "popup",
//   secret: "8j4ldfjSECRET-HEREalkjf8slk"
// });
const services = Meteor.settings.private.oAuth;

  if ( services ) {
    for( let service in services ) {
      ServiceConfiguration.configurations.upsert( { service: service }, {
        $set: services[ service ]
      });
    }
  }
