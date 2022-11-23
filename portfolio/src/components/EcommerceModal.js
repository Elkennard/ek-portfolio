import "./modal.css";

export default function EcommerceModal({ setEcommerceModalOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setEcommerceModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Ecommerce</h1>
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
              window.open("https://ecommerce-ek.vercel.app/", "_blank");
            }}
            id="launchBtn"
          >
            Launch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/Elkennard/ecommerce",
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
