import React from 'react'
import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
function Footer() {
  return (
    <section id='footer'>
       <a className='footer_logo'>Zayn</a>
      <ul className='links'>
      <li><a href="#header">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li><a href="#services">Services</a>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
<a href="https://www.facebook.com/profile.php?id=100094116867400"><FaFacebookSquare/></a>
<a href="https://www.facebook.com/profile.php?id=100094116867400"><FaSquareInstagram/></a>     
<a href="https://www.facebook.com/profile.php?id=100094116867400"><FaWhatsappSquare/></a>      
      </div>
      <div className="copyright">
        <small>&copy; Zayn Portfolio, All rights reserved</small>
      </div>
    </section>
  )
}

export default Footer
