import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import FuelQuoteForm from './FuelQuoteForm';
import FuelQuoteHistory from './FuelQuoteHistory';

export class Main extends Component {
  state = {
    step: 1,
    fullName: '',
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    gallonsrequested: '',
    deliveryaddress: '',
    deliverydate: '',
    suggestedprice: '',
    total: ''
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { fullName, email, password, address1, address2, city, state, zipcode, gallonsrequested, deliveryaddress, deliverydate, suggestedprice, total} = this.state;
    const values = { fullName, email, password, address1, address2, city, state, zipcode, gallonsrequested, deliveryaddress, deliverydate, suggestedprice, total}

    switch (step) {
      case 1:
        return (
          <Register
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <Login
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Profile
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <FuelQuoteForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 5:
        return (
          <FuelQuoteHistory
            prevStep={this.prevStep}
            values={values}
          />
        )
      default:
        return (
          <Register
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
      )
    }

    return (
      <div>

      </div>
    )
  }

}
