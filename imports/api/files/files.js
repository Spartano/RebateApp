import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Files = new Mongo.Collection('Files');
export default Files;

Files.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Files.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Files.schema = new SimpleSchema({
  urls: {
    type: [String],
    label: 'The url of the file.',
  },
  owner: {
    type: String,
    label: 'The ID of the user this rebate belongs to.',
  },
  added: {
    type: Date,
    label: 'The date it was inserted',
  },
  email: {
    type: String,
    label: 'The ID of the user this rebate belongs to.',
  },
  rebate: {
    type: String,
    label: 'The ID of the user this rebate belongs to.',
  },
});

Files.attachSchema(Files.schema);
