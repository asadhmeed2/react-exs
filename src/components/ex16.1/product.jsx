import React from "react";
import { data } from "./store";
import { Link } from "react-router-dom";
import "./product.css";
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    console.log(this.props.match);
    return (
      <div className="product">
        <h2>{data[this.props.match.params.id - 1].title}</h2>
        <h3>Price : {data[this.props.match.params.id - 1].price}</h3>
        <img
          src={`${data[this.props.match.params.id - 1].imageUrl}`}
          className="img"
          alt=""
        />
        <p>size : {data[this.props.match.params.id - 1].size}</p>

        <Link to={`/products`}>return</Link>
      </div>
    );
  }
}
