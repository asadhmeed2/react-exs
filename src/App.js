// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Box from './components/ex6.1/box1'

// function App() {
//   return (
//     <div className="App">
//       <Box></Box>
//     </div>
//   );
// }
class App extends React.Component {
  constructor() {
    super();
  }
render() {
return <div className="App">
  <Box></Box>
</div>
}
}
export default App;
