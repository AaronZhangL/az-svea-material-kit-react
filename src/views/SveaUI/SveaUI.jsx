import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

import componentsStyle from "assets/jss/material-kit-react/views/sveaui.jsx";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class SveaUI extends React.Component {
  state = {readOnly: true}

  render() {
    const { classes, ...rest } = this.props;

    // svea
    const {readOnly} = this.state;

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.MultilineLeft}>
          <TextField
            id="text-human-language"
            label="Human Language"
            placeholder="Input human language here."
            multiline
            rows="10"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className={classes.ButtonTranslate}>
        <Button variant="contained" color="primary" size="small">
            Translate
        </Button>
        </div>
        <div className={classes.MultilineWrite}>
          <TextField
            id="text-machine-language"
            label="Machine Language"
            multiline
            rows="10"
            defaultValue="RESULT"
            variant="outlined"
            disabled
            fullWidth
            inputProps={{
              readOnly: Boolean(readOnly),
              disabled: Boolean(readOnly),
            }}
          />
        </div>
        <div className={classes.ButtonFeedback}>
        <Button
        　raised
        　variant="contained"
        　color="primary"
        　size="small"
          onClick={e => {this.setState({readOnly: !readOnly})}}>
          {readOnly ? 'modify' : '-save-'}
        </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(componentsStyle)(SveaUI);
