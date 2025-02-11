import { useState } from "react";
// import { Routes, Route } from "react-router";
import "./App.css";
import { Link, Routes, Route } from "react-router";
import Blue from "./comonents/Blue";
import Red from "./comonents/Red";
import Home from "./comonents/Home";

function App() {
  return (
    <>
      <div id='container'>
        <h1>Hello React Router!</h1>
        <div id='navbar'>
          <Link to='/'>Home</Link>
          <Link to='/blue'>Blue</Link>
          <Link to='/red'>Red</Link>
        </div>
        <div id='main-section'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blue' element={<Blue />} />
            <Route path='/red' element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
