//import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon  from '../../assets/mail_icon.svg';
import location_icon  from '../../assets/location_icon.svg';
import call_icon  from '../../assets/call_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a9545a95-21c7-4b1d-b67d-44404bb6e58d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="contact" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
        <h1>Let&apos;s talk</h1>
        <p>I&apos;m currently available to take on new projects, so feel free to contact me for any contributions!</p>
        <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt='mail'/> <p>naveenkammili04@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon} alt='call'/> <p>+91 8008657626</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt='location'/> <p>Sriharipuram, Visakhapatnam</p>
            </div>
        </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type='text' placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type='email' placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message" />
            <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
