import React from "react";
import "./Clients.css";
import aramco from "../assets/clients-6.webp";

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="clients-header">
        <p className="clients-subtitle">THEY BELIEVE IN US</p>
        <h2 className="clients-title">Meet Our Clients</h2>
      </div>
      <div className="clients-logos">
        {[aramco, aramco, aramco, aramco, aramco, aramco].map((logo, index) => (
          <div className="client-logo" key={index}>
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
