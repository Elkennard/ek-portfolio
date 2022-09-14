import { NavLink } from "react-router-dom";

function Navbar() {
  return (
        <nav activeclassname="active">
          <NavLink className="inactive" to="/">
            Home |
          </NavLink>
          {"  "}
          <NavLink className="inactive" to="/Portfolio">
            Portfolio |
          </NavLink>{" "}
          <NavLink className="inactive" to="/About">
            About |
          </NavLink>{" "}
          <NavLink className="inactive" to="/Contact">
            Contact
          </NavLink>
        </nav>
  );
}

export default Navbar