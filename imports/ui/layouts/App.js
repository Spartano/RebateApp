import React from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router';
import AppNavigation from '../containers/AppNavigation.js';
import BackgroundVideo from '../components/BackgroundVideo.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bgPosition : 0
    };
  }

  getBg ( newValue ) {
    this.setState({ bgPosition: -newValue })
  }

  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="col-xs-2">

            <ul className="nav nav-pills nav-stacked">
              <li>
                <Link to="/">
                  ...HomePage
                </Link>
              </li>
              <li>
                <Link to="/documents">
                   ......Inserted
                </Link>
              </li>
              <li>
                <Link to="/upload">
                   ......Upload Rebate
                </Link>
              </li>
              <li>
                <Link to="/admin">
                   ......Admin
                </Link>
              </li>

            </ul>
          </div>
          <div className="col-xs-10">

            <AppNavigation />
            <Grid>
              {React.cloneElement(
                this.props.children,
                { changeBg : this.getBg.bind(this) }
              )}
            </Grid>
          </div>

        </div>


      </div>
    )
  }
}


App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
