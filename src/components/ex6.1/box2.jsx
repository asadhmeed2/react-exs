import react from 'react';
import Box3 from './box3';




// const Box2=()=>{

//     return(
//         <div className="box2">
//             <Box3/>
//         </div>
// )
// }
class Box2 extends react.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="box2">
        <Box3></Box3>
      </div>
    );
  }
}
export default Box2;