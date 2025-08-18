const { loadAllContent } = require('../lib/content-loader.ts');
const fs = require('fs');
const path = require('path');

async function checkKnowledgeLinks() {
  console.log('🔍 Checking all Knowledge Hub links...\n');
  
  const content = await loadAllContent();
  const brokenLinks = [];
  const workingLinks = [];
  const contentIssues = [];
  
  for (const item of content) {
    const href = item.href;
    const slug = href.replace('/knowledge/', '');
    
    // Check if the file exists in the knowledge directory structure
    const possiblePaths = [
      path.join(process.cwd(), 'content', 'knowledge', slug + '.mdx'),
      path.join(process.cwd(), 'content', 'knowledge', slug + '.md'),
      // Also check if slug needs to be resolved differently
      path.join(process.cwd(), 'content', 'knowledge', ...slug.split('/')) + '.mdx',
      path.join(process.cwd(), 'content', 'knowledge', ...slug.split('/')) + '.md',
    ];
    
    let fileFound = false;
    let actualPath = '';
    
    for (const filePath of possiblePaths) {
      if (fs.existsSync(filePath)) {
        fileFound = true;
        actualPath = filePath;
        break;
      }
    }
    
    if (!fileFound) {
      // The href doesn't match the actual file location
      // Let's find where the file actually is
      const fileName = path.basename(slug);
      
      // Search for the file recursively in knowledge directory
      function findFile(dir, name) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const fullPath = path.join(dir, file);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            const found = findFile(fullPath, name);
            if (found) return found;
          } else if (file === name + '.mdx' || file === name + '.md') {
            return fullPath;
          }
        }
        return null;
      }
      
      const knowledgeDir = path.join(process.cwd(), 'content', 'knowledge');
      const foundPath = findFile(knowledgeDir, fileName);
      
      if (foundPath) {
        // File exists but href is wrong
        const correctPath = foundPath.replace(process.cwd() + '/content/knowledge/', '').replace(/\.(mdx|md)$/, '');
        brokenLinks.push({
          title: item.title,
          currentHref: href,
          expectedPath: '/knowledge/' + correctPath,
          actualFile: foundPath.replace(process.cwd(), '.')
        });
      } else {
        brokenLinks.push({
          title: item.title,
          currentHref: href,
          expectedPath: 'FILE NOT FOUND',
          actualFile: 'N/A'
        });
      }
    } else {
      // Check if content is weak/empty
      const fileContent = fs.readFileSync(actualPath, 'utf-8');
      const lines = fileContent.split('\n');
      const contentLines = lines.filter(line => 
        line.trim() && 
        !line.startsWith('---') && 
        !line.startsWith('#') &&
        !line.includes('title:') &&
        !line.includes('description:') &&
        !line.includes('date:') &&
        !line.includes('tags:')
      );
      
      if (contentLines.length < 10) {
        contentIssues.push({
          title: item.title,
          href: href,
          file: actualPath.replace(process.cwd(), '.'),
          contentLines: contentLines.length
        });
      } else {
        workingLinks.push({
          title: item.title,
          href: href
        });
      }
    }
  }
  
  console.log('📊 Summary:');
  console.log(`Total items: ${content.length}`);
  console.log(`Working links: ${workingLinks.length}`);
  console.log(`Broken links: ${brokenLinks.length}`);
  console.log(`Weak content: ${contentIssues.length}`);
  
  if (brokenLinks.length > 0) {
    console.log('\n❌ Broken Links:');
    console.log('================');
    brokenLinks.forEach((item, index) => {
      console.log(`\n${index + 1}. ${item.title}`);
      console.log(`   Current: ${item.currentHref}`);
      console.log(`   Should be: ${item.expectedPath}`);
      console.log(`   File: ${item.actualFile}`);
    });
  }
  
  if (contentIssues.length > 0) {
    console.log('\n⚠️  Weak/Empty Content:');
    console.log('======================');
    contentIssues.forEach((item, index) => {
      console.log(`\n${index + 1}. ${item.title}`);
      console.log(`   URL: ${item.href}`);
      console.log(`   File: ${item.file}`);
      console.log(`   Content lines: ${item.contentLines}`);
    });
  }
  
  // Save report
  const report = {
    summary: {
      total: content.length,
      working: workingLinks.length,
      broken: brokenLinks.length,
      weakContent: contentIssues.length
    },
    brokenLinks,
    contentIssues,
    workingLinks
  };
  
  fs.writeFileSync('knowledge-links-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Detailed report saved to: knowledge-links-report.json');
}

checkKnowledgeLinks().catch(console.error);