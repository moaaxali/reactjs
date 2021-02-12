import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleCheckInput = this.handleCheckInput.bind(this);
  }

  handleSearchInput(e) {
    this.props.onSearchInputChange(e.target.value)
  }

  handleCheckInput(e) {
    this.props.onCheckInputChange(e.target.checked)
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleSearchInput} />
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleCheckInput} />
            {' '}
              Only show products in stock
            </p>
        </form>
      </div >
    );
  }
}

export default SearchBar
