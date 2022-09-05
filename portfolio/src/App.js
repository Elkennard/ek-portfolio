import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {

  const images = {
    navPaint: require("./Assets/paintStripe.png"),
    logo: require("./Assets/EKLogoSide.png"),
    largePaint: require("./Assets/LargePaint.png"),
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
      <img src={images.logo} alt="Emma Kennard Logo" className="logo"/>
      <img src={images.navPaint} alt="navigation decoration" className="navPaint"/>
      <img
            src={images.largePaint}
            alt="Paint Splash"
            className="largePaint"
          />
      
    </div>
  );
}

export default App;
