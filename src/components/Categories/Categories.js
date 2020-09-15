import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ChargesCategories from "./ChargesCategories";
import IncomesCategories from "./IncomesCategories";
import "./categories.css";

class Categories extends Component {
  render() {
    return (
      <div className="categories-page">
        <div className="charges-incomes-wrapper">
          <div className="charges-incomes">
            <NavLink to="/categories/charges">Charges</NavLink>
          </div>
          <div className="charges-incomes">
            <NavLink to="/categories/incomes">Incomes</NavLink>
          </div>
        </div>
        <div>
          <Route exact path="/categories">
            <Redirect to="/categories/charges" />
          </Route>
          <Route path="/categories/charges" component={ChargesCategories} />
          <Route path="/categories/incomes" component={IncomesCategories} />
        </div>
      </div>
    );
  }
}

export default Categories;
