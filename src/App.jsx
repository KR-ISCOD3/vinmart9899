import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {
  return (
    <div className='bg-secondary-subtle'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
