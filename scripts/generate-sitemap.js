const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Your website URL
const SITE_URL = 'https://perfecxion.ai';

// Define your static pages with priorities
const staticPages = [
  { url: '', changefreq: 'daily', priority: '1.0' },
  { url: '/products', changefreq: 'weekly', priority: '0.9' },
  { url: '/products/adapt-ai', changefreq: 'weekly', priority: '0.8' },
  { url: '/products/perfecxion-red-t', changefreq: 'weekly', priority: '0.8' },
  { url: '/products/perfecxion-agent', changefreq: 'weekly', priority: '0.8' },
  { url: '/products/safeai-guard', changefreq: 'weekly', priority: '0.8' },
  { url: '/products/perfecxion-comply', changefreq: 'weekly', priority: '0.8' },
  { url: '/products/perfecxion-g-rails', changefreq: 'weekly', priority: '0.8' },
  { url: '/products/promptshield', changefreq: 'weekly', priority: '0.8' },
  { url: '/products/torscan', changefreq: 'weekly', priority: '0.8' },
  { url: '/blog', changefreq: 'daily', priority: '0.9' },
  { url: '/learn', changefreq: 'weekly', priority: '0.8' },
  { url: '/docs', changefreq: 'weekly', priority: '0.8' },
  { url: '/about', changefreq: 'monthly', priority: '0.7' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
  { url: '/pricing', changefreq: 'weekly', priority: '0.8' },
  { url: '/case-studies', changefreq: 'weekly', priority: '0.7' },
  { url: '/careers', changefreq: 'weekly', priority: '0.6' },
  { url: '/privacy', changefreq: 'monthly', priority: '0.5' },
  { url: '/terms', changefreq: 'monthly', priority: '0.5' },
  { url: '/security', changefreq: 'monthly', priority: '0.6' },
  { url: '/compliance', changefreq: 'monthly', priority: '0.7' },
];

// Get all blog posts
const getBlogPosts = () => {
  const blogDir = path.join(__dirname, '..', 'content', 'blog');
  const posts = [];
  
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir);
    
    files.forEach(file => {
      if (file.endsWith('.mdx') || file.endsWith('.md')) {
        const filePath = path.join(blogDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(content);
        
        const slug = file.replace(/\.(mdx|md)$/, '');
        posts.push({
          url: `/blog/${slug}`,
          lastmod: data.date || new Date().toISOString(),
          changefreq: 'monthly',
          priority: data.featured ? '0.9' : '0.7'
        });
      }
    });
  }
  
  return posts;
};

// Get all learning content
const getLearningContent = () => {
  const learnDir = path.join(__dirname, '..', 'content', 'learning');
  const content = [];
  
  if (fs.existsSync(learnDir)) {
    const files = fs.readdirSync(learnDir);
    
    files.forEach(file => {
      if (file.endsWith('.mdx') || file.endsWith('.md')) {
        const slug = file.replace(/\.(mdx|md)$/, '');
        content.push({
          url: `/learn/${slug}`,
          changefreq: 'monthly',
          priority: '0.7'
        });
      }
    });
  }
  
  return content;
};

// Generate sitemap XML
const generateSitemap = () => {
  const blogPosts = getBlogPosts();
  const learningContent = getLearningContent();
  
  console.log(`Found ${blogPosts.length} blog posts`);
  console.log(`Found ${learningContent.length} learning articles`);
  
  const allPages = [
    ...staticPages.map(page => ({
      ...page,
      url: `${SITE_URL}${page.url}`,
      lastmod: new Date().toISOString()
    })),
    ...blogPosts.map(post => ({
      ...post,
      url: `${SITE_URL}${post.url}`
    })),
    ...learningContent.map(content => ({
      ...content,
      url: `${SITE_URL}${content.url}`,
      lastmod: new Date().toISOString()
    }))
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
    .map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
    .join('\n')}
</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(
    path.join(__dirname, '..', 'public', 'sitemap.xml'),
    sitemap
  );

  console.log('✅ Sitemap generated successfully!');
  console.log(`📄 Total URLs: ${allPages.length}`);
};

generateSitemap();