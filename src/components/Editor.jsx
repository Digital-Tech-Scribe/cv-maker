import React from 'react';

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <div className="editor-container">
      <textarea
        className="markdown-input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your Markdown CV here..."
        spellCheck="false"
      />
    </div>
  );
};

export default Editor;
