import React from 'react'
import './Header.css'
import CV from '../../assets/Omra_Akhtar_Resume.pdf'
const Buttons = () => {
  return (
    <div className='button'>
        <a href={CV} download className='btn'>Download RESUME</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Buttons