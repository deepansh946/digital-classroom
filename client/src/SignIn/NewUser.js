import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import Button from "material-ui/Button";
import { withRouter } from "react-router";

import Header from "../Header";

import styles from "./NewUser.css";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onNewUserClick = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          className="root"
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            justify="center"
            alignItems="center"
            className=""
          >
            <Card raised className="card moveCard">
              <CardHeader
                title={"New User Registration"}
                className="cardHeader"
              />
              <CardContent className="cardContent" style={{ paddingTop: "0" }}>
                <TextField
                  id="fullName"
                  label="Full Name"
                  value={this.state.fullName}
                  onChange={this.onChangeUsername}
                  className="textField"
                  autoFocus
                />

                <TextField
                  id="email"
                  label="Email"
                  className="textField mt-2"
                  value={this.state.name}
                  onChange={this.onChangePassword}
                />

                <TextField
                  id="username"
                  label="Username"
                  className="textField mt-2"
                  value={this.state.name}
                  onChange={this.onChangePassword}
                />

                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  className="textField mt-2"
                  value={this.state.name}
                  onChange={this.onChangePassword}
                />
              </CardContent>
              <CardActions className="mt-1 mb-3">
                <Button
                  color="primary"
                  className="signIn"
                  onClick={this.onNewUserClick}
                >
                  Register
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(NewUser));
