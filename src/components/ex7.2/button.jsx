
import React from "react";
import "./button.css"
class Button extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  clickHandler =()=>{
    this.setState({ show: (this.state.show?false:true )}
    )}
    
  render() {
    return (
      <div className="buttonContainer">
        <input
          type="button"
          value="show"
          onClick={this.clickHandler}
        />
        <div id="box" className={this.state.show?'show':'hide'}></div>
      </div>
    );
  }
}
export default Button;