import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }

        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable
