import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';


const AdminDocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="">
    {documents.map(( rebate ) => {
      const { email, url, added, status, rebateCode } = rebate;

      return ( <ListGroupItem key={ rebate._id } >
        <div className="panel panel-info">
              <div className="panel-heading">Code: {RebateCode}</div>
              <div className="panel-body">
                <img src={url} alt="rebatePic" height="200" />
                <hr/>
                <p><strong>PaypalEmail: {email}</strong></p>
                <p> Inserted: { new Date(added).toDateString() } </p>
                <p> Status: {status}</p>
                <button className="btn btn-success"
                  onClick={() => {
                    //change rebate status in database
                  }}
                  >Aprove Rebate</button>
              </div>
        </div>


      </ListGroupItem> )
    })}
  </ListGroup> :
  <Alert bsStyle="warning">No Rebates Inserted yet.</Alert>
);

AdminDocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default AdminDocumentsList;
