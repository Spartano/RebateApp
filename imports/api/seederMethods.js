
import Seed from '../modules/seed.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import  Codes  from './codes/codes';

export const seedCollection = new ValidatedMethod({
  name: 'seed.collection',
  validate: new SimpleSchema({
    collection: { type: String }
  }).validator(),
  run({ collection }) {

    let isUsers = collection === 'Users';

    if ( isUsers ) {
      Seed( 'Users', {
        data: [
          {
            email: 'henrik@brainbots.fm',
            password: 'password',
            profile: {
              name: { first: 'Henrik', last: 'Müller' }
            },
            roles: [ 'admin' ]
          },
          {
            email: 'sofia@brainbots.fm',
            password: 'password',
            profile: {
              name: { first: 'Sofia', last: 'Carmichael' }
            },
            roles: [ 'admin' ]
          }
        ]
      });
    } else {
      Seed( 'Codes', {
        min: 5,
        environments: [ 'development', 'staging', 'production' ],
        model( index ) {
          return {
            name: faker.commerce.product(),
            price: faker.commerce.price()
          };
        }
      });
    }
  },
});


export const clearCollection = new ValidatedMethod({
  name: 'clear.collection',
  validate: new SimpleSchema({
    collection: { type: String }
  }).validator(),
  run() {
    let isUsers = collection === 'Users';

    if ( isUsers ) {
      Meteor.users.remove({});
    } else {
      global[ collection ].remove({});
    }
  },
});
