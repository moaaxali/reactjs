import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <div>
          <SearchBar />
          <ProductTable products={this.props.products} />
        </div>
      </div>
    )
  }
}

export default FilterableProductTable
