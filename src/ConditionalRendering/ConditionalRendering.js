import React, { Component } from 'react'
import LoginControl from './LoginControl'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginControl />
    );
  }
}

export default ConditionalRendering