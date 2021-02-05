import React, { Component } from 'react'
import UserGreet from './UserGreet'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UserGreet isLoggedIn={false} />
    );
  }
}

export default ConditionalRendering