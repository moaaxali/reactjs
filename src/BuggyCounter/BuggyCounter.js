import React, { Component } from 'react'

export class BuggyCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    if (this.state.count === 5) {
      throw new Error('I crashed!');
    }
    return (
      <div className="Component">
        <h1 onClick={this.handleClick}>{this.state.count}</h1>
      </div>
    )
  }
}

export default BuggyCounter
