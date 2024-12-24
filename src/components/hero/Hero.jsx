//import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='Profile'/>
      <h1><span>I am K. V. S. Naveen,</span> an undergraduate student at KL University.</h1>
      <p>I am an undergraduate passionate about leveraging technology to solve real-world problems. I am eager to learn and grow in the fields of software development and engineering, while contributing to innovative projects.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
