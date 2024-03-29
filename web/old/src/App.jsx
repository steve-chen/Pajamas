import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import FeaturedIn from './components/FeaturedIn';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>
      <div className='bg'>
        <Navbar />
        <HeroSection />
      </div>
      <About />
      <HowToBuy />
      <FeaturedIn />
      <Contact />
      <Footer />
    </>
  )
}

export default App
