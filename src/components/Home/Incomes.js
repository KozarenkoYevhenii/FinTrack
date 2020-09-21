import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "../Button/Button";

export default class Incomes extends Component {
  state = { addButtonClicked: false };
  rerouteToAddMore = () => {
      this.setState({ addButtonClicked: true });
  };
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
            <tr>
              <td>Salary</td>
              <td></td>
              <td>12/09/2020</td>
              <td>$2000</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td></td>
              <td>11/08/2020</td>
              <td>$2000</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td></td>
              <td>10/07/2020</td>
              <td>$2000</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Selling unnecessary staff</td>
              <td>Sold book</td>
              <td>02/07/2020</td>
              <td>$5</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
