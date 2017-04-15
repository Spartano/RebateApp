
import rateLimit from '../../modules/rate-limit.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Random } from 'meteor/random'
import _ from 'lodash';
import  Codes  from './codes';

export const storeCodesInDatabase = new ValidatedMethod({
  name: 'codes.insert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    quantity: { type: Number },
    amount: { type: Number },
    brand: { type: String },
  }).validator(),
  run({ quantity, amount, brand }) {

    // const brandDocument = Brands.findOne({ name: brand });
    //
    //     if (!brandDocument) {
    //       return Meteor.Error('Brand not found!');
    //     }

    _.times(quantity, () => {

          const password = Random.hexString(16);

          Codes.insert({
            createdAt: new Date(),
            rebateCode: `${password}-${amount}-${brand}`,
        })

        });


    },
});


rateLimit({
  methods: [
    storeCodesInDatabase,
  ],
  limit: 3,
  timeRange: 2000,
});
