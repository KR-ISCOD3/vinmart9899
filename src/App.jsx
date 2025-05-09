import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Review from './components/Review'
import Footer from './components/Footer'


function App() {
  return (
    <div className='bg-secondary-subtle'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <Menu/>
        <Contact/>
        <Review/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
