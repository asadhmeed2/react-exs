// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './components/ex7.1/counter'

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
  <Counter/>
</div>
}
}
export default App;
