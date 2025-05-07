import React, { useState } from 'react';
import '../templates/modern.scss'; // Import the SCSS file for styling
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import {
  FaHome, FaUser, FaTools, FaSchool,
  FaProjectDiagram, FaEnvelope
} from 'react-icons/fa';

function Modern({ data }) {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="modern-container">
      <Navbar setActiveSection={setActiveSection} />
      <div className="modern-content">
        {activeSection === 'home' && <Home data={data} />}
        {activeSection === 'about' && <About data={data} />}
        {activeSection === 'skills' && <Skills data={data} />}
        {activeSection === 'education' && <Education data={data} />}
        {activeSection === 'projects' && <Projects data={data} />}
        {activeSection === 'contact' && <Contact data={data} />}
      </div>
    </div>
  );
}

function Navbar({ setActiveSection }) {
  return (
    <nav className="modern-navbar">
      <ul>
        <li><a onClick={() => setActiveSection('home')}><FaHome /> Home</a></li>
        <li><a onClick={() => setActiveSection('about')}><FaUser /> About</a></li>
        <li><a onClick={() => setActiveSection('skills')}><FaTools /> Skills</a></li>
        <li><a onClick={() => setActiveSection('education')}><FaSchool /> Education</a></li>
        <li><a onClick={() => setActiveSection('projects')}><FaProjectDiagram /> Projects</a></li>
        <li><a onClick={() => setActiveSection('contact')}><FaEnvelope /> Contact</a></li>
      </ul>
    </nav>
  );
}
function Home({ data }) {
  return (
    <section className="modern-home-section">
      <motion.h1 style={{ textAlign: 'center' }} whileHover={{ scale: 1.1 }}>HOME</motion.h1>
      <div className="modern-profile-description">
        <div className="modern-profiles">
          <div className="modern-name">
            <div>
                <h1 >Hello!</h1>
                <h2 style={{marginLeft:"30px"}}>I'm {data.name}</h2>
              
            </div>
            <div className="modern-role">
              <h2 >{data.role}</h2>
              <p className="bio">{data.bio}</p>
            </div>
          </div>
        </div>
        <motion.div className="modern-profile-img">
          {data.image && (
            <img  whileHover={{ scale: 2.2 }}
            whileTap={{ scale: 2 }}
              src={URL.createObjectURL(data.image)}
              alt="Profile Preview"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}

function About({ data }) {
  return (
    <section className="modern-about-section">
       <motion.h1 style={{ textAlign: 'center' }} whileHover={{ scale: 1.1 }}>ABOUT</motion.h1>
      <p style={{textAlign:"justify"}}>{data.about}</p>
    </section>
  );
}
function Skills({ data }) {
  return (
    <section className="modern-skills-section">
      <motion.h1 style={{ textAlign: 'center' }} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        SKILLS
      </motion.h1>

      <ul className="modern-skills-list">
        {data.skills.map((skill, index) => (
          <motion.li
            className="modern-skill-item"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1, // Staggering the appearance of each skill
              type: 'spring',
              stiffness: 100,
              damping: 15
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
function Education({ data }) {
  return (
    <section className="modern-education-section">
 <motion.h1 style={{ textAlign: 'center' }} whileHover={{ scale: 1.1 }}>EDUCATION</motion.h1>
      <div className="modern-timeline">
        {data.education.map((edu, index) => (
          <div key={index} className="modern-timeline-item">
            <div className="modern-timeline-content">
              <h3>{edu.degree}</h3>
              <p><strong>{edu.institution}</strong> — {edu.year}</p>
              <p>CGPA: {edu.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Projects({ data }) {
  return (
    <section className="modern-projects-section">
      <motion.h1 
        style={{ textAlign: 'center', marginBottom: '2rem' }} 
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        PROJECTS
      </motion.h1>

      <div className="modern-masonry-grid">
        {data.projects.map((project, index) => (
          <motion.div
            className="modern-masonry-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {project.project_image && (
              <img
                src={URL.createObjectURL(project.project_image)}
                alt="Project Preview"
                className="modern-masonry-img"
              />
            )}
            <div className="modern-masonry-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="modern-masonry-tech"><strong>Tech:</strong> {project.technology}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
function Contact({ data }) {
  const { phone, email, address } = data.contact;

  return (
    <section className="modern-contact-section">
      <motion.h1 style={{ textAlign: 'center' }} whileHover={{ scale: 1.1 }}>CONTACTS</motion.h1>
      <div className="modern-contact-info">
        <div className="modern-contact-item">
          <strong>Phone:</strong>
          <p>{phone}</p>
        </div>
        <div className="modern-contact-item">
          <strong>Email:</strong>
          <p>{email}</p>
        </div>
        <div className="modern-contact-item">
          <strong>Address:</strong>
          <p>{address}</p>
        </div>
      </div>
    </section>
  );
}
export default Modern;
