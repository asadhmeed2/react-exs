import react from "react";
import reactDOM from "react-dom";

/**
 * 
 * 
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
 */
const Button = (props) => {
  return (
    <input
      type="button"
      style={{ fontWeight: props.weight }}
      value={props.value}
    />
  );
};
export default Button;
