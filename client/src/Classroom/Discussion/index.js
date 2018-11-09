import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
// import AddIcon from "@material-ui/icons/Add";

import "../../App.css";
import Question from "./Question";

const styles = theme => ({
  root: {},
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialogBox: {
    width: "100%"
  },
  buttonCreate: {
    position: "fixed",
    right: "20px",
    bottom: "20px"
  },
  textField: {
    width: "100%",
    marginBottom: "50px"
  }
});

class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      open: false
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Question />
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
          className={classes.dialogBox}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <h1>Title</h1>
            <TextField
              className={classes.textField}
              onChange={this.handleChange("title")}
              margin="dense"
            />
            <h1>Content</h1>
            <TextField
              className={classes.textField}
              onChange={this.handleChange("content")}
              multiline
              margin="dense"
            />
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Create
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Discussion);
