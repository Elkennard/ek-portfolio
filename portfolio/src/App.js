import "./App.css";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

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
      <Header />
      <Outlet />
      {/* <img
        src={images.navPaint}
        alt="navigation decoration"
        className="navPaint"
      /> */}
      <Footer />
    </div>
  );
}

export default App;
