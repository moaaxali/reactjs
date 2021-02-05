import { prettyDOM } from '@testing-library/react'
import React, { Component } from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import UserGreet from './UserGreet';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLogin() {
    this.setState({ isLoggedIn: true })
  }

  handleLogout() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogout} />
    } else {
      button = <LoginButton onClick={this.handleLogin} />
    }

    return (
      <div>
        <UserGreet isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl