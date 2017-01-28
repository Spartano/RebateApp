
import rateLimit from '../../modules/rate-limit.js';
import checkUrlValidity from '../../modules/check-url-validity.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import  Files  from './files';

export const storeUrlInDatabase = new ValidatedMethod({
  name: 'files.insert',
  validate: new SimpleSchema({
    url: { type: String },
  }).validator(),
  run({url}) {
    checkUrlValidity( url );

    Files.insert({
          url: url,
          userId: Meteor.userId(),
          added: new Date()
        });
    },
});

rateLimit({
  methods: [
    storeUrlInDatabase,
  ],
  limit: 3,
  timeRange: 1000,
});
