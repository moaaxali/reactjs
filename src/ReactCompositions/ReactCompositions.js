import React, { Component } from 'react'
import ExampleOne from './ExampleOne'
import ExampleThree from './ExampleThree'
import ExampleTwo from './ExampleTwo'

export class ReactCompositions extends Component {
  render() {
    return (
      <div className="Component">
        <ExampleOne />
        <ExampleTwo />
        <ExampleThree />
      </div>
    )
  }
}

export default ReactCompositions
