import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Codes from '../../api/codes/codes.js';
import CodesDocumentsList from '../components/adminComponents/CodesDocumentsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('codes.list');
  if (subscription.ready()) {

    const documents =  Codes.find({}).fetch() ;
    //on data means that thing that will be returned as props to our DocumentList component
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(CodesDocumentsList);
