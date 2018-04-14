import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from 'material-ui/styles/withStyles';

import Checkbox from 'material-ui/Checkbox';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

class Answer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    answer: PropTypes.bool,
    explaination: PropTypes.string.isRequired,
  };

  static defaultProps = {
    answer: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      dirty: false,
      answer: false,
    };
  }

  onChange = (e) => {
    this.setState({
      dirty: true,
      answer: e.target.value,
    });
  };

  render() {
    // console.log(this.props);
    const { dirty } = this.state;
    const { title, explaination } = this.props;

    return (
      <div className={this.props.classes.root}>
        <Checkbox value={this.props.answer} onChange={this.onChange} />
        {title}
        <div>{dirty ? explaination : null}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Answer);
