import React, { Component } from 'react'

class PassingArgsToHandler extends Component {
  constructor(props) {
    super(props);

  }

  handleClick(e) {
    alert(e)
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this, 'Maaz')} >
        Say Hello!
      </button>
    );
  }
}

export default PassingArgsToHandler