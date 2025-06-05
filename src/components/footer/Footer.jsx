import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';
import footer_logo from '../../assets/logo.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {
  // 1) Create a ref to grab the email input value
  const emailRef = useRef();

  // 2) Replace these strings with your actual EmailJS credentials:
  const SERVICE_ID   = 'service_z5sdutm';    // e.g. "service_xxxx"
  const TEMPLATE_ID  = 'template_wi890vg';   // e.g. "template_xxxx"
  const PUBLIC_KEY   = '_yC1LnGeBG6RvSwzW';    // e.g. "user_YYYYYYYY"

  // 3) This function will be called when "Subscribe" is clicked
  const handleSubscribe = () => {
    const subscriberEmail = emailRef.current.value.trim();

    if (!subscriberEmail) {
      toast.error('Please enter a valid email address.', {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
      progressStyle: { background: "#d32f2f !important;" }
    });
    return;
    }

    // OPTIONAL: Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(subscriberEmail)) {
      toast.error('Please enter a valid email format (e.g. name@example.com).', {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
      progressStyle: { background: "#d32f2f !important;" }
    });
      return;
    }

    // 4) Prepare the template parameters (matching what your EmailJS template expects)
    const templateParams = {
      email: subscriberEmail,       // This should match {{email}} in your EmailJS template.
      name: 'Subscriber',           // This should match {{name}} in your EmailJS template,
                                    // or remove it if you don’t use {{name}}.
      title: 'Portfolio Subscription' // This should match {{title}} in your EmailJS template, if used.
    };

    // 5) Send the email via EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success('Thank you for subscribing!!', {
        position: "top-right",
        autoClose: 5000,
        theme: "colored"
      });
        emailRef.current.value = '';
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
              toast.error('Oops! Something went wrong. Please try again in a moment.', {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
        progressStyle: { background: "#d32f2f !important;" }
      });
      });
  };

  return (
    <div className="footer">
      <div className="footer-top">
        {/* Left section: Logo + Brief Text */}
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer logo" />
          <p>
            I have a strong passion for full‐stack development and competitive programming.
          </p>
        </div>

        {/* Right section: Email Input + Subscribe Button */}
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
              required
            />
          </div>

          {/* Using a div for consistent styling—could also be a <button> */}
          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Naveen Kammili. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
