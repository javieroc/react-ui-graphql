import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
    this.props.history.push('/signin');
  }

  render() {
    const isLoggedIn = localStorage.getItem('token') !== null;
    const avatar = isLoggedIn ? JSON.parse(localStorage.getItem('user')).avatar : '';

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Rufus</Link>
        </div>
        {
          !isLoggedIn &&
          <div className="navbar-links">
            <Link to="/signin">Signin</Link>
            <Link to="/signup">Signup</Link>
          </div>
        }
        {
          isLoggedIn &&
          <div className="navbar-links">
            <a className="navbar-avatar">
              <img src={avatar} />
            </a>
            <button onClick={this.logout}>Logout</button>
          </div>
        }
      </nav>
    );
  }
}

export default withRouter(Nav);
