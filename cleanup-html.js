const fs = require('fs');
const path = require('path');

// Read index.html
const htmlPath = path.join(__dirname, 'public', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Remove multiple consecutive empty lines
html = html.replace(/\n\s*\n\s*\n/g, '\n\n');

// Remove empty lines with only whitespace
html = html.replace(/^\s*$/gm, '');

// Remove multiple consecutive empty lines again
html = html.replace(/\n\s*\n\s*\n/g, '\n\n');

// Write cleaned HTML
fs.writeFileSync(htmlPath, html);
console.log('✅ HTML cleaned up'); 