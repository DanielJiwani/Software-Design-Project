import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Register extends Component {
  continue = e => {
    e.preventDefault();
    {/* this is where you process the data and send it to your back end*/}
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Register Your Account" />
          <TextField
            required
            hintText="Enter Your Full Name"
            floatingLabelText="Full Name"
            onChange={handleChange('fullName')}
            defaultValue={values.fullName}
          />
          <br />
          <TextField
            required
            hintText="Enter Your E-Mail Address"
            floatingLabelText="E-Mail Address"
            type="email"
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
          Need to make this where it sends these credentials to the DB and actually makes the new account so the user can login next time.
          Right now it just does nothing with the inputed data and just goes to the Profile page.
          */}
          <RaisedButton
            label="Register"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <br />
          Have an account already?
          <br />
          <RaisedButton
            label="Login"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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

export default Register
