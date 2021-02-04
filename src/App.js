import TasteOfJSX from './TasteOfJSX/TasteOfJSX'
import './App.css';

const user = {
  firstName: 'Maaz',
  lastName: 'Ali',
  favoriteFigure: 7,
  hobbies: ['Soccer', 'Vollyball', 'Hiking', 'Camping', 'Swimming', 'Coding'],
}

function App() {
  return (
    <div className="App">
      <TasteOfJSX user={user} />
    </div>
  );
}

export default App;
