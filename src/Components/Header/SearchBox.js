import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBox.css";

const SearchBox = ({ style }) => {
  return (
    <div style={{ direction: "ltr" }}>
      <div className="searchBox">
        <button className="search-Button">
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              opacity: 0.15,
              height: 25,
              padding: 4,
              width: 30,
            }}
          />
        </button>
        <input className="searchBox-input" type="text" placeholder="Search" />
      </div>
    </div>
  );
};
export default SearchBox;
