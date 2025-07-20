const fs = require('fs');
const path = require('path');

// Read index.html
const htmlPath = path.join(__dirname, 'public', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Remove any existing Vercel optimizations to avoid duplicates
const optimizationPatterns = [
    /<!-- Vercel Analytics.*?-->/gs,
    /<script defer src="\/_vercel\/insights\/script\.js"><\/script>/g,
    /<link rel="preload" href="assets\/css\/.*?\.css" as="style">/g,
    /<link rel="preload" href="assets\/js\/.*?\.js" as="script">/g,
    /<link rel="dns-prefetch" href="https:\/\/fonts\.googleapis\.com">/g,
    /<meta name="viewport" content="width=device-width, initial-scale=1\.0, viewport-fit=cover">/g,
    /<meta name="format-detection" content="telephone=no">/g,
    /<meta name="mobile-web-app-capable" content="yes">/g
];

// Clean existing optimizations
optimizationPatterns.forEach(pattern => {
    html = html.replace(pattern, '');
});

// Add Vercel-specific optimizations
const optimizations = `
    <!-- Vercel Analytics (optional) -->
    <script defer src="/_vercel/insights/script.js"></script>
    
    <!-- Preload critical resources -->
    <link rel="preload" href="assets/css/styles.css" as="style">
    <link rel="preload" href="assets/js/script.js" as="script">
    
    <!-- DNS prefetch for external resources -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    
    <!-- Viewport and mobile optimization -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    
    <!-- Performance hints -->
    <meta name="format-detection" content="telephone=no">
    <meta name="mobile-web-app-capable" content="yes">
`;

// Insert optimizations before closing head tag
html = html.replace('</head>', optimizations + '\n</head>');

// Write optimized HTML
fs.writeFileSync(htmlPath, html);
console.log('✅ HTML optimized for Vercel'); 