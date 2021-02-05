import React, { Component } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleON: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleON: !state.isToggleON
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleON ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle