import React from "react";
import Select from "react-select";
import "./NewCategory.css";
import CategoryIcons from "./CategoryIcons";
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
          <div>New category</div>

          <div>
            <form className="newCategory-form">
              <label> Name </label>
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
              <CategoryIcons />

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
