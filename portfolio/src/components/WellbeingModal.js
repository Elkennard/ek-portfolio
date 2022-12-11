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
              <li className="modalList">A Wellbeing app for School of Code students to aid in their mindfulness while on the course.
            </li>
            <li className="modalList">
              In a group of five, we had to research, design and build the whole app within 5 days. </li>
            <li className="modalList">
              As well as the design and concept, I mainly focussed on the carousel element along with the styling and project management.
            </li>
            <li className="modalList">
              There is a rolling carousel of topics to choose from, with further reading resources. A five-minute timer to help students to take a break and a wellbeing check-in form that feeds back to the students' coach.
            </li>
            <li className="modalList">
              Front-end tech stack: React, JS, HTML, CSS, Bootstrap, Cypress, Netlify.
            </li>
            <li className="modalList">
              Back-end tech stack: Node, Express, PostgreSQL, Jest, Supertest, ElephantSQL, Render.
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
