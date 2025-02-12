import React from 'react'
import './experience.css'
import { GoCheckCircleFill } from "react-icons/go";
function Experience() {
  return (
    <section id='experience'>
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience_container">
          <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
              <div>
              <h4>HTML</h4>
              <h6 className='text_light'>Experienced</h6>
              </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
              <div>
              <h4>CSS</h4>
              <h6 className='text_light'>Experienced</h6>
              </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
              <div>
              <h4>JAvascript</h4>
              <h6 className='text_light'>Experienced</h6>
              </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
             <div>
             <h4>Bootstrap</h4>
             <h6 className='text_light'>Experienced</h6>
             </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
             <div> 
            <h4>Tailwind</h4>
             <h6 className='text_light'>Experienced</h6>
             </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
              <div>
              <h4>React</h4>
              <h6 className='text_light'>Experienced</h6>
              </div>
            </article>
          </div>
          </div>


          <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
             <div>
             <h4>Node JS</h4>
             <h6 className='text_light'>Experienced</h6>
             </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
             <div>
             <h4>MongoDB</h4>
             <h6 className='text_light'>Experienced</h6>
             </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
              <div>
              <h4>PHP</h4>
              <h6 className='text_light'>Experienced</h6>
              </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
             <div>
             <h4>MySQL</h4>
             <h6 className='text_light'>Experienced</h6>
             </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
             <div>
             <h4>Python</h4>
             <h6 className='text_light'>Experienced</h6>
             </div>
            </article>

            <article className="experience_detail">
              <GoCheckCircleFill className='experience_detail-icons'/>
              <div>
              <h4>React</h4>
              <h6 className='text_light'>Experienced</h6>
              </div>
            </article>
          </div>
          </div>
      </div>
       
     
    </section>
  )
}

export default Experience
