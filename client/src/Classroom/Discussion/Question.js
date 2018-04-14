import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Avatar from "material-ui/Avatar";
import Card, { CardHeader } from "material-ui/Card";
import { Typography } from "material-ui";

import Answer from "./Answer";

const styles = theme => ({
  root: {
    padding: "5px"
  },
  row: {
    display: "flex"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                src="/favicon.ico"
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            }
            title={
              <Typography variant="title">
                How to design a lexical analyzer?
              </Typography>
            }
          />
        </Card>

        <Answer />
        <Answer />
      </div>
    );
  }
}

export default withStyles(styles)(Question);
