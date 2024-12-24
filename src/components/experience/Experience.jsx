//import React from 'react'
import './Experience.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';

const Experience = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>Experience</h1>
            <img src={theme_pattern} alt="services"/>
        </div>
        <div className="services-container">
    {Services_Data.map((service, index) => {
        return (
            <div
                key={index}
                className="services-format"
                onClick={(e) => e.currentTarget.classList.toggle("expanded")}
            >
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
            </div>
        );
    })}
</div>

    </div>
  )
}

export default Experience
