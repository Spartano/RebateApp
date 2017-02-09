
import rateLimit from '../../modules/rate-limit.js';
import checkUrlValidity from '../../modules/check-url-validity.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import  Files  from './files';

export const storeUrlInDatabase = new ValidatedMethod({
  name: 'files.insert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    urls: { type: [String] },
    email: { type: String },
    rebate: { type: String },
  }).validator(),
  run({ urls, email, rebate }) {
    checkUrlValidity( urls[0] );
    checkUrlValidity( urls[1] );

    Files.insert({
          urls: [urls[0], urls[1]],
          owner: Meteor.userId(),
          email: email,
          rebate: rebate,
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
