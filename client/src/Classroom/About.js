import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

import "../App.css";
import { Card, CardContent, CardHeader } from "material-ui";

const styles = theme => ({
  root: {},
  card: {
    width: "550px",
    height: "auto",
    align: "center",
    margin: "10px auto" /* Added */,
    float: "none" /* Added */
  },
  title: {
    fontSize: 20,
    display: "inline-block"
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
      <div style={{ "margin-top": 20 }} className={classes.root}>
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
            lg={6}
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card}>
              <CardContent>
                <i
                  className="fa fa-bars fa-lg mr-2"
                  style={{ color: "#ff3333" }}
                />
                <Typography
                  className={classes.title}
                  component="p"
                  color="default"
                >
                  <strong>Name:</strong> Compiler Design
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card}>
              <CardContent>
                <i
                  className="fa fa-location-arrow fa-lg mr-2"
                  style={{ color: "#ff3333" }}
                />
                <Typography className={classes.title} color="default">
                  <strong>Level:</strong> Beginner
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card}>
              <CardContent>
                <i
                  className="fa fa-male fa-lg mr-2"
                  style={{ color: "#ff3333" }}
                />
                <Typography className={classes.title} color="default">
                  <strong>Professor Name:</strong> Prof. Mahesh Parmar
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card}>
              <CardContent>
                <i
                  className="fa fa-users fa-lg mr-2"
                  style={{ color: "#ff3333" }}
                />
                <Typography className={classes.title} color="default">
                  <strong>Number Of Students:</strong> 120
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card}>
              <CardContent>
                <div>
                  <Typography className={classes.title} color="default">
                    <i
                      className="fa fa-list-alt"
                      style={{ color: "#ff3333" }}
                    />
                    <strong> Description:</strong> A compiler translates the
                    code written in one language to some other language without
                    changing the meaning of the program. It is also expected
                    that a compiler should make the target code efficient and
                    optimized in terms of time and space.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(About);
