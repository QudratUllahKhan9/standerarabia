import React from "react";
import "./Certifications.css";
import cert1 from "../assets/1.webp";
import cert2 from "../assets/2.webp";
import cert3 from "../assets/3.webp";
import cert4 from "../assets/4.webp";
import cert5 from '../assets/11.webp'
import cert6 from '../assets/12.webp'
import cert7 from '../assets/13.webp'
import cert8 from '../assets/14.webp'

// Replace with your actual image paths

const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="certifications-header">
        <p className="subtitle">THE VALIDATION OF OUR QUALIFICATIONS</p>
        <h2 className="title">Our Certifications</h2>
      </div>
      <div className="certificates-container">
        {[cert1, cert2, cert3, cert4].map((img, index) => (
          <div className="certificate-card" key={index}>
            <img src={img} alt={`Certificate ${index + 1}`} />
          </div>
        ))}
        
      </div>
      <div className="certificates-container">
        {[cert5, cert6, cert7, cert8].map((img, index) => (
          <div className="certificate-card" key={index}>
            <img src={img} alt={`Certificate ${index + 1}`} />
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Certifications;
