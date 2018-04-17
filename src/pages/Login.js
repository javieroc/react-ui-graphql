import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessages: [],
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
    try {
      const { email, password } = this.state;
      const response = await this.props.mutate({
        variables: {
          loginData: {
            email,
            password,
          },
        },
      });

      const { user, token } = response.data.signin;
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
    const { email, password } = this.state;

    return (
      <div className="login">
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

          <button type="submit" className="btn">Login</button>
          <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    );
  }
}

const loginMutation = gql`
  mutation ($loginData: LoginData!) {
    signin(loginData: $loginData) {
      user {
        _id
        firstName
        lastName
        email
        avatar
        address
      }
      token
    }
  }
`;

export default graphql(loginMutation)(Login);
