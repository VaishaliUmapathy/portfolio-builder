import React, { useState } from 'react';
import '../templates/creative.scss'
import {
  FaHome, FaUser, FaTools, FaSchool,
  FaProjectDiagram, FaEnvelope
} from 'react-icons/fa';

function Creative({ data }) {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="creative-container">
      <Navbar setActiveSection={setActiveSection} />
      <div className="creative-content">
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
    <nav className="creative-navbar">
      <ul>
        <li><a onClick={() => setActiveSection('home')}><span><FaHome /></span>Home</a></li>
        <li><a onClick={() => setActiveSection('about')}><span><FaUser /></span>About</a></li>
        <li><a onClick={() => setActiveSection('skills')}><span><FaTools /></span>Skills</a></li>
        <li><a onClick={() => setActiveSection('education')}><span><FaSchool /></span>Education</a></li>
        <li><a onClick={() => setActiveSection('projects')}><span><FaProjectDiagram /></span>Projects</a></li>
        <li><a onClick={() => setActiveSection('contact')}><span><FaEnvelope /></span>Contact</a></li>
      </ul>
    </nav>
  );
}
function Home({data}){
  return (
    <section className='creative-home-section'>
      <h1 style={{textAlign:"center"}}>HOME</h1>
      <div className="creative-profile-description">
        <div className="creative-profiles">
            <div className="creative-name">
                <h2>Hi !</h2>
                <h1 >I am </h1>
                <h1 className='creative-name'>{data.name}</h1>
                <div className="creative-role">
              <h2 >{data.role}</h2>
              <p className="bio">{data.bio}</p>
            </div>
            </div>
           
        </div>
        <div className="creative-profile-img">
          {data.image && (
            <img
              src={URL.createObjectURL(data.image)}
              alt="Profile Preview"
            />
          )}
        </div>
      </div>
    </section>
  )
}
function About({ data }) {
  return <section className='creative-about-section'><h2 style={{textAlign:"center"}}>About</h2><p>{data.about}</p></section>;
}
function Skills({ data }) {
  return (
    <section className="creative-skills-section">
      <h2 className="creative-skills-title">Skills</h2>
      <ul className="creative-skills-list">
        {data.skills.map((skill, index) => (
          <li className="creative-skill-item" key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function Education({ data }) {
  return (
    <section className="creative-education-section">
      <h2 className="creative-education-title">Education</h2>
      <div className="creative-timeline">
        {data.education.map((edu, index) => (
          <div key={index} className="creative-timeline-item">
            <div className="creative-timeline-content">
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
    <section className="creative-projects-section">
      <h2 className="creative-projects-title">Projects</h2>
      <div className="creative-projects-grid">
        {data.projects.map((project, index) => (
          <div className="creative-project-card" key={index}>
             {project.project_image && ( <img
                src={URL.createObjectURL(project.project_image)}
                alt="Project Preview"
                className="projects__image"
              />)}
              
            <div className="creative-project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="creative-project-tech">
                <strong>Tech:</strong> {project.technology}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ data }) {
  const { phone, email, address } = data.contact;

  return (
    <section className="creative-contact-section">
      <h2 className="creative-contact-title">Contact</h2>
      <div className="creative-contact-info">
        <div className="creative-contact-item">
          <strong>Phone:</strong>
          <p>{phone}</p>
        </div>
        <div className="creative-contact-item">
          <strong>Email:</strong>
          <p>{email}</p>
        </div>
        <div className="creative-contact-item">
          <strong>Address:</strong>
          <p>{address}</p>
        </div>
      </div>
    </section>
  );
}


export default Creative;
