import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Typography from "material-ui/Typography";

import "../App.css";
import { Card, CardContent, CardHeader } from "material-ui";

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

class About extends Component {
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
              Name: Compiler Design
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="default">
              Description: A compiler translates the code written in one
              language to some other language without changing the meaning of
              the program. It is also expected that a compiler should make the
              target code efficient and optimized in terms of time and space.
              Compiler design principles provide an in-depth view of translation
              and optimization process. Compiler design covers basic translation
              mechanism and error detection & recovery. It includes lexical,
              syntax, and semantic analysis as front end, and code generation
              and optimization as back-end.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="default">
              Professor Name : Prof. Mahesh Parmar
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="default">
              Number Of Students : 120
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="default">
              Level : Beginner
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(About);
