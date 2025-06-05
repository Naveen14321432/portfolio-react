// import React from 'react'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Certificates from './components/certificates/Certificates'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
