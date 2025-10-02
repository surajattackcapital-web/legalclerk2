# LegalClerk.ai - Next.js Website

A professional AI receptionist and legal answering service website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with black background and orange accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with Next.js 14 and optimized for search engines
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Reusable components for maintainable code

## 📁 Project Structure

```
legalclerk2/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── pricing/page.tsx         # Pricing page
│   ├── blog/page.tsx            # Blog page
│   ├── faqs/page.tsx            # FAQs page
│   ├── solutions/               # Solutions pages
│   │   ├── page.tsx
│   │   ├── ai-receptionist/page.tsx
│   │   ├── legal-intake/page.tsx
│   │   ├── 24-7-service/page.tsx
│   │   └── bilingual/page.tsx
│   ├── industries/              # Industry-specific pages
│   │   ├── page.tsx
│   │   ├── personal-injury/page.tsx
│   │   ├── criminal-defense/page.tsx
│   │   ├── family-immigration/page.tsx
│   │   └── general-practice/page.tsx
│   └── integrations/            # Integration pages
│       ├── page.tsx
│       ├── airtable/page.tsx
│       ├── zapier/page.tsx
│       ├── make/page.tsx
│       └── n8n/page.tsx
├── components/                   # Reusable components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   └── Layout.tsx               # Main layout wrapper
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── postcss.config.js            # PostCSS configuration
```

## 🎨 Design System

### Colors
- **Background**: #000000 (Black)
- **Primary**: #FFFFFF (White)
- **Secondary**: #F07E04 (Orange)
- **Text Primary**: #FFFFFF (White)
- **Text Secondary**: #F07E04 (Orange)
- **Border/Divider**: #E5E7EB (Light Gray)
- **Card Background**: #111111 (Dark Gray)

### Typography
- **Font Family**: RethinkSans (Google Fonts)
- **Responsive Font Sizes**: Desktop, Tablet, Mobile breakpoints
- **Font Weights**: Regular, Medium, Semibold, Bold

### Components
- **Buttons**: Primary (orange), Secondary (outline), with hover effects
- **Cards**: Dark background with rounded corners and hover animations
- **Forms**: Styled inputs with focus states and validation
- **Navigation**: Sticky header with mobile hamburger menu

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: ≥1024px
- **Tablet**: 768px - 1023px  
- **Mobile**: <768px

### Responsive Features
- Font sizes scale based on screen size
- Grid layouts collapse progressively
- Navigation becomes hamburger menu on mobile
- Buttons become full-width on mobile
- Hero sections stack vertically on smaller screens

## 🎯 SEO & Performance

- **Next.js 14**: Latest version with App Router
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Optimized CSS with purging
- **Responsive Images**: Optimized for different screen sizes
- **Semantic HTML**: Proper heading structure and accessibility
- **Meta Tags**: SEO-optimized meta descriptions and keywords

## 🔧 Customization

### Adding New Pages
1. Create a new folder in the `app/` directory
2. Add a `page.tsx` file with your component
3. Import and use the `Layout` component for consistency

### Modifying Styles
- Global styles: `app/globals.css`
- Component styles: Use Tailwind classes
- Custom CSS: Add to `globals.css` or create component-specific styles

### Adding Components
1. Create new components in the `components/` directory
2. Export as default and import where needed
3. Follow the existing component patterns

## 📄 Pages Overview

### Main Pages
- **Home**: Hero section, features, solutions preview, CTA
- **About**: Company mission, values, team, contact info
- **Contact**: Contact form, company information, quick response promise
- **Pricing**: Three pricing tiers, add-ons, FAQ section
- **Blog**: Blog post grid, featured post, newsletter signup
- **FAQs**: Categorized FAQ sections, contact information

### Solutions Pages
- **AI Receptionist**: Features, process, benefits, pricing preview
- **Legal Intake**: Automation features, workflow, integrations
- **24/7 Service**: Coverage types, features, security, pricing
- **Bilingual Support**: Cultural sensitivity, practice areas, benefits

### Industry Pages
- **Personal Injury**: Emergency response, accident documentation, success story
- **Criminal Defense**: Emergency types, security, confidentiality
- **Family & Immigration**: Bilingual features, cultural sensitivity, success story
- **General Practice**: Multi-practice support, flexibility, scalability

### Integration Pages
- **Airtable**: HIPAA compliance, workflow, setup process
- **Zapier**: 5000+ apps, popular workflows, automation benefits
- **Make**: Visual builder, advanced features, use cases
- **n8n**: Open source, custom development, self-hosted option

## 🚀 Deployment

The project is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

### Build for Production
```bash
npm run build
npm run start
```

## 📞 Support

For questions or support:
- **Email**: hello@legalclerk.ai
- **Phone**: 1-800-LEGAL-AI
- **Website**: [legalclerk.ai](https://legalclerk.ai)

## 📝 License

This project is proprietary software for LegalClerk.ai. All rights reserved.

---

Built with ❤️ for legal professionals who want to never miss another client call.
