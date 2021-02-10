import React, { Component } from 'react'

const currencyNames = {
  pkr: 'Pakistani Ruppee',
  usd: 'United States Dollar',
  gbp: 'Pound Sterling',
  eur: 'Euro',
  jpy: 'Japanese Yen'
}

export class AmountInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      amount: e.target.value
    });
  }

  render() {
    const amount = this.state.amount;
    const currency = this.props.currency;
    return (
      <div>
        <fieldset>
          <legend>Enter amount in {currencyNames[currency]}:</legend>
          <input
            value={amount}
            onChange={this.handleChange} />
        </fieldset>
      </div>
    )
  }
}

export default AmountInput
