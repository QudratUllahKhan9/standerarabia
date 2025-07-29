import React from "react";
import "./certificates.css";
import cert1 from "../assets/1.webp";
import cert2 from "../assets/2.webp";
import cert3 from "../assets/3.webp";
import cert4 from "../assets/13.webp";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    { img: cert1, alt: "LEEA Certificate" },
    { img: cert2, alt: "SASO Certificate" },
    { img: cert3, alt: "IPAF Certificate" },
    { img: cert1, alt: "LEEA Certificate" },
    { img: cert2, alt: "SASO Certificate" },
    { img: cert3, alt: "IPAF Certificate" },
    { img: cert1, alt: "LEEA Certificate" },
    { img: cert2, alt: "SASO Certificate" },
    { img: cert3, alt: "IPAF Certificate" },
    { img: cert1, alt: "LEEA Certificate" },
  ];

  const smallCertificates = Array(4).fill({ img: cert4, alt: "Membership Certificate" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="certificates-section">
      <motion.div 
        className="certificates-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="certificate-item"
          >
            <img 
              src={cert.img} 
              alt={cert.alt} 
              className="certificate-img"
              loading="lazy"
            />
          </motion.div>
        ))}

        <motion.div 
          className="small-certificates-container"
          variants={itemVariants}
        >
          <div className="small-certificates-grid">
            {smallCertificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="small-certificate-item"
              >
                <img 
                  src={cert.img} 
                  alt={cert.alt} 
                  className="certificate-img-small"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Certificates;