import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SignIn from "./SignIn";
import Classroom from "./Classroom";

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/"} component={SignIn} />
        <Route exact path={"/classroom"} component={Classroom} />
      </Switch>
    );
  }
}

export default AppRoutes;
