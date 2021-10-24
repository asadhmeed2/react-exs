import React, { Component } from "react";
import Card from "./card";

export default class NameComponent extends Component {
  render() {
    return (
      <div className="card-container">
        {this.props.personsBornBefor1990.map((person, i) => (
          <Card key={i} person={person} />
        ))}
      </div>
    );
  }
}
