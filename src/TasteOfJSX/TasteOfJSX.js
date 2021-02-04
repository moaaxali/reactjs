import React, { Component } from 'react'
import formatName from './formatName'

class TasteOfJSX extends Component {
  render() {
    let { user } = this.props
    return (
      <div>
        <h3>Name: {formatName(user)}</h3>
        <p>Favourite Figure: {user.favoriteFigure}</p>
        <ul>{user.hobbies.map((item, i) => <li key={item + i}>{item}</li>)}</ul>
      </div>
    );
  }
}

export default TasteOfJSX;