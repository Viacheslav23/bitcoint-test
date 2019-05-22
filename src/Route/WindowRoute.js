import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const WindowRoute = ({ component: Component, authed, data, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        data !== {} ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  data: state.reducerResult.data
});

export default connect(mapStateToProps)(WindowRoute);
