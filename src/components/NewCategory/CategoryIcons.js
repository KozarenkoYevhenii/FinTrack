import React from "react";
import Select from "react-select";
import "./NewCategory.css";
// import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faCcAmazonPay,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faGooglePay,
  faRedhat,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAppleAlt,
  faBabyCarriage,
  faBeer,
  faBicycle,
  faBirthdayCake,
  faBook,
  faBuilding,
  faBusAlt,
  faCar,
  faCarrot,
  faCat,
  faChalkboard,
  faCheckSquare,
  faCocktail,
  faCoffee,
  faDice,
  faDog,
  faDrumstickBite,
  faFirstAid,
  faGasPump,
  faGem,
  faGifts,
  faGuitar,
  faHamburger,
  faHanukiah,
  faHeadSideMask,
  faHiking,
  faHospital,
  faIceCream,
  faMobile,
  faPlane,
  faPumpSoap,
  faShippingFast,
  faShoppingCart,
  faSkiing,
  faSmoking,
  faSnowflake,
  faSocks,
  faSubway,
  faTools,
  faTooth,
  faTshirt,
  faVenusMars,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

const options = [
  {
    value: <FontAwesomeIcon icon={faCar} />,
    label: <FontAwesomeIcon icon={faCar} />,
  },
  {
    value: <FontAwesomeIcon icon={faAppleAlt} />,
    label: <FontAwesomeIcon icon={faAppleAlt} />,
  },
  {
    value: <FontAwesomeIcon icon={faBook} />,
    label: <FontAwesomeIcon icon={faBook} />,
  },
  {
    value: <FontAwesomeIcon icon={faBabyCarriage} />,
    label: <FontAwesomeIcon icon={faBabyCarriage} />,
  },
  {
    value: <FontAwesomeIcon icon={faBicycle} />,
    label: <FontAwesomeIcon icon={faBicycle} />,
  },
  {
    value: <FontAwesomeIcon icon={faBeer} />,
    label: <FontAwesomeIcon icon={faBeer} />,
  },
  {
    value: <FontAwesomeIcon icon={faBirthdayCake} />,
    label: <FontAwesomeIcon icon={faBirthdayCake} />,
  },
  {
    value: <FontAwesomeIcon icon={faBusAlt} />,
    label: <FontAwesomeIcon icon={faBusAlt} />,
  },
  {
    value: <FontAwesomeIcon icon={faBuilding} />,
    label: <FontAwesomeIcon icon={faBuilding} />,
  },
  {
    value: <FontAwesomeIcon icon={faDrumstickBite} />,
    label: <FontAwesomeIcon icon={faDrumstickBite} />,
  },
  {
    value: <FontAwesomeIcon icon={faDog} />,
    label: <FontAwesomeIcon icon={faDog} />,
  },
  {
    value: <FontAwesomeIcon icon={faCat} />,
    label: <FontAwesomeIcon icon={faCat} />,
  },
  {
    value: <FontAwesomeIcon icon={faCarrot} />,
    label: <FontAwesomeIcon icon={faCarrot} />,
  },
  {
    value: <FontAwesomeIcon icon={faShoppingCart} />,
    label: <FontAwesomeIcon icon={faShoppingCart} />,
  },
  {
    value: <FontAwesomeIcon icon={faCcPaypal} />,
    label: <FontAwesomeIcon icon={faCcPaypal} />,
  },
  {
    value: <FontAwesomeIcon icon={faCcAmazonPay} />,
    label: <FontAwesomeIcon icon={faCcAmazonPay} />,
  },
  {
    value: <FontAwesomeIcon icon={faCcApplePay} />,
    label: <FontAwesomeIcon icon={faCcApplePay} />,
  },
  {
    value: <FontAwesomeIcon icon={faCcMastercard} />,
    label: <FontAwesomeIcon icon={faCcMastercard} />,
  },
  {
    value: <FontAwesomeIcon icon={faCcVisa} />,
    label: <FontAwesomeIcon icon={faCcVisa} />,
  },
  {
    value: <FontAwesomeIcon icon={faCoffee} />,
    label: <FontAwesomeIcon icon={faCoffee} />,
  },
  {
    value: <FontAwesomeIcon icon={faCocktail} />,
    label: <FontAwesomeIcon icon={faCocktail} />,
  },
  {
    value: <FontAwesomeIcon icon={faHeadSideMask} />,
    label: <FontAwesomeIcon icon={faHeadSideMask} />,
  },
  {
    value: <FontAwesomeIcon icon={faHiking} />,
    label: <FontAwesomeIcon icon={faHiking} />,
  },
  {
    value: <FontAwesomeIcon icon={faHamburger} />,
    label: <FontAwesomeIcon icon={faHamburger} />,
  },
  {
    value: <FontAwesomeIcon icon={faGooglePay} />,
    label: <FontAwesomeIcon icon={faGooglePay} />,
  },
  {
    value: <FontAwesomeIcon icon={faGifts} />,
    label: <FontAwesomeIcon icon={faGifts} />,
  },
  {
    value: <FontAwesomeIcon icon={faGasPump} />,
    label: <FontAwesomeIcon icon={faGasPump} />,
  },
  {
    value: <FontAwesomeIcon icon={faFirstAid} />,
    label: <FontAwesomeIcon icon={faFirstAid} />,
  },
  {
    value: <FontAwesomeIcon icon={faGem} />,
    label: <FontAwesomeIcon icon={faGem} />,
  },
  {
    value: <FontAwesomeIcon icon={faGuitar} />,
    label: <FontAwesomeIcon icon={faGuitar} />,
  },
  {
    value: <FontAwesomeIcon icon={faTools} />,
    label: <FontAwesomeIcon icon={faTools} />,
  },
  {
    value: <FontAwesomeIcon icon={faHanukiah} />,
    label: <FontAwesomeIcon icon={faHanukiah} />,
  },
  {
    value: <FontAwesomeIcon icon={faHospital} />,
    label: <FontAwesomeIcon icon={faHospital} />,
  },
  {
    value: <FontAwesomeIcon icon={faIceCream} />,
    label: <FontAwesomeIcon icon={faIceCream} />,
  },
  {
    value: <FontAwesomeIcon icon={faPlane} />,
    label: <FontAwesomeIcon icon={faPlane} />,
  },
  {
    value: <FontAwesomeIcon icon={faShippingFast} />,
    label: <FontAwesomeIcon icon={faShippingFast} />,
  },
  {
    value: <FontAwesomeIcon icon={faSkiing} />,
    label: <FontAwesomeIcon icon={faSkiing} />,
  },
  {
    value: <FontAwesomeIcon icon={faSnowflake} />,
    label: <FontAwesomeIcon icon={faSnowflake} />,
  },
  {
    value: <FontAwesomeIcon icon={faSmoking} />,
    label: <FontAwesomeIcon icon={faSmoking} />,
  },
  {
    value: <FontAwesomeIcon icon={faTooth} />,
    label: <FontAwesomeIcon icon={faTooth} />,
  },
  {
    value: <FontAwesomeIcon icon={faSocks} />,
    label: <FontAwesomeIcon icon={faSocks} />,
  },
  {
    value: <FontAwesomeIcon icon={faSubway} />,
    label: <FontAwesomeIcon icon={faSubway} />,
  },
  {
    value: <FontAwesomeIcon icon={faVenusMars} />,
    label: <FontAwesomeIcon icon={faVenusMars} />,
  },
  {
    value: <FontAwesomeIcon icon={faWheelchair} />,
    label: <FontAwesomeIcon icon={faWheelchair} />,
  },
  {
    value: <FontAwesomeIcon icon={faRedhat} />,
    label: <FontAwesomeIcon icon={faRedhat} />,
  },
  {
    value: <FontAwesomeIcon icon={faMobile} />,
    label: <FontAwesomeIcon icon={faMobile} />,
  },
  {
    value: <FontAwesomeIcon icon={faDice} />,
    label: <FontAwesomeIcon icon={faDice} />,
  },
  {
    value: <FontAwesomeIcon icon={faXbox} />,
    label: <FontAwesomeIcon icon={faXbox} />,
  },
  {
    value: <FontAwesomeIcon icon={faTshirt} />,
    label: <FontAwesomeIcon icon={faTshirt} />,
  },
  {
    value: <FontAwesomeIcon icon={faPumpSoap} />,
    label: <FontAwesomeIcon icon={faPumpSoap} />,
  },
  {
    value: <FontAwesomeIcon icon={faChalkboard} />,
    label: <FontAwesomeIcon icon={faChalkboard} />,
  },
];
export default class CategoryIcons extends React.Component {
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
        <label> Select icon </label>
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
