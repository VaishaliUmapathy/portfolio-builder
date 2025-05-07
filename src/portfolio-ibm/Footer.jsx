import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter,FaPhone } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
        <div className='footer'>
            <div className='copy-rights'>
                <h5 style={{fontSize:"15PX"}}>© 2025 <span>VaishaliUmapathy</span>. All Rights Reserved.</h5>
                <p>Portfolio Developed by me</p>
                <h2 className='foot-logo'>VAISHALI</h2>
            </div>
            <div>
                <h4>Address : Madurai</h4>
                <h4>PhoneNumber: 8148068802</h4>
            </div>
      
            <div className="quick-navigation">

                <h4>
                    <a href="#" target="_blank" rel="noopener noreferrer"><span>Home </span></a>
                </h4>
                <h4>
                    <a href="" target="_blank" rel="noopener noreferrer"> <span>About</span></a>
                </h4>
                <h4>
                    <a href=""><span>Certification</span></a>
                </h4>
                <h4>
                    <a href="" target="_blank" rel="noopener noreferrer">X (Twitter) <span>Projects</span></a>
                </h4>
                <h4>
                    <a href="">Contact <span>Contact</span></a>
                </h4>
            </div>
        </div>
        <div className="social-links">
                <h4>
                    <a href="https://github.com/VaishaliUmapathy" target="_blank" rel="noopener noreferrer"><span><FaGithub /></span></a>
                </h4>
                <h4>
                    <a href="https://www.linkedin.com/in/vaishaliumapathy/" target="_blank" rel="noopener noreferrer"><span><FaLinkedin /></span></a>
                </h4>
                <h4>
                    <a href="mailto:vaishaliumapathy@gmail.com"><span><FaEnvelope /></span></a>
                </h4>
                <h4>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><span><FaTwitter/></span></a>
                </h4>
                <h4>
                    <a href="tel:+1234567890"><span><FaPhone /></span></a>
                </h4>
        </div>
    </footer>
  )
}

export default Footer