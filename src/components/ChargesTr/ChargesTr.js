import React from "react";


const ChargesTr = ({props}) => {
  return (
    <tr>
      <td>{props.category}</td>
      <td>{props.description}</td>
      <td>{props.date}</td>
      <td>{props.money}</td>
      <td>{props.action}</td>
    </tr>
  );
};

export default ChargesTr;
