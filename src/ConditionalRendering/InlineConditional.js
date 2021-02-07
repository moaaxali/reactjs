import React, { Component } from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class InlineConditional extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <div>
          <p>
            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in!
          </p>
        </div>
        <div>
          {isLoggedIn
            ? <LogoutButton onClick={this.handleClick} />
            : <LoginButton onClick={this.handleClick} />
          }
        </div>
      </div>
    );
  }
}

export default InlineConditional