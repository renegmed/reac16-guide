import React, { Component } from "react";
import { connect } from "react-redux";

import "./CounterOutput.css";

class counterOutput extends Component {
  render() {
    return <div className="CounterOutput">Current Counter: {this.props.ctr}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter, // state.counter is updated by /store/reducer.js
    storedResults: state.results // state.results is updated by /store/reducer.js
  };
};

export default connect(mapStateToProps)(counterOutput);
