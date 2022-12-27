import React from 'react'
import './App.scss'
// import About from './components/about/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
const App = () => {
  return (

    <>
      <Header />
      <Hero />
      {/* <About/> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>

  )
}

export default App