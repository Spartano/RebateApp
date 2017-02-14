import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Codes = new Mongo.Collection('Codes');
export default Codes;

Codes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Codes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


Codes.schema = new SimpleSchema({
  amount: {
    type: Number,
    label: 'The amount of the money each rebate.',
  },
  brand: {
    type: String,
    label: 'The ID of the brand',
  },
  createdAt: {
    type: Date,
    label: 'The date it was inserted',
  },
  rebateCode: {
    type: String,
    label: 'The rebate wich the user will use.',
  },
});

Codes.attachSchema(Codes.schema);
