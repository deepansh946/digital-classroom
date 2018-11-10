import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";

import classroom from "../classroom.png";
import "../App.css";

import About from "./About";
import Discussion from "./Discussion";
import Notes from "./Notes";
import Syllabus from "./Syllabus";
import TestYourself from "./TestYourself";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
});

class Classroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { theme } = this.props;
    const { value } = this.state;

    return (
      <div className="root">
        <header className="App-header" style={{ textAlign: "center" }}>
          <img src={classroom} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Digital Classroom</h1>
        </header>

        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="About" />
            <Tab label="Syllabus" />
            <Tab label="Notes" />
            <Tab label="Discussion" />
            <Tab label="Test Yourself" />
          </Tabs>
        </AppBar>
        {value === 0 && <About />}
        {value === 1 && <Syllabus />}
        {value === 2 && <Notes />}
        {value === 3 && <Discussion />}
        {value === 4 && <TestYourself />}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Classroom);
