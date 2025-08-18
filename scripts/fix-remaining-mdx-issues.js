#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const glob = require('glob');

// Find all MDX files
const files = glob.sync('content/knowledge/**/*.mdx');

let fixedCount = 0;

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: body } = matter(content);
    
    let needsFix = false;
    
    // Check if any frontmatter field has multi-line value (using >-)
    const hasMultilineTitle = content.includes('title: >-') || content.includes('description: >-');
    
    // Check for problematic fields
    const hasProblematicFields = data.publishedAt || data.readingTime || data.slug || 
                                 data.author?.role || data.subcategory || data.featured || data.toc;
    
    if (hasMultilineTitle || hasProblematicFields) {
      needsFix = true;
      
      // Clean up the data
      const cleanData = {
        title: typeof data.title === 'string' ? data.title.replace(/\n/g, ' ').trim() : data.title,
        description: typeof data.description === 'string' ? data.description.replace(/\n/g, ' ').trim() : data.description,
        date: data.date || data.publishedAt || '2025-08-18',
        author: typeof data.author === 'object' ? data.author.name : (data.author || 'perfecXion.ai Team'),
        category: data.category || 'general',
        difficulty: data.difficulty || 'intermediate',
        readTime: data.readTime || (data.readingTime ? `${data.readingTime} min read` : '10 min read'),
        tags: data.tags || []
      };
      
      // Remove problematic fields
      delete cleanData.publishedAt;
      delete cleanData.readingTime;
      delete cleanData.slug;
      delete cleanData.subcategory;
      delete cleanData.featured;
      delete cleanData.toc;
      
      // Rebuild the file
      const newContent = matter.stringify(body, cleanData);
      fs.writeFileSync(filePath, newContent);
      
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

// Now rename files with excessively long names
const longFiles = [
  {
    old: 'content/knowledge/infrastructure/networking/security-risks-in-shared-ai-fabrics-congestion-control-and-telemetry-vulnerabilities.mdx',
    new: 'content/knowledge/infrastructure/networking/security-risks-shared-ai-fabrics.mdx'
  }
];

longFiles.forEach(({ old, new: newPath }) => {
  if (fs.existsSync(old)) {
    fs.renameSync(old, newPath);
    console.log(`Renamed: ${path.basename(old)} -> ${path.basename(newPath)}`);
    fixedCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);