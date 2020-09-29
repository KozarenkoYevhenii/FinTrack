import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "../NewIncome/datepicker.css";
import "./NewCharge.css";
import Button from "../Button/Button";
import store from "store";

const options = [
  { value: "food", label: "food" },
  { value: "clothes", label: "clothes" },
  { value: "car", label: "car" },
];
const time = new Date();
const date = (time.getMonth() + 1) + "/" + time.getDate() + "/" +  time.getFullYear()

export default class NewCharge extends React.Component {
  state = {
    category: null,
    description: "",
    date: date,
    money: "",
    action: "...",
  };

  handleTotalChange = (e) => {
    this.setState({ money: `$${e.target.value}` });
  };
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };
  handleChange = (e) => {
    this.setState({ category: e.value });
  };
  handleChangeDate = (date) => {
    this.setState({ date: (date.getMonth() + 1) + "/" + date.getDate() + "/" +  date.getFullYear() });
  };
  addNewCharge = () => {
    store.set("charges", [
      ...store.get("charges"),
      this.state,
    ]);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <>
        <div className="charge-wrapper">
          <div>New charge</div>
          <div>
            <form className="newCharge-form">
              <label> Total </label>
              <input
                name="total"
                placeholder=""
                //   value={this.state.search}
                onChange={this.handleTotalChange}
              ></input>
              <label> Description </label>
              <input
                name="description"
                placeholder="Enter description of category"
                //   value={this.state.search}
                onChange={this.handleDescriptionChange}
              ></input>
              <label> Select category </label>
              <Select
                className="select-line"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
              <div className="date-wrapper">
                <div>Date</div>
                <DatePicker
                  selected={Date.now()}
                  onChange={this.handleChangeDate}
                />
              </div>
              <Button
                name="button"
                content="Add new charge"
                handler={this.addNewCharge}
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}
