import React, { Component } from 'react'
import AmountInput from './AmountInput'

const exchangeRates = {
  pkr: { usd: 0.006246, gbp: 0.0045102, eur: 1.0051446, jpy: 0.6535948 },
  usd: { pkr: 160.19, gbp: 0.72, eur: 0.82, jpy: 104.67 },
  gbp: { pkr: 221.72, usd: 1.38, eur: 1.14, jpy: 144.93 },
  eur: { pkr: 194.38, usd: 1.21, gbp: 0.88, jpy: 126.97 },
  jpy: { pkr: 1.53, usd: 0.0096, gbp: 0.0069, eur: 0.0079 },
}

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
