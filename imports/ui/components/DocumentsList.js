import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import RebateUI from './RebateUI.js'

const handleNav = (_id) => {
  browserHistory.push(`/documents/${_id}`);
}

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(( rebateP ) => (
      <ListGroupItem key={ rebateP._id }  >
      <RebateUI  rebateP={rebateP}/>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No Rebates Inserted yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
