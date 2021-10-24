import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Nav from "./nav";
import MainPage from "./mainPage";
import Products from "./products";
import Product from "./product";
export default class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <BrowserRouter>
          <Nav />
          <div>
            <Route path="/" exact component={MainPage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={Product} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
