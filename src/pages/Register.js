import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
    } = this.state;

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
