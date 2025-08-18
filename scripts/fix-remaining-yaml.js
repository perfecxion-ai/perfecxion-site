#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixYamlFile(filePath) {
  console.log(`Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let fixed = false;
  
  // Split into frontmatter and content
  const parts = content.split('---');
  if (parts.length < 3) {
    console.log(`  ⚠️  No frontmatter found in ${filePath}`);
    return false;
  }
  
  let frontmatter = parts[1];
  const mdxContent = parts.slice(2).join('---');
  
  // Fix mismatched quotes
  const lines = frontmatter.split('\n');
  const fixedLines = lines.map(line => {
    const trimmed = line.trim();
    
    // Fix description lines with mixed quotes
    if (trimmed.startsWith('description:')) {
      // If it starts with single quote but has apostrophes inside, convert to double quotes
      if (trimmed.includes("description: '") && (trimmed.includes("C-suite") || trimmed.includes("CISO's") || trimmed.includes("Red Teamer's"))) {
        // Replace single quotes with double quotes and escape any internal double quotes
        let newLine = line.replace(/description: '(.+)'/, (match, content) => {
          const cleanContent = content.replace(/"/g, '\\"'); // escape any existing double quotes
          return `description: "${cleanContent}"`;
        });
        if (newLine !== line) {
          console.log(`  ✓ Fixed description quotes`);
          fixed = true;
          return newLine;
        }
      }
      
      // Fix description with trailing quote issue
      if (trimmed.includes("'$")) {
        let newLine = line.replace(/'$/, '"');
        if (newLine !== line) {
          console.log(`  ✓ Fixed trailing quote`);
          fixed = true;
          return newLine;
        }
      }
    }
    
    // Fix title lines with mixed quotes
    if (trimmed.startsWith('title:')) {
      // If it starts with single quote but has apostrophes inside, convert to double quotes
      if (trimmed.includes("title: '") && (trimmed.includes("Executive's") || trimmed.includes("Red Teamer's"))) {
        let newLine = line.replace(/title: '(.+)'/, (match, content) => {
          const cleanContent = content.replace(/"/g, '\\"'); // escape any existing double quotes
          return `title: "${cleanContent}"`;
        });
        if (newLine !== line) {
          console.log(`  ✓ Fixed title quotes`);
          fixed = true;
          return newLine;
        }
      }
    }
    
    return line;
  });
  
  // Reconstruct the file
  const newFrontmatter = fixedLines.join('\n');
  const newContent = `---${newFrontmatter}---${mdxContent}`;
  
  if (fixed) {
    fs.writeFileSync(filePath, newContent);
    console.log(`  ✅ Fixed and saved: ${filePath}`);
  } else {
    console.log(`  ➖ No changes needed: ${filePath}`);
  }
  
  return fixed;
}

// Files that were mentioned in the error logs
const problematicFiles = [
  'content/knowledge/compliance/governance/executives-guide-ai-risk-management-liability.mdx',
  'content/knowledge/security/defense/secure-ai-deployment-production-best-practices.mdx', 
  'content/knowledge/security/red-team/50-attack-vectors-ai-red-team-guide.mdx'
];

// Also scan for any other files with similar issues
function findFilesWithYamlIssues() {
  const contentDir = 'content/knowledge';
  const allFiles = [];
  
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.mdx')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        // Look for potential YAML quote issues
        if (content.includes("description: '") && (
          content.includes("C-suite") || 
          content.includes("CISO's") || 
          content.includes("Red Teamer's") ||
          content.includes("Executive's")
        )) {
          allFiles.push(filePath);
        }
      }
    });
  }
  
  walkDir(contentDir);
  return allFiles;
}

// Process known problematic files and any others found
const allProblematicFiles = [...new Set([...problematicFiles, ...findFilesWithYamlIssues()])];

console.log(`Found ${allProblematicFiles.length} files to check:`);
allProblematicFiles.forEach(file => console.log(`  - ${file}`));
console.log('');

let fixedCount = 0;
allProblematicFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixYamlFile(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`❌ File not found: ${filePath}`);
  }
});

console.log(`\n${fixedCount} files fixed.`);