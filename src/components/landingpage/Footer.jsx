
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

import logo from '../../images/Logo.svg'
const Footer = () => {
  return (
    <footer id='footer'>
      <div className="section_container">
        <div className="footer_section">
          <div className="footer_logo">
            <a href="index.html">
              <img src={logo} alt="Coffee Logo" />
            </a>
          </div>
          <div className="useful_links">
            <h3>Useful Links</h3>
            <ul>
            <li><a href="#Home">Home</a></li>
                <li><a href="#Problem">Problem</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#collaborators">Collaborators</a></li>
                
            </ul> 
          </div>
          <div className="contact_us">
            <h3>Contact</h3>
            <ul>
              <li>
                <i className="bx bx-current-location"></i>
                <span>Juja ,Kenya</span>
              </li>
              <li>
                <i className="bx bxs-phone-call"></i> <span>+254701071662</span>
              </li>
              <li>
                <i className="bx bxs-time-five"></i>
                
              </li>
            </ul>
          </div>
        </div>
        <div className="follow_us">
            <h3>Follow</h3>
            {/* <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-instagram-alt"></i> */}

            <a href= "https://github.com/J-Thumi">   <FaGithub /></a>
            <a href="https://www.instagram.com/__thumi/">   <FaInstagram /></a>
            <a href="https://www.linkedin.com/in/josphat-thumi-0b0795308/">   <FaLinkedin /></a>
          </div>
      </div>
    </footer>
 
  )
}

export default Footer
