import React, { Component } from 'react'

const currencyNames = {
  pkr: 'Pakistani Ruppee ₨',
  usd: 'United States Dollar ＄',
  gbp: 'Pound Sterling £',
  eur: 'Euro €',
  jpy: 'Japanese Yen'
}

export class AmountInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onAmountChange(e.target.value);
  }

  render() {
    const amount = this.props.amount;
    const currency = this.props.currency;
    return (
      <div>
        <fieldset>
          <legend>{currencyNames[currency]}:</legend>
          <input
            value={amount}
            onChange={this.handleChange} />
        </fieldset>
      </div>
    )
  }
}

export default AmountInput
