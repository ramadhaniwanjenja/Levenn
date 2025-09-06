import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Impact from './components/Impact'
import About from './components/About'
import Products from './components/Products'
import Team from './components/Team'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Impact />
        <About />
        <Products />
        <Team />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
