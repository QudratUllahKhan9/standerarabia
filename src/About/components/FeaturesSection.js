import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div className="features-container">
      <div className="features-grid">
        <div className="feature-card white-card">
          <h3>We Stop At Nothing</h3>
          <p>
            Our services run on a customized ERP module designed specifically
            to ensure security, prevent duplication and reduce paperwork. Our
            certificates are system generated and utilizes a 2-level
            authorization process before being released to the client.
          </p>
        </div>

        <div className="feature-card dark-card">
          <h3>We Love To Explore</h3>
          <p>
            We use unique QR codes, tamper proof inspection stickers and online
            verification to assure the authenticity of our certificates and
            cards. The system also enables clients to view a complete history of
            all equipment inspected and reminders can also be set up to
            highlight upcoming renewals.
          </p>
        </div>

        <div className="feature-card blue-card">
          <h3>We Take It Step-By-Step</h3>
          <p>
            Standard Arabia focuses on maximizing business value and operation
            efficiency by supporting your core business values through dedicated
            customer service, teamwork, and commitment.
          </p>
        </div>

        <div className="feature-card white-card">
          <h3>We Keep It Simple</h3>
          <p>
            All our operations are based on ASME, BS, ASNT, OSHA and LEEA
            standards and certifications approved by TVTC & International
            accreditations. Our capability has been assessed by various
            contractors, corporates and organizations.
          </p>
        </div>
      </div>

      <div className="features-text">
        <h2>We Believe In Hard Work And Dedication</h2>
        <p>
          Standard Arabia aims to set a benchmark by providing enhanced
          technical services and ensure the quality is never compromised. We
          constantly upgrade our level of service by training and motivating our
          crew to be updated on the latest trends in the industry.
        </p>
        <button className="read-more-btn">Read More →</button>
      </div>
    </div>
  );
};

export default FeaturesSection;
