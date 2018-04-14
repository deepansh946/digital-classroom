import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";

import logo from "../../logo.svg";
import "../../App.css";

import Question from "./Question";
import Answer from "./Answer";
import QuestionCreate from "./QuestionCreate";

const styles = theme => ({
  root: {
    padding: "1%"
  }
});

class TestYourself extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          qId: 1,
          title: "Question 1",
          description: "Test Description",
          options: [
            {
              title: "Option A",
              answer: true,
              explaination: "Test Explaination"
            },
            {
              title: "Option B",
              answer: true,
              explaination: "Test Explaination"
            },
            { title: "Option C", explaination: "Test Explaination" },
            { title: "Option D", explaination: "Test Explaination" }
          ]
        },
        {
          qId: 2,
          title: "Question 2",
          description: "2 Test Description",
          options: [
            {
              title: "Option A",
              answer: true,
              explaination: "Test Explaination"
            },
            {
              title: "Option B",
              answer: true,
              explaination: "Test Explaination"
            },
            { title: "Option C", explaination: "Test Explaination" },
            { title: "Option D", explaination: "Test Explaination" }
          ]
        }
      ]
    };
  }

  createQuestion = ({ title, description, options }) => {
    const { questions } = this.state;

    this.setState({
      questions: [
        ...questions,
        {
          qId: questions.length + 1, // questions.length,
          title,
          description,
          options
        }
      ]
    });
  };

  render() {
    const { questions } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <QuestionCreate
          questions={questions}
          createQuestion={this.createQuestion}
        />

        {questions.map(q => <Question key={q.qId} {...q} />)}
      </div>
    );
  }
}

export default withStyles(styles)(TestYourself);
