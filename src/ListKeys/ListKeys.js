import React, { Component } from 'react'
import List1 from './List1';

class ListKeys extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Component">
        <List1 numbers={[1, 2, 3]} />
      </div>
    );
  }
}

export default ListKeys