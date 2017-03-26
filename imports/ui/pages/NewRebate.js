import React from 'react';
import RebateEditor from '../components/RebateEditor.js';

class NewRebate extends React.Component {
  componentDidMount() {
    this.props.changeBg(100);
  }

  render() {
    return (
      <div className="NewDocument">
        {/*<h4 className="page-header">Insert Rb</h4>*/}
        <RebateEditor />
      </div>
    )
  }
}

export default NewRebate;
