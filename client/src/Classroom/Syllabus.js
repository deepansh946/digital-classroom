// TODO : Add text editor for entering syllabus

import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import SwipeableViews from "react-swipeable-views";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import { Card, CardContent, CardHeader } from "material-ui";

import logo from "../logo.svg";
import "../App.css";

const styles = theme => ({
  root: {},
  card: {
    minWidth: 275,
    margin: "10px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 20
  },
  pos: {
    marginBottom: 12
  }
});

class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="default">
              asdfasdfasdfasdf
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Syllabus);
