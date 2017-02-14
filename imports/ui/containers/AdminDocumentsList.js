import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Files from '../../api/files/files.js';
import AdminDocumentsList from '../components/adminComponents/AdminDocumentsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('files.list');
  if (subscription.ready()) {

    const documents =  Files.find({}).fetch() ;
    //on data means that thing that will be returned as props to our DocumentList component
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(AdminDocumentsList);
