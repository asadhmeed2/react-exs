import React from "react";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }
    
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }
  render() {
    return (
      <input
        className="search"
        type="text"
        placeholder={"name"}
        onChange={(e) => this.props.onChange(e)}
      ></input>
    );
  }
}
