import React, { Component } from 'react'
import ControlledComponent from './ControlledComponent'
import TextArea from './TextArea'

export class Forms extends Component {
  render() {
    return (
      <div className="Component">
        <ControlledComponent />
        <TextArea />
      </div>
    );
  }
}

export default Forms
