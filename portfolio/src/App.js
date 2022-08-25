import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="nav">
      <div className="navElipse"></div>
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
      <h1>Emma Kennard</h1>
      <h2>Junior Developer</h2>
      <div className="leftElipse"></div>
      <div className="rightElipse"></div>
    </div>
  );
}

export default App;
