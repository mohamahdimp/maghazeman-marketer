import {
  faCog,
  faEnvelope,
  faPhone,
  faSearch,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./LeftMenu.css";
import Shops from "./Shops";

const LeftMenu = () => {
  /**STATES */
  const [shopNames] = useState([
    "Magh1",
    "Magh2",
    "Magh3",
    "Magh4",
    "Magh5",
    "Magh6",
    "Magh7",
    "Magh8",
    "Magh9",
    "Magh10",
    "Magh11",
    "Magh12",
  ]);
  return (
    <div className="leftMenu">
      <div style={{ display: "flex" }}>
        <button className="leftMenu--search-button">
          <FontAwesomeIcon
            style={{ marginLeft: 6 }}
            icon={faSearch}
            style={{
              opacity: 0.15,
              height: 25,
              padding: 4,
              width: 30,
            }}
          />
        </button>
        <input
          class="leftMenu--search-input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="leftMenu--container">
        <div className="leftMenu--shopsContainer">
          {shopNames.map((item) => (
            <Shops shopNames={item} />
          ))}
        </div>
        <div className="leftMenu--robbin">
          <img
            className="leftMenu--profilepic"
            src="https://lledogrupo.com/wp-content/uploads/2018/04/user-img-1.png"
            alt="user"
          />
          <div className="leftMenu--information">
            <div className="leftMenu--userInfo">
              <h4>محمدمهدی ملک‌پور</h4>
              <small>بازاریاب</small>
            </div>
            <div className="leftMenu--settings">
              <div className="leftMenu--userSettings">
                <FontAwesomeIcon style={{ marginLeft: 6 }} icon={faEnvelope} />
                <span className="infoSpan">Test@gmail.com</span>
              </div>
              <div className="leftMenu--userSettings">
                <FontAwesomeIcon style={{ marginLeft: 6 }} icon={faCog} />
                <span className="infoSpan">ویرایش‌اطلاعات</span>
              </div>
              <div className="leftMenu--userSettings">
                <FontAwesomeIcon style={{ marginLeft: 6 }} icon={faPhone} />
                <span className="infoSpan">09910423988</span>
              </div>
              <div className="leftMenu--userSettings">
                <FontAwesomeIcon style={{ marginLeft: 6 }} icon={faWallet} />
                <span className="infoSpan">کیف‌پول</span>
              </div>
            </div>
          </div>
          <div className="leftMenu--arrowUp"></div>
        </div>
      </div>
    </div>
  );
};
export default LeftMenu;
