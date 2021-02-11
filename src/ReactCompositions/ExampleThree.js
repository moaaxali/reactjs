import FancyBorder from './FancyBorder'

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

function ExampleThree() {
  return (
    <div className="Component">
      <p>React Compositions <strong>Containment Specializations</strong></p>
      <p>
        Method#3 a more <b>specific</b> component renders
        a more <b>generic</b> and configures it wiht
        props
      </p>
      <WelcomeDialog />
    </div>
  )
}

export default ExampleThree
