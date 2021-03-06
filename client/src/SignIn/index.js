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

import Header from "../Header";

const styles = theme => ({
  root: {
    flexGrow: "1",
    padding: "2px",
    height: "calc(100vh - 90px)",
    background: "#EB5C5C"
  },
  card: {
    maxWidth: "500px",
    padding: "2px",
    marginBottom: "90px"
  },
  cardHeader: {
    textAlign: "center"
  },
  cardContent: {
    textAlign: "center"
  },
  textField: {
    width: "95%",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 10
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
    boxShadow: "3px 3px #ff3333",
    transitionDuration: "0.5s",
    margin: "0 auto !important",
    border: "1px solid #000",
    transform: "translateY(-2px)",
    "&:hover": {
      transform: "translateY(0px)",
      boxShadow: "3px 3px #fff"
    }
  },
  link: {
    textDecoration: "none !important"
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

  onNewUser = () => {
    this.props.history.push("/userRegister");
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <Header />

        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Card raised className={classes.card}>
              <CardHeader title={"Sign In"} className={classes.cardHeader} />
              <CardContent
                className={classes.cardContent}
                style={{ paddingTop: "0" }}
              >
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
              <CardActions className="mt-1 mb-3">
                <Button
                  onClick={this.onSubmit}
                  variant="outlined"
                  color="primary"
                  className={classes.signIn}
                >
                  Let's Go!
                </Button>

                <Button
                  onClick={this.onNewUser}
                  variant="outlined"
                  color="primary"
                  className={classes.signIn}
                >
                  New User?
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
