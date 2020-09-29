import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "./datepicker.css";
import "./NewIncome.css";
import CategoryIncomeIcons from "../NewCategory/CategoryIncomeIcons";
import store from "store";
import Button from "../Button/Button";

const options = [
  { value: "Salary", label: "Salary" },
  { value: "Freelance", label: "Freelance" },
  { value: "Sold stuff", label: "Sold stuff" },
];
const time = new Date();
const date =
  time.getMonth() + 1 + "/" + time.getDate() + "/" + time.getFullYear();

export default class NewIncome extends React.Component {
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
    this.setState({
      date:
        date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear(),
    });
  };
  addNewCharge = () => {
    store.set("incomes", [...store.get("incomes"), this.state]);
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
                onChange={this.handleTotalChange}
              ></input>
              <label> Description </label>
              <input
                name="description"
                placeholder="Enter description of category"
                //   value={this.state.search}
                onChange={this.handleDescriptionChange}
              ></input>
              <label> Select category of income </label>
              <Select
                className="select-line"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
              {/* <CategoryIncomeIcons /> */}
              {/* <Select
                className="select-line"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              /> */}
              <div className="date-wrapper">
                <div>Date</div>
                <DatePicker
                  selected={Date.now()}
                  onChange={this.handleChangeDate}
                />
              </div>
              <Button
                name="button"
                content="Add new income"
                handler={this.addNewCharge}
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}
