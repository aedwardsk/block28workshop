import { useState } from "react";
// import { Routes, Route } from "react-router";
import "./App.css";
// import { Routes, Route } from "react-router";
// import Blue from "./comonents/Blue";
// import Red from "./comonents/Red";
// import Home from "./comonents/Home";
import Nav from "./comonents/Nav";
import MainContainer from "./comonents/MainContainer";
import { Dropdown } from "bootstrap";
import DropdownItems from "./comonents/Dropdown";

function App() {
  return (
    <>
      <div id='container'>
        <h1>Hello React Router!</h1>
        <div id='navbar'>
          <Nav />
        </div>
        <DropdownItems />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
