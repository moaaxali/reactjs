import React, { Component } from 'react'
import AmountInput from './AmountInput'

const exchangeRates = {
  pkr: { usd: 0.006246, gbp: 0.0045102, eur: 1.0051446, jpy: 0.6535948 },
  usd: { pkr: 160.19, gbp: 0.72, eur: 0.82, jpy: 104.67 },
  gbp: { pkr: 221.72, usd: 1.38, eur: 1.14, jpy: 144.93 },
  eur: { pkr: 194.38, usd: 1.21, gbp: 0.88, jpy: 126.97 },
  jpy: { pkr: 1.53, usd: 0.0096, gbp: 0.0069, eur: 0.0079 },
}

function convert(amount, from, to) {
  return amount * exchangeRates[from][to]
}

function tryConvert(amount, from, to) {
  const input = parseFloat(amount);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input, from, to);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: 'pkr'
    };
    this.handlePkrChange = this.handlePkrChange.bind(this);
    this.handleUsdChange = this.handleUsdChange.bind(this);
    this.handleGbpChange = this.handleGbpChange.bind(this);
    this.handleEurChange = this.handleEurChange.bind(this);
    this.handleJpyChange = this.handleJpyChange.bind(this);
  }

  handlePkrChange(amount) {
    this.setState({ currency: 'pkr', amount });
  }

  handleUsdChange(amount) {
    this.setState({ currency: 'usd', amount });
  }

  handleGbpChange(amount) {
    this.setState({ currency: 'gbp', amount });
  }

  handleEurChange(amount) {
    this.setState({ currency: 'eur', amount });
  }

  handleJpyChange(amount) {
    this.setState({ currency: 'jpy', amount });
  }

  render() {
    const currency = this.state.currency;
    const amount = this.state.amount;
    let { pkr, usd, gbp, eur, jpy } = '';
    switch (currency) {
      case 'pkr':
        pkr = amount;
        usd = tryConvert(amount, 'pkr', 'usd')
        gbp = tryConvert(amount, 'pkr', 'gbp')
        eur = tryConvert(amount, 'pkr', 'eur')
        jpy = tryConvert(amount, 'pkr', 'jpy')
        break;
      case 'usd':
        usd = amount;
        pkr = tryConvert(amount, 'usd', 'pkr')
        gbp = tryConvert(amount, 'usd', 'gbp')
        eur = tryConvert(amount, 'usd', 'eur')
        jpy = tryConvert(amount, 'usd', 'jpy')
        break;
      case 'gbp':
        gbp = amount;
        pkr = tryConvert(amount, 'gbp', 'pkr')
        usd = tryConvert(amount, 'gbp', 'usd')
        eur = tryConvert(amount, 'gbp', 'eur')
        jpy = tryConvert(amount, 'gbp', 'jpy')
        break;
      case 'eur':
        eur = amount;
        pkr = tryConvert(amount, 'eur', 'pkr')
        usd = tryConvert(amount, 'eur', 'usd')
        gbp = tryConvert(amount, 'eur', 'gbp')
        jpy = tryConvert(amount, 'eur', 'jpy')
        break;
      case 'jpy':
        jpy = amount;
        pkr = tryConvert(amount, 'jpy', 'pkr')
        usd = tryConvert(amount, 'jpy', 'usd')
        gbp = tryConvert(amount, 'jpy', 'gbp')
        eur = tryConvert(amount, 'jpy', 'eur')
        break;

    }

    return (
      <div className="Component">
        <AmountInput
          currency="pkr"
          amount={pkr}
          onAmountChange={this.handlePkrChange}
        />
        <AmountInput
          currency="usd"
          amount={usd}
          onAmountChange={this.handleUsdChange}
        />
        <AmountInput
          currency="gbp"
          amount={gbp}
          onAmountChange={this.handleGbpChange}
        />
        <AmountInput
          currency="eur"
          amount={eur}
          onAmountChange={this.handleEurChange}
        />
        <AmountInput
          currency="jpy"
          amount={jpy}
          onAmountChange={this.handleJpyChange}
        />
      </div>
    )
  }
}

export default CurrencyConverter
