# perfecXion.ai Deployment Guide

This guide covers deploying the perfecXion.ai Next.js site to Vercel and configuring your domain.

## Prerequisites

- GitHub account (for connecting to Vercel)
- Vercel account (free tier is sufficient)
- Domain registered with Spaceship registrar
- Access to Spaceship DNS management

## Step 1: Prepare for Deployment

1. **Build Test**
   ```bash
   npm run build
   ```
   Ensure the build completes without errors.

2. **Create GitHub Repository**
   - Create a new repository on GitHub
   - Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - perfecXion.ai website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/perfecxion-site.git
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `.` (leave as default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Environment Variables** (if needed)
   - Add any required environment variables
   - For now, the site doesn't require any

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - You'll get a URL like: `perfecxion-site.vercel.app`

## Step 3: Configure Custom Domain

### On Vercel:

1. **Add Domain**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your domain: `perfecxion.ai`
   - Add www subdomain: `www.perfecxion.ai`

2. **Get DNS Records**
   - Vercel will provide DNS records to add
   - Typically includes:
     - A record for apex domain
     - CNAME for www subdomain

### On Spaceship:

1. **Login to Spaceship**
   - Go to your domain management panel
   - Select perfecxion.ai

2. **Update DNS Records**
   
   Remove any existing A or CNAME records for @ and www, then add:

   **For apex domain (perfecxion.ai):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - This happens after DNS propagation (usually within minutes)

## Step 4: Post-Deployment Tasks

1. **Verify Deployment**
   - Check https://perfecxion.ai
   - Check https://www.perfecxion.ai
   - Test all pages and functionality
   - Verify SSL certificate is active

2. **Performance Optimization**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Optimize images if needed

3. **Set up Analytics** (Optional)
   - Add Vercel Analytics
   - Add Google Analytics
   - Configure in app/layout.tsx

4. **Configure Redirects** (if needed)
   
   Create `vercel.json`:
   ```json
   {
     "redirects": [
       {
         "source": "/home",
         "destination": "/",
         "permanent": true
       }
     ]
   }
   ```

## Step 5: Continuous Deployment

With Vercel connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Pull requests get preview deployments
- Rollback is available through Vercel dashboard

## Environment-Specific Configurations

### Production Optimizations

1. **Image Optimization**
   - Use Next.js Image component (already implemented)
   - Add actual logo files in appropriate formats

2. **SEO Enhancements**
   - Update meta tags in app/layout.tsx
   - Add robots.txt and sitemap.xml:

   **public/robots.txt:**
   ```
   User-agent: *
   Allow: /
   Sitemap: https://perfecxion.ai/sitemap.xml
   ```

3. **Security Headers**
   
   Add to `next.config.js`:
   ```javascript
   const securityHeaders = [
     {
       key: 'X-DNS-Prefetch-Control',
       value: 'on'
     },
     {
       key: 'Strict-Transport-Security',
       value: 'max-age=63072000; includeSubDomains; preload'
     },
     {
       key: 'X-Frame-Options',
       value: 'SAMEORIGIN'
     },
     {
       key: 'X-Content-Type-Options',
       value: 'nosniff'
     },
     {
       key: 'Referrer-Policy',
       value: 'origin-when-cross-origin'
     }
   ]
   ```

## Troubleshooting

### DNS Issues
- DNS propagation can take up to 48 hours
- Use [dnschecker.org](https://dnschecker.org) to verify propagation
- Clear browser cache if changes aren't visible

### Build Errors
- Check build logs in Vercel dashboard
- Run `npm run build` locally to debug
- Ensure all dependencies are in package.json

### SSL Certificate Issues
- Usually resolves after DNS propagation
- Can force re-issue in Vercel domain settings
- Contact Vercel support if persists

## Monitoring

1. **Vercel Dashboard**
   - Monitor build times
   - Check function usage
   - Review analytics

2. **Error Tracking**
   - Consider adding Sentry or similar
   - Monitor console errors
   - Set up alerts for failures

## Cost Considerations

- Vercel free tier includes:
  - 100GB bandwidth/month
  - Unlimited deployments
  - SSL certificates
  - Automatic HTTPS

- Monitor usage in Vercel dashboard
- Upgrade to Pro if needed ($20/month)

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Spaceship Support: Check your registrar's support channels

---

Last updated: January 2025