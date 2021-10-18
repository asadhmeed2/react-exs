import React from 'react';
import reactDom from 'react-dom';
import Box2 from './box2';
import "./box.css"


// const Box=()=>{
//     return(
//         <div className="box1">
//             <Box2/>
//         </div>
// )
// }
class Box extends React.Component {
    constructor() {
        super();
    }
    render(){
        return <div className="box1"><Box2></Box2></div>
    }
}
export default Box;