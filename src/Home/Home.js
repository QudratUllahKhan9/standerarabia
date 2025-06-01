// App.js
import React from 'react';
import Header from '../components/Header';

import Footer from '../components/Footer';
import Services from './components/Services';
import BodyHeader from './components/BodyHeader';
import LocationInfo from './components/LocationInfo';
import Accreditations from './components/Accreditations';
import ExcellenceSection from './components/ExcellenceSection';
import SafetySection from './components/SafetySection';
import Certifications from './components/Certifications';
import Clients from './components/Clients';



function Home() {
  return (
    <div style={{backgroundColor:'#F6F6F6',}} className="app">
      <Header/>
      <main style={{backgroundColor:'#FFFFFF',flex:1}}>
        <BodyHeader/>
      <Services/>
      <LocationInfo/>
      <Accreditations/>
      <ExcellenceSection/>
      <SafetySection/>
      <Certifications/>
      <Clients/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;