//import React from 'react'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
