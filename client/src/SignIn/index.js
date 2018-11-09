import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";

import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import Button from "material-ui/Button";
import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";

import logo from "../logo.svg";
import "../App.css";

const styles = theme => ({
  root: {
    flexGrow: "1",
    padding: "2px",
    height: "calc(100vh - 90px)"
  },
  card: {
    padding: "2px",
    marginBottom: "90px"
  },
  cardHeader: {
    textAlign: "center"
  },
  cardContent: {
    textAlign: "center"
  },
  cardActions: {},
  textField: {
    width: "95%",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  flexGrow: {
    flex: "1 1 auto"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px"
  },
  username: {
    marginRight: "10px"
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  title: {
    marginBottom: 16,
    fontSize: 20
  },
  signIn: {
    margin: "0 auto",
    background: "#000000",
    color: "#fff"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", showPassword: false };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  onSubmit = () => {
    this.props.history.push("/classroom");
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Digital Classroom</h1>
        </header>

        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
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
          >
            <Card raised className={classes.card}>
              <CardHeader title={"Sign In"} className={classes.cardHeader} />
              <CardContent className={classes.cardContent}>
                <TextField
                  id="username"
                  label="Username"
                  value={this.state.name}
                  onChange={this.onChangeUsername}
                  className={classes.textField}
                  autoFocus
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.onChangePassword}
                />
              </CardContent>
              <CardActions>
                <Button
                  raised="true"
                  onClick={this.onSubmit}
                  className={classes.signIn}
                >
                  Let's Go!
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(App));
