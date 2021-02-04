import React, { Component } from 'react'
import Clock from './Clock'

class StatefulComponent extends Component {
  render() {
    return (
      <Clock date={new Date()} />
    );
  }
}

export default StatefulComponent