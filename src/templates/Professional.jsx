import React, { useState } from 'react';
import '../templates/professional.scss';
import {
  FaHome, FaUser, FaTools, FaSchool,
  FaProjectDiagram, FaEnvelope
} from 'react-icons/fa';

function Professional({ data }) {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="professional-container">
      <Sidebar setActiveSection={setActiveSection} />
      <main className="professional-content">
        {activeSection === 'home' && <Home data={data} />}
        {activeSection === 'about' && <About data={data} />}
        {activeSection === 'skills' && <Skills data={data} />}
        {activeSection === 'education' && <Education data={data} />}
        {activeSection === 'projects' && <Projects data={data} />}
        {activeSection === 'contact' && <Contact data={data} />}
      </main>
    </div>
  );
}

function Sidebar({ setActiveSection }) {
  return (
    <nav className="professional-sidebar">
      <h2 className="brand">MyPortfolio</h2>
      <ul>
        <li onClick={() => setActiveSection('home')}><FaHome /> Home</li>
        <li onClick={() => setActiveSection('about')}><FaUser /> About</li>
        <li onClick={() => setActiveSection('skills')}><FaTools /> Skills</li>
        <li onClick={() => setActiveSection('education')}><FaSchool /> Education</li>
        <li onClick={() => setActiveSection('projects')}><FaProjectDiagram /> Projects</li>
        <li onClick={() => setActiveSection('contact')}><FaEnvelope /> Contact</li>
      </ul>
    </nav>
  );
}

function Home({ data }) {
  return (
    <section className="professional-home">
      <div className="text-zone">
        <h1>Hello, I'm <span>{data.name}</span></h1>
        <h2>{data.role}</h2>
        <p>{data.bio}</p>
      </div>
      <div className="image-zone">
        {data.image ? (
          <img src={URL.createObjectURL(data.image)} alt="Profile" />
        ) : (
          <div className="image-placeholder">No Image</div>
        )}
      </div>
    </section>
  );
}

function About({ data }) {
  return (
    <section className="professional-section">
      <h2>About Me</h2>
      <p>{data.about}</p>
    </section>
  );
}

function Skills({ data }) {
  return (
    <section className="professional-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  );
}

function Education({ data }) {
  return (
    <section className="professional-section">
      <h2>Education</h2>
      <div className="timeline">
        {data.education.map((edu, i) => (
          <div className="timeline-item" key={i}>
            <h3>{edu.degree}</h3>
            <span>{edu.institution} - {edu.year}</span>
            <p>CGPA: {edu.cgpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects({ data }) {
  return (
    <section className="professional-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {data.projects.map((proj, i) => (
          <div className="project-card" key={i}>
            {proj.project_image ? (
              <img src={URL.createObjectURL(proj.project_image)} alt="Project" />
            ) : (
              <div className="image-placeholder">No Image</div>
            )}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <span className="tech">{proj.technology}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ data }) {
  return (
    <section className="professional-section">
      <h2>Contact</h2>
      <p><strong>Phone:</strong> {data.contact.phone}</p>
      <p><strong>Email:</strong> {data.contact.email}</p>
      <p><strong>Address:</strong> {data.contact.address}</p>
    </section>
  );
}

export default Professional;
