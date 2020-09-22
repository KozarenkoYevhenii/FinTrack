import React from "react";
import Select from "react-select";
//import "./NewCategory.css";
// import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faChalkboardTeacher,
  faCheckSquare,
  faCoffee,
  faDonate,
  faFemale,
  faGift,
  faHome,
  faLaptopCode,
  faLaptopHouse,
  faPercent,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

const options = [
  {
    value: <FontAwesomeIcon icon={faLaptopHouse} />, //homework, freelance
    label: <FontAwesomeIcon icon={faLaptopHouse} />,
  },

  {
    value: <FontAwesomeIcon icon={faGift} />, //present money
    label: <FontAwesomeIcon icon={faGift} />,
  },
  {
    value: <FontAwesomeIcon icon={faLaptopCode} />, // work
    label: <FontAwesomeIcon icon={faLaptopCode} />,
  },

  {
    value: <FontAwesomeIcon icon={faChalkboardTeacher} />, // paid tutorials
    label: <FontAwesomeIcon icon={faChalkboardTeacher} />,
  },
  {
    value: <FontAwesomeIcon icon={faBook} />, //sold book
    label: <FontAwesomeIcon icon={faBook} />,
  },
  {
    value: <FontAwesomeIcon icon={faFemale} />, //mom
    label: <FontAwesomeIcon icon={faFemale} />,
  },
  {
    value: <FontAwesomeIcon icon={faPiggyBank} />, // kopilka
    label: <FontAwesomeIcon icon={faPiggyBank} />,
  },
  {
    value: <FontAwesomeIcon icon={faPercent} />, // deposit percent
    label: <FontAwesomeIcon icon={faPercent} />,
  },
  {
    value: <FontAwesomeIcon icon={faDonate} />, //charity
    label: <FontAwesomeIcon icon={faDonate} />,
  },
  {
    value: <FontAwesomeIcon icon={faHome} />, //home rent
    label: <FontAwesomeIcon icon={faHome} />,
  },
];
export default class CategoryIncomeIcons extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <>
        <Select
          className="select"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </>
    );
  }
}
