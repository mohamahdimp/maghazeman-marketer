import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "./Categouries.css";
const Categouries = ({ Cat }) => {
  return (
    <div className="categouries">
      <FontAwesomeIcon
        style={{ marginRight: 3, color: "green" }}
        icon={faSortDown}
      />
      <span>{Cat}</span>
    </div>
  );
};
export default Categouries;
