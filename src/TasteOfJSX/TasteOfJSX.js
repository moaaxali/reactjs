import React, { Component } from 'react'
import formatName from '../formatName/formatName'

class TasteOfJSX extends Component {
  render() {
    return (
      <div>
        <p>Hello, {formatName(this.props.user)}</p>
      </div>
    );
  }
}

export default TasteOfJSX;