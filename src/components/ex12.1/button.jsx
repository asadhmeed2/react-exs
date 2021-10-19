import React from 'react';
import './button.css'



export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="button" value={"Get joke"} id="joke-btn" onClick={this.props.getJoke}/>
        )
    }
}