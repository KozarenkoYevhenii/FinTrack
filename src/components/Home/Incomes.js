import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "../Button/Button";
import store from "store";
import IncomeTr from "../incomeTr/incomeTr"

export default class Incomes extends Component {
  state = { addButtonClicked: false };
  rerouteToAddMore = () => {
      this.setState({ addButtonClicked: true });
  };
  componentDidMount() {
    store.get("incomes")?.length
      ? store.set("incomes", [
          ...store.get("incomes"),
        ])
      : store.set("incomes", []);
  }
    render() {
    if (this.state.addButtonClicked) {return <Redirect to="/home/newIncomes" />}
    return (
      <div>
        <div className="select-panel">
          <label>
            <span>My Incomes</span>
            <select className="period-input">
              <option value="whole-time">whole time</option>
              <option value="month">this month</option>
              <option value="week">this week</option>
              <option value="day">today</option>
            </select>
          </label>
          <Button
            name="add-btn"
            content="Add More"
            handler={this.rerouteToAddMore}
          />
        </div>
        <table className="home-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Date</th>
              <th>Money</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {store.get("incomes")?.map((charge) => (
              <IncomeTr props={charge} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
