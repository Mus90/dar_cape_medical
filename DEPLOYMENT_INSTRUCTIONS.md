# Deployment Instructions for Dar Cape Medica

## Prerequisites

1. **Resend API Key** - Get from https://resend.com/api-keys
2. **Domain Verification** - Complete DNS setup (see RESEND_DNS_SETUP.md)
3. **Hosting Platform** - Vercel, Netlify, or your preferred Next.js host

## Step 1: Configure Environment Variables

### Create `.env.local` file

Create a `.env.local` file in the project root (this file is already in .gitignore):

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://darcape.com
NEXT_PUBLIC_CONTACT_EMAIL=mustafa@darcape.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+27749548756

# Admin Configuration
ADMIN_EMAIL=mustafa@darcape.com
ADMIN_PASSWORD=Nmsf@1234

# Resend Email Service
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=mustafa@darcape.com
RESEND_ADMIN_EMAIL=mustafa@darcape.com

# Optional: Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Important:**
- Replace `re_your_actual_api_key_here` with your actual Resend API key
- Never commit `.env.local` to Git
- Keep the ADMIN_PASSWORD secure

## Step 2: Verify Domain with Resend

1. Follow the instructions in `RESEND_DNS_SETUP.md`
2. Add the required DNS records to your domain
3. Verify the domain in the Resend dashboard
4. Wait for DNS propagation (up to 24 hours)

## Step 3: Test Locally

Before deploying, test the email functionality locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Test the forms:
1. Navigate to http://localhost:3000/en/contact
2. Submit a test contact form
3. Check mustafa@darcape.com for the email
4. Navigate to the assessment form
5. Submit a test assessment
6. Check for both admin notification and candidate confirmation emails

## Step 4: Deploy to Production

### Option A: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Add Environment Variables in Vercel Dashboard**
   - Go to your project settings in Vercel
   - Navigate to Environment Variables
   - Add all variables from `.env.local` (without NEXT_PUBLIC_ prefix for server-side vars)
   - For production, add:
     - `RESEND_API_KEY`
     - `ADMIN_EMAIL`
     - `ADMIN_PASSWORD`
     - `RESEND_FROM_EMAIL`
     - `RESEND_ADMIN_EMAIL`
   - For client-side vars, add with NEXT_PUBLIC_ prefix:
     - `NEXT_PUBLIC_SITE_URL`
     - `NEXT_PUBLIC_CONTACT_EMAIL`
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`

5. **Redeploy** after adding environment variables

### Option B: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Add Environment Variables in Netlify Dashboard**
   - Go to Site Settings > Environment Variables
   - Add all variables from `.env.local`

### Option C: Static Export (GitHub Pages)

The project has a custom build script for static export:

```bash
npm run build:pages
```

This creates a `docs/` folder that can be deployed to GitHub Pages.

**Note:** API routes will not work with static export. You need a serverless hosting solution for the email functionality.

## Step 5: Configure Production Environment Variables

### For Vercel/Netlify (Serverless Hosting)

Add these in your hosting platform's environment variables section:

**Server-side variables (no NEXT_PUBLIC_ prefix):**
```
RESEND_API_KEY=re_your_actual_api_key_here
ADMIN_EMAIL=mustafa@darcape.com
ADMIN_PASSWORD=Nmsf@1234
RESEND_FROM_EMAIL=mustafa@darcape.com
RESEND_ADMIN_EMAIL=mustafa@darcape.com
```

**Client-side variables (with NEXT_PUBLIC_ prefix):**
```
NEXT_PUBLIC_SITE_URL=https://darcape.com
NEXT_PUBLIC_CONTACT_EMAIL=mustafa@darcape.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+27749548756
```

## Step 6: Post-Deployment Testing

After deployment, test the following:

1. **Contact Form**
   - Navigate to https://darcape.com/en/contact
   - Submit a test form
   - Verify email received at mustafa@darcape.com
   - Verify confirmation email sent to submitter

2. **Assessment Form**
   - Navigate to the assessment page
   - Submit a test assessment
   - Verify admin notification with all details
   - Verify candidate confirmation with reference number

3. **Rate Limiting**
   - Submit multiple forms rapidly
   - Verify rate limiting kicks in after 5 contact forms/hour
   - Verify rate limiting kicks in after 3 assessments/hour

4. **Error Handling**
   - Submit form with invalid email
   - Submit form with missing required fields
   - Verify appropriate error messages

## Step 7: Monitor Email Delivery

1. **Resend Dashboard**
   - Log in to https://resend.com
   - Monitor email delivery rates
   - Check for bounces or spam reports
   - Review analytics

2. **Error Logs**
   - Check your hosting platform's logs
   - Look for any email-sending errors
   - Monitor API route performance

## Troubleshooting

### Emails Not Sending

1. **Check API Key**
   - Verify RESEND_API_KEY is set correctly
   - Ensure it's not committed to Git
   - Regenerate if necessary

2. **Check Domain Verification**
   - Verify domain is verified in Resend dashboard
   - Check DNS records are correct
   - Wait for DNS propagation

3. **Check Environment Variables**
   - Ensure variables are set in production
   - Verify no typos in variable names
   - Check server-side vs client-side prefixes

### Build Errors

1. **Missing Dependencies**
   ```bash
   npm install
   ```

2. **TypeScript Errors**
   ```bash
   npm run lint
   ```

3. **Clean Build**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

### Rate Limiting Issues

If rate limiting is too strict, adjust in:
- `src/app/api/contact/route.ts` - change `maxRequests`
- `src/app/api/assessment/route.ts` - change `maxRequests`

## Security Checklist

- [ ] Resend API key is in `.env.local` only (not committed)
- [ ] Admin password is strong and secure
- [ ] Domain is verified with Resend
- [ ] DNS records are configured correctly
- [ ] SPF record includes Resend
- [ ] DKIM record is configured
- [ ] Environment variables are set in production
- [ ] `.env.local` is in `.gitignore`
- [ ] No sensitive data in `.env.example`

## Maintenance

### Regular Tasks

1. **Monitor Email Delivery** - Weekly
2. **Check DNS Records** - Monthly
3. **Rotate API Keys** - Quarterly
4. **Update Dependencies** - Monthly
5. **Review Rate Limits** - As needed

### Updating Resend API Key

1. Generate new key in Resend dashboard
2. Update `.env.local` locally
3. Update environment variables in hosting platform
4. Redeploy application
5. Delete old API key in Resend dashboard

## Support

- **Resend Documentation**: https://resend.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Project Issues**: Check GitHub repository

## Files Changed Summary

### New Files Created
- `src/lib/emailService.ts` - Email service with templates
- `src/lib/rateLimiter.ts` - Rate limiting utility
- `src/app/api/assessment/route.ts` - Assessment form API
- `RESEND_DNS_SETUP.md` - DNS configuration guide
- `DEPLOYMENT_INSTRUCTIONS.md` - This file

### Modified Files
- `src/app/api/contact/route.ts` - Updated to use new email service
- `src/components/contact/ContactForm.tsx` - Updated to call API
- `src/components/contact/AssessmentForm.tsx` - Updated to call API
- `.env.example` - Removed exposed API key
- `package.json` - Added resend dependency

### Dependencies Added
- `resend@^6.30.0` - Email sending service

## Final Checklist Before Going Live

- [ ] Resend domain verified
- [ ] DNS records configured
- [ ] Environment variables set in production
- [ ] Contact form tested and working
- [ ] Assessment form tested and working
- [ ] Rate limiting tested
- [ ] Error handling tested
- [ ] Email templates reviewed
- [ ] Admin credentials secure
- [ ] Build successful
- [ ] Deployment successful
- [ ] Post-deployment testing complete

---

**Ready to deploy!** Follow these steps in order, and your email integration will be fully functional.
