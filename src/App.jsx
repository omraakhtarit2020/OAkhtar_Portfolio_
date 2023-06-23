import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skill from './components/Skills/Skill'
import Project from'./components/Projects/Project'
import  Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App