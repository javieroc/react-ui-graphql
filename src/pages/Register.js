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
      errorMessages: [],
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
      const {
        firstName,
        lastName,
        email,
        password,
      } = this.state;

      const registerData = {
        firstName,
        lastName,
        location,
        email,
        address: googleAddress[0].formatted_address,
        password,
      };

      const response = await this.props.mutate({
        variables: {
          registerData,
        },
      });

      const { user, token } = response.data.register;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      this.props.history.push('/');
    } catch (err) {
      if (err.graphQLErrors) {
        this.setState({
          errorMessages: err.graphQLErrors[0],
        });
      }
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
          {
            this.state.errorMessages.length > 0 &&
            <ul className="custom-alert">
              {
                this.state.errorMessages.map(elem => <li key={elem.path}>{elem.message}</li>)
              }
            </ul>
          }
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

const registerMutation = gql`
  mutation register($registerData: RegisterData!) {
    register(registerData: $registerData) {
      user {
        _id
        firstName
        lastName
        location {
          lat
          lng
        }
        email
        avatar
        address
      }
      token
    }
  }
`;

export default graphql(registerMutation)(Register);
