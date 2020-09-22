import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "../NewIncome/datepicker.css";

import "./NewCharge.css";

const options = [
  { value: "food", label: "food" },
  { value: "clothes", label: "clothes" },
  { value: "car", label: "car" },
];

export default class NewCharge extends React.Component {
  state = {
    selectedOption: null,
    startDate: new Date(),
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  handleChangeDate = (date) => {
    this.setState({
      startDate: date,
    });
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
                //   onChange={this.handleSearchChange}
              ></input>
              <label> Description </label>
              <input
                name="description"
                placeholder="Enter description of category"
                //   value={this.state.search}
                //   onChange={this.handleSearchChange}
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
                  selected={this.state.startDate}
                  onChange={this.handleChangeDate}
                />
              </div>
              <button className="button" name="Add new category">
                Add new charge
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
