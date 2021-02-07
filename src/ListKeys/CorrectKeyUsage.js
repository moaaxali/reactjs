const ListItem = (props) => {
  return <li>{props.value}</li>;
}

const CorrectKeyUsage = (props) => {
  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  )

  return (
    <div className="Component">
      <p>Correct usage of key - Example</p>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default CorrectKeyUsage