import React from 'react';
import {useRef} from 'react';
import '../SCSS/abstracts/minimalist.scss';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
};

function Minimalist({ data }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <section className="minimalist-container">
      <Navabar
        data={data}
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        educationRef={educationRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Home data={data} homeRef={homeRef} />
      <About data={data} aboutRef={aboutRef} />
      <Skills data={data} skillsRef={skillsRef} />
      <Education data={data} educationRef={educationRef} />
      <Projects data={data} projectsRef={projectsRef} />
      <Contact data={data} contactRef={contactRef} />
      <Footer data={data} />
      <Footer data={data} />
    </section>
  );
}
function Navabar({ data, homeRef, aboutRef, skillsRef, educationRef, projectsRef, contactRef }) {
  function scrollToSection(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <nav className="navbar">
      <ul>

      <li><button onClick={() => scrollToSection(homeRef)}>Home</button></li>
      <li><button onClick={() => scrollToSection(aboutRef)}>About</button></li>
      <li><button onClick={() => scrollToSection(skillsRef)}>Skills</button></li>
      <li><button onClick={() => scrollToSection(educationRef)}>Education</button></li>
      <li><button onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
      <li><button onClick={() => scrollToSection(contactRef)}>Contact</button></li>

      </ul>
    </nav>
  );
}

function Home({ data, homeRef }) {
  // Convert socialLinks object to array
  const socialLinksArray = Object.entries(data.socialLinks || {})
    .filter(([_, url]) => url && url.trim() !== '')
    .map(([platform, url]) => ({ platform, url }));

  return (
    <div className="home-section" ref={homeRef}>
      <div className="profile-description">
        <h1 className="name">{data.name}</h1>
        <h2 className="role">{data.role}</h2>
        <p className="bio">{data.bio}</p>

        <div className="social-media-links">
          <h2>Connect with me:</h2>
          <ul>
            {socialLinksArray.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {iconMap[link.platform.toLowerCase()]} {link.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mini-profile-photo">
        {data.image && (
          <img
            src={URL.createObjectURL(data.image)}
            alt="Profile Preview"
          />
        )}
      </div>
    </div>
  );
}



function About({ data,aboutRef }) {
  return (
    <div className="about-section" ref={aboutRef}>
      <h2>About</h2>
      <p>{data.bio}</p>
      <p>{data.about}</p>
    </div>
  );
}

function Skills({ data, skillsRef }) {
  return (
    <div className="skills-section" ref={skillsRef}>
      <h2>Skills</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Education({ data, educationRef }) {
  if (!data || !Array.isArray(data.education)) {
    return <div className="education__empty">No education data provided.</div>;
  }

  return (
    <section className="education" ref={educationRef}>
      <h2 className="education__title">Education</h2>
      <div className="education__grid">
        {data.education.map((edu, index) => (
          <div key={index} className="education__card">
            <div className="education__top">
              {edu.type && <h3 className="education__type">{edu.type}</h3>}
              {edu.year && <span className="education__year">{edu.year}</span>}
            </div>
            <div className="education__details">
              {edu.degree && <p><strong>Degree:</strong> {edu.degree}</p>}
              {edu.institution && <p><strong>Institution:</strong> {edu.institution}</p>}
              {edu.school && <p><strong>School:</strong> {edu.school}</p>}
              {edu.cgpa && <p><strong>CGPA:</strong> {edu.cgpa}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



function Projects({ data, projectsRef }) {
  if (!data || !Array.isArray(data.projects)) {
    return <div className="projects__empty">No project data provided.</div>;
  }

  return (
    <section className="projects" ref={projectsRef}>
      <h2 className="projects__title">Projects</h2>
      <div className="projects__grid">
        {data.projects.map((project, index) => (
          <div key={index} className="projects__card">
            {project.project_image && (
              <div className="projects__image-container">
                 <img
                src={URL.createObjectURL(project.project_image)}
                alt="Project Preview"
                className="projects__image"
              />
              </div>
             
            )}
            <div className="projects__content">
              <h3 className="projects__name">{project.title}</h3>
              <p className="projects__description">{project.description}</p>
              <p className="projects__tech"><strong>Tech:</strong> <span>{project.technology}</span></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Contact({ data, contactRef }) {
  return (
    <>
     
     <div className="contact-section" ref={contactRef}>
     <div> 
     <h2 style={{textAlign:"center"}}>Contact</h2>
     </div>
      <div className="contact-info">
        <div className="contact-item">
          <h3 className="contact-phone">{data.contact.phone}</h3>
        </div>
        <div className="contact-item">
          <h4 className="contact-email">{data.contact.email}</h4>
        </div>
        <div className="contact-item">
          <h4 className="contact-address">{data.contact.address}</h4>
        </div>
      </div>
    </div>
    </>
   
  );
}



function Footer({ data }) {
  return (
    <footer className="footer-section">
      <p>&copy; 2023 Minimalist Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Minimalist;
