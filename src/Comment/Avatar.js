const Avatar = (props) => {
  return (
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}

export default Avatar