import React from "react";
import { connect } from "react-redux";

import { convertTriggered } from "../../Result/actionResult";
import "./Home.css";

const HomeContent = ({ data, convertTriggered, history }) => {
  let { rates } = data;

  if (!rates) {
    return <>loading</>;
  }

  const clickCurrency = currency => {
    convertTriggered(currency);

    history.push("/result");
    window.sessionStorage.setItem("isResultOpened", "true");
  };

  return (
    <div className="home-content-wrapper">
      <div className="home-content-greeting">
        Hello, {window.localStorage.getItem("name")}!
      </div>

      <div className="home-content-list">
        {Object.entries(rates).map(keyName => {
          return (
            <div
              className="home-content-list-item"
              key={keyName}
              onClick={() => clickCurrency(keyName[0])}
            >
              {keyName[1].name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    convertTriggered(currency) {
      dispatch(convertTriggered(currency));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomeContent);
