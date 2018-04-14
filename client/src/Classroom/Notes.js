// TODO : Add text editor for entering syllabus

import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import SwipeableViews from "react-swipeable-views";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";

import logo from "../logo.svg";
import "../App.css";

const styles = theme => ({
  root: {}
});

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <li>Chapter 1</li>
          <li>Chapter 1</li>
          <li>Chapter 1</li>
          <li>Chapter 1</li>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Notes);
