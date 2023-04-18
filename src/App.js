import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Component1 from './components/component1';
import Component2 from './components/component2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;
