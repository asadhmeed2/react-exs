import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav mainNav">
        <ul>
          <li>
            <Link className="link mainLink" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="link mainLink" to="/products">
              Products
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
