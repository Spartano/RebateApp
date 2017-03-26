import React from 'react';

class Success extends React.Component {
  componentDidMount() {
    this.props.changeBg(300);
  }

  render() {
    return (
      <div className="success">
        <h4 className="page-header">Success!!!</h4>
      </div>
    )
  }
}

export default Success;