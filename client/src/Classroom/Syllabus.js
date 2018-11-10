// TODO : Add text editor for entering syllabus or file upload

import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import SwipeableViews from "react-swipeable-views";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import { Card, CardContent, CardHeader } from "material-ui";

import "../App.css";

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

class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="default">
              UNIT I INTRODUCTION TO COMPILERS Translators-Compilation and
              Interpretation-Language processors -The Phases of Compiler-Errors
              Encountered in Different Phases-The Grouping of Phases-Compiler
              Construction Tools - Programming Language basics. UNIT II LEXICAL
              ANALYSIS Need and Role of Lexical Analyzer-Lexical
              Errors-Expressing Tokens by Regular Expressions-Converting Regular
              Expression to DFA- Minimization of DFA-Language for Specifying
              Lexical Analyzers-LEX-Design of Lexical Analyzer for a sample
              Language. UNIT III SYNTAX ANALYSIS Need and Role of the
              Parser-Context Free Grammars -Top Down Parsing -General
              Strategies-Recursive Descent Parser Predictive Parser-LL(1)
              Parser-Shift Reduce Parser-LR Parser-LR (0)Item-Construction of
              SLR Parsing Table -Introduction to LALR Parser - Error Handling
              and Recovery in Syntax Analyzer-YACC-Design of a syntax Analyzer
              for a Sample Language . UNIT IV SYNTAX DIRECTED TRANSLATION & RUN
              TIME ENVIRONMENT Syntax directed Definitions-Construction of
              Syntax Tree-Bottom-up Evaluation of S-Attribute Definitions-
              Design of predictive translator - Type Systems-Specification of a
              simple type checker-Equivalence of Type Expressions-Type
              Conversions. RUN-TIME ENVIRONMENT: Source Language Issues-Storage
              Organization-Storage Allocation-Parameter Passing-Symbol
              Tables-Dynamic Storage Allocation-Storage Allocation in FORTAN.
              UNIT V CODE OPTIMIZATION AND CODE GENERATION Principal Sources of
              Optimization-DAG- Optimization of Basic Blocks-Global Data Flow
              Analysis-Efficient Data Flow Algorithms-Issues in Design of a Code
              Generator - A Simple Code Generator Algorithm.
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Syllabus);
