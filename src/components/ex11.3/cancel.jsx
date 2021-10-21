import React from "react";


export default class InputCancelBtn extends React.Component {
  render() {
    return (
      <div className="input">
        <label>{this.props.title}</label>
        <input type={this.props.type} value={this.props.value} onClick={this.props.onClick}/>
      </div>
    );
  }
}
