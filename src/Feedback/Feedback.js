
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from './components/HeroSection'
import Certificates from './components/Certificates'
// import ServicesSection from './components/ServicesSection'



export default function Feedback() {
  return (
    <div>
    <Header/>
    <main>
      <HeroSection/>
      <Certificates/>
    </main>
    <Footer/>
    </div>
  )
}
