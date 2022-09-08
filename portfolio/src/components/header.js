import Navbar from "./navbar";
import LogoImg from '../Assets/EKLogoSide.png'

function Header() {
  return (
    <header>
      <img src={LogoImg} alt="Emma Kennard Logo" className="logo" />
      <Navbar />
    </header>
  );
}

export default Header;
