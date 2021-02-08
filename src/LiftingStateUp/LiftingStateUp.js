import React, { Component } from 'react'
import Calculator from './Calculator'

export class LiftingStateUp extends Component {
  render() {
    return (
      <div className="Component">
        <Calculator />
      </div>
    )
  }
}

export default LiftingStateUp
