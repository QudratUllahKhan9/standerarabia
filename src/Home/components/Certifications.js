import React from "react";
import "./Certifications.css";
import cert1 from "../assets/1.webp";
// Replace with your actual image paths

const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="certifications-header">
        <p className="subtitle">THE VALIDATION OF OUR QUALIFICATIONS</p>
        <h2 className="title">Our Certifications</h2>
      </div>
      <div className="certificates-container">
        {[cert1, cert1, cert1, cert1,cert1,cert1,cert1].map((img, index) => (
          <div className="certificate-card" key={index}>
            <img src={img} alt={`Certificate ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
