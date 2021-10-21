import React from 'react';
import "./inputBtn.css"


export default class InputBtn extends React.Component {
    render() {
        return (
          <div className="input">
            <label>{this.props.title}</label>
            <input
              type={this.props.type}
              value={this.props.value}
            />
          </div>
        );
    }
}