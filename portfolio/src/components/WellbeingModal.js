import "./modal.css";

export default function WellbeingModal({ setWellbeingModalOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setWellbeingModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Wellbeing Toolkit</h1>
        </div>
        <div className="body">
          <ul>
              <li className="modalList">Template
            </li>
            <li className="modalList">
              Template </li>
            <li className="modalList">
              Template
            </li>
            <li className="modalList">
              Template
            </li>
            <li className="modalList">
              Template
            </li>
            <li className="modalList">
              Template
            </li>
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://wellbeing-toolkit.netlify.app/", "_blank");
            }}
            id="launchBtn"
          >
            Launch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/Elkennard/w9_frontend-project-power-coders-fe",
                "_blank"
              );
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
