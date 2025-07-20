# Find a Home in Las Vegas: Skye Summit Real Estate & New Homes

A professional real estate website showcasing Skye Summit properties in Las Vegas, featuring Dr. Jan Duffy's expertise and listings.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Property Listings**: Showcase of Skye Summit homes with search functionality
- **Expert Content**: Market insights and educational resources
- **Contact Integration**: Easy ways to connect with Dr. Jan Duffy
- **SEO Optimized**: Structured for search engine visibility

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with Font Awesome icons
- **Fonts**: Google Fonts (Montserrat)
- **Deployment**: Vercel (Static Site)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/DrJanDuffy/findahomeinlasvegas.git
   cd findahomeinlasvegas
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5000`

## Deployment

This project is configured for deployment on Vercel as a static site.

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the static site configuration
3. Deploy with the default settings

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Project Structure

```
findahomeinlasvegas/
├── public/             # Static site files (Vercel deployment)
│   ├── index.html      # Main HTML file
│   └── assets/         # Organized assets
│       ├── css/        # Stylesheets
│       │   └── styles.css
│       ├── js/         # JavaScript files
│       │   └── script.js
│       └── images/     # Image assets
├── server.js           # Local development server
├── package.json        # Project configuration
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Customization

### Colors
The site uses a professional color palette:
- Primary: #0A2540 (Dark Blue)
- Secondary: #3A8DDE (Blue)
- Accent: #16B286 (Green)
- Background: #F7F9FC (Light Gray)

### Content Updates
- Update property listings in the HTML
- Modify contact information in the footer
- Add new blog posts in the insights section

## Contact

**Dr. Jan Duffy, REALTOR®**  
Berkshire Hathaway HomeServices Nevada Properties  
Phone: (702) 555-0123  
Email: jan.duffy@bhhsnv.com  
Location: Las Vegas, Nevada

## License

MIT License - see LICENSE file for details. 