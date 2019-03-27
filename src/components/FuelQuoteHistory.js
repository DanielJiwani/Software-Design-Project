import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class FuelQuoteHistory extends Component {
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
    const {
      values: { gallonsrequested, address1, address2, city, state, zipcode, deliverydate, suggestedprice, total}
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Fuel Quote History" />
          <table>
              <tr>
                <th>Order Number</th>
                <th>Gallons Requested</th>
                <th>Delivery Address</th>
                <th>Delivery Date</th>
                <th>Suggested Price</th>
                <th>Total Amount Due</th>
              </tr>
              <tr>
                {/*Right now it is pulling the data from the form it self but we need to pull it from the database instead.*/}
                <td>1</td>
                <td>{gallonsrequested}</td>
                <td>{address1} {address2} {city}, {state} {zipcode}</td>
                <td>{deliverydate}</td>
                <td>{suggestedprice}Needs to be calculated form pricing module</td>
                <td>{total} Need to be calculates by gallons * suggestedprice</td>
              </tr>
            </table>
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

export default FuelQuoteHistory
