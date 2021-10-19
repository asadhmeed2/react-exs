import React from "react";
import "./boxContainer.css";
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
   this.setTimeout(500, this.state.stateNum+1);
  };
  componentDidUpdate = () => {
   this.setTimeout(500, this.state.stateNum + 1);
  };
  render() {
    let shape=this.state.stateNum >= 5?"circle":"";
    let color = this.state.stateNum % 2 === 0?"red":"green";
    return (
      <div className="boxContainer">
          <div id="boxs" className={shape} style={{background:color}}></div>
      </div>
    );
  }
}
export default BoxContainer;
