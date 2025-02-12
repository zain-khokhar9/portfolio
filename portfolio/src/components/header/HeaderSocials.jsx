import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDribbbleSquare } from "react-icons/fa";
import './header.css';
function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank"><IoLogoLinkedin/></a>
      <a href="https://github.com" target="_blank"><FaSquareGithub/></a>
      <a href="https://dribbble.com" target="_blank"><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeaderSocials
