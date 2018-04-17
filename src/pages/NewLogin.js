import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import './Login.css';

const LOGIN = gql`
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

const Login = (props) => {
  let email;
  let password;

  return (
    <Mutation mutation={LOGIN}>
      {(signin, { error, data }) => {
        if (data) {
          const { user, token } = data.signin;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          props.history.push('/');
        }
        return (
          <div className="login">
            <form onSubmit={(e) => {
                e.preventDefault();
                signin({
                  variables: {
                    loginData: {
                      email: email.value,
                      password: password.value,
                    },
                  },
                });
              }}
            >
              {
                error &&
                <ul className="custom-alert">
                  {
                    error.graphQLErrors[0].map(elem => <li key={elem.path}>{elem.message}</li>)
                  }
                </ul>
              }
              <input
                name="email"
                type="text"
                placeholder="Email"
                ref={(e) => { email = e; }}
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                ref={(p) => { password = p; }}
              />

              <button type="submit" className="btn">Login</button>
              <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
            </form>
          </div>

        );
      }}
    </Mutation>
  );
};

export default Login;
