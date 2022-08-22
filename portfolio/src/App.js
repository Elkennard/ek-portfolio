import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1>Emma Kennard</h1>
        <h2>Junior Developer</h2>
        <nav activeclassname="active">
          <NavLink className="inactive" to="/">
            Home   |
          </NavLink>
          {"  "}
          <NavLink className="inactive" to="/Portfolio">
            Portfolio   |
          </NavLink>{" "}
          <NavLink className="inactive" to="/Career">
            Career   |
          </NavLink>{" "}
          <NavLink className="inactive" to="/Contact">
            Contact
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
