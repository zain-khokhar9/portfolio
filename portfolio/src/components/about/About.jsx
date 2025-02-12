import React from 'react'
import './about.css'
import ME2 from '../../assets/me-about.jpg'
import { BsFillAwardFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h1>About Me</h1>
      <div className="container about-container">
        <div className="about-me">
        <div className="about-img">
<img src={ME2} alt="me image" />
        </div>
        </div>
       
        <div className="about-content">
<div className="about-cards">
  <article className='about-card'>
    <BsFillAwardFill className='about-icon'/>
    <h5>Experience</h5>
    <h6>3+ Year Working</h6>
  </article>
  <article className='about-card'>
    <FaUsers className='about-icon'/>
    <h5>Clients</h5>
    <h6>200+ WorldWide</h6>
  </article>
  <article className='about-card'>
    <RiProjectorFill className='about-icon'/>
    <h5>Projects</h5>
    <h6>80+ Completed</h6>
  </article>
  
</div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero atque, voluptates error cupiditate velit commodi ipsam repudiandae numquam molestiae rerum consequatur impedit suscipit, esse, et sit asperiores sint! Est, eveniet.</p>
        <button className='btn btn-primary'>Let's Talk</button>
        </div>
      </div>
    </section>
  )
}

export default About
