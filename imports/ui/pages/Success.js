import React from 'react';
import { Row, Col, FormGroup, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';


class Success extends React.Component {
  componentDidMount() {
    this.props.changeBg(300);
  }

    myRebates() {
        browserHistory.push('/documents');
    }

    claimAnother() {
        browserHistory.push('/rebate');
    }

  render() {
    return (
        <div>
            {/*<p className="speech">Congrats!</p>*/}

            <div className="success-buttons">
                <Link to={'/documents'}>
                    <Button bsStyle="primary">
                        <h4>MY</h4>
                        <h4>REBATES</h4>
                        <i className="fa fa-th-list fa-4x"></i> 
                    </Button>
                </Link>

                <Button bsStyle="success" onClick={this.claimAnother}>
                    <h4>NEW</h4>
                    <h4>REBATE</h4>
                    <div>
                        <i className="fa fa-retweet fa-4x"></i>  
                    </div>
                </Button>
            </div>
        </div>
    )
  }
}

export default Success;