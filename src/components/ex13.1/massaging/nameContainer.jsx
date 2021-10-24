import React, { Component } from "react";
import Name from "./name";



export default class NameContainer extends Component {
    render() {
        return (
            <div className="name-container">
                {this.props.names.map((name,i)=><Name key={i} name={name}/>)}
            </div>
        )
    }
}