import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

  const form=useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oz4hvj9', 'template_7gsq2uj', form.current, 'qwyfhsVukm7n1Y_aE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <FontAwesomeIcon icon={faEnvelope} />
            <h4>Email</h4>
            <h5>omraakhtar@gmail.com</h5>
            <a href="mailto:omraakhtar@gmail.com" target='_blank'>Send A Message</a>
          </article>
          <article className='contact__option'>
          <FontAwesomeIcon icon={faPhone} />
            <h4>WhatsApp</h4>
            <h5>+91 8777714551</h5>
            <a href="https://api.whatsapp.com/send?phone=+91877714551" target='_blank'>Send A Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="?" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact