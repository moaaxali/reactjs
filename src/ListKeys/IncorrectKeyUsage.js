const ListItem = (props) => {
  const value = props.value
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

const IncorrectKeyUsage = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:    
    <ListItem value={number} />
  );
  return (
    <div className="Component">
      <p>Incorrect Key usage! Correct one is also there</p>
      <ul>
        {listItems}
      </ul>
    </div>

  );
}

export default IncorrectKeyUsage