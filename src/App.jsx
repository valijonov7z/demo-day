import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import CityCards from './components/CityCards'
import LandmarksSection from './components/LandmarksSection'
import CultureSection from './components/CultureSection'
import ShoppingSection from './components/ShoppingSection'
import FoodSection from './components/FoodSection'
import NatureSection from './components/NatureSection'
import GallerySection from './components/GallerySection'
import TipsSection from './components/TipsSection'
import Footer from './components/Footer'
import { ModalProvider } from './context/ModalContext'
import BookingModal from './components/BookingModal'
import Cursor from './components/Cursor'

function App() {
  return (
    <ModalProvider>
      <div className="hi">
        <Cursor/>
        </div>
      <div className="min-h-screen bg-uzbek-deep-blue relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <AboutSection />
        <CityCards />
        <LandmarksSection />
        <CultureSection />
        <ShoppingSection />
        <FoodSection />
        <NatureSection />
        <GallerySection />
        <TipsSection />
        <Footer />
        <BookingModal />

      </div>
    </ModalProvider>
    
  )
}

export default App
