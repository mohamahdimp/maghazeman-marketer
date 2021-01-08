import React from "react";
import RightMenu from "./Right-menu/RightMenu";
import "./MainContainer.css";
import LeftMenu from "./Left-menu/LeftMenu";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <RightMenu />
      <LeftMenu />
    </div>
  );
};

export default MainContainer;
