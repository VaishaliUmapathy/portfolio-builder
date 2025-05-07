// src/components/TemplatePreview.jsx
import React from 'react';

export default function TemplatePreview({ templateName, data }) {
  return (
    <div className="template-preview-card">
      <h3>{templateName.charAt(0).toUpperCase() + templateName.slice(1)} Template</h3>
      <p><strong>Name:</strong> {data.name || 'N/A'}</p>
      <p><strong>Email:</strong> {data.email || 'N/A'}</p>
      {/* Add more summary fields if needed */}
    </div>
  );
}
