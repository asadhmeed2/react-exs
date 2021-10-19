import React from "react";
import "./favoriteColor.css";
class FavoriteColor extends React.Component {
  constructor() {
    super();
    this.state = { color: 'red' };
  }

  componentDidMount=()=>{
      setTimeout(()=>{
          this.setState({ color: 'blue'})
      },1000)
  }
  componentDidUpdate=()=>{
      document.querySelector(
        "#colorMessage"
      ).textContent = `The updated favorite color is ${this.state.color}`;
  }
  render() {
    return (
      <div className="favoriteColor">
        <h1>my favorite color is {this.state.color}</h1>
        <div id="colorMessage"></div>
      </div>
    );
  }
}
export default FavoriteColor;
