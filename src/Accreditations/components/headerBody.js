import React from "react";
import "./headerBody.css";
import teamImage from "../assets/accrediation1.webp";

const HeaderBody = () => {
  return (
    <div className="accreditation-container">
      <div className="accreditation-content">
        <div className="accreditation-image-wrapper">
          <img
            src={teamImage}
            alt="Standard Arabia Team"
            className="accreditation-image"
          />
        </div>
        <div className="text-section">
          <h2 className="accreditation-title">Accreditation</h2>
          <p className="accreditation-description">
            Standard Arabia Inspection Co. Ltd has been established in 2015 at Al
            Jubail – Saudi Arabia. We specialize in Third-Party Inspection, Safety
            and Operator Training and Certification, Advance and conventional NDT
            services, Marine Services, Material testing and Calibration with
            divisions named as Standard Arabia Training Center and Standard Arabia
            Testing and Calibration. We have branches in all major cities of the
            country/GCC including – Al Khobar, Riyadh, Jeddah, Yanbu, Turaif,
            Shuqaiq, Jizan, Tabuk & Bahrain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
