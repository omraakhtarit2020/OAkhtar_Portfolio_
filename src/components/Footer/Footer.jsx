import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.JPG"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><img src={logo} alt="" style={{"height" : "4rem", "width" : "4rem"}}/></a>
      <ul className='permalinks'>
        <a href="#">Home |</a>
        <a href="#about">About |</a>
        <a href="#skill">Skills |</a>
        <a href="#project">Projects |</a>
        <a href="#contact">Contact</a>
      </ul>

      <div className="footer__social">
        <a href="">Linkdeln</a>
        <a href="">GitHub</a>
        <a href="">Twitter</a>
      </div>
      <div className="footer__copyright">
        <small>&copy; OAkhtar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer