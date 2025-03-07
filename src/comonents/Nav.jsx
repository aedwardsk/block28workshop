import { Link } from "react-router";

const Nav = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/red'>Red</Link>
      <Link to='/orange'>Orange</Link>
      <Link to='/yellow'>Yellow</Link>
      <Link to='/green'>Green</Link>
      <Link to='/blue'>Blue</Link>
      <Link to='/indigo'>Indigo</Link>
      <Link to='/violet'>Violet</Link>
    </>
  );
};

export default Nav;
