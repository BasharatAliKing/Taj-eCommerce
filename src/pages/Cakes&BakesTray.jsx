import React from 'react'
import Navbar from '../layouts/Navbar'
import Hero from '../components/Hero'
import Footer from '../layouts/Footer'
import MenuPage from './MenuPage'

const CakesBakesTray = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <MenuPage/>
      <Footer/>
    </div>
  )
}

export default CakesBakesTray
