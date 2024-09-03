import './App.css';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Sajjad"/>
      <Welcome />
      <FunctionClick />
    </div>
  );
}

export default App;
