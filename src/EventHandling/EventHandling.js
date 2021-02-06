import React, { Component } from 'react'
import Toggle from './Toggle'
// import PassingArgsToHandler from './PassingArgsToHandler'
import '../App.css'

class EventHandling extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Component">
        <Toggle />
        {/* <PassingArgsToHandler name="Maaz" /> */}
      </div>
    );
  }
}

export default EventHandling