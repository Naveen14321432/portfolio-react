//import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt=''/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hello everyone! I am an enthusiastic undergraduate student at KL University, pursuing a degree in Computer Science and Engineering. I have a strong passion for full-stack development and competitive programming. My dedication to front-end development is evident not only in my extensive experience but also in the enthusiasm and commitment I bring to every project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width: "70%"}} /></div>
                <div className="about-skill"><p>ReactJs</p><hr style={{width: "60%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width: "80%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width: "30%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>CERTIFICATIONS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2+</h1>
            <p>INTERNSHIPS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
