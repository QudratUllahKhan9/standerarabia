// App.js
import React from 'react';
import Header from '../components/Header';
import HeroSection from './components/HeroSection';
import TrainingPrograms from './components/TrainingPrograms';

import ContactUs from './components/ContactUs';
import Footer from '../components/Footer';
import '../App.css';
import InputVerification from './components/InputVerification';

function VerificationComp() {
  return (
    <div className="app">
      <Header/>
      <main>
        <HeroSection />
        {/* <TrainingPrograms /> */}
        <InputVerification />
        {/* <ContactUs /> */}
      </main>
      <Footer />
    </div>
  );
}

export default VerificationComp;