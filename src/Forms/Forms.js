import React, { Component } from 'react'
import ControlledComponent from './ControlledComponent'
import MultipleInputs from './MultipleInputs'
import TextArea from './TextArea'
import TheSelectTag from './TheSelectTag'

export class Forms extends Component {
  render() {
    return (
      <div className="Component">
        <ControlledComponent />
        <TextArea />
        <TheSelectTag />
        <MultipleInputs />
      </div>
    );
  }
}

export default Forms
