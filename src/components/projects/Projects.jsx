import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='mywork'>
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt='projects' />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-item">
              <h3>{work.w_name}</h3>
              <a href={work.w_repo} target="_blank" rel="noopener noreferrer">
                <img src={work.w_img} alt={work.w_name} title={work.w_name} />
              </a>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt='arrow' />
      </div>
    </div>
  )
}

export default Projects;
