import React, { Component } from 'react'

class PassingArgsToHandler extends Component {
  constructor(props) {
    super(props);

  }

  handleClick(e) {
    alert(e.fname)
  }

  render() {
    fname = 'Maaz';
    return (
      <button onClick={this.handleClick.bind(this, fname)} >
        Say Hello!
      </button>
    );
  }
}

export default PassingArgsToHandler