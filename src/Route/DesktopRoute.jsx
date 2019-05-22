import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Login, Result } from "../js";
import PrivateRoute from "./PrivateRoute";
import WindowRoute from "./WindowRoute";
export class DesktopRoute extends Component {
  isAuthed = window.localStorage.getItem("isAuthed");

  render() {
    console.log("typeof this.isAuthed", typeof this.isAuthed);
    return (
      <>
        <Switch>
          <Route path="/login" component={Login} />
          <WindowRoute exact path="/result" component={Result} />
          <PrivateRoute
            exact
            authed={this.isAuthed}
            path="/"
            component={Home}
          />

          <Route
            render={() => (
              <div style={{ marginLeft: "43%", marginTop: "5%" }}>
                Нет такой страницы
              </div>
            )}
          />
        </Switch>
      </>
    );
  }
}
