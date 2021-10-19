// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Button from './components/ex7.1/counter';
// import FavoriteColor from './components/ex8.1/favoriteColor';
// import BoxContainer from './components/ex8.2/boxContainer';
// import BoxContainer from './components/ex8.3/boxContainer';
import SpinnerContainer from './components/ex9.1/spinnerContainer';

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
  {/* <Button/> */}
  {/* <FavoriteColor/> */}
  {/* <BoxContainer/> */}
  <SpinnerContainer/>
</div>
}
}
export default App;
