import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Minimalist from '../templates/Minimalist';
import Creative from '../templates/Creative';
import Bold from '../templates/Bold';
import Professional from '../templates/Professional';
import Artistic from '../templates/Artistic';
import Modern from '../templates/Modern';
import '../SCSS/builder.scss';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from '../firebase'; // adjust path if needed

import { FaUser, FaTools, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Builder() {
  const db = getFirestore();

  const { templateId } = useParams();
  const navigate = useNavigate();
  const [section, setSection] = useState('personal');
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    role:'',
    image: '',
    about: '',
    socialLinks: {
      github: '',
      linkedin: '',
      twitter: '',
      facebook: '',
      instagram: ''
    },
    skills: [''],
    experience: [{ title: '', company: '', duration: '', description: '' }],
    projects: [{title: '',description: '',project_image: '',technology: '' } ],
    education: [
      { type: '', degree: '', institution: '', school: '', year: '', cgpa: '' }
    ],
    contact: { phone: '', email: '', address: '' }
  });
  useEffect(() => {
    const fetchData = async () => {
      const user = getAuth().currentUser;
      if (!user) return;
  
      try {
        const docRef = doc(db, "portfolios", user.uid);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData(data.formData); // populate form
          // Optional: setTemplateId(data.templateId);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
  
    fetchData();
  }, []);


  
  const renderTemplatePreview = () => {
    switch (templateId) {
      case 'minimalist': return <Minimalist data={formData} />;
      case 'creative': return <Creative data={formData} />;
      case 'bold': return <Bold data={formData} />;
      case 'professional': return <Professional data={formData} />;
      case 'artistic': return <Artistic data={formData} />;
      case 'modern': return <Modern data={formData} />;
      default: return <div>Select a valid template to preview.</div>;
    }
  };
  
const handleSave = async () => {
  const user = getAuth().currentUser;
  if (!user) {
    alert("Please log in to save your data.");
    return;
  }

  try {
    await setDoc(doc(db, "portfolios", user.uid), {
      formData,
      templateId
    });
    alert("Portfolio saved successfully!");
  } catch (error) {
    console.error("Error saving portfolio:", error);
    alert("Failed to save portfolio.");
  }
};
  function handlePreview() {
    navigate('/preview', {
      state: {
        data: formData,
        template: templateId
      }
    });
  }
  return (
    <div className="builder-page">
      <aside className="sidebar">
        <h2>Builder Menu</h2>
        <ul>
          {[{ key: 'personal', label: 'Personal', icon: <FaUser /> },
            { key: 'about', label: 'About', icon: <FaUser /> },
            { key: 'skills', label: 'Skills', icon: <FaTools /> },
            { key: 'experience', label: 'Experience', icon: <FaBriefcase /> },
            { key: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
            { key: 'education', label: 'Education', icon: <FaGraduationCap /> },
            { key: 'contact', label: 'Contact', icon: <FaEnvelope /> }].map((item) => (
            <li key={item.key} onClick={() => setSection(item.key)} className={section === item.key ? 'active' : ''}>
              <span style={{ marginRight: '8px' }}>{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </aside>

      <main className="builder-form">
        <h1>Edit Your Portfolio</h1>
        <form className="form">
          {section === 'personal' && (
            <>
              <div className="input-container">
                  <div>
                    <label>Name:</label>
                    <input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                  </div>

                  <div>
                    <label>Role:</label>
                    <input name="role"value={formData.role}onChange={(e) => setFormData({ ...formData, role: e.target.value })}/>
                  </div>

                  <div>
                    <label>Image:</label>
                    <input type="file"accept="image/*"onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}/>
                  </div>
                 
              </div>
              <label>Social Links:</label>
              <div className="input-container">
              
                  <div className="social-links">
                    
                    <input type="text" placeholder="GitHub"value={formData.socialLinks.github}onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, github: e.target.value } })}/>
                    <input type="text"placeholder="LinkedIn"value={formData.socialLinks.linkedin}onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, linkedin: e.target.value }})}
                    />
                    <input type="text" placeholder="Twitter"value={formData.socialLinks.twitter}onChange={(e) => setFormData({   ...formData, socialLinks: { ...formData.socialLinks, twitter: e.target.value }})}
                    />
                    <input type="text" placeholder="Facebook"value={formData.socialLinks.facebook}onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, facebook: e.target.value }})}/>
                    <input type="text"placeholder="Instagram"value={formData.socialLinks.instagram}onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, instagram: e.target.value }})} />
                  </div>
              </div>
            </>
          )}

          {section === 'about' && (
            <>
                <div className="input-container">
                  <div>
                    <label>Bio:</label>
                    <textarea name="bio"value={formData.bio}onChange={(e) => setFormData({ ...formData, bio: e.target.value })}/>
                  </div>
                </div>
                <div className='input-container'>
                  <div>
                    <label>About:</label>
                    <textarea name="about"value={formData.about}onChange={(e) => setFormData({ ...formData, about: e.target.value })}/>
                  </div>
                  
                </div>
            </>
          )}

          {section === 'skills' && (
            <>
              <label>Skills:</label>
              {formData.skills.map((skill, i) => (
                <input
                  key={i}
                  value={skill}
                  onChange={(e) => {
                    const newSkills = [...formData.skills];
                    newSkills[i] = e.target.value;
                    setFormData({ ...formData, skills: newSkills });
                  }}
                />
              ))}
              <button type="button" onClick={() => setFormData({ ...formData, skills: [...formData.skills, ''] })}>Add Skill</button>
            </>
          )}

          {section === 'experience' && (
            <>
              {formData.experience.map((exp, i) => (
                <div key={i} className="experience-block">
                  <div className="input-container">
                      <input
                        placeholder="Job Title"
                        value={exp.title}
                        onChange={(e) => {
                          const updated = [...formData.experience];
                          updated[i].title = e.target.value;
                          setFormData({ ...formData, experience: updated });
                        }}
                      />
                      <input
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) => {
                          const updated = [...formData.experience];
                          updated[i].company = e.target.value;
                          setFormData({ ...formData, experience: updated });
                        }}
                      />
                      <input
                        placeholder="Duration"
                        value={exp.duration}
                        onChange={(e) => {
                          const updated = [...formData.experience];
                          updated[i].duration = e.target.value;
                          setFormData({ ...formData, experience: updated });
                        }}
                      />
                      <textarea
                        placeholder="Description"
                        value={exp.description}
                        onChange={(e) => {
                          const updated = [...formData.experience];
                          updated[i].description = e.target.value;
                          setFormData({ ...formData, experience: updated });
                        }}
                      />
                       <button
                          type="button"
                          onClick={() => {
                            const updated = formData.experience.filter((_, index) => index !== i);
                            setFormData({ ...formData, experience: updated });
                          }} style={{display:"flex",justifyContent:"center",alignItems:"center", backgroundColor: 'red',width:"50px",height :"50px", color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}
                        >
                         ❌
                      </button>
                  </div>
                  <div className="input-container">
                 
                  </div>
                  
                
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    experience: [...formData.experience, { title: '', company: '', duration: '', description: '' }]
                  })
                }
              >
                Add Experience
              </button>
            </>
          )}


          {section === 'projects' && (
            <>
              {formData.projects.map((proj, i) => (
           
                <div key={i}>
                       <div className="input-container">
                          <input placeholder="Project Title" value={proj.title} onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[i].title = e.target.value;
                            setFormData({ ...formData, projects: updated });
                          }} />
                          <input placeholder="Project Link" value={proj.link} onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[i].link = e.target.value;
                            setFormData({ ...formData, projects: updated });
                          }} />
                        </div>
                 
                 
                  <div className="input-container">
                      <textarea placeholder="Description" value={proj.description} onChange={(e) => {
                        const updated = [...formData.projects];
                        updated[i].description = e.target.value;
                        setFormData({ ...formData, projects: updated });
                      }} />
                      <input type="file" accept="image/*" onChange={(e) => {
                        const updated = [...formData.projects];
                        updated[i].project_image = e.target.files[0];
                        setFormData({ ...formData, projects: updated });
                      }} />
                      <input placeholder="Technology" value={proj.technology} onChange={(e) => {
                        const updated = [...formData.projects];
                        updated[i].technology = e.target.value;
                        setFormData({ ...formData, projects: updated });
                      }} />
                  </div>
                 
                </div>
              ))}
              <button type="button" onClick={() => setFormData({ ...formData, projects: [...formData.projects, { title: '', link: '', description: '' }] })}>Add Project</button>
            </>
          )}

{section === 'education' && (
  <>
    {formData.education.map((edu, i) => (
            <div key={i}>
              <div className="input-container">
                  <input 
                    placeholder="Education Type (UG/PG/SSLC/HSC)" 
                    value={edu.type} 
                    onChange={(e) => {
                      const updated = [...formData.education];
                      updated[i].type = e.target.value;
                      setFormData({ ...formData, education: updated });
                    }} 
                  />
                  <input 
                    placeholder="Degree" 
                    value={edu.degree} 
                    onChange={(e) => {
                      const updated = [...formData.education];
                      updated[i].degree = e.target.value;
                      setFormData({ ...formData, education: updated });
                    }} 
                  />
                  <input 
                      placeholder="Year of Graduation" 
                      value={edu.year} 
                      onChange={(e) => {
                        const updated = [...formData.education];
                        updated[i].year = e.target.value;
                        setFormData({ ...formData, education: updated });
                      }} 
                    />
              </div>
              <div className="input-container">
                    <input 
                      placeholder="Institution" 
                      value={edu.institution} 
                      onChange={(e) => {
                        const updated = [...formData.education];
                        updated[i].institution = e.target.value;
                        setFormData({ ...formData, education: updated });
                      }} 
                    />
                    <input 
                      placeholder="School" 
                      value={edu.school} 
                      onChange={(e) => {
                        const updated = [...formData.education];
                        updated[i].school = e.target.value;
                        setFormData({ ...formData, education: updated });
                      }} 
                    />
                    
                    <input 
                      placeholder="CGPA" 
                      value={edu.cgpa} 
                      onChange={(e) => {
                        const updated = [...formData.education];
                        updated[i].cgpa = e.target.value;
                        setFormData({ ...formData, education: updated });
                      }} 
                    />
              </div>
             
              
            </div>
          ))}
          <button 
            type="button" 
            onClick={() => setFormData({ ...formData, education: [...formData.education, { type: '', degree: '', institution: '', school: '', year: '', cgpa: '' }] })}
          >
            Add Education
          </button>
        </>
      )}

          {section === 'contact' && (
            <>
              <input placeholder="Phone" value={formData.contact.phone} onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, phone: e.target.value } })} />
              <input placeholder="Email" value={formData.contact.email} onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, email: e.target.value } })} />
              <textarea placeholder="Address" value={formData.contact.address} onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, address: e.target.value } })} />
            </>
          )}
        </form>

        <div className="action-buttons">
          <button className="btn save" onClick={handleSave}>Save</button>

          <button className="btn preview" onClick={handlePreview}>Preview</button>
          <button className="btn publish">Publish</button>
        </div>
      </main>
    </div>
  );
}
