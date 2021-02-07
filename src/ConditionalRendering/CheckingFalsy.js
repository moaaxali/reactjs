const CheckingFalsy = (props) => {
  const count = 0;
  return (
    <div>
      <p>This will still render 0 even if the condition is false</p>
      <p>Falsy will always be rendered</p>
      { count && <h1>Messages: {count}</h1>}
    </div>
  );
}

export default CheckingFalsy