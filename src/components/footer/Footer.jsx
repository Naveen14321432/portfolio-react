import './Footer.css';
import footer_logo from '../../assets/logo.svg';
import user_icong from '../../assets/user_icon.svg';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt='footer'/>
            <p> I have a strong passion for full-stack development and competitive programming.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icong} alt=''/>
                <input type='email' placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Naveen Kammili. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
