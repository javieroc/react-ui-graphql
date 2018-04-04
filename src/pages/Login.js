import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              id="email"
              name="email"
              onChange={this.onChange}
              type="text"
              placeholder="Email"
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              value={password}
            />
          </div>

          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
