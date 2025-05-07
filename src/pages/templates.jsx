import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../SCSS/templates.scss';  
import { db } from '../firebase'; // import Firestore
import { doc, setDoc } from 'firebase/firestore';
import { auth } from '../firebase'; // import auth
const templates_array = [
  {
    id: 'minimalist',
    name: 'Minimalist',
    image: '/avatars/minimalist.png',
    description: 'A clean and modern design for a professional look.',
    category: 'Business',
    tags: ['clean', 'simple', 'professional'],
    routeParam: 'minimalist',
    price:"$6"
  },
  {
    id: 'creative',
    name: 'Creative',
    image: '/avatars/creative.png',
    description: 'A bold and colorful design to showcase your creativity.',
    category: 'Creative',
    tags: ['colorful', 'bold', 'artistic'],
    routeParam: 'creative',
    price:"$8"
  },
  {
    id: 'professional',
    name: 'Professional',
    image: '/avatars/professional.png',
    description: 'A sleek and polished template for business portfolios.',
    category: 'Business',
    tags: ['corporate', 'elegant', 'formal'],
    routeParam: 'professional',
    price:"$9.5"
  },
  {
    id: 'modern',
    name: 'Modern',
    image: '/avatars/modern.png',
    description: 'A contemporary design with a focus on visuals and branding.',
    category: 'Creative',
    tags: ['visual', 'branding', 'sleek'],
    routeParam: 'modern',
    price:"$10"
  },
  {
    id: 'artistic',
    name: 'Artistic',
    image: '/avatars/minimalist.png',
    description: 'An artistic and expressive layout to showcase your creative work.',
    category: 'Art',
    tags: ['expressive', 'creative', 'colorful'],
    routeParam: 'artistic',
    price:"$15"
  },
  {
    id: 'bold',
    name: 'Bold',
    image: '/avatars/minimalist.png',
    description: 'A bold design with strong visuals and an impactful layout.',
    category: 'Creative',
    tags: ['impactful', 'strong', 'modern'],
    routeParam: 'bold',
    price:"$20"
  },
];

function Templates() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredTemplates, setFilteredTemplates] = useState(templates_array);

  useEffect(() => {
    const filtered = templates_array.filter(template =>
      template.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      template.name.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
    );
    setFilteredTemplates(filtered);
  }, [selectedCategory]);

  return (
    <div>
      <section className='templates-section'>
        <div className="templates-container">
          <div className="templates-header">
            <h1>Templates</h1>
            <p>Choose a template to start building your portfolio.</p>
            <TemplateSearch query={selectedCategory} queryset={setSelectedCategory} />
          </div>
          <TemplateCard template={filteredTemplates} />
        </div>
      </section>
    </div>
  );
}

function TemplateSearch({template,query,queryset}) {

return(
  <div className="templates-search">
  <input type="search" name="search" id="search"  placeholder="Search by name, category, or tag..." value={query} onChange={(e)=>queryset(e.target.value)}/>
  
  <button className="btn">Search</button>
</div>
)
}
function TemplateCard({ template }) {

  const handleTemplateSelection = async (template, e) => {
    const priceNum = parseFloat(template.price.replace('$', ''));
  
    if (priceNum > 10) {
      e.preventDefault(); // Prevent navigation
      alert('This is a premium template. Please upgrade to use it.');
      return;
    }
  
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      const templateRef = doc(db, 'users', userId, 'templates', template.id);
      try {
        await setDoc(templateRef, { templateId: template.id, ...template });
        console.log('Template saved successfully!');
      } catch (error) {
        console.error('Error saving template:', error);
      }
    }
  };
  
  return (
    <div className="template-cards">
      {
        template.map(template => (
          <div className="template-card" key={template.name}  >
            <div className='template-photo'> <img src={template.image} alt={template.name}/> </div>
            <h2>{template.name} {template.price}</h2>
            <div className='template-info'>
              <p>{template.description}</p>
              <p>{template.tags.map(tag => (<span className="tag" key={tag}>{tag}</span>))}</p>
             
              <Link 
                    to={`/builder/${template.id}`} 
                    className="btn" 
                    onClick={(e) => handleTemplateSelection(template, e)}
                  >
                    Use this template
                  </Link>


            </div>
          </div>
        ))
      }
     
    </div>
  );
}

export default Templates