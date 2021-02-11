import PassingArgsToHandler from "../EventHandling/PassingArgsToHandler";

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <ul>
        <li>Zakir</li>
        <li>Anis</li>
        <li>Sardar</li>
      </ul>
    </div>
  );
}

function Chat() {
  return (
    <div>
      <ul>
        <li>Zakir [online]</li>
        <li>Anis [away]</li>
        <li>Sardar [offline]</li>
        <li>Irfan [online]</li>
      </ul>
    </div>
  );
}

// These two components Contacts & Chat are Passed
// to the Parent component SplitPane as props
function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      }
    />
  );
}

function ExampleTwo() {
  return (
    <div className="Component">
      <App />
    </div>
  );
}

export default ExampleTwo