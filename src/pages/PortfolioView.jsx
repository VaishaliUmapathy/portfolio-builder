// src/pages/PortfolioViewPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Minimalist from '../templates/Minimalist';
import Creative from '../templates/Creative';
import Bold from '../templates/Bold';
import Professional from '../templates/Professional';
import Artistic from '../templates/Artistic';
import Modern from '../templates/Modern';

export default function PortfolioViewPage() {
  const { userId } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!userId) return;
      const docRef = doc(db, 'users', userId);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data.isPublished) {
          setPortfolio(data);
        }
      }
    };
    fetchPortfolio();
  }, [userId]);

  if (!portfolio) return <div>Loading published portfolio...</div>;

  const { selectedTemplate, portfolioData } = portfolio;

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'minimalist': return <Minimalist data={portfolioData} />;
      case 'creative': return <Creative data={portfolioData} />;
      case 'bold': return <Bold data={portfolioData} />;
      case 'professional': return <Professional data={portfolioData} />;
      case 'artistic': return <Artistic data={portfolioData} />;
      case 'modern': return <Modern data={portfolioData} />;
      default: return <div>Template not found</div>;
    }
  };

  return (
    <div className="portfolio-view-page">
      {renderTemplate()}
    </div>
  );
}
