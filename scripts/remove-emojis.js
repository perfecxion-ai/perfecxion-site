#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Find all MDX files
const files = glob.sync('content/knowledge/**/*.mdx');

let fixedCount = 0;

// Simple emoji regex - covers most common emojis
const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    if (emojiRegex.test(content)) {
      // Remove emojis and clean up extra spaces
      const cleanContent = content
        .replace(emojiRegex, '')
        .replace(/^# +/gm, '# ')  // Fix headers with extra spaces
        .replace(/^## +/gm, '## ')
        .replace(/^### +/gm, '### ')
        .replace(/ +$/gm, '')     // Remove trailing spaces
        .replace(/\n\n\n+/g, '\n\n'); // Reduce multiple newlines
      
      if (cleanContent !== content) {
        fs.writeFileSync(filePath, cleanContent);
        console.log(`Cleaned emojis from: ${filePath.split('/').pop()}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\n✅ Cleaned ${fixedCount} files`);