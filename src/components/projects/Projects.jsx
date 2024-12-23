//import React from 'react'
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='mywork'>
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt='projects'/>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
            return <img key={index} src={work.w_img} alt='project'/>
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt='arrow'/>
      </div>
    </div>
  )
}

export default Projects
