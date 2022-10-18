import "./modal.css";

export default function Template({ setModalOpen }) {
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
          <h1>Template - Under Construction</h1>
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
              window.open("https://www.emmakennard.com/", "_blank");
            }}
            id="launchBtn"
          >
            Launch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/Elkennard",
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
