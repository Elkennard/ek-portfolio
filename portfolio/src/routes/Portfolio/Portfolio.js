import "./Portfolio.css";
import { useState } from "react";
import MediMateModal from "../../components/MediMateModal";
import BreatheWithMeModal from "../../components/BreatheWithMeModal";
import Template from "../../components/Template";


export default function Portfolio() {
  const [mediModalOpen, setMediModalOpen] = useState(false)
  const [breatheModalOpen, setBreatheModalOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const images = {
    mediMate: require("../../Assets/mediMate.png"),
    breathe: require("../../Assets/breatheWithMe.png"),
    week: require("../../Assets/WeekLongProject.png"),
    commerce: require("../../Assets/ECommerceSite.png"),
    weather: require("../../Assets/WeatherApp.png"),
    dynamic: require('../../Assets/DynamicLandingPage.png'),
  }

  return (
    <main className="Portfolio">
      <h3 className="portfolio_header">A few projects - Under construction</h3>
      <div className="portfolio_grid">
      {/* MEDI-MATE */}
      <div
          className="portfolio_item"
          onClick={() => {
          setMediModalOpen(true);
        }}
        >
          <img
            className="portfolio_img"
            src={images.mediMate}
            alt="Month long project, Medi-Mate"
          />
        </div>

{/* BREATHE WITH ME */}
        <div
          className="portfolio_item"
          onClick={() => {
          setBreatheModalOpen(true);
        }}
        >
          <img
            className="portfolio_img"
            src={images.breathe}
            alt="breathe with me app"
          />
        </div>

{/* WEEK LONG PROJECT */}
        <div
          className="portfolio_item"
          onClick={() => {
          setModalOpen(true);
        }}
        >
          <img
            className="portfolio_img"
            src={images.week}
            alt="week long project"
          />
        </div>

        {/* E-COMMERCE SITE */}
        <div
          className="portfolio_item"
          onClick={() => {
          setModalOpen(true);
        }}
        >
          <img
            className="portfolio_img"
            src={images.commerce}
            alt="e-commerce site"
          />
        </div>

{/* WEATHER APP */}
<div
          className="portfolio_item"
          onClick={() => {
          setModalOpen(true);
        }}
        >
          <img
            className="portfolio_img"
            src={images.weather}
            alt="weather app"
          />
        </div>

        {/* DYNAMIC LANDING PAGE */}
        <div
          className="portfolio_item"
          onClick={() => {
          setModalOpen(true);
        }}
        >
          <img
            className="portfolio_img"
            src={images.dynamic}
            alt="dynamic landing page"
          />
        </div>

      </div>

      {breatheModalOpen && <BreatheWithMeModal setBreatheModalOpen={setBreatheModalOpen}/>}
      {mediModalOpen && <MediMateModal setMediModalOpen={setMediModalOpen}/>}
      {modalOpen && <Template setModalOpen={setModalOpen}/>}
    </main>
  );
}
