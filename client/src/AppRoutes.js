import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { createMuiTheme } from "material-ui/styles";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import grey from "material-ui/colors/grey";
import cyan from "material-ui/colors/cyan";
import red from "material-ui/colors/red";

import SignIn from "./SignIn";
import Classroom from "./Classroom";

class AppRoutes extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#212121"
        },
        secondary: {
          main: "#1B5E20"
        }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path={"/"} component={SignIn} />
          <Route exact path={"/classroom"} component={Classroom} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default AppRoutes;
