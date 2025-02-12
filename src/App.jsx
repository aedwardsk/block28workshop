import { useState } from "react";
// import { Routes, Route } from "react-router";
import "./App.css";
// import { Routes, Route } from "react-router";
// import Blue from "./comonents/Blue";
// import Red from "./comonents/Red";
// import Home from "./comonents/Home";
import Nav from "./comonents/Nav";
import MainContainer from "./comonents/MainContainer";

function App() {
  return (
    <>
      <div id='container'>
        <h1>Hello React Router!</h1>
        <Nav />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
