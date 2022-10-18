import "./modal.css";

export default function BreatheWithMeModal({ setBreatheModalOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setBreatheModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Breathe With Me</h1>
        </div>
        <div className="body">
          <ul>
            <li className="modalList">
              A breathing app to help people with asthma and anxiety.
            </li>
            <li className="modalList">
              In the previous Medi-Mate project, we incorporated pulsing rings
              instead of the chracter breathing, I wanted to bring the character
              to life.{" "}
            </li>
            <li className="modalList">
              I also added the ability to choose a hold breath option and different
              breathe in and out times.
            </li>
            <li className="modalList">
              I designed the whole app, including the animated character, using a
              sprite-sheet I had created with Piskel.
            </li>
            <li className="modalList">
              Tech stack: HTML, CSS, JS, sprite-sheet, Piskel, Netlify.
            </li>
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://breathe-with-me.netlify.app/", "_blank");
            }}
            id="launchBtn"
          >
            Launch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/Elkennard/Breathing-Monkey",
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
