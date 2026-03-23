import React from 'react';
import { parseMarkdown } from '../utils/parser';

const Preview = ({ markdown, theme = 'modern', previewRef }) => {
  const htmlContent = parseMarkdown(markdown);

  return (
    <div className="cv-document" ref={previewRef}>
      {markdown ? (
        <div 
          className={`cv-content theme-${theme}`} 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
      ) : (
        <div className="empty-state">
          <p>Start typing or load a sample to see your CV.</p>
        </div>
      )}
    </div>
  );
};

export default Preview;
