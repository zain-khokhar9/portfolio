import React from 'react'
import './testimonials.css'
import AV1 from '../../assets/avatar1.jpg'
import AV2 from '../../assets/avatar2.jpg'
import AV3 from '../../assets/avatar3.jpg'
import AV4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AV1,
    name: 'Shahryar',
    review: 'uytdr cdghjkml;l resrdyguh trdxdcvnjh  grdtfghn rsdfbn cvbiuygtfrdfcg grdfhj fdfcvb'
  },
  {
    avatar: AV2,
    name: 'Haris Nadeem',
    review: 'uytdr cdghjkml;l resrdyguh trdxdcvnjh  grdtfghn rsdfbn cvbiuygtfrdfcg grdfhj fdfcvb'
  },
  {
      avatar: AV3,
      name: 'Usman Awan',
      review: 'uytdr cdghjkml;l resrdyguh trdxdcvnjh  grdtfghn rsdfbn cvbiuygtfrdfcg grdfhj fdfcvb'
  },
  {
    avatar: AV4,
    name: 'Ahmedi ',
    review: 'uytdr cdghjkml;l resrdyguh trdxdcvnjh  grdtfghn rsdfbn cvbiuygtfrdfcg grdfhj fdfcvb'
  }
  
]
function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="container testimonial_container">
        {
        data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide className="testimonial">
          <div className="client_avator">
            <img src={avatar}/>
          </div>
          <div className="testimonial_content">
          <h4>{name}</h4>
          <p>{review}</p>
          </div>
          
        </SwiperSlide>
          )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default Testimonials
