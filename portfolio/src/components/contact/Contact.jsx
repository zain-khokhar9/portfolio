import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p6hmqdy', 'template_hj8897k', form.current, {
        publicKey: 'D3dhA8Nhk0kq31t3J',
      })
      e.target.reset()
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
         
        },
      );
  };
  return (
    <section id='contact'>
    <h5>Get in Touch</h5> 
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className='option'>
<MdEmail className='icon'/>
<h4>Email</h4>
<h5>khokharz@gmail.com</h5>
<a href='mailto:khokharz@gmail.com' target='blank'>Send a message</a>

        </article>
        <article className='option'>
<FaFacebookMessenger className='icon'/>
<h4>Messenger</h4>
<h5>hdbdej nbvbhcbhje bj</h5>
<a href='khokharz@gmail.com'>Send a message</a>

        </article>
        <article className='option'>
<IoLogoWhatsapp className='icon'/>
<h4>WhatsApp</h4>
<h5>+923078604149</h5>
<a href="https://wa.me/923001234567" target="_blank">Send a message</a>

        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
        <button className='btn btn-primary' type='submit'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
