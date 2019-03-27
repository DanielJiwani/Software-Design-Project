import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Profile extends Component {
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
          <AppBar title="Profile" />
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
            hintText="Enter Address Line 1"
            floatingLabelText="Address Line 1"
            onChange={handleChange('address1')}
            defaultValue={values.address1}
          />
          <br />
          <TextField
            hintText="Enter Address Line 2"
            floatingLabelText="Address Line 2"
            onChange={handleChange('address2')}
            defaultValue={values.address2}
          />
          <br />
          <TextField
            required
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <label id="stateLabel">State</label>
          <select id="stateSelect" required onChange={handleChange('state')} defaultValue={values.state}>
          	<option value="AL">AL</option>
          	<option value="AK">AK</option>
          	<option value="AR">AR</option>
          	<option value="AZ">AZ</option>
          	<option value="CA">CA</option>
          	<option value="CO">CO</option>
          	<option value="CT">CT</option>
          	<option value="DC">DC</option>
          	<option value="DE">DE</option>
          	<option value="FL">FL</option>
          	<option value="GA">GA</option>
          	<option value="HI">HI</option>
          	<option value="IA">IA</option>
          	<option value="ID">ID</option>
          	<option value="IL">IL</option>
          	<option value="IN">IN</option>
          	<option value="KS">KS</option>
          	<option value="KY">KY</option>
          	<option value="LA">LA</option>
          	<option value="MA">MA</option>
          	<option value="MD">MD</option>
          	<option value="ME">ME</option>
          	<option value="MI">MI</option>
          	<option value="MN">MN</option>
          	<option value="MO">MO</option>
          	<option value="MS">MS</option>
          	<option value="MT">MT</option>
          	<option value="NC">NC</option>
          	<option value="NE">NE</option>
          	<option value="NH">NH</option>
          	<option value="NJ">NJ</option>
          	<option value="NM">NM</option>
          	<option value="NV">NV</option>
          	<option value="NY">NY</option>
          	<option value="ND">ND</option>
          	<option value="OH">OH</option>
          	<option value="OK">OK</option>
          	<option value="OR">OR</option>
          	<option value="PA">PA</option>
          	<option value="RI">RI</option>
          	<option value="SC">SC</option>
          	<option value="SD">SD</option>
          	<option value="TN">TN</option>
          	<option value="TX">TX</option>
          	<option value="UT">UT</option>
          	<option value="VT">VT</option>
          	<option value="VA">VA</option>
          	<option value="WA">WA</option>
          	<option value="WI">WI</option>
          	<option value="WV">WV</option>
          	<option value="WY">WY</option>
          </select>
          <br />
          <TextField
            required
            type="number"
            hintText="Enter Your ZipCode"
            floatingLabelText="ZipCode"
            onChange={handleChange('zipcode')}
            defaultValue={values.zipcode}
            InputProps={{ inputProps: { min: 5, max: 9 } }}
          />
          <br />
          {/*
          Need to add a submit button that checks the credentials of the login information and then sends the user to the profile page.
          Right now it is just going straight to the Profile page without checking the login credentials.
          */}
          <RaisedButton
            label="Submit"
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

export default Profile
