import React, { Component } from 'react'
import ExampleOne from './ExampleOne'
import ExampleTwo from './ExampleTwo'

export class ReactCompositions extends Component {
  render() {
    return (
      <div className="Component">
        <ExampleOne />
        <ExampleTwo />
      </div>
    )
  }
}

export default ReactCompositions
