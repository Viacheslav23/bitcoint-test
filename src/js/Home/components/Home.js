import { connect } from "react-redux";
import React, { Component } from "react";

import HomeContent from "./HomeContent.jsx";
import { allCurrenciesTriggered } from "../actionHome";

export class Home extends Component {
  componentDidMount() {
    this.props.allCurrenciesTriggered();
  }

  render() {
    const { data, isLoading, history } = this.props;

    console.log("Home data", data);

    if (isLoading) {
      return <>loading</>;
    }

    return <HomeContent data={data} history={history} />;
  }
}

const mapStateToProps = state => ({
  data: state.reducerHome.data,
  isLoading: state.reducerHome.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    allCurrenciesTriggered() {
      dispatch(allCurrenciesTriggered());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
