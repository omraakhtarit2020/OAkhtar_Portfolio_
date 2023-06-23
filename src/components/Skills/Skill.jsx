import React from 'react'
import './Skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
const Skill = () => {
  return (
    <section id='skills'>
      <h5 style={{color:'black'}}>What skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="technical__skill">
          <h1>Technical Skills</h1><br/>
          <div className="skills__content">
          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='java'>
          <div>
            <h4>JAVA</h4>
          </div>
          </div>
          </article>

          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='html'>
          <div >
            <h4>HTML</h4>
          </div>
          </div>
          
          </article>

          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon' />
          <div className='css'>
          <div>
            <h4>CSS</h4>
          </div>
          </div>
          
          </article>


          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='bootstrap'>
          <div>
            <h4>BOOTSTRAP</h4>
          </div>
          </div>
          
          </article>


          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='js'>
          <div >
            <h4>JAVASCRIPT</h4>
          </div>
          </div>
          </article>

          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='ds'>
          <div >
            <h4>DS</h4>
          </div>
          </div>
          </article>

          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='algo'>
          <div >
            <h4>ALGORITHM</h4>
          </div>
          </div>
          </article>

          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='pp'>
          <div>
            <h4>POWERPOINT</h4>
          </div>
          </div>
          </article>

          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='git'>
          <div>
            <h4 >GIT</h4>
          </div>
          </div>
          
          </article>

          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='sql'>
          <div >
            <h4>SQL</h4>
          </div>
          </div>
          
          </article>
          </div>
          
          
        </div>
        <div className="soft__skill">
          <h1>Soft Skill</h1><br/>
          <div className="skills__content">
          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='tw'>
          <div >
            <h4>TEAM WORK</h4>
          </div>
          </div>
          
          </article>

          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='tm'>
          <div >
            <h4>TIME MANAGEMENT</h4>
          </div>
          </div>
          
          </article>

          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='creative'>
          <div >
            <h4>CREATIVE</h4>
          </div>
          </div>
          
          </article>


          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='ct'>
          <div >
            <h4>CRITICAL THINKING</h4>
          </div>
          </div>
          
          </article>


          <article className='skills__details'>
          <FontAwesomeIcon icon={faCheckSquare} className='skills__details-icon'/>
          <div className='ps'>
          <div >
            <h4>PROBLEM SOLVING</h4>
          </div>
          </div>
          
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill