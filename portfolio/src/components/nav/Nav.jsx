import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdBookmarks } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { useState } from 'react';


function Nav() {
  const [Activenav,setActivenav] = useState('#') 
  return (
    <nav>
      <a href="#" onClick={()=>setActivenav('#')}className={Activenav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={()=>setActivenav('#about')} className={Activenav==='#about' ? 'active' : ''}><FaUser/></a>
      <a href="#experience" onClick={()=> setActivenav('#experience')} className={Activenav=== '#experience' ? 'active' : ''}><IoMdBookmarks/></a>
      <a href="#services" onClick={()=>setActivenav('#services')} className={Activenav==='#services' ? 'active' : ''}><RiCustomerService2Fill/></a>
      <a href="#contact" onClick={()=>setActivenav('#contact')} className={Activenav==='#contact' ? 'active' : ''}><IoMdContact/></a>

    </nav>
  )
}

export default Nav
