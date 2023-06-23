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
        <a href="https://www.linkedin.com/in/omra-akhtar-400000207/">Linkdeln</a>
        <a href="https://github.com/omraakhtarit2020">GitHub</a>
        <a href="https://twitter.com/AkhtarUmrah">Twitter</a>
      </div>
      <div className="footer__copyright">
        <small>&copy; OAkhtar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer