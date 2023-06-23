import React from 'react'
import Downloadable from './Buttons'
import Me from '../../assets/me2.jpeg'
import './Header.css'
const Header = () => {
  return (
    <header>
     <div className="container header__container">
      <h2>Hello I'm</h2>
      <h1>Omra Akhtar</h1>
      <h3 className='text-light'>Learner</h3>
      <Downloadable/>
      <div className="me">
        <img src={Me} alt="" />
      </div>
     </div>

    </header>
  )
}

export default Header