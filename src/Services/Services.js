import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServicesSection from './components/ServicesSection'



export default function About() {
  return (
    <div>
    <Header/>
    <main>
      {/* <HeroSection/> */}
   <ServicesSection/>
    </main>
    <Footer/>
    </div>
  )
}
