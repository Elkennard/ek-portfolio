import "./Portfolio.css";
import MediMateModal from "../../components/MediMateModal";
import { useState } from "react";

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false)

  const images = {
    mediMate: require("../../Assets/mediMate.png"),
  }

  return (
    <main className="Portfolio">
      <h3 className="portfolio_header">A few projects - Under construction</h3>
      <div className="portfolio_grid">
      <div
          className="portfolio_item"
          onClick={() => {
          setModalOpen(true);
        }}
        >
          <img
            className="portfolio_img"
            src={images.mediMate}
            alt="Month long project, Medi-Mate"
          />
        </div>

        <div
          className="portfolio_item"
          onClick={() => {
          setModalOpen(true);
        }}
        >
          <img
            className="portfolio_img"
            src={images.mediMate}
            alt="Month long project, Medi-Mate"
          />
        </div>

        <div
          className="portfolio_item"
          onClick={() => {
          setModalOpen(true);
        }}
        >
          <img
            className="portfolio_img"
            src={images.mediMate}
            alt="Month long project, Medi-Mate"
          />
        </div>
      </div>

      {modalOpen && <MediMateModal setModalOpen={setModalOpen}/>}
    </main>
  );
}
