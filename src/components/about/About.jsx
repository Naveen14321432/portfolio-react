import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: "90%" },
    { name: "JavaScript", level: "80%" },
    { name: "ReactJs", level: "75%" },
    { name: "Java", level: "85%" },
    { name: "Python", level: "60%" }
  ];

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello everyone! I am an enthusiastic undergraduate student at KL University,
              pursuing a degree in Computer Science and Engineering. I have a strong passion
              for full-stack development and competitive programming. My dedication to
              front-end development is evident not only in my extensive experience but also
              in the enthusiasm and commitment I bring to every project.
            </p>
          </div>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <div key={index} className="about-skill">
                <p>{skill.name}</p>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: skill.level }}>
                    {/* <span>{skill.level}</span> */}
                  </div>
                </div>
              </div>
            ))}
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
  );
};

export default About;
