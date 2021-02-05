import React, { Component } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleON: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({ isToggleON: !isToggleON }))
  }

  render() {
    return (
      <button onClick={handleClick}>
        {this.state.isToggleON ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle