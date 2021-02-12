import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleCheckInputChange = this.handleCheckInputChange.bind(this);
  }

  handleSearchInputChange(input) {
    this.setState({ filterText: input });
  }

  handleCheckInputChange(input) {
    this.setState({ inStockOnly: input });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onSearchInputChange={this.handleSearchInputChange}
          onCheckInputChange={this.handleCheckInputChange} />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
      </div>
    )
  }
}

export default FilterableProductTable
