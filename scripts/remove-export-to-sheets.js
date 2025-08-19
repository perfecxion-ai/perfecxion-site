const fs = require('fs');
const path = require('path');

// Function to remove "Export to Sheets" from content
function removeExportToSheets(content) {
  // Remove the phrase "Export to Sheets" (case insensitive)
  content = content.replace(/Export to Sheets/gi, '');
  
  // Also remove any extra whitespace that might be left
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return content;
}

// Function to process all MDX files
function processAllFiles() {
  const knowledgeDir = path.join(__dirname, '../content/knowledge');
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item.endsWith('.mdx')) {
        console.log(`Processing: ${fullPath}`);
        
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          const originalContent = content;
          
          content = removeExportToSheets(content);
          
          if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`  ✅ Removed "Export to Sheets" from: ${item}`);
          } else {
            console.log(`  ℹ️  No changes needed: ${item}`);
          }
        } catch (error) {
          console.error(`  ❌ Error processing ${item}:`, error.message);
        }
      }
    }
  }
  
  processDirectory(knowledgeDir);
  console.log('\n🎉 "Export to Sheets" removal complete!');
}

// Run the script
if (require.main === module) {
  processAllFiles();
}

module.exports = { removeExportToSheets };
