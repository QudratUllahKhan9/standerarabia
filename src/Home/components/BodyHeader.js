import React, { useState } from "react";
import slider3 from "../assets/slider3.webp";
import slider4 from "../assets/slider4.webp";
import slider1 from "../assets/Slider1.webp";
import slider2 from "../assets/image2.webp";
import { useNavigate } from 'react-router-dom';

import "./BodyHeader.css";

const slides = [
  {
    image: slider1,
    text: "100's of International Accredited Training Programs and Short Course",

  },
 
  {
    image: slider2,
    text: "Experience Excellence with Our Comprehensive Inspection Services",
  },
   {
    image: slider3,
    text: "Standard Arabia is IPAF Approved Training Center & Full Member of LEEA with LEEA Approved Inspectors",
                                           
  },
 
   {
    image: slider4,
    text: "Experience Excellence with Our Comprehensive Inspection Services",
  },
];

const BodyHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const [slideDirection, setSlideDirection] = useState("next"); // or "prev"

  const navigate = useNavigate();


const handlePrev = () => {
  setSlideDirection("prev");
  setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
};

const handleNext = () => {
  setSlideDirection("next");
  setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
};


  return (
    <div>
    <div className={`hero-content ${currentIndex % 2 !== 0 ? "reverse" : ""}`}>
      <div className="hero-text">
        <div style={{width:550,textAlign:'start',marginTop:'30%',}}>
        <h1>{slides[currentIndex].text}</h1>
        </div>
        <div className="hero-buttons">
          <button className="btn read-more" onClick={() => navigate('/About')}>Read More ↗</button>
          <button className="btn contact-us"  onClick={() => navigate('/contact')}>Contact Us ↗</button>
        </div>
      
      </div>
      

      <div className="hero-single-image">
       <img
  src={slides[currentIndex].image}
  alt="Hero Visual"
  className={`hero-img-single ${slideDirection === "next" ? "slide-in-left" : "slide-in-right"}`}
/>

      </div>
      
    </div>
      <div className="arrow-buttons">
          <button className="arrow-btn-home left-arrow" onClick={handlePrev}>←</button>
          <button className="arrow-btn-home right-arrow" onClick={handleNext}>→</button>
        </div>
    </div>
  );
};


export default BodyHeader;
