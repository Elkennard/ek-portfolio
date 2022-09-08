import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  const images = {
    navPaint: require("./Assets/paintStripe.png"),
    logo: require("./Assets/EKLogoSide.png"),
    linkedIn: require("./Assets/LinkedIn.png"),
    gitHub: require("./Assets/GitHub.png"),
    cvLogo: require("./Assets/cvLogo.png"),
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
      <img src={images.logo} alt="Emma Kennard Logo" className="logo" />
      <img
        src={images.navPaint}
        alt="navigation decoration"
        className="navPaint"
      />
      <footer className="footerAP">
        <a
          href="https://www.linkedin.com/in/emma-kennard/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={images.linkedIn}
            alt="Link to LinkedIn"
            className="linkedInAP"
          ></img>
        </a>
        <a href="https://github.com/Elkennard" target="_blank" rel="noreferrer">
          <img
            src={images.gitHub}
            alt="Link to GitHub"
            className="gitHubAP"
          ></img>
        </a>
        <a href={require("./Assets/cv.pdf")} target="_blank" rel="noreferrer">
          <img
            src={images.cvLogo}
            alt="Link to CV"
            className="cvAP"
          ></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
