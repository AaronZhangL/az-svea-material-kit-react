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

  render() {
    const { classes, ...rest } = this.props;

    //const [value, setValue] = React.useState('Controlled');
    const value = "abc";
    const handleChange = event => {
      //setValue(event.target.value);
    };

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.MultilineLeft}>
          <TextField
            id="full-width-text-field"
            label="Human Language"
            multiline
            rows="10"
            defaultValue="Default Value0"
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
            id="full-width-text-field"
            label="Machine Language"
            multiline
            rows="10"
            defaultValue="Default Value1"
            variant="outlined"
            fullWidth
          />
        </div>
      </form>
    );
  }
}

export default withStyles(componentsStyle)(SveaUI);
