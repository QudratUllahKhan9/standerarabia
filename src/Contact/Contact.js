// App.js
import React from 'react';
import Header from '../components/Header';
import HeroSection from './components/HeroSection';
import Footer from '../components/Footer';
import Form from './components/Form';
import Location from './components/Location';


function Contact() {
  return (
    <div className="app">
      <Header/>
      <main style={{backgroundColor:'#FFFFFF',flex:1}}>
       <HeroSection/>
       <Form/>
      </main>
      <Location/>
      <Footer />
    </div>
  );
}

export default Contact;