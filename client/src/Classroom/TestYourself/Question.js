import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardContent from 'material-ui/Card/CardContent';

import withStyles from 'material-ui/styles/withStyles';

import Answer from './Answer';

const styles = (theme) => ({
  root: {
    padding: '1px',
  },
});

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Card raised>
          <CardHeader title={this.props.title} />

          <CardContent>
            {this.props.options.map((a, i) => <Answer key={i + 1} {...a} />)}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Question);
