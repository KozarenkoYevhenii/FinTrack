import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "./datepicker.css";
import "./NewIncome.css";
import CategoryIncomeIcons from "../NewCategory/CategoryIncomeIcons";

export default class NewIncome extends React.Component {
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
        <div className="income-wrapper">
          <div>New income</div>
          <div>
            <form className="newIncome-form">
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
              <label> Select category of income </label>
              <CategoryIncomeIcons />
              {/* <Select
                className="select-line"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              /> */}
              <div className="date-wrapper">
                <div>Date</div>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChangeDate}
                />
              </div>
              <button className="button" name="Add new category">
                Add new income
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
