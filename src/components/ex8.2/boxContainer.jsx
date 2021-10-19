import React from "react";
import "./boxContainer.css";
import Box from './box'
class BoxContainer extends React.Component {
  constructor() {
    super();
    this.state = { stateNum: 0 };
  }
  setTimeout = (time, stateNum) => {
 setTimeout(() => {
   this.setState({ stateNum: stateNum });
   console.log("in state:", stateNum);
 }, time);
  };
  componentDidMount = () => {
   this.setTimeout(1000, 1);
  };
  componentDidUpdate = () => {
    if(this.state.stateNum!==2){
      this.setTimeout(4000, 2);
    }
  };
  render() {
    return (
      <div className="boxContainer">
        {this.state.stateNum === 1 ? (
          <div id="boxs">
            <Box width="50px" height="50px" />
            <Box width="100px" height="70px" />
            <Box width="30px" height="30px" />
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    );
  }
}
export default BoxContainer;
