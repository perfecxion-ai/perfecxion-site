#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all MDX files
const files = glob.sync('content/knowledge/**/*.mdx');

let fixedCount = 0;
let errors = [];

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract frontmatter manually to handle multi-line values
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      console.log(`No frontmatter found: ${filePath}`);
      return;
    }
    
    const frontmatter = frontmatterMatch[1];
    const body = content.substring(frontmatterMatch[0].length);
    
    // Parse frontmatter handling multi-line values
    let title = '';
    let description = '';
    let date = '2025-08-18';
    let author = 'perfecXion AI Team';
    let category = 'general';
    let difficulty = 'intermediate';
    let readTime = '10 min read';
    let tags = [];
    
    // Extract title (handle multi-line)
    const titleMatch = frontmatter.match(/title:\s*>?-?\s*\n?\s*(.+?)(?:\n(?!\s)|$)/s);
    if (titleMatch) {
      title = titleMatch[1].replace(/\n\s+/g, ' ').trim().replace(/^['"]|['"]$/g, '');
    }
    
    // Extract description (handle multi-line)
    const descMatch = frontmatter.match(/description:\s*>?-?\s*\n?\s*(.+?)(?:\n(?!\s)|$)/s);
    if (descMatch) {
      description = descMatch[1].replace(/\n\s+/g, ' ').trim().replace(/^['"]|['"]$/g, '');
    }
    
    // Extract other fields
    const dateMatch = frontmatter.match(/date:\s*['"]?([^'"]+)['"]?/);
    if (dateMatch) date = dateMatch[1];
    
    const authorMatch = frontmatter.match(/author:\s*(.+?)(?:\n|$)/);
    if (authorMatch) {
      const authorValue = authorMatch[1].trim();
      if (authorValue.includes('name:')) {
        const nameMatch = authorValue.match(/name:\s*(.+)/);
        if (nameMatch) author = nameMatch[1].trim();
      } else {
        author = authorValue.replace(/^['"]|['"]$/g, '');
      }
    }
    
    const categoryMatch = frontmatter.match(/category:\s*(.+?)(?:\n|$)/);
    if (categoryMatch) category = categoryMatch[1].trim();
    
    const difficultyMatch = frontmatter.match(/difficulty:\s*(.+?)(?:\n|$)/);
    if (difficultyMatch) difficulty = difficultyMatch[1].trim();
    
    const readTimeMatch = frontmatter.match(/readTime:\s*(.+?)(?:\n|$)/);
    if (readTimeMatch) readTime = readTimeMatch[1].trim();
    else {
      const readingTimeMatch = frontmatter.match(/readingTime:\s*(\d+)/);
      if (readingTimeMatch) readTime = `${readingTimeMatch[1]} min read`;
    }
    
    // Extract tags
    const tagsMatch = frontmatter.match(/tags:\s*\n((?:\s+-\s+.+\n?)+)/);
    if (tagsMatch) {
      tags = tagsMatch[1].split('\n')
        .map(line => line.replace(/^\s*-\s*/, '').trim())
        .filter(tag => tag.length > 0);
    }
    
    // Build clean frontmatter
    const cleanFrontmatter = `---
title: '${title}'
description: '${description}'
date: '${date}'
author: ${author}
category: ${category}
difficulty: ${difficulty}
readTime: ${readTime}
tags:
${tags.map(tag => `  - ${tag}`).join('\n')}
---`;
    
    const newContent = cleanFrontmatter + body;
    
    // Only write if changed
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${path.basename(filePath)}`);
      fixedCount++;
    }
    
  } catch (error) {
    errors.push(`Error in ${filePath}: ${error.message}`);
  }
});

if (errors.length > 0) {
  console.log('\nErrors:');
  errors.forEach(err => console.log(err));
}

console.log(`\n✅ Fixed ${fixedCount} files`);