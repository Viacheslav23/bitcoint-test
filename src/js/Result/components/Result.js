import React, { Component } from "react";
import ResultContent from "./ResultContent.jsx";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    let { data: covertedData, history } = this.props;
    let myNumber = covertedData ? Object.entries(covertedData) : null;

    if (!myNumber[0]) {
      return <>loading</>;
    }

    let name = myNumber[0][0];
    let data = myNumber[0][1];
    return <ResultContent data={data} name={name} history={history} />;
  }
}

const mapStateToProps = state => ({
  data: state.reducerResult.data
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
