import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact_wrapper">
      <div className="contact_text">
            <h3 className="contact_header">Drop me a line</h3>
      <p className="contact_content">
        I'd love to hear from you. Use one of the social media links or complete
        the form and I'll get back to you.
      </p>
      </div>
        <form
          method="POST"
          name="contactform"
          className="contact"
          action="/confirmation-page"
        >
          <input type="hidden" name="form-name" value="contactForm" />

          <input
            type="text"
            className="contact_name"
            name="name"
            placeholder="Name"
          />

          <input
            type="email"
            className="contact_email"
            name="email"
            placeholder="Email"
          />

          <textarea
            className="contact_message"
            name="message"
            placeholder="Message"
          ></textarea>

          <button type="submit" className="contact_button">
            Submit
          </button>
        </form>
    </div>
  );
}
