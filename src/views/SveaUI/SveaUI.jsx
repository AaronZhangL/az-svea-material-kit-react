import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// utils
// utils
import Cookies from "../../utils/Cookies";
import { login } from "../../store/actions";

import componentsStyle from "assets/jss/material-kit-react/views/sveaui.jsx";

// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class SveaUI extends React.Component {

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
        humanLang: {
            value: "",
            errors: []
        },
        machineLang: {
            value: "",
            errors: []
        },
        readOnly: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange(e) {
      const {name, value} = e.target;

      this.setState(state => ({ [name]: { ...this.state[name], value } }));
  }

  submitForm(e){
    e.preventDefault();

    const translater = {
        humanLang: this.state.humanLang.value,
        machineLang: this.state.machineLang.value
    }

    const url = 'http://localhost:3000/api/lang/translate';

    fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ translater }), // body data type must match "Content-Type" header
    })
    .then( res => res.json())
    .then( data => {
        const { errors, translater } = data;
        this.setState({ humanLang: { ...this.state.humanLang, errors: [] }, machineLang: { ...this.state.machineLang, errors: [] }  })
        //alert(data["translater"]["machineLang"])
        //alert(translater.machineLang)
        //alert(errors["machineLang"])
        //this.setState({machineLang : translater.machineLang});
        console.log(this.state);
        if (errors) {
            for (let name in errors) {
                const errorMessage = errors[name];

                this.setState(state => ({ [name]: { ...state[name], errors: [ ...state[name].errors, errorMessage ] } }));
            }

            return;
        }

        if (translater) {
            const { token, ...translaterData } = translater;

            Cookies.create('token', token, null);

            this.props.dispatch(login(translaterData));
            this.props.history.push('/');
        }
    });
  }

  render() {
    const { classes} = this.props;

    // svea
    const {readOnly} = this.state;

    return (
      <form onSubmit={this.submitForm} className={classes.root} noValidate autoComplete="off">
        <div className={classes.MultilineLeft}>
          <TextField
            id="text-human-language"
            name="humanLang"
            label="Human Language"
            placeholder="Input human language here."
            multiline
            rows="10"
            variant="outlined"
            onChange={this.handleInputChange}
            fullWidth
          />
        </div>
        <div className={classes.ButtonTranslate}>
        <Button type="submit" variant="contained" color="primary" size="small">
            Translate
        </Button>
        </div>
        <div className={classes.MultilineWrite}>
          <TextField
            id="text-machine-language"
            name="machineLang"
            label="Machine Language"
            multiline
            rows="10"
            defaultValue="RESULT"
            variant="outlined"
            value={ this.state.machineLang.value }
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
