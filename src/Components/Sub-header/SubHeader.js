import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SubHeader.css";
import Categouries from "./Categouries";

const SubHeader = () => {
  /** CONSTS */
  const [Cat] = useState([
    "دیجیتال",
    "ابزار یراق",
    "بهداشت و سلامت",
    "خانه و آشپزخانه",
    "ورزش",
  ]);
  ////// */

  /**/ return (
    <div className="subHeader">
      <div>
        <span style={{ marginRight: 10, color: "green" }}>
          دسته‌بندی کالاها
        </span>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="subHeader--categouries">
        {Cat.map((item) => (
          <Categouries Cat={item} />
        ))}
      </div>
    </div>
  );
};
export default SubHeader;
