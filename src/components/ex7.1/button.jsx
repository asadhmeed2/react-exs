
import React from "react";
import "./button.css"
class Button extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    this.counterHandler = this.counterHandler.bind(this);
  }
counterHandler(){
    const count =this.state.counter+1;
    console.log('count: ',count);
    this.setState({ counter: count });
}
  render() {
    return (
      <div className="buttonContainer">
        <input
          type="button"
          value="add to counter"
          onClick={this.counterHandler}
        />
        <div className="counterOutput">{this.state.counter}</div>
      </div>
    );
  }
}
export default Button;