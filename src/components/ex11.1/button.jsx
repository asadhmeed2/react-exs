import React from 'react';


export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {color: this.props.color}
    }


    render() {
        return (
            <input type="button" value={this.state.color} onClick={(e)=>this.props.onClick(e)} style = {{background:this.state.color}}/>
        )
    }
}