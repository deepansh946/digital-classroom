import React, { Component } from "react";
import Card from "material-ui/Card";
import withStyles from "material-ui/styles/withStyles";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Switch from "material-ui/Switch";

import PropTypes from "prop-types";

import Input from "../Input";

const styles = theme => ({
  root: {
    padding: "10px"
  }
});

class QuestionCreate extends Component {
  static propTypes = {
    createQuestion: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      titleLength: 0,
      description: "",
      descriptionLength: 0,

      placeholder: "Start typing here...",

      optionA: "",
      optionALength: 0,
      optionAAnswer: false,
      optionADescription: "",

      optionB: "",
      optionBLength: 0,
      optionBAnswer: false,
      optionBDescription: "",

      optionC: "",
      optionCLength: 0,
      optionCAnswer: false,
      optionCDescription: "",

      optionD: "",
      optionDLength: 0,
      optionDAnswer: false,
      optionDDescription: ""
    };
  }

  onChangeToggle = name => e => {
    this.setState({
      [name]: e.target.checked
    });

    // console.log(this.state.optionAAnswer);
    // console.log(this.state.optionBAnswer);
    // console.log(this.state.optionCAnswer);
    // console.log(this.state.optionDAnswer);
  };

  onChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      title,
      description,
      optionA,
      optionAAnswer,
      optionB,
      optionBAnswer,
      optionC,
      optionCAnswer,
      optionD,
      optionDAnswer
    } = this.state;

    this.props.createQuestion({
      title,
      description,
      options: [
        { title: optionA, answer: optionAAnswer },
        { title: optionB, answer: optionBAnswer },
        { title: optionC, answer: optionCAnswer },
        { title: optionD, answer: optionDAnswer }
      ]
    });

    this.setState({
      title: "",
      description: "",

      optionA: "",
      optionAAnswer: false,

      optionB: "",
      optionBAnswer: false,

      optionC: "",
      optionCAnswer: false,

      optionD: "",
      optionDAnswer: false
    });
  };

  render() {
    const {
      title,
      placeholder,
      description,
      optionA,
      optionAAnswer,
      optionB,
      optionBAnswer,
      optionC,
      optionCAnswer,
      optionD,
      optionDAnswer
    } = this.state;

    return (
      <div>
        <Card raised>
          <Typography>Question:</Typography>
          <Input
            value={title}
            placeholder={placeholder}
            onChange={this.onChange("title")}
          />

          <Typography>Description:</Typography>
          <Input
            value={description}
            placeholder={placeholder}
            onChange={this.onChange("description")}
          />

          <Typography>Options</Typography>

          <h3>A</h3>
          <Input
            value={optionA}
            placeholder={placeholder}
            onChange={this.onChange("optionA")}
          />
          <Switch
            checked={optionAAnswer}
            onChange={this.onChangeToggle("optionAAnswer")}
          />

          <h3>B</h3>
          <Input
            value={optionB}
            placeholder={placeholder}
            onChange={this.onChange("optionB")}
          />
          <Switch
            checked={optionBAnswer}
            onChange={this.onChangeToggle("optionBAnswer")}
          />

          <h3>C</h3>
          <Input
            value={optionC}
            placeholder={placeholder}
            onChange={this.onChange("optionC")}
          />
          <Switch
            checked={optionCAnswer}
            onChange={this.onChangeToggle("optionCAnswer")}
          />

          <h3>D</h3>
          <Input
            value={optionD}
            placeholder={placeholder}
            onChange={this.onChange("optionD")}
          />
          <Switch
            checked={optionDAnswer}
            onChange={this.onChangeToggle("optionDAnswer")}
          />

          <Button raised onClick={this.onSubmit}>
            Create
          </Button>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(QuestionCreate);
