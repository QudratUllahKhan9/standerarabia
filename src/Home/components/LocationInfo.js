import React from "react";
import "./LocationInfo.css";
import mapImage from "../assets/map.webp"; // Replace with your actual image path


import { useNavigate } from 'react-router-dom';

const LocationInfo = () => {
  
  const navigate = useNavigate();

  return (
    <div className="main-conatiner-loaction">

    <div className="location-section">
      
      <div className="map-container">
        <p className="heading_Text">Our Presence</p>

        <img src={mapImage} alt="Branch Map" className="map-image" />
      </div>
      <div className="text-container">
        <div className="text-style">
        <p className="heading_About">ABOUT US</p>

        <p className="heading_Quality">“Quality Matters”</p>
        <p className="description-Quality">
          Standard Arabia Inspection Co. Ltd has been established at Al Jubail –
          Saudi Arabia as a Third–Party Inspection, Training, Material testing,
          NDT & certification provider with branches at Riyadh, Jeddah, Yanbu,
          Jazan, Shuqaiq, Tabuk, Turaif, NEOM, At Taif, Dammam, Jubail &
          Bahrain.
        </p>
        <p className="description-Quality">
          By providing modern Inspection and training solutions, Standard Arabia
          seeks to create an environment where everyone can equally reap the
          benefits of an efficient and secure workplace.
        </p>
        <button className="read-more-btn"onClick={() => navigate('/About')}>
          Read More <span className="arrow">↗</span>
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LocationInfo;
