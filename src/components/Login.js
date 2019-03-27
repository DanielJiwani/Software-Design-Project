import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';

export class Login extends Component {
  continue = e => {
    e.preventDefault();
    {/* this is where you process the data and send it to your back end*/}
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Login" />
          <TextField
            required
            hintText="Enter Your E-Mail Address"
            floatingLabelText="E-Mail Address"
            type='email'
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <TextField
            required
            hintText="Enter Your Password"
            floatingLabelText="Password"
            type="password"
            onChange={handleChange('password')}
            defaultValue={values.password}
          />
          <br />
          {/*
          Need to add a submit button that checks the credentials of the login information and then sends the user to the profile page.
          Right now it is just going straight to the Profile page without checking the login credentials.
          */}
          <RaisedButton
            label="Login"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Login
