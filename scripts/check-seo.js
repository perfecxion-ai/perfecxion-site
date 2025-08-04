const fs = require('fs');
const path = require('path');

console.log('🔍 SEO Checklist for perfecXion.ai\n');

// Check robots.txt
const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
if (fs.existsSync(robotsPath)) {
  console.log('✅ robots.txt exists');
  const content = fs.readFileSync(robotsPath, 'utf8');
  if (content.includes('Sitemap:')) {
    console.log('✅ Sitemap referenced in robots.txt');
  } else {
    console.log('❌ No sitemap reference in robots.txt');
  }
} else {
  console.log('❌ robots.txt missing');
}

// Check sitemap
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  console.log('✅ sitemap.xml exists');
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const urlCount = (content.match(/<url>/g) || []).length;
  console.log(`   📄 Contains ${urlCount} URLs`);
  
  // Check if sitemap is recent
  const stats = fs.statSync(sitemapPath);
  const daysSinceUpdate = (Date.now() - stats.mtime) / (1000 * 60 * 60 * 24);
  if (daysSinceUpdate > 7) {
    console.log(`   ⚠️  Sitemap is ${Math.floor(daysSinceUpdate)} days old - consider regenerating`);
  }
} else {
  console.log('❌ sitemap.xml missing');
}

// Check for common SEO files
const seoFiles = [
  { file: 'public/og-image.png', name: 'OpenGraph image' },
  { file: 'public/site.webmanifest', name: 'Web manifest' },
  { file: 'app/layout.tsx', name: 'Root layout with metadata' },
];

console.log('\n📁 SEO Files:');
seoFiles.forEach(({ file, name }) => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${name} exists`);
  } else {
    console.log(`❌ ${name} missing`);
  }
});

// Count blog posts
const blogDir = path.join(__dirname, '..', 'content', 'blog');
if (fs.existsSync(blogDir)) {
  const posts = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  console.log(`\n📝 Blog Posts: ${posts.length} posts found`);
} else {
  console.log('\n❌ Blog directory not found');
}

console.log('\n🚀 Next Steps:');
console.log('1. Submit sitemap to Google Search Console');
console.log('2. Verify site ownership in Search Console');
console.log('3. Monitor indexing status');
console.log('4. Set up Google Analytics');
console.log('5. Monitor Core Web Vitals');

console.log('\n💡 Run "npm run build" to regenerate sitemap with latest content');