import React from "react";
import {
  faHome,
  faNetworkWired,
  faBullHorn,
  faCoins,
  faCalendarAlt,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuItems.css";

const MenuItems = ({ title, icon }) => {
  return (
    <div className="menuItem">
      <FontAwesomeIcon
        icon={faHome}
        style={{ marginLeft: 5, color: "green" }}
      />
      <span>{title}</span>
    </div>
  );
};
export default MenuItems;
