import "./modal.css";

export default function WeatherModal({ setWeatherModalOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setWeatherModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>UK Weather App</h1>
        </div>
        <div className="body">
          <ul>
              <li className="modalList">A simple UK weather app.
            </li>
            <li className="modalList">
              Enter any UK town or city to find out the currant weather. </li>
            <li className="modalList">
              One of the first apps I built to practice building in react and utilising useState.
            </li>
            <li className="modalList">
              This also gave me the chance to try Axios with an API, instead of a standard fetch request.
            </li>
            <li className="modalList">
              I reconfigured the CSS, so that the site can be used on both PC and phones.
            </li>
            <li className="modalList">
              Tech stack: Axios, react, CSS, Netlify.
            </li>
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://ukweather.netlify.app/", "_blank");
            }}
            id="launchBtn"
          >
            Launch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/Elkennard/weather-app-react",
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
