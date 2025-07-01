import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutTeam'
import Timeline from './components/Timeline'
import FeaturesSection from './components/FeaturesSection'
import President from './components/President'

export default function About() {
  return (
    <div>
    <Header/>
    <main>
      <HeroSection/>
      <AboutSection/>
      <Timeline/>
      <FeaturesSection/>
      <President/>
    </main>
    <Footer/>
    </div>
  )
}
