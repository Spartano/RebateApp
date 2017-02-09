import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Files from '../../api/files/files.js';
import DocumentsList from '../components/DocumentsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('files.list');
  if (subscription.ready()) {
    const owner = Meteor.userId();
    const documents = owner ? Files.find({ owner }).fetch() : [];    
    //on data means that thing that will be returned as props to our DocumentList component
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
