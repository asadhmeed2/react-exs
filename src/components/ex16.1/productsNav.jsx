import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import './productsNav.css'

export default class ProductsNav extends React.Component {
  render() {
    return (
      <div className="nav navProduct">
        <ul>
          {this.props.itemData.map((item) => {
            return (
              <li>
                <Link
                  className="link productNavLink"
                  key={item.id}
                  to={`products/${item.id}`}
                >
                  {item.title}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
