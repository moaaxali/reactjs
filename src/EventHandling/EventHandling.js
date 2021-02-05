import React, { Component } from 'react'
import Toggle from './Toggle'
import PassingArgsToHandler from './PassingArgsToHandler'

class EventHandling extends Component {
  render() {
    <div>
      <Toggle />
      <h1>hello</h1>
      <PassingArgsToHandler name="Maaz" />
    </div>
  }
}

export default EventHandling