import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="">
    {documents.map(( rebate ) => {
      const { email, url, added, status, rebateCode} = rebate;
      console.log(rebate);

      return ( <ListGroupItem key={ rebate._id } >
        <div className="panel panel-info">
              <div className="panel-heading">Code: {rebateCode}</div>
              <div className="panel-body">
                <img src={url} alt="rebatePic" height="200" />
                <hr/>
                <p><strong>Paypal Email: {email}</strong></p>
                <p> Inserted: { new Date(added).toDateString() } </p>
                <p> Status: {status} </p>
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
