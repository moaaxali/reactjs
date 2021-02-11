import FancyBorder from './FancyBorder'

function Dialog() {
  return (
    <div>
      <FancyBorder color="purple">
        <h1 className="Dialog-title">
          Hello!
        </h1>
        <p className="Dialog-message">
          Thank you for attending our Webinar.
        </p>
      </FancyBorder>
    </div>
  );
}

function ExampleOne() {
  return (
    <div className="Component">
      <p><strong>Compositions</strong></p>
      <p>Method#1 Containment Direct Children</p>
      <Dialog />
    </div>
  )
}

export default ExampleOne
