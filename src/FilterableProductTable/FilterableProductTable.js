import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = { filterText: 'ball', inStockOnly: false };
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      </div>
    )
  }
}

export default FilterableProductTable
