import React, { Component } from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import WarningBanner from './WarningBanner';

class InlineConditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      warningMessage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      showWarning: !this.state.showWarning
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div className="Component">
        <div>
          {/* Also do a button to cancel and hide the warning */}
          <WarningBanner
            warn={this.state.showWarning}
            message='Plese login to continue'
          />
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