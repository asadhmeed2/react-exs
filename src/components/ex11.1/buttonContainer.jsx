import React from "react";
import "./buttonContainer.css";
import Button from "./button";

export default class ButtonContainer extends React.Component {
  constructor() {
    super();
    this.state = { color: "" };
  }
  onButtonClicked = (e) => {
    this.setState({ color: e.target.value });
  };
  render() {
    const colors = ["blue", "red", "yellow"];
    return (
      <div className="buttonContainer">
        {colors.map((color) => (
          <Button color={color} onClick={this.onButtonClicked} />
        ))}
        <div>the button color is {this.state.color}</div>
      </div>
    );
  }
}
