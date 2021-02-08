import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'

export class Calculator extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '' };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div className="Component">
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input value={temperature} onChange={this.handleChange} />        <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
      </div>
    )
  }
}

export default Calculator
