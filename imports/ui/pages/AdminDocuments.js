import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
// import DocumentsList from '../containers/DocumentsList.js';

const Admin = ({ children }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>


          <div className="row">
        <div className="col-md-3">
            <ul className="nav nav-pills nav-stacked">
              <li>
                <Link to="/admin/payRebates">
                  <i className="fa fa-calendar fa-fw"></i> Pay All Rebates
                </Link>
              </li>
                <li className="active"><a href="#"><i className="fa fa-home fa-fw"></i>Home</a></li>
                <li>
                  <Link to="/admin/inserted">
                    <i className="fa fa-list-alt fa-fw"></i> Inserted
                  </Link>
                </li>
                <li>
                  <Link to="/admin/verified">
                    <i className="fa fa-calendar fa-fw"></i> Verified
                  </Link>
                </li>
                <li>
                  <Link to="/admin/processed">
                    <i className="fa fa-book fa-fw"></i> Processed
                  </Link>
                </li>
                <li>
                  <Link to="/admin/generateCodes">
                    <i className="fa fa-tasks fa-fw"></i> Generate Random Codes
                  </Link>
                </li>
                <li>
                  <Link to="/admin/viewCodes">
                    <i className="fa fa-eercast"></i> View Random Codes
                  </Link>
                </li>
            </ul>
        </div>
        <div className="col-md-9 well">
           {children}
        </div>
    </div>


      </Col>
    </Row>
  </div>
);

export default Admin;
