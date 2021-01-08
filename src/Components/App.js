import React from "react";
import Header from "./Header/Header";
import "./App.css";
import SubHeader from "./Sub-header/SubHeader";
import MainContainer from "./MainContainer/MainContainer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <SubHeader />
      <MainContainer />
    </div>
  );
};

export default App;
