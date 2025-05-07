import React from 'react';
import '../SCSS/app.scss'
import '../SCSS/abstracts/button.scss'
import Footer from '../portfolio-ibm/Footer'

export default function About() {
  return (
    <section className="about-page">
      <div className="about-header">
        <h2>About Us</h2>
        <p>Learn more about what makes our Portfolio Builder special.</p>
      </div>

      <div className="about-content"> 
      <img src="home.jpeg" alt="about"/>
        <div>
                <div className="about-text">
                  <div className="section">
                    <h3>Our Mission</h3>
                    <p>
                      We empower creatives and professionals to showcase their skills with beautiful, customizable portfolios—no coding required. Our platform makes it easy for anyone to create a stunning portfolio in minutes.
                    </p>
                  </div>
                  <div className="section">
                    <h3>Our Story</h3>
                    <p>
                      Founded in 2025, we saw a growing need for a simple, powerful, and intuitive portfolio builder. We combined expertise in UX design, engineering, and community-driven feedback to create a seamless experience that lets you focus on showcasing your best work.
                    </p>
                  </div>
                  <div className="section">
                    <h3>Our Values</h3>
                    <ul>
                      <li><strong>Simplicity:</strong> A user-friendly platform that requires no coding skills.</li>
                      <li><strong>Creativity:</strong> Beautiful, customizable templates that let you make your portfolio truly yours.</li>
                      <li><strong>Speed:</strong> Launch your portfolio in minutes, not weeks.</li>
                      <li><strong>Support:</strong> We’re here to help you every step of the way with responsive customer service.</li>
                    </ul>
                  </div>
                </div>
        </div>
       
                
        </div>
<Footer/>
    </section>
  );
}
