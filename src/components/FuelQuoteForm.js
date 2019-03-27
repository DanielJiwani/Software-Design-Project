import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FuelQuoteForm extends Component {
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
          <AppBar title="Fuel Quote Form " />
          <TextField
            required
            type="number"
            hintText="Enter Gallons Requested"
            floatingLabelText="Gallons Requested"
            onChange={handleChange('gallonsrequested')}
            defaultValue={values.gallonsrequested}
          />
          <br />
          <TextField
            id="deliveryAddressText"
            hintText="Current Delivery Address"
            floatingLabelText="Delivery Address"
            defaultValue={values.address1}
          />
          <br />
          <br />
          <br />
          <label id="dateLabel">Delivery Date</label>
          <br />
          <TextField
            required
            label="Delivery Date"
            type="date"
            onChange={handleChange('deliverydate')}
            defaultValue={values.deliverydate}
           />
          <br />
          <TextField
            type="number"
            hintText="Suggested Price"
            floatingLabelText="Suggested Price"
            defaultValue={values.suggestedprice}
            //{/* Get this value from the Pricing Module */}
          />
          <br />
          <TextField
            type="number"
            hintText="Total Amount Due"
            floatingLabelText="Total Amount Due"
            //{/* Value needs to be calculated from gallons * price */}
            defaultValue={values.total}
          />
          <br />
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

export default FuelQuoteForm
