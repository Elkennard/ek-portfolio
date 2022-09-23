import "./modal.css";

export default function MediMateModal({ setModalOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Medi-Mate</h1>
        </div>
        <div className="body">
          <ul>
              <li className="modalList">A meditation app that combined a
              Tamagotchi&reg; style pet to help motivate users to build the habit of
              meditation.
            </li>
            <li className="modalList">
              A month long project set by the School of Code in a team of four. </li>
            <li className="modalList">
              Designed for mobile first using react-native.
            </li>
            <li className="modalList">
              I primarily
              focused on the front-end style, functionality and project management.
            </li>
            <li className="modalList">
              Front-end tech stack: react, react-native, CSS, JS, Expo,
              Firebase, Babel, Jest, netlify.
            </li>
            <li className="modalList">
              Back-end tech stack: node.js, express, PostgreSQL, Heroku.
            </li>
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://medi-mate.netlify.app/", "_blank");
            }}
            id="launchBtn"
          >
            Launch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/SchoolOfCode/medi-mate-front-end",
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
