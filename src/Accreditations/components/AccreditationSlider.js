import React, { useState } from "react";
import "./AccreditationSlider.css";
import img1 from "../assets/acceretion-18.webp";
import img2 from "../assets/acceretion-18.webp";
import img3 from "../assets/acceretion-18.webp";
import img4 from "../assets/acceretion-18.webp";


const AccreditationSlider = () => {
  const logos = [img1, img2, img3, img4];
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 4;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % logos.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      (prev - 1 + logos.length) % logos.length
    );
  };

  const getVisibleLogos = () => {
    return logos
      .slice(startIndex, startIndex + visibleCount)
      .concat(
        startIndex + visibleCount > logos.length
          ? logos.slice(0, (startIndex + visibleCount) % logos.length)
          : []
      );
  };

  return (
    <div className="accreditation-container">
      <button className="arrow-btn" onClick={prevSlide}>←</button>

      <div className="logo-row">
        {getVisibleLogos().map((logo, index) => (
          <div className="logo-box" key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>

      <button className="arrow-btn" onClick={nextSlide}>→</button>
    </div>
  );
};

export default AccreditationSlider;
