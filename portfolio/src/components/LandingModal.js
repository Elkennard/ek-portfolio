import "./modal.css";

export default function LandingModal({ setLandingModalOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setLandingModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Dynamic Landing Page</h1>
        </div>
        <div className="body">
          <ul>
            <li className="modalList">
              A basic landing page.
            </li>
            <li className="modalList">You can edit your name and what you want to focus on for that day. </li>
            <li className="modalList">Background image and greeting changes depending on the time of day (morning, afternoon and evening).</li>
            <li className="modalList">I enjoyed this simple programme, it helped me understand how HTML, CSS and JavaScript can work together.</li>
            <li className="modalList">Tech Stack: HTML, CSS, JavaScript, Netlify.</li>
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://landing-page-ek.netlify.app/", "_blank");
            }}
            id="launchBtn"
          >
            Launch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/Elkennard/dynamic_landing_page", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
