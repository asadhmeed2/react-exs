import logo from './logo.svg';
import './App.css';
import Button from './components/ex4.1/button';
function App() {
  return (
    <div className="App">
      <Button value="important" weight="900" />
      <Button value = "not important" weight="300" />
    </div>
  );
}

export default App;
