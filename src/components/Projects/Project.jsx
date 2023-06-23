import React from 'react'
import './Project.css'
import i1 from '../../assets/expense.gif';
import i2 from '../../assets/to-do-list-to-do.gif';
import i3 from '../../assets/currency exchange.gif';
import i4 from '../../assets/hamburger-menu.gif';
import i5 from '../../assets/weather_dribbble_size.gif.gif';
const data=[
  {
    id: 1,
    image: i1,
    title: "Expense Tracker",
    github:"https://github.com/omraakhtarit2020/ExpenseTracker",
    demo:"https://keepupwithurbudget.netlify.app/"
  },{
    id: 2,
    image: i5,
    title:"Weather App",
    github:"https://github.com/omraakhtarit2020/weatherapp",
    demo:"https://weathercheck-omra.netlify.app/"
  },{
    id: 3,
    image: i3,
    title: "Currency Exchnage",
    github:"https://github.com/omraakhtarit2020/CurrencyExchange",
    demo:"https://currencyexchange-omra.netlify.app/"
  },{
    id: 4,
    image: i2,
    title:"Todo App",
    github:"https://github.com/omraakhtarit2020/Notelistt",
    demo:"https://learningreact-todo.netlify.app/"
  },
  {
    id: 5,
    image: i4,
    title:"Menu",
    github:"https://github.com/omraakhtarit2020/menuatdesk",
    demo:"https://menuaturdesk.netlify.app/"
  }
]
const Project = () => {
  return (
   <section id='projects'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container projects__container">
      {data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id}className='projects__item'>
            <div className="project__item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="project__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
          </article>
          )})}
    </div>
   </section>
  )
}

export default Project