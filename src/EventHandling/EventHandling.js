import React, { Component } from 'react'
import Toggle from './Toggle'
import PassingArgsToHandler from './PassingArgsToHandler'
import '../App.css'

class EventHandling extends Component {
  render() {
    return (
      <div className="Component">
        <Toggle />
        <PassingArgsToHandler name="Maaz" />
      </div>
    );
  }
}

export default EventHandling