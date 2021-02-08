import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput';

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
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }
}

export default Calculator
