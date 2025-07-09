import React from "react";
import "./AboutSection.css";
import teamImage from "../asstes/about-full.jpeg"; // replace with your actual image path

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="image-wrapper">
        <img
          src={teamImage}
          alt="Standard Arabia Team"
          className="team-image"
        />
      </div>
      <div className="text-section">
        <p className="about-label">ABOUT US</p>
        <h2 className="about-title">We Are Beyond</h2>
        <p className="about-description">
          Standard Arabia Inspection Co. Ltd has been established in 2015 at Al
          Jubail – Saudi Arabia. We specialize in Third-Party Inspection, Safety
          and Operator Training and Certification, Advance and conventional NDT
          services, Marine Services, Material testing and Calibration with
          divisions names as Standard Arabia Training Center and Standard Arabia
          testing and Calibration. We have branches in all major cities of the
          country/GCC including – Al Khobar, Riyadh, Jeddah, Yanbu, Turaif,
          Shuqaiq, Jizan, Tabuk & Bahrain.
        </p>
      </div>
      <div>
        <p className="about-description">
          By providing modern Inspection and training solutions, we seek to
          create an environment where everyone can equally reap the benefits of
          an efficient and secure workplace. Our services guarantee total
          compliance with international standards and affirms the mechanical
          capacity of the machinery. We offer high quality interactive training
          programs at customer sites, rigs and at our in-house training
          facilities at Al Khobar, Jubail and Manama.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
