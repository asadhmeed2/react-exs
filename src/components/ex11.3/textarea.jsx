import React from "react";




export default class Textarea extends React.Component {
    render() {
        return <textarea name={this.props.name} onChange={(e)=>this.props.onChange("text",e.target.value)}></textarea>
    }
}