import React from "react";
import './card.css'
export default class Card extends React.Component {

    render() {
        return (
          <div className="card">
            <div className="card-header">
            <h2 className="name">{this.props.person.name}</h2>
            <h2 className="birthday">{this.props.person.birthday}</h2>
              </div>
            <div className="favoriteFoods">
              <h3>favoriteFoods:</h3>
              {this.props.person.favoriteFoods.meats.map((food, i) => (
                <h4>{food}</h4>
              ))}
               {this.props.person.favoriteFoods.fish.map((food, i) => (
              <h4>{food}</h4>
              ))}
            </div>
          </div>
        );
    }
}