import React from 'react';
import './AboutSection.css';
import teamImage from '../asstes/about-full.jpeg'; // replace with your actual image path

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="image-wrapper">
        <img src={teamImage} alt="Standard Arabia Team" className="team-image" />
      </div>
      <div className="text-section">
        <p className="about-label">ABOUT US</p>
        <h2 className="about-title">We Are Beyond</h2>
        <p className="about-description">
          Standard Arabia Inspection Co. Ltd has been established in 2015 at Al Jubail – Saudi Arabia. We specialize in
          Third-Party Inspection, Safety and Operator Training and Certification, Advance and conventional NDT services,
          Marine Services, Material testing and Calibration with divisions names as Standard Arabia Training Center and
          Standard Arabia testing and Calibration. We have branches in all major cities of the country/GCC including – Al
          Khobar, Riyadh, Jeddah, Yanbu, Turaif, Shuqaiq, Jizan, Tabuk & Bahrain.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
