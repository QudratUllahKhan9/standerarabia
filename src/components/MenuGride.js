import React, { useState } from 'react';
import logo from './assets/logo.webp';
import third_party from './assets/Third-Party-Inspection.webp';
import lifting from './assets/lifting-equipment-inspection.webp';
import Safety from './assets/Safety-Training-Services.webp';
import operator from './assets/operator-training.webp';
import advanced from './assets/advanced-conventional.webp';
import marine from './assets/marine-testing.webp';
import calibration from './assets/calibration.webp';
import material from './assets/material-testing.webp';
import Rigging from './assets/Rigging-Lifting-Consultancy-Services.webp';
import ipaf from './assets/ipaf-training.webp';
import ISO from './assets/ISO-Audit-Certification-Consultancy.webp';
import AllServices from './assets/all-services.webp';





// import { useNavigate } from 'react-router-dom';





import { useNavigate } from 'react-router-dom';

import './MenuGride.css';

const services = [
  { title: 'THIRD PARTY INSPECTION', image: third_party },
  { title: 'LIFTING EQUIPMENT INSPECTION', image: lifting },
  { title: 'SAFETY TRAINING SERVICES', image: Safety },
  { title: 'OPERATOR TRAINING & ASSESSMENT', image: operator },
  { title: 'ADVANCED & CONVENTIONAL NDT', image: advanced },
  { title: 'MARINE INSPECTION SERVICES', image: marine },
  { title: 'Calibration Service', image: calibration },
  { title: 'Material Testing Laboratories', image: material },
  { title: 'Rigging and lifting consultancy services', image: Rigging },
  { title: 'IPAF Training MEWPs', image: ipaf },
  { title: 'ISO audit & certification consultancy', image: ISO },
  { title: 'All Services', image: AllServices },
];

const MenuGride = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();


  
  return (
    <div style={styles.app}>
 

       <div className="top-navbar">
  <div
    className={`icon-box ${hovered ? 'plus' : 'cross'}`}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onClick={() => navigate('/')}
    style={{ cursor: 'pointer' }}
  />
</div>

   <div style={{display:'flex'}}>
      <div className="responsive-sidebar" style={styles.sidebar}>

        <img src={logo} alt="Logo"  className='logo-image' />
        <ul style={styles.menu}>
          <li  onClick={() => navigate('/')} style={styles.menuItem}>Home</li>
          <li style={styles.menuItem}>About</li>
          <li style={styles.menuItem}>Services</li>
          <li style={styles.menuItem}>Accreditations</li>
          <li style={styles.menuItem}>News & Feeds</li>
          <li onClick={() => navigate('/contact')} style={styles.menuItem}>Contact</li>
        </ul>
        <button  onClick={() => navigate('/verification')} className='verification-btn'><p className='blinkText'>VERIFICATION</p></button>
      </div>

      <div className="grid" style={styles.grid}>
        
        {services.map((service, i) => (
          <div key={i} style={styles.card}>
            <img src={service.image} alt={service.title} style={styles.image} />
            <div style={styles.overlay}>
              <span>{service.title}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

const styles = {
  app: {
    // display: 'flex',
    fontFamily: 'Arial, sans-serif',
   
  },
 sidebar: {
  position: 'fixed',        // 🔒 Make it fixed to screen
  top: 26,                  // 👇 Adjust if there's a top header (like your 60px header)
  left: 0,
  width: '20%',
  padding: '30px',
  height: 'calc(100vh - 60px)',  // Full screen height minus header
  boxSizing: 'border-box',
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',       // Optional: prevent scroll inside sidebar
  zIndex: 1000              // Ensure it's above other content
},

  logo: {
    width: '70%',
    // marginBottom: '30px',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
  },
  menuItem: {
    margin: '22px 0',
    cursor: 'pointer',
    color: '#004080',
    fontWeight: '500',
  },
  verificationBtn: {
    marginTop: '30px',
    padding: '25px',
    width: '90%',
    backgroundColor: '#004080',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
  },
 grid: {
  position: 'fixed',
  top: 60,
  left: '20%',
  width: '80%',
  height: 'calc(100vh - 60px)',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  padding: '5px',
  overflowY: 'auto',
},

  card: {
  position: 'relative',
  overflow: 'hidden',
  height: 210,  // fixed height for better control
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
},

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    width:'80%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(28, 70, 114, 0.7)',
    color: 'white',
    padding: '18px 16px',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    textAlign: 'center',
    border: '1px solid white',
  },
};

export default MenuGride;
