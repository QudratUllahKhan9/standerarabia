import React, { useEffect, useState } from "react";
import {
  FiAward,
  FiUsers,
  FiThumbsUp,
  FiMapPin,
} from "react-icons/fi";
import "./ExcellenceSection.css";

// Counter component to animate numbers
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
};

// Main Excellence Section component
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
            <span className="stat-icon"><FiAward /></span>
            <h2><Counter end={140} /></h2>
            <p>Accredited Services</p>
          </div>
          <div className="stat">
            <span className="stat-icon"><FiUsers /></span>
            <h2><Counter end={150} /></h2>
            <p>Team Members</p>
          </div>
          <div className="stat">
            <span className="stat-icon"><FiThumbsUp /></span>
            <h2><Counter end={100} /></h2>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat">
            <span className="stat-icon"><FiMapPin /></span>
            <h2><Counter end={14} /></h2>
            <p>Branches / Site Offices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
