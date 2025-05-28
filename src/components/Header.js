import React from 'react';
import logo from '../Verification/assets/img/logo1.webp';
import Saudi_Vision_2030 from '../Verification/assets/img/Saudi_Vision_2030.webp';
import './Header.css';
import { FaEnvelope, FaPhone, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import bradcrumb from './assets/bradcrumb.svg'
const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-container">
          <button className="unstyled-button" onClick={() => navigate('/')}>
            <img src={logo} alt="Standard Arabia Logo" className="logo" />
          </button>
        </div>
        <div className="right-section">
          <img src={Saudi_Vision_2030} alt="Saudi Vision 2030" className="vision-logo" />

          <div className="navigation">
            <button className="nav-item" onClick={() => navigate('/contact')}>
              Contact Us
            </button>
            <button className="nav-item-ver" style={{ }} onClick={() => navigate('/verification')}>
              Verification
            </button>
          </div>
          <button className="nav-item-icon" onClick={() => navigate('/MenuGride')}> 
            <img src={bradcrumb} alt="Saudi Vision 2030" className="menu-logo" />

          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
