const { loadAllContent } = require('../lib/content-loader.ts');
const fs = require('fs');
const path = require('path');

async function testAllKnowledgeLinks() {
  console.log('🧪 Testing all Knowledge Hub links...\n');
  
  const content = await loadAllContent();
  const results = {
    working: [],
    broken: [],
    noContent: []
  };
  
  for (const item of content) {
    const href = item.href;
    const slug = href.replace('/knowledge/', '');
    
    // Build the expected file path
    const expectedPath = path.join(process.cwd(), 'content', 'knowledge', slug);
    const mdxPath = expectedPath + '.mdx';
    const mdPath = expectedPath + '.md';
    
    let fileExists = false;
    let actualPath = '';
    
    if (fs.existsSync(mdxPath)) {
      fileExists = true;
      actualPath = mdxPath;
    } else if (fs.existsSync(mdPath)) {
      fileExists = true;
      actualPath = mdPath;
    }
    
    if (!fileExists) {
      results.broken.push({
        title: item.title,
        href: href,
        expectedPath: expectedPath
      });
    } else {
      // Check if file has actual content
      const fileContent = fs.readFileSync(actualPath, 'utf-8');
      const lines = fileContent.split('\n');
      
      // Find where frontmatter ends
      let frontmatterEnd = 0;
      let inFrontmatter = false;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '---') {
          if (!inFrontmatter) {
            inFrontmatter = true;
          } else {
            frontmatterEnd = i + 1;
            break;
          }
        }
      }
      
      // Count actual content lines (excluding frontmatter and empty lines)
      const contentLines = lines.slice(frontmatterEnd)
        .filter(line => line.trim().length > 0);
      
      if (contentLines.length < 5) {
        results.noContent.push({
          title: item.title,
          href: href,
          file: actualPath.replace(process.cwd(), '.'),
          contentLines: contentLines.length
        });
      } else {
        results.working.push({
          title: item.title,
          href: href
        });
      }
    }
  }
  
  // Print results
  console.log('📊 Test Results:');
  console.log('================');
  console.log(`✅ Working links: ${results.working.length}`);
  console.log(`❌ Broken links: ${results.broken.length}`);
  console.log(`⚠️  No/minimal content: ${results.noContent.length}`);
  console.log(`📄 Total links tested: ${content.length}`);
  
  if (results.broken.length > 0) {
    console.log('\n❌ BROKEN LINKS:');
    console.log('================');
    results.broken.forEach((item, index) => {
      console.log(`${index + 1}. ${item.title}`);
      console.log(`   URL: ${item.href}`);
      console.log(`   Expected: ${item.expectedPath}`);
    });
  }
  
  if (results.noContent.length > 0) {
    console.log('\n⚠️  NO/MINIMAL CONTENT:');
    console.log('=====================');
    results.noContent.forEach((item, index) => {
      console.log(`${index + 1}. ${item.title}`);
      console.log(`   URL: ${item.href}`);
      console.log(`   File: ${item.file}`);
      console.log(`   Content lines: ${item.contentLines}`);
    });
  }
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: content.length,
      working: results.working.length,
      broken: results.broken.length,
      noContent: results.noContent.length
    },
    results
  };
  
  fs.writeFileSync('knowledge-links-test-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Detailed report saved to: knowledge-links-test-report.json');
  
  // Return exit code based on results
  if (results.broken.length > 0) {
    console.log('\n❌ TEST FAILED: Found broken links');
    process.exit(1);
  } else {
    console.log('\n✅ TEST PASSED: All links are working');
    process.exit(0);
  }
}

testAllKnowledgeLinks().catch(error => {
  console.error('Error running tests:', error);
  process.exit(1);
});