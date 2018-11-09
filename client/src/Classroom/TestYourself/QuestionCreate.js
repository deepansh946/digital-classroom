import React, { Component } from "react";
import Card from "material-ui/Card";
import withStyles from "material-ui/styles/withStyles";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Switch from "material-ui/Switch";
import Dialog from "material-ui/Dialog";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

import IconButton from "material-ui/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
import Slide from "material-ui/transitions/Slide";
// import AddIcon from "@material-ui/icons/Add";

import PropTypes from "prop-types";

import Input from "../Input";

const styles = theme => ({
  root: {
    padding: "10px"
  },
  typography: {
    padding: "2px"
  },
  input: {
    flexGrow: "1",
    border: "2px solid #dadada",
    borderRadius: "7px",
    padding: "8px",
    "&:focus": {
      outline: "none",
      borderColor: "#9ecaed",
      boxShadow: "0 0 10px #9ecaed"
    }
  },
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  buttonCreate: {
    position: "fixed",
    right: "20px",
    bottom: "20px"
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class QuestionCreate extends Component {
  static propTypes = {
    createQuestion: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
      optionDAnswer: false,
      open: false
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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

    const { classes } = this.props;

    return (
      <div>
        <Button
          className={classes.buttonCreate}
          raised="true"
          onClick={this.handleClickOpen}
          variant="fab"
          aria-label="add"
        >
          {/* <AddIcon /> */}
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                {/* <CloseIcon /> */}
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Create Question
              </Typography>
            </Toolbar>
          </AppBar>
          <Card raised="true" style={{ padding: "20px" }}>
            <div style={{ marginBottom: "10px" }}>
              <Typography variant="title">Question:</Typography>
              <div style={{ marginTop: "10px" }}>
                <Input
                  value={title}
                  placeholder={placeholder}
                  onChange={this.onChange("title")}
                />
              </div>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <Typography variant="title">Description:</Typography>
              <div style={{ marginTop: "10px" }}>
                <Input
                  value={description}
                  placeholder={placeholder}
                  onChange={this.onChange("description")}
                />
              </div>
            </div>

            <Typography variant="subheading">Options</Typography>

            <div style={{ display: "flex", justifyContent: "safe" }}>
              <Typography
                variant="headline"
                style={{ marginTop: "10px", marginRight: "10px" }}
              >
                A
              </Typography>
              <input
                type="text"
                placeholder={placeholder || "input"}
                value={optionA}
                onChange={this.onChange("optionA")}
                className={classes.input}
              />
              <Switch
                checked={optionAAnswer}
                onChange={this.onChangeToggle("optionAAnswer")}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "safe",
                marginTop: "10px"
              }}
            >
              <Typography
                variant="headline"
                style={{ marginTop: "10px", marginRight: "10px" }}
              >
                B
              </Typography>
              <input
                type="text"
                placeholder={placeholder || "input"}
                value={optionB}
                onChange={this.onChange("optionB")}
                className={classes.input}
              />
              <Switch
                checked={optionBAnswer}
                onChange={this.onChangeToggle("optionBAnswer")}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "safe",
                marginTop: "10px"
              }}
            >
              <Typography
                variant="headline"
                style={{ marginTop: "10px", marginRight: "10px" }}
              >
                C
              </Typography>
              <input
                type="text"
                placeholder={placeholder || "input"}
                value={optionC}
                onChange={this.onChange("optionC")}
                className={classes.input}
              />
              <Switch
                checked={optionCAnswer}
                onChange={this.onChangeToggle("optionCAnswer")}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "safe",
                marginTop: "10px"
              }}
            >
              <Typography
                variant="headline"
                style={{ marginTop: "10px", marginRight: "10px" }}
              >
                D
              </Typography>
              <input
                type="text"
                placeholder={placeholder || "input"}
                value={optionD}
                onChange={this.onChange("optionD")}
                className={classes.input}
              />
              <Switch
                checked={optionDAnswer}
                onChange={this.onChangeToggle("optionDAnswer")}
              />
            </div>

            <Button
              variant="raised"
              onClick={this.onSubmit}
              style={{
                marginTop: "15px",
                marginRight: "100px",
                borderRadius: "10%"
              }}
            >
              Save
            </Button>
          </Card>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(QuestionCreate);
