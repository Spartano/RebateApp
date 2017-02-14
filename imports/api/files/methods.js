
import rateLimit from '../../modules/rate-limit.js';
import checkUrlValidity from '../../modules/check-url-validity.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import  Files  from './files';

export const storeUrlInDatabase = new ValidatedMethod({
  name: 'files.insert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    url: { type: String },
    email: { type: String },
    rebate: { type: String },
  }).validator(),
  run({ url, email, rebate, status }) {

    checkUrlValidity( url );

    Files.insert({
          url: url,
          owner: Meteor.userId(),
          email: email,
          rebateCode: rebate,
          added: new Date(),
          status: 'Inserted'
        });
    },
});


rateLimit({
  methods: [
    storeUrlInDatabase,
  ],
  limit: 3,
  timeRange: 2000,
});
