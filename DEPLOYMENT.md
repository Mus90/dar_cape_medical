# Deployment Guide - Cape Home Tourism Website

This guide covers deployment options for the Cape Home Tourism website built with Next.js 14.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest deployment option for Next.js applications.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/cape-home-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Configure environment variables:
     - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`
     - `NEXT_PUBLIC_SITE_URL`
   - Click "Deploy"

3. **Custom Domain**
   - Go to Project Settings → Domains
   - Add `capehome.co.za`
   - Configure DNS records as instructed

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

3. **Configure Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add your environment variables

4. **Custom Domain**
   - Go to Domain Settings
   - Add custom domain `capehome.co.za`

### Option 3: Traditional Hosting

For shared hosting or VPS deployment:

1. **Build the project**
   ```bash
   npm run build
   npm run export  # If using static export
   ```

2. **Upload files**
   - Upload the `out` folder contents to your web server
   - Configure your web server (Apache/Nginx)

## 🔧 Environment Variables Setup

Create these environment variables in your deployment platform:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key
NEXT_PUBLIC_WHATSAPP_NUMBER=+27123456789
NEXT_PUBLIC_SITE_URL=https://capehome.co.za
NEXT_PUBLIC_CONTACT_EMAIL=info@capehome.co.za
```

## 🗺️ Google Maps API Setup

1. **Get API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable these APIs:
     - Maps JavaScript API
     - Places API
     - Geocoding API

2. **Configure API Key**
   - Set HTTP referrers restriction
   - Add your domain: `capehome.co.za/*`
   - Add localhost for development: `localhost:3000/*`

3. **Update Map Location**
   - Edit `src/components/contact/MapSection.tsx`
   - Update coordinates for your actual office location
   - Replace placeholder address with real address

## 📱 WhatsApp Business Integration

1. **Get WhatsApp Business Number**
   - Set up WhatsApp Business account
   - Verify your business number

2. **Update Components**
   - Replace `+27123456789` in `src/components/ui/WhatsAppButton.tsx`
   - Update contact information in footer and contact page

## 🔍 SEO Configuration

1. **Update Site Information**
   - Edit `src/app/[locale]/layout.tsx` metadata
   - Update `src/app/sitemap.ts` with actual URLs
   - Verify `src/components/seo/StructuredData.tsx` information

2. **Submit to Search Engines**
   - Google Search Console: Submit sitemap
   - Bing Webmaster Tools: Submit sitemap
   - Verify structured data with Google's Rich Results Test

## 📊 Analytics Setup (Optional)

1. **Google Analytics**
   - Create GA4 property
   - Add tracking ID to environment variables
   - Install analytics component if needed

2. **Google Tag Manager**
   - Set up GTM container
   - Add GTM script to layout

## 🔒 Security Considerations

1. **HTTPS Certificate**
   - Ensure SSL certificate is installed
   - Redirect HTTP to HTTPS

2. **Security Headers**
   - Headers are configured in `vercel.json` and `netlify.toml`
   - Includes XSS protection, content type options, etc.

3. **Environment Variables**
   - Never commit `.env` files to version control
   - Use platform-specific environment variable settings

## 🚨 Pre-Deployment Checklist

- [ ] Replace all placeholder content with actual business information
- [ ] Update contact information (phone, email, address)
- [ ] Replace placeholder images with actual photos
- [ ] Configure Google Maps API key
- [ ] Set up WhatsApp Business number
- [ ] Test all forms and functionality
- [ ] Verify responsive design on all devices
- [ ] Test language switching functionality
- [ ] Check all links and navigation
- [ ] Optimize images for web
- [ ] Test loading speed and performance
- [ ] Verify SEO metadata on all pages

## 🔄 Post-Deployment Tasks

1. **Test Everything**
   - All pages load correctly
   - Forms submit properly
   - Maps display correctly
   - WhatsApp button works
   - Language switching functions
   - Mobile responsiveness

2. **SEO Setup**
   - Submit sitemap to search engines
   - Set up Google My Business
   - Verify structured data
   - Set up social media profiles

3. **Monitoring**
   - Set up uptime monitoring
   - Configure error tracking
   - Monitor site performance
   - Track user analytics

## 🆘 Troubleshooting

### Common Issues

1. **Maps not loading**
   - Check API key is correct
   - Verify API restrictions
   - Ensure billing is enabled on Google Cloud

2. **Images not displaying**
   - Check image paths are correct
   - Verify images are optimized
   - Check Next.js image configuration

3. **Language switching not working**
   - Verify middleware configuration
   - Check translation files
   - Ensure locale routing is correct

4. **Forms not submitting**
   - Check form action endpoints
   - Verify CORS settings
   - Test with browser developer tools

### Support Contacts

- **Technical Issues**: developer@capehome.co.za
- **Content Updates**: content@capehome.co.za
- **Emergency Support**: +27 817394084

---

**Deployment completed successfully! 🎉**

Your Cape Home Tourism website is now ready to welcome visitors from around the world.
