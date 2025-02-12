import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router";

function DropdownItems() {
  return (
    <DropdownButton id='dropdown-item-button' title='Menu'>
      <Dropdown.Item as='button'>
        <Link to='/'>Home</Link>
      </Dropdown.Item>
      <Dropdown.Item as='button'>
        <Link to='/red'>Red</Link>
      </Dropdown.Item>
      <Dropdown.Item as='button'>
        <Link to='/blue'>Blue</Link>
      </Dropdown.Item>
      <Dropdown.Item as='button'>
        <Link to='/green'>Green</Link>
      </Dropdown.Item>
      <Dropdown.Item as='button'>
        <Link to='/orange'>Orange</Link>
      </Dropdown.Item>
      <Dropdown.Item as='button'>
        <Link to='/yellow'>Yellow</Link>
      </Dropdown.Item>
      <Dropdown.Item as='button'>
        <Link to='/indigo'>Indigo</Link>
      </Dropdown.Item>
      <Dropdown.Item as='button'>
        <Link to='/violet'>Violet</Link>
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownItems;
