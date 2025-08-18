#!/usr/bin/env node

const fs = require('fs');
const matter = require('gray-matter');

// Files to test
const filesToTest = [
  'content/knowledge/infrastructure/networking/rocev2-infiniband-security.mdx',
  'content/knowledge/infrastructure/networking/rocev2-vs-infiniband.mdx',
  'content/knowledge/infrastructure/networking/network-resilience-comparison.mdx',
  'content/knowledge/infrastructure/ai-fabrics/the-agentic-leap-understanding-and-building-modern-ai-agents.mdx',
  'content/knowledge/infrastructure/ai-fabrics/multi-cloud-ai-security-strategies-hybrid-deployments.mdx'
];

function testMdxFile(filePath) {
  console.log(`\nTesting: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`  ❌ File not found`);
    return false;
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Test YAML parsing
    const parsed = matter(content);
    console.log(`  ✅ YAML parsing successful`);
    console.log(`  📝 Title: "${parsed.data.title}"`);
    console.log(`  📝 Description: "${parsed.data.description ? parsed.data.description.substring(0, 50) + '...' : 'Missing'}"`);
    
    // Check for common MDX issues
    const mdxContent = parsed.content;
    
    // Check for unclosed JSX tags
    const jsxTagMatches = mdxContent.match(/<[^>]+>/g) || [];
    const selfClosingTags = mdxContent.match(/<[^>]+\/>/g) || [];
    console.log(`  🔧 JSX tags found: ${jsxTagMatches.length}`);
    console.log(`  🔧 Self-closing tags: ${selfClosingTags.length}`);
    
    // Check for problematic characters
    if (mdxContent.includes('```')) {
      console.log(`  ⚠️  Contains code blocks`);
    }
    
    if (mdxContent.includes('**')) {
      console.log(`  ⚠️  Contains bold markdown`);
    }
    
    // Check file length
    console.log(`  📊 Content length: ${mdxContent.length} characters`);
    console.log(`  📊 Line count: ${mdxContent.split('\n').length} lines`);
    
    return true;
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
    return false;
  }
}

let successCount = 0;
filesToTest.forEach(file => {
  if (testMdxFile(file)) {
    successCount++;
  }
});

console.log(`\n📊 Summary: ${successCount}/${filesToTest.length} files parsed successfully`);