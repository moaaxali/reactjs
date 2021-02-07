const List1 = (props) => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <div className="Component">
      <p>With keys specified</p>
      <ul>{listItems}</ul>
    </div>
  );
}

export default List1