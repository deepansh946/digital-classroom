import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";

import Avatar from "material-ui/Avatar";
import Card, { CardHeader } from "material-ui/Card";
import { Typography } from "material-ui";

const styles = theme => ({
  root: {
    padding: "5px"
  },
  card: {
    backgroundColor: "rgb(226, 222, 222)"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 40,
    height: 40
  }
});

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                src="/smiley.jpg"
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            }
            title="Answer will be long and crappy text that is of no use but we have to show. Answer will be long and crappy text that is of no use but we have to show"
          />
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Answer);
