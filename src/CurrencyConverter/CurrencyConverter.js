import React, { Component } from 'react'
import AmountInput from './AmountInput'

export class CurrencyConverter extends Component {
  render() {
    return (
      <div>
        <AmountInput currency="pkr" />
        <AmountInput currency="usd" />
        <AmountInput currency="gbp" />
        <AmountInput currency="eur" />
        <AmountInput currency="jpy" />
      </div>
    )
  }
}

export default CurrencyConverter
