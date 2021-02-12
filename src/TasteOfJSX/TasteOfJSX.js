import React, { Component } from 'react'
import formatName from './formatName'
import '../App.css';


class TasteOfJSX extends Component {
  render() {
    let { user } = this.props
    return (
      <div className="Component">
        <h3>Name: {formatName(user)}</h3>
        <p>Favourite Figure: {user.favoriteFigure}</p>
        <ul>
          {user.hobbies.map((item, i) => <li key={item + i}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default TasteOfJSX;