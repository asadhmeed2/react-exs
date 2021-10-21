import React from "react";
import "./select.css";

export default class Select extends React.Component {
  render() {
    return (
      <div className="select">
        <label>{this.props.title}</label>
        
        <select id="select" onChange={(e)=>this.props.onChange("age",e.target.value)}>
          {this.props.ages.map((option, i) => {
            return (
              <option value={option} key={i}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
