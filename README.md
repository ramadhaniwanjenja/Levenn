# Levenn Website

A modern, responsive website for Levenn - empowering communities across Tanzania, East Africa, and Africa with innovative technologies in energy, security, and agriculture.

## Features

- **Modern Design**: Clean, professional design with Levenn's light blue brand colors
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Newsletter Subscription**: Built-in subscription functionality for community engagement
- **Contact Forms**: Professional contact forms with form validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom brand colors
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd levenn-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Hero.jsx        # Homepage hero section
│   └── Newsletter.jsx  # Newsletter subscription
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Products.jsx    # Products & services
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Brand Guidelines

### Colors
- **Primary Blue**: `#3b82f6` (Levenn's signature light blue)
- **Secondary**: Neutral grays for text and backgrounds
- **Accent Colors**: Used for different product categories

### Typography
- **Font**: Inter (modern, readable sans-serif)
- **Headings**: Bold weights for impact
- **Body Text**: Regular weight for readability

## Pages Overview

### Home Page
- Hero section with company mission
- Feature highlights for all products
- Impact statistics and goals
- Newsletter subscription

### About Page
- Detailed mission and vision
- Company values and principles
- Strategic objectives by focus area
- Leadership information

### Products Page
- Comprehensive overview of all solutions:
  - **Levpawa**: Clean energy systems
  - **LevKonnect**: Job platform for engineers
  - **LevSTEM**: STEM education programs
  - **Smart Agriculture**: IoT farming solutions
  - **AI Security**: Intelligent surveillance systems

### Contact Page
- Contact form with multiple inquiry types
- Company contact information
- Response time expectations
- Office location details

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for React Router (add `_redirects` file)

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure server to serve `index.html` for all routes

## Future Enhancements

Based on the SRS requirements, future phases may include:

- **Backend Integration**: Node.js/Express API for forms and subscriptions
- **Email Service**: Integration with SendGrid/Mailchimp
- **Content Management**: Admin interface for content updates
- **Analytics**: Google Analytics integration
- **SEO**: Enhanced meta tags and structured data
- **Performance**: Image optimization and lazy loading

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2025 Levenn. All rights reserved.

## Contact

For questions about this website or Levenn's services:
- Email: info@levenn.com
- Location: Dar es Salaam, Tanzania
