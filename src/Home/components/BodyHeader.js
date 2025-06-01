import React, { useState } from "react";
import slider3 from "../assets/slider3.webp";
import slider4 from "../assets/slider4.webp";
import slider1 from "../assets/Slider1.webp";
import slider2 from "../assets/image2.webp";

import "./BodyHeader.css";

const BodyHeader = () => {
  const images = [slider1,slider3, slider4,slider2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>
          Standard Arabia is IPAF Approved Training Center & Full Member of LEEA
          with LEEA Approved Inspectors
        </h1>

        <div className="hero-buttons">
          <button className="btn read-more">Read More ↗</button>
          <button className="btn contact-us">Contact Us ↗</button>
        </div>

        <div className="arrow-buttons">
          <button className="arrow-btn left-arrow" onClick={handlePrev}>←</button>
          <button className="arrow-btn right-arrow" onClick={handleNext}>→</button>
        </div>
      </div>

      <div className="hero-single-image">
        <img
          src={images[currentIndex]}
          alt="Hero Visual"
          className="hero-img-single"
        />
      </div>
    </div>
  );
};

export default BodyHeader;
