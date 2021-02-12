import TasteOfJSX from './TasteOfJSX/TasteOfJSX'
import './App.css';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <TasteOfJSX user="maaz" />
      <FilterableProductTable />
    </div>
  );
}

export default App;
