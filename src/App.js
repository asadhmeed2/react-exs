// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Button from './components/ex7.1/counter';

import FavoriteColor from './components/ex8.1/favoriteColor';

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
  <FavoriteColor/>
</div>
}
}
export default App;
