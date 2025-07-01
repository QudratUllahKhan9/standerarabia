
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from './components/HeroSection'
import HeaderBody from './components/headerBody'
import Certificates from './components/Certificates'
import AccreditationSlider from './components/AccreditationSlider'
// import ServicesSection from './components/ServicesSection'



export default function Accreditations() {
  return (
    <div>
    <Header/>
    <main>
    <HeroSection/>
    <HeaderBody/>
    <Certificates/>
    <AccreditationSlider/>
    </main>
    <Footer/>
    </div>
  )
}
