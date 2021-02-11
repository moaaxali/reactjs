import React, { Component } from 'react'
import ExampleOne from './ExampleOne'
import ExampleThree from './ExampleThree'
import ExampleTwo from './ExampleTwo'
import SignUpDialog from './SignupDialog'


export class ReactCompositions extends Component {
  render() {
    return (
      <div className="Component">
        <ExampleOne />
        <ExampleTwo />
        <ExampleThree />
        <SignUpDialog />
      </div>
    )
  }
}

export default ReactCompositions
