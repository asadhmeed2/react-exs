import React from "react";
import ProductsNav from "./productsNav";

import { data } from "./store";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div className="products">
         
        <ProductsNav itemData={data}/>
      </div>
    );
  }
}
