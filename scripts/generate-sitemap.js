const fs = require('fs');
const path = require('path');

// Your website URL
const SITE_URL = 'https://perfecxion.ai';

// Define your static pages
const staticPages = [
  '',
  '/products',
  '/products/adapt-ai',
  '/products/perfecxion-red-t',
  '/products/perfecxion-agent',
  '/products/safeai-guard',
  '/products/perfecxion-comply',
  '/products/perfecxion-g-rails',
  '/products/promptshield',
  '/products/torscan',
  '/blog',
  '/learn',
  '/docs',
  '/about',
  '/contact',
  '/privacy',
  '/terms',

];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
      .map(page => {
        const url = `${SITE_URL}${page}`;
        return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
      })
      .join('\n')}
</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(
    path.join(__dirname, '..', 'public', 'sitemap.xml'),
    sitemap
  );

  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();