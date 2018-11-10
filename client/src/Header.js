import React, { Component } from "react";

import "../src/App.css";
import classroom from "./classroom.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="App-header">
        <img src={classroom} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Digital Classroom</h1>
      </header>
    );
  }
}

export default Header;
