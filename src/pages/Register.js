import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeAddress = address => this.setState({ address });
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      const googleAddress = await geocodeByAddress(this.state.address);
      const location = await getLatLng(googleAddress[0]);
      console.log('location', location);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      address,
      password,
    } = this.state;

    const inputProps = {
      value: address,
      onChange: this.onChangeAddress,
      placeholder: 'Address',
    };

    return (
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            onChange={this.onChange}
            type="text"
            placeholder="Firstname"
            value={firstName}
          />

          <input
            name="lastName"
            onChange={this.onChange}
            type="text"
            placeholder="Lastname"
            value={lastName}
          />

          <input
            name="email"
            onChange={this.onChange}
            type="text"
            placeholder="Email"
            value={email}
          />

          <PlacesAutocomplete inputProps={inputProps} />

          <input
            name="password"
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            value={password}
          />

          <button type="submit" className="btn">Create account</button>
        </form>
      </div>
    );
  }
}

export default Register;
