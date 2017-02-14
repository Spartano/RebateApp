import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';


const CodesDocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="">
    {documents.map(( code ) => {
      const { amount, brand, createdAt, rebateCode } = code;

      return ( <ListGroupItem key={ code._id } >
        <div className="panel panel-info">
              <div className="panel-heading">Name of Brand: {brand}</div>
              <div className="panel-body">
                <hr/>
                <p><strong>Amount: {amount}</strong></p>
                <p> Inserted: { new Date(createdAt).toDateString() } </p>
                <button className="btn btn-success"
                  onClick={() => {
                    //change rebate status in database
                  }}
                  >{rebateCode}</button>
              </div>
        </div>


      </ListGroupItem> )
    })}
  </ListGroup> :
  <Alert bsStyle="warning">No Rebates Inserted yet.</Alert>
);

CodesDocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default CodesDocumentsList;
