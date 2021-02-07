import React, { Component } from 'react'

class InlineConditional extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <p>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in!
        </p>
      </div>
    );
  }
}

export default InlineConditional