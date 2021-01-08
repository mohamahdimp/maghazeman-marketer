import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "./RightMenu.css";
const RightMenu = () => {
  const [menuItems] = useState([
    { title: "صفحه اصلی", icon: "faHome" },
    { title: "زیرمجموعه‌ها", icon: "faNetworkWired" },
    { title: "چت", icon: "faBullHorn" },
    { title: "امور مالی", icon: "faCoins" },
    { title: "تقویم کاری", icon: "faCalendarAlt" },
    { title: "فیلم آموزشی", icon: "faVideo" },
  ]);

  return (
    <div className="rightMenu">
      {menuItems.map((item) => (
        <MenuItems title={item.title} icon={item.icon} />
      ))}
      <div className="rightMenuMails">
        <h5>نامه‌ها</h5>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
};

export default RightMenu;
