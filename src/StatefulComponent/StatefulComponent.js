// Ticking clock example, this code might not work
// but we are going to update it step-by-step
const StatefulComponent = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

setInterval(StatefulComponent, 1000);

export default StatefulComponent