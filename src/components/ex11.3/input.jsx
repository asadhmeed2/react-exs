import React from 'react';
import "./input.css"


export default class Input extends React.Component {
    render() {
        return (
          <div className="input">
            <label>{this.props.title}</label>
            <input
              type={this.props.type}
              placeholder={this.props.placeholder}
              onChange={(e) => this.props.onChange(this.props.name, e.target.value)}
            />
          </div>
        );
    }
}