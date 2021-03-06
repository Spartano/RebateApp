import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';


class Documents extends React.Component {

  componentDidMount() {
    this.props.changeBg(-100);
  }

  render() {
    return (
      <div className="Documents">
        <Row>
          <Col xs={ 12 }>
            <div className="page-header clearfix">
              <h4 className="pull-left">Rebates Inserted</h4>
              <Link to="/rebate">
                <Button
                  bsStyle="success"
                  className="pull-right"
                >Insert Another Rebate</Button>
              </Link>
            </div>
       
            <DocumentsList />
            
          </Col>
        </Row>
      </div>
    )
  }
}

export default Documents;
