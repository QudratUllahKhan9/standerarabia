import React from "react";
import "./SafetySection.css";
import sampleImage from "../assets/safety1.webp"; // Replace with actual image path

const SafetySection = () => {
  return (
    <section className="safety-section">
      <div className="safety-container">
        <div className="safety-image">
          <img src={sampleImage} alt="Workers" />
        </div>
        <div className="safety-content">
          <h2>To Promote an Effective Safety Culture</h2>
          <p>
            Standard Arabia inspections comply with quality, safety and statutory requirements while
            ensuring optimum performance throughout the life cycle of your assets and equipment.
          </p>
          <div className="safety-buttons">
            <button className="safety-btn">
              <span className="play-icon">▶</span> OVERVIEW
            </button>
            <button className="safety-btn">
              <span className="play-icon">▶</span> SAFETY AWARENESS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
