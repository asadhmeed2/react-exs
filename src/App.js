import logo from './logo.svg';
import './App.css';
import Hello from './components/ex2-1/ex2-1'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello/>
        
      </header>
    </div>
  );
}

export default App;
