import React from "react";
import "./button.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.getJoke = this.props.getJoke;
  }

  render() {
    return (
      <input
        type="button"
        value={"Get joke"}
        id="joke-btn"
        onClick={this.getJoke}
      />
    );
  }
}
