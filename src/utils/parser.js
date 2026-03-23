import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Configure marked options
marked.setOptions({
  gfm: true, // Github Flavored Markdown
  breaks: true, // Add <br> on single line breaks
});

// Custom renderer to add specific CSS classes or alter HTML
const renderer = new marked.Renderer();

// Example: Style horizontal rules as clean dividers
renderer.hr = () => {
  return '<hr className="cv-divider" />\n';
};

marked.use({ renderer });

export const parseMarkdown = (markdownString) => {
  if (!markdownString) return '';
  
  // Parse markdown to HTML
  const rawHtml = marked.parse(markdownString);
  
  // Sanitize HTML to prevent XSS
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  
  return cleanHtml;
};
