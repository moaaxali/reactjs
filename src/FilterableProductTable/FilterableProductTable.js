import React, { Component } from 'react'
import './FilterableProductTable.css'

export class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <div className="Filterable-product-table">
          <div className="Search-bar">
            <input type="text" placeholder="Search..." />
            <input type="checkbox" /> Only show products in stock
          </div>
          <div className="Product-table">
            <table>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
              <tr colspan="2">Sporting Good</tr>
              <tr>
                <td>Football</td>
                <td>$49.49</td>
              </tr>
              <tr>
                <td>Baseball</td>
                <td>$9.99</td>
              </tr>
              <tr>
                <td>Basetball</td>
                <td>$29.99</td>
              </tr>
              <tr colspan="2">Electronics</tr>
              <tr>
                <td>iPod Touch</td>
                <td>$99.99</td>
              </tr>
              <tr>
                <td>iPone5</td>
                <td>$399.99</td>
              </tr>
              <tr>
                <td>Nexus 7</td>
                <td>$199.99</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterableProductTable
