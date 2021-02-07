const Todo = (props) => {
  const todos = props.todos
  const todoItems = todos.map((todo, index) =>
    <li key={index}>
      {todo}
    </li>
  )
  return (
    <ul>{todoItems}</ul>
  );
}

export default Todo