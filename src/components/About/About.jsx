import React from 'react'
import './About.css';
import image from '../../assets/me1.jpeg';

const About = () => {
  return (
   <section id='about'>
    <h2>Get To Know</h2>
    <div className="container about__container">
      <div className="about__me">
       <div className="about__me-image">
        <img src={image} alt="" style={{"height" : "22rem", "width" : "22rem"}}/>
       </div>
      </div>
      <div className="about__content">
        <p>I'm currently pursuing my Bachelor's
degree in Information Technology
from Techno International Newtown
.<br/><br/>
Proficient in programming languages
such as Java, database
management,Front-end tools. Skilled
in analysing problems ,logical
reasoning .<br/><br/>
I'm inquisitive and
passionate about learning things that
enhances the creativity level and lead
to a simplifies solution of things
around. Ability to communicate ideas
thus, enabling successful
collaboration with teams .<br/><br/>
 Seeking an
opportunity to enhance my technical
skills and contribute to the success of
a forward-thinking organization in the
IT industry.</p><br/>
        <a href="#contact" className='btn btn-primary '>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About