import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Promo from '../components/Promo'
import About from '../pages/About'
import FoodMenu from '../components/FoodMenu'
import Cta from '../components/Cta'
import Delivery from '../components/Delivery'
import Testimonials from '../components/Testimonials'
import Banner from '../components/Banner'
import Blog from '../pages/Blog'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import SearchBox from '../components/SearchBox'

function Home() {
  const url="https://jamilafood.onrender.com"
  return (
    <>
          <Header />
            <SearchBox />
          <main>
            <Hero />
            <Promo />
            <Cta />
            <Delivery />
            <Testimonials />
            <Banner />
            <Blog />
          </main>
          {/* <Footer /> */}
    </>
  )
}

export default Home