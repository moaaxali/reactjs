import React, { Component } from 'react'
import IncorrectKeyUsage from './IncorrectKeyUsage';
import List1 from './List1';
import Todo from './Todo';

class ListKeys extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Component">
        <List1 numbers={[1, 2, 3]} />
        <Todo todos={['code', 'eat', 'sleep', 'repeat']} />
        <IncorrectKeyUsage numbers={[100, 99, 88, 77]} />
      </div>
    );
  }
}

export default ListKeys