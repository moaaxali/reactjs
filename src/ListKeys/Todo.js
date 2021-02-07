const Todo = (props) => {
  const todos = props.todos
  const todoItems = todos.map((todo, index) =>
    <li key={index}>
      {todo}
    </li>
  )
  return (
    <div className="Component">
      <p>With item index instead of key or id</p>
      <ul>{todoItems}</ul>
    </div>
  );
}

export default Todo