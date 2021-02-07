import React, { Component } from 'react'
import InlineLogical from './InlineLogical';
import LoginControl from './LoginControl'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = { unreadMessages: ["abc", "xyz", "lmn"] }
  }

  render() {
    return (
      <div>
        <LoginControl />
        <InlineLogical unreadMessages={this.state.unreadMessages} />
      </div>
    );
  }
}

export default ConditionalRendering