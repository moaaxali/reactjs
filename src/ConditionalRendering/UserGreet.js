const UserGreeting = () => {
  return <h3>Welcome User!</h3>
}

const GuestGreeting = () => {
  return <h3>Welcome Guest!</h3>
}

const UserGreet = (props) => {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
}

export default UserGreet