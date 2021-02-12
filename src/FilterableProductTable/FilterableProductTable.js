import React, { Component } from 'react'
import './FilterableProductTable.css'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <div className="Filterable-product-table">
          <SearchBar />
          <ProductTable />
        </div>
      </div>
    )
  }
}

export default FilterableProductTable
