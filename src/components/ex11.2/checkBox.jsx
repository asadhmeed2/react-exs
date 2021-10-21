import React from 'react';
import "./checkBox.css"




export default class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: this.props.checked};
    }    
    
    
    
    render() {
        return (
          <div className="checkbox">
            <input
              type="checkbox"
              name="check"
              defaultChecked ={this.state.checked}
              onChange={this.onChange}
            />
            <label for="check">{this.props.text}</label>
          </div>
        );
        }
}