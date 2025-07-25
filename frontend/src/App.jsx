import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Services from './components/services'
import Features from './components/features'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Features/>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
