import React from 'react';
import '../SCSS/abstracts/bold.scss';


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

function Bold({ data }) {
  return (
    <section className="minimalist-container">
      <Navabar data={data} />
      <Home data={data} />
      <About data={data} />
      <Skills data={data} />
      <Education data={data} />
      <Projects data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </section>
  );
}
function Navabar() {
  return (
    <aside className="navbar">
      <ul>

        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </aside>
  );
}

function Home({ data }) {
 
  const socialLinksArray = Object.entries(data.socialLinks || {})
    .filter(([_, url]) => url && url.trim() !== '')
    .map(([platform, url]) => ({ platform, url }));

  return (
    <div className="home-section">
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



function About({ data }) {
  return (
    <div className="about-section">
      <h2>About</h2>
      <p>{data.bio}</p>
      <p>{data.about}</p>
    </div>
  );
}

function Skills({ data }) {
  const getColor = (percent) => {
    if (percent >= 85) return '#A06CD5';
    if (percent >= 70) return '#4B72A6';
    return '#F67280';
  };

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index} data-skill={`${skill.name} - ${skill.percentage}%`}>
            <div className="skill-bar">
              <div
                className="filled"
                style={{
                  width: `${skill.percentage}%`,
                  backgroundColor: getColor(skill.percentage),
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


function Education({ data }) {
  if (!data || !Array.isArray(data.education)) {
    return <div className="education__empty">No education data provided.</div>;
  }

  return (
    <section className="education">
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



function Projects({ data }) {
  if (!data || !Array.isArray(data.projects)) {
    return <div className="projects__empty">No project data provided.</div>;
  }

  return (
    <section className="projects">
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


function Contact({ data }) {
  return (
    <>
     
     <div className="contact-section">
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




export default Bold;
