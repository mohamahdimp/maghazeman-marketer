import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Shops = ({ shopNames }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 33,
        cursor: "pointer",
      }}
    >
      <FontAwesomeIcon
        style={{ width: 75, height: 75, color: "#628f78" }}
        icon={faStore}
      />
      {shopNames}
    </div>
  );
};
export default Shops;
