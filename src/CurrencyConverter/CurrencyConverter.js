import React, { Component } from 'react'
import AmountInput from './AmountInput'

const exchangeRates = {
  pkr: { usd: 0.006246, gbp: 0.0045102, eur: 1.0051446, jpy: 0.6535948 },
  usd: { pkr: 160.19, gbp: 0.72, eur: 0.82, jpy: 104.67 },
  gbp: { pkr: 221.72, usd: 1.38, eur: 1.14, jpy: 144.93 },
  eur: { pkr: 194.38, usd: 1.21, gbp: 0.88, jpy: 126.97 },
  jpy: { pkr: 1.53, usd: 0.0096, gbp: 0.0069, eur: 0.0079 },
}

function toPkr(amount, from) {
  return amount * exchangeRates[from]['pkr']
}

function toUsd(amount, from) {
  return amount * exchangeRates[from]['usd']
}

function toGbp(amount, from) {
  return amount * exchangeRates[from]['gbp']
}

function toEur(amount, from) {
  return amount * exchangeRates[from]['eur']
}

function toJpy(amount, from) {
  return amount * exchangeRates[from]['jpy']
}

function tryConvert(amount, from, convert) {
  const input = parseFloat(amount);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input, from);
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
        usd = tryConvert(amount, 'pkr', toUsd)
        gbp = tryConvert(amount, 'pkr', toGbp)
        eur = tryConvert(amount, 'pkr', toEur)
        jpy = tryConvert(amount, 'pkr', toJpy)
        break;
      case 'usd':
        usd = amount;
        pkr = tryConvert(amount, 'usd', toPkr)
        gbp = tryConvert(amount, 'usd', toGbp)
        eur = tryConvert(amount, 'usd', toEur)
        jpy = tryConvert(amount, 'usd', toJpy)
        break;
      case 'gbp':
        gbp = amount;
        pkr = tryConvert(amount, 'gbp', toPkr)
        usd = tryConvert(amount, 'gbp', toUsd)
        eur = tryConvert(amount, 'gbp', toEur)
        jpy = tryConvert(amount, 'gbp', toJpy)
        break;
      case 'eur':
        eur = amount;
        pkr = tryConvert(amount, 'eur', toPkr)
        usd = tryConvert(amount, 'eur', toUsd)
        gbp = tryConvert(amount, 'eur', toGbp)
        jpy = tryConvert(amount, 'eur', toJpy)
        break;
      case 'jpy':
        jpy = amount;
        pkr = tryConvert(amount, 'jpy', toPkr)
        usd = tryConvert(amount, 'jpy', toUsd)
        gbp = tryConvert(amount, 'jpy', toGbp)
        eur = tryConvert(amount, 'jpy', toEur)
        break;

    }

    return (
      <div>
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
