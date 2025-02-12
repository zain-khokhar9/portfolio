import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    tittle: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:2,
    image: IMG2,
    tittle: 'Charts templates & Infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  }, 
  {
    id:3,
    image: IMG3,
    tittle: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:4,
    image: IMG4,
    tittle: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:5,
    image: IMG5,
    tittle: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:6,
    image: IMG6,
    tittle: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  }
  
]
function Portfolio() {
  return (
    <section id='portfolio'>
    <h5>My Recent Project</h5>  
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
      {
        data.map(({id, image, tittle, github, demo}) => {
          return(
        <article key={id} className="portfolio_item">
        <div className="portfolio_image">
        <img src={image} alt={tittle}/>
        </div>
        <h3>{tittle}</h3>
        <a href={github} className='btn'target='blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
        </article> 
          )
        })
      }
      
     

    </div>
    </section>
  )
}

export default Portfolio
