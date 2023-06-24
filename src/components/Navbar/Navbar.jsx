import React from 'react'
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Navbar = () => {
  const [activeNav, setActiveNav] =useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav=== '#'? 'active':''}><FontAwesomeIcon icon={faHome} /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== '#about' ? 'active' :''}><FontAwesomeIcon icon={faPerson} /></a>
      <a href="#education" onClick={()=> setActiveNav('#education')} className={activeNav=== '#education' ? 'active' :''}><FontAwesomeIcon icon={faSchool} /></a>
      <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav=== '#skills' ? 'active' :''}><FontAwesomeIcon icon={faPencilRuler} /></a>
      <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav=== '#projects' ? 'active' :''}><FontAwesomeIcon icon={faTasks} /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' :''}><FontAwesomeIcon icon={faPhone} /></a>
    </nav>
  )
}

export default Navbar