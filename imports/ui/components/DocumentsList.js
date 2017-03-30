import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';


const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="">
    {documents.map(( rebate ) => {
      const { email, url, added, status } = rebate;

      return ( <ListGroupItem key={ rebate._id } >
        <div className="panel panel-info">
              <div className="panel-heading">{status} And Being Processed</div>
              <div className="panel-body">
                <img src={url} alt="rebatePic" height="200" />
                <hr/>
                <p><strong>PaypalEmail: {email}</strong></p>
                <p> Inserted: { new Date(added).toDateString() } </p>
              </div>
        </div>


      </ListGroupItem> )
    })}
  </ListGroup> :
  <Alert bsStyle="warning">No Rebates Inserted yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
