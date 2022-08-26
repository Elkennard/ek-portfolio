import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {

  const images = {
    navElipse: require("./Assets/navElipse.png"),
    leftElipse: require("./Assets/leftElipse.png"),
    rightElipse: require("./Assets/rightElipse.png"),
  };

  return (
    <div className="App">
      <div className="nav">
        <nav activeclassname="active">
          <NavLink className="inactive" to="/">
            Home |
          </NavLink>
          {"  "}
          <NavLink className="inactive" to="/Portfolio">
            Portfolio |
          </NavLink>{" "}
          <NavLink className="inactive" to="/Career">
            Career |
          </NavLink>{" "}
          <NavLink className="inactive" to="/Contact">
            Contact
          </NavLink>
        </nav>
        <Outlet />
      </div>
      <h1>Emma Kennard</h1>
      <h2>Junior Developer</h2>
      <img src={images.navElipse} alt="navigation elipse" className="navElipse"/>
      <img src={images.leftElipse} alt="left elipse" className="leftElipse"/>
      <img src={images.rightElipse} alt="right elipse" className="rightElipse"/>
      
    </div>
  );
}

export default App;
