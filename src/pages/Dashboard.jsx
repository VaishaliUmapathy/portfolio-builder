// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import Minimalist from '../templates/Minimalist';
import Creative from '../templates/Creative';
import Bold from '../templates/Bold';
import Professional from '../templates/Professional';
import Artistic from '../templates/Artistic';
import Modern from '../templates/Modern';
import '../SCSS/abstracts/button.scss'
import TemplatePreview from '../pages/TemplatePreview';

import '../SCSS/dashboard.scss';
export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) return <div className="loading">Loading your dashboard…</div>;
  if (error) return <div className="error">Error: {error.message}</div>;
  if (!user) return <div className="error">You must be logged in to view this page.</div>;
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {user.displayName || user.email}!</h1>
        <p>What would you like to do today?</p>
      </header>
     
      <nav className="dashboard-nav">
        <Link to="/templates" className="btn">Choose a Template</Link>
        <Link to="/templates" className="btn">Create New Portfolio</Link>
        <Link to="/account" className="btn">Manage Account</Link>
      </nav>
      <section className="published-portfolio">
   
        <SaveBoards />
      </section>
    </div>
  );
}

function SaveBoards() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, 'users', userId);
        try {
          const docSnapshot = await getDoc(userDocRef);
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            console.log("Fetched portfolio:", data); // 🔍 Log here
            if (data.isPublished) {
              setPortfolio(data);
            }
          }
        } catch (error) {
          console.error('Error fetching portfolio:', error);
        }
      }
      setLoading(false);
    };
  
    fetchPortfolio();
  }, []);
  

  if (loading) return <div>Loading portfolio...</div>;

  return (
    <div className="portfolio-view">  {portfolio ? (
      <div className="published-portfolio" style={{border: '1px solid #ccc', padding: '20px', borderRadius: '8px'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
           
            <p className="template-info">
              <strong>Template:</strong> {portfolio.selectedTemplate}
            </p>
            <p className="publish-date">
              <strong>Published on:</strong> {new Date(portfolio.publishedAt).toLocaleDateString()}
            </p>
        </div>
        
  
        <TemplatePreview
          templateName={portfolio.selectedTemplate}
          data={portfolio.portfolioData}
        />
  
        <Link to={`/portfolio-view/${auth.currentUser.uid}`} className="btn view-portfolio-btn">
          View Published Portfolio
        </Link>
  
       
        <p className="link-to-portfolio">
        
          <a href={`/portfolio-view/${auth.currentUser.uid}`} target="_blank" rel="noopener noreferrer">
            {`/portfolio-view/${auth.currentUser.uid}`}
          </a>
        </p>
        <p className="share-info">Copy the link above to share your portfolio with others.</p>
      </div>
    ) : (
      <div className="no-portfolio">
        No published portfolio found.
      </div>
    )}
  </div>
  
  );
  
}
function renderTemplateBasedOnTemplateName(templateName, data) {
  switch (templateName) {
    case 'minimalist':
      return <Minimalist data={data} />;
    case 'creative':
      return <Creative data={data} />;
    case 'bold':
      return <Bold data={data} />;
    case 'professional':
      return <Professional data={data} />;
    case 'artistic':
      return <Artistic data={data} />;
    case 'modern':
      return <Modern data={data} />;
    default:
      return <div>No template selected.</div>;
  }
}
