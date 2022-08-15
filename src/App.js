import React from 'react'
import Ceo from './components/Ceo'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import Pricings from './components/Pricings'
import './index.css'


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Offers />
      <Pricings />
      <Ceo />
      <Contact />
      <Footer />
    </>
  )
}

export default App
