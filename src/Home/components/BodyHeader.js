
import slider3 from '../assets/slider3.webp'

import React from "react";
import "./BodyHeader.css";

const BodyHeader = () => {
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
      </div>
      <div className="hero-single-image">
        <img
          src={slider3}
          alt="Hero Visual"
          className="hero-img-single"
        />
      </div>
    </div>
  );
};

export default BodyHeader;

