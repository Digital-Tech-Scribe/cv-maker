import React from 'react';
import { FileText, Trash2, Printer, Palette } from 'lucide-react';

const Toolbar = ({ onLoadSample, onClear, onExportPdf, theme, setTheme }) => {
  return (
    <div className="toolbar-container">
      <div className="theme-selector-wrapper">
        <Palette size={16} className="theme-icon" />
        <select 
          className="theme-selector" 
          value={theme} 
          onChange={(e) => setTheme(e.target.value)}
          title="Select CV Theme"
        >
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
          <option value="professional">Professional</option>
        </select>
      </div>

      <div className="toolbar-divider"></div>

      <button onClick={onLoadSample} className="toolbar-btn" title="Load Sample CV">
        <FileText size={16} />
        <span>Load Sample</span>
      </button>
      
      <button onClick={onClear} className="toolbar-btn" title="Clear Editor">
        <Trash2 size={16} />
        <span>Clear</span>
      </button>
      
      <button onClick={onExportPdf} className="toolbar-btn primary" title="Export to PDF">
        <Printer size={16} />
        <span>Export PDF</span>
      </button>
    </div>
  );
};

export default Toolbar;
