import "./Contact.css";

export default function Contact() {

  const images = {
    linkedIn: require("../../Assets/LinkedIn.png"),
    gitHub: require("../../Assets/GitHub.png")
  };
  return (
    <div className="Contact">
      <form
        method="POST"
        name="contactform"
        className="contactForm"
        action="/confirmation-page"
      >
        <input type="hidden" name="form-name" value="contactForm" />

        <input type="text" name="name" placeholder="Name"/>

        <input type="email" name="email" placeholder="Email" />

        <textarea name="message" placeholder="Message"></textarea>

        <button type="submit">Submit</button>
      </form>
      <div className="logos">
      <a href="https://www.linkedin.com/in/emma-kennard/" target="_blank" rel="noreferrer">
      <img src={images.linkedIn} alt="LinkedIn Link" className="linkedIn"></img></a>
      <a href="https://github.com/Elkennard" target="_blank" rel="noreferrer"><img src={images.gitHub} alt="GitHub Logo" className="gitHub Link"></img></a>
      </div>
    </div>
  );
}
