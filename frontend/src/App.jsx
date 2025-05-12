import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Promo from './components/Promo'
import About from './components/About'
import FoodMenu from './components/FoodMenu'
import Cta from './components/Cta'
import Delivery from './components/Delivery'
import Testimonials from './components/Testimonials'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import SearchBox from './components/SearchBox'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? <Preloader /> : (
        <>
          <Header />
            <SearchBox />
          <main>
            <Hero />
            <Promo />
            <About />
            <FoodMenu />
            <Cta />
            <Delivery />
            <Testimonials />
            <Banner />
            <Blog />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App