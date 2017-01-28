import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Files from '../../api/files/files.js';
import UploadRebates from '../pages/UploadRebates.js';
import Loading from '../components/Loading.js';

const composer = ({  }, onData) => {
  const subscription = Meteor.subscribe('files.list');
   let filePreviews = [];
  if (subscription.ready()) {
    const rebates = Files.find().fetch();

    if(Session.get('keyOne') !== '' && !Session.get('keyTwo')){
       filePreviews =[ Session.get('keyOne') ] ;
    }
    else if(Session.get('keyOne')  && Session.get('keyTwo')) {
      filePreviews = [ Session.get('keyOne'), Session.get('keyTwo') ];
    }


    onData(null, {  filePreviews, rebates });
  }
};

export default composeWithTracker(composer, Loading)(UploadRebates);
