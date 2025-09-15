# Dar Cape Tourism Website

A professional, modern, and fully responsive website for Dar Cape Tourism company built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

### Multi-language Support
- **Arabic (Default)**: Full RTL layout support
- **English**: LTR layout with seamless language switching
- Dynamic language toggle component

### Pages & Components
- **Home Page**: Hero section, services overview, testimonials, and CTA
- **About Us**: Company mission, vision, values, and team
- **Services**: Tourism packages with detailed descriptions and pricing
- **Gallery**: Photo and video galleries with lightbox functionality
- **Blog**: Dynamic blog system with categories and individual post pages
- **Contact**: Contact form, business information, and Google Maps integration

### Special Features
- **WhatsApp Business Integration**: Floating button on all pages
- **Google Maps**: Interactive map showing office location
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for enhanced user experience

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd dar_cape_website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Google Maps API Key (required for maps functionality)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# WhatsApp Business Number (update in WhatsAppButton component)
NEXT_PUBLIC_WHATSAPP_NUMBER=+27749548756

# Site URL for SEO
NEXT_PUBLIC_SITE_URL=https://www.darcape.com
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dar_cape_website/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── contact/
│   │   │   ├── gallery/
│   │   │   ├── services/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── services/
│   │   ├── seo/
│   │   └── ui/
│   ├── i18n.ts
│   └── middleware.ts
├── messages/
│   ├── ar.json
│   └── en.json
├── public/
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🔧 Configuration

### WhatsApp Business Setup
1. Update the phone number in `src/components/ui/WhatsAppButton.tsx`
2. Replace `+27749548756` with your actual WhatsApp Business number

### Google Maps Setup
1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the following APIs:
   - Maps JavaScript API
   - Places API
3. Add your API key to `.env.local`
4. Update the map location in `src/components/contact/MapSection.tsx`

### Content Management
Update content in the following locations:

#### Language Files
- `messages/ar.json` - Arabic translations
- `messages/en.json` - English translations

#### Images
Replace placeholder images with your actual content:
- Gallery photos
- Service images

#### Contact Information
Update contact details in:
- `src/components/layout/Footer.tsx`
- `src/components/contact/ContactInfo.tsx`
- `src/components/contact/MapSection.tsx`

#### Blog Posts
Add your blog content in:
- `src/app/[locale]/blog/[id]/page.tsx`
- `src/components/blog/BlogGrid.tsx`

## 🎨 Customization

### Colors & Branding
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Fonts
The website uses:
- **Arabic**: Noto Sans Arabic
- **English**: Inter

Update fonts in `src/app/globals.css` if needed.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Multi-language SEO**: Proper hreflang implementation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure environment variables
4. Set up domain

### Custom Server
1. Build the project: `npm run build`
2. Start the server: `npm start`
3. Configure reverse proxy (nginx/Apache)
4. Set up SSL certificate

## 🔐 Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
NEXT_PUBLIC_WHATSAPP_NUMBER=+27749548756
NEXT_PUBLIC_SITE_URL=https://www.darcape.com
```

## 📊 Performance

The website is optimized for:
- **Core Web Vitals**: Fast loading and interaction
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Proper cache headers for static assets

## 🛠 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (recommended)

## 📞 Support

For technical support or customization requests, contact:
- **Email**: developer@darcape.com
- **Phone**: +27749548756

## 📄 License

This project is proprietary software developed for Dar Cape Tourism.

---

**Built with ❤️ for Dar Cape Tourism**
