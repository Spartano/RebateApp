import React from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router';
import AppNavigation from '../containers/AppNavigation.js';
import BackgroundVideo from '../components/BackgroundVideo.js';
import ProgressBar from "bootstrap-progress-bar";

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      bgPosition : 100
    };
  }

  getBg ( newValue ) {
    this.setState({ bgPosition: -newValue })
  }

  render() {
    return (
      <div className="main">
        <AppNavigation />
        <Grid>
          {React.cloneElement(
            this.props.children,
            { changeBg : this.getBg.bind(this) }
          )}
        </Grid>
        {/*<ProgressBar width="50%" />*/}
        <BackgroundVideo position={ this.state.bgPosition } />

      </div>
    )
  }
}


App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
