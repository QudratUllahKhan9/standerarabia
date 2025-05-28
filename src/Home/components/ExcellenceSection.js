import React from "react";
import "./ExcellenceSection.css";

const ExcellenceSection = () => {
  return (
    <section className="excellence-section">
      <div className="container">
        <div className="left-content">
          <h5 className="subheading">Trustworthy & Reliable</h5>
          <h1 className="heading">
            Counting on Excellence, <br /> Everywhere We Serve
          </h1>
          <p className="description">
            Trusted Across Saudi Arabia and Beyond for Inspection, Training, and Certification Services!
          </p>
          <div className="cta">
            <button className="contact-btn">Contact Now</button>
            <div className="phone">
              <span className="icon">🔗</span>
              <span>+966-13-3670801</span>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div className="stat">
            <span className="stat-icon">🔧</span>
            <h2>140+</h2>
            <p>Accredited Services</p>
          </div>
          <div className="stat">
            <span className="stat-icon">👥</span>
            <h2>150+</h2>
            <p>Team Members</p>
          </div>
          <div className="stat">
            <span className="stat-icon">💯</span>
            <h2>100%</h2>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat">
            <span className="stat-icon">📍</span>
            <h2>14+</h2>
            <p>Branches / Site Offices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
