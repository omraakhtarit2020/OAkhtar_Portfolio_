import React from 'react'
import './Education.css'
import mier from '../../assets/mier.webp'
import techno from '../../assets/techno international.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data=[
    {
        id:1,
        img: techno,
        name:"Techno International Newtown",
        description:"My college was a transformative chapter in my educational journey, fostering intellectual growth, personal development, and lifelong connections. Its commitment to academic excellence, experiential learning, vibrant campus life, and career support laid the foundation for my future success. The memories, knowledge, and experiences gained during my time at my graduation college have shaped me into a confident, well-rounded individual ready to embrace the challenges and opportunities that lie ahead.",
        link:"https://tint.edu.in/"

    },{
        id:2,
        img:mier,
        name:"Mahavir Institue Of Education & Research",
        description:"MIER provided an exceptional educational journey that prepared me for the challenges and opportunities of the world. Its commitment to academic excellence, holistic development, a supportive community, and embracing technology created a nurturing and empowering environment for students. The valuable lessons, lifelong friendships, and cherished memories I gained from my school have shaped me into the individual I am today. I am immensely grateful for the knowledge, experiences, and personal growth I gained from this remarkable institution, which will continue to guide me as I pursue future endeavors.",
        link:"https://www.mahavirschool.com/"
    },{
        id:3,
        img:mier,
        name:"Mahavir Institue Of Education & Research",
        description:"MIER was the foundation upon which my academic journey was built. Its unwavering commitment to academic excellence, holistic development, supportive community, and technological integration created an environment conducive to growth and success. The valuable experiences, knowledge, and skills I gained from my secondary school have shaped me into a confident and well-rounded individual, ready to face the challenges and opportunities that lie ahead. I will forever cherish the memories and relationships forged within the walls of my school, as they have played an integral role in shaping my personal and academic growth.",
        link:"https://www.mahavirschool.com/"
    }
]

const Education = () => {
  return (
    <section id="education">
     <h5 style={{color:'black'}}>Skills Acquired from</h5>
     <h2>Education</h2>

     <Swiper className="container education__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({id,img,name,description,link})=>{
            return(
                <SwiperSlide key={id}className='education'>
                <div className="avatar">
                    <img src={img} alt="" />
                </div>
                <h5 className='edu__name'>{name}</h5>
                <small className='edu__about'>{description}</small>
                <a href={link} className='edu__link' target='_blank'><FontAwesomeIcon icon={faGlobe} /></a>
            </SwiperSlide>
            )
        })
       }
     </Swiper>
    </section>
  )
}

export default Education