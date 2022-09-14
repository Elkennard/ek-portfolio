const images = {
  linkedIn: require("../Assets/LinkedIn.png"),
  gitHub: require("../Assets/GitHub.png"),
  cvLogo: require("../Assets/cvLogo.png"),
};

function Footer() {
  return (
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
      <a href={require("../Assets/cv.pdf")} target="_blank" rel="noreferrer">
        <img src={images.cvLogo} alt="Link to CV" className="cvAP"></img>
      </a>
    </footer>
  );
}

export default Footer;
