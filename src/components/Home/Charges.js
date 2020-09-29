import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "../Button/Button";
import ChargesTr from "../ChargesTr/ChargesTr";
import "../Home/Home.css";
import store from "store";

export default class Charges extends Component {
  state = {
    addButtonClicked: false,
  };
  rerouteToAddMore = () => {
    this.setState({ addButtonClicked: true });
  };
  componentDidMount() {
    store.get("charges")?.length
      ? store.set("charges", [
          ...store.get("charges"),
          //   {
          //     category: "Food",
          //     description: "demo",
          //     date: "12/09/2020",
          //     money: "$13",
          //     action: "...",
          //   },
          //   {
          //     category: "Restoraunts",
          //     description: "demo",
          //     date: "12/09/2020",
          //     money: "$15",
          //     action: "...",
          //   },
          //   {
          //     category: "Pets",
          //     description: "demo",
          //     date: "12/09/2020",
          //     money: "$16",
          //     action: "...",
          //   },
          //   {
          //     category: "Food",
          //     description: "demo",
          //     date: "12/09/2020",
          //     money: "$18",
          //     action: "...",
          //   },
        ])
      : store.set("charges", []);
  }
  render() {
    if (this.state.addButtonClicked) {
      return <Redirect to="/home/newCharges" />;
    }
    return (
      <div>
        <div className="select-panel">
          <label>
            <span>My Charges</span>
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
            {store.get("charges")?.map((charge) => (
              <ChargesTr props={charge} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
