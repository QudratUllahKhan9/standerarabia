import React, { useEffect, useState } from "react";
import {
  FiAward,
  FiUsers,
  FiThumbsUp,
  FiMapPin,
} from "react-icons/fi";
import "./ExcellenceSection.css";
import { useNavigate } from 'react-router-dom';

// Counter component
const Counter = ({ end, suffix = "+", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const ExcellenceSection = () => {
    const navigate = useNavigate();
  
  return (
    <section className="excellence-section">
      <div className="container">
        <div className="left-content">
          <h5 className="subheading">TRUSTWORTHY & RELIABLE</h5>
          <h1 className="heading-section" style={{fontSize:50,marginBottom:40}}>
            Counting on Excellence,<br /> Everywhere We Serve
          </h1>
          <p className="description">
            Trusted Across Saudi Arabia and Beyond for Inspection, Training, and Certification Services!
          </p>
          <div className="cta">
            <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Now ↗</button>
            <div className="phone">
              <div className="phone-icon">📞</div>
              <span className="phone-number">+966-13-3670801</span>
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
            <h2><Counter end={100} suffix="%" /></h2>
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

