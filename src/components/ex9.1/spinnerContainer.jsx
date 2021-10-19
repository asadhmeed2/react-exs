import React from "react";
import "./spinnerContainer.css";
import Spinner from "./spinner"
class SpinnerContainer extends React.Component {
  constructor() {
    super();
    this.state = { timer: 11 };
  }
  componentDidMount=()=>{
     this.setState({ timer: this.state.timer - 1 });
  }
  startTimer = () => {
    let id = 0;
    if (this.state.timer > 0) {
      id = setTimeout(() => {
        this.setState({ timer: this.state.timer - 1 });
      }, 1000);
      // clearTimeout(id);
    }
  };
  componentDidUpdate = () => {
    this.startTimer();
  };
  render() {
    let display = this.state.timer ? "block" : "none";
    return (
      <div className="spinnerContainer">
        <div className="spinnerWrapper" style={{ display: display }}>
          <Spinner />
        </div>
        <div className="loaderText" style={{ display: display }}>
          {this.state.timer} loading...
        </div>
      </div>
    );
  }
}
export default SpinnerContainer;
