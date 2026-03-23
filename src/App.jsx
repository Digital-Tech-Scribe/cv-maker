import { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Toolbar from './components/Toolbar';
import { sampleMarkdown } from './utils/sampleCV';
import './index.css';

function App() {
  const [markdown, setMarkdown] = useState(sampleMarkdown);
  const [theme, setTheme] = useState('modern');
  const previewRef = useRef(null);

  const handleLoadSample = () => setMarkdown(sampleMarkdown);
  const handleClear = () => setMarkdown('');
  
  const handleExportPdf = () => {
    const element = previewRef.current;
    if (!element) return;

    // Temporarily remove box shadow so it doesn't render across page breaks in the PDF
    const originalShadow = element.style.boxShadow;
    element.style.boxShadow = 'none';

    const opt = {
      margin:       [10, 0, 10, 0], // Reduced from 15mm to 10mm top/bottom to fit more content
      filename:     'my_cv.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      // Restore shadow after export
      element.style.boxShadow = originalShadow;
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Maker</h1>
        <div className="toolbar-wrapper">
          <Toolbar 
            onLoadSample={handleLoadSample} 
            onClear={handleClear} 
            onExportPdf={handleExportPdf}
            theme={theme}
            setTheme={setTheme}
          />
        </div>
      </header>
      
      <main className="split-pane">
        <section className="pane editor-pane">
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
        </section>
        
        <section className="pane preview-pane">
          <Preview markdown={markdown} theme={theme} previewRef={previewRef} />
        </section>
      </main>
    </div>
  );
}

export default App;
