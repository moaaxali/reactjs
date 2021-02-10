import React, { Component } from 'react'

export class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ amount: e.target.value })
  }

  render() {
    const amount = this.state.amount;
    return (
      <div>
        <fieldset>
          <legend>Enter currency in PKR:</legend>
          <input
            value={amount}
            onChange={this.handleChange} />
        </fieldset>
      </div>
    )
  }
}

export default CurrencyConverter
