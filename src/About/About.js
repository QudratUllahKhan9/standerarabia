import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutTeam'

export default function About() {
  return (
    <div>
    <Header/>
    <main>
      <HeroSection/>
      <AboutSection/>
    </main>
    <Footer/>
    </div>
  )
}
