import React from "react";
import "./certificates.css";
import cert1 from "../assets/1.webp";
import cert2 from "../assets/2.webp";
import cert3 from "../assets/3.webp";
import cert4 from "../assets/13.webp";
// import finalCert from "../assets/"; // New final wide image

const Certificates = () => {
  return (
    <div className="certificates-section">
      <div className="certificates-grid">
        <img src={cert1} alt="LEEA Certificate" className="certificate-img" />
        <img src={cert2} alt="SASO Certificate" className="certificate-img" />
        <img src={cert3} alt="IPAF Certificate" className="certificate-img" />
        <img src={cert1} alt="LEEA Certificate" className="certificate-img" />
        <img src={cert2} alt="SASO Certificate" className="certificate-img" />
        <img src={cert3} alt="IPAF Certificate" className="certificate-img" />
        <img src={cert1} alt="LEEA Certificate" className="certificate-img" />
        <img src={cert2} alt="SASO Certificate" className="certificate-img" />
        <img src={cert3} alt="IPAF Certificate" className="certificate-img" />
        <img src={cert1} alt="LEEA Certificate" className="certificate-img" />
  <div className="small-image-div">
  <div style={{ maxWidth: "900px", margin: "0 auto" }}>
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
      <img src={cert4} alt="Membership Certificate" className="certificate-img-small" />
      <img src={cert4} alt="Membership Certificate" className="certificate-img-small" />
    </div>
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <img src={cert4} alt="Membership Certificate" className="certificate-img-small" />
      <img src={cert4} alt="Membership Certificate" className="certificate-img-small" />
    </div>
  </div>
</div>




      </div>

      <div className="final-certificate-container">
        {/* <img src={cert4} alt="Final Certificate" className="final-certificate" /> */}
      </div>
    </div>
  );
};

export default Certificates;
