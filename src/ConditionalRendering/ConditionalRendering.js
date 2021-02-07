import React, { Component } from 'react'
import InlineLogical from './InlineLogical';
import LoginControl from './LoginControl'
import CheckingFalsy from './CheckingFalsy'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unreadMessages: ["abc", "xyz", "lmn"],
      count: 0
    }
  }

  render() {
    return (
      <div className="Component">
        <LoginControl />
        <InlineLogical unreadMessages={this.state.unreadMessages} />
        <CheckingFalsy count={this.state.count} />
      </div>
    );
  }
}

export default ConditionalRendering