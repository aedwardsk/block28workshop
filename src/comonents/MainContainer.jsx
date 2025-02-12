import { Routes, Route } from "react-router";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Green from "./green";
import Indigo from "./indigo";
import Orange from "./Orange";
import Violet from "./Violet";
import Yellow from "./Yellow";

const MainContainer = () => {
  return (
    <div id='main-section'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/red' element={<Red />} />
        <Route path='/orange' element={<Orange />} />
        <Route path='/yellow' element={<Yellow />} />
        <Route path='/green' element={<Green />} />
        <Route path='/blue' element={<Blue />} />
        <Route path='/indigo' element={<Indigo />} />
        <Route path='/violet' element={<Violet />} />
      </Routes>
    </div>
  );
};
export default MainContainer;
