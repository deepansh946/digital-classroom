/**
 * This input component is mainly developed for create post, create
 * course component.
 *
 * @format
 */

import React from "react";
import PropTypes from "prop-types";

import withStyles from "material-ui/styles/withStyles";

const styles = {
  root: {
    display: "flex"
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
  }
};

const Input = ({ classes, onChange, value, placeholder, disabled, type }) => (
  <div className={classes.root}>
    <input
      type={type || "text"}
      placeholder={placeholder || "input"}
      value={value}
      onChange={onChange}
      className={classes.input}
      disabled={!!disabled}
    />
  </div>
);

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default withStyles(styles)(Input);
