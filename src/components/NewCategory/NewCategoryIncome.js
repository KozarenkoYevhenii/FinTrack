import React from "react";
import DatePicker from "react-datepicker";
import "../NewIncome/datepicker.css";
import "./NewCategory.css";
import CategoryIncomeIcons from "./CategoryIncomeIcons";
export default class NewCategory extends React.Component {
  
  // state = {
  //   selectedOption: null,
  // };
  // handleChange = (selectedOption) => {
  //   this.setState({ selectedOption });
  //   console.log(`Option selected:`, selectedOption);
  // };
  render() {
    // const { selectedOption } = this.state;

    return (
      <>
        <div className="category-wrapper">
          <div>New income category</div>

          <div>
            <form className="newCategory-form">
              <label> Total </label>
              <input
                name="Name"
                placeholder="Enter name of category"
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
              <CategoryIncomeIcons />
              

              <button className="button" name="Add new category">
                Add new category
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
