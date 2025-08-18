const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function fixAllMDXIssues() {
  const knowledgeDir = path.join(process.cwd(), 'content', 'knowledge');
  let fixedFiles = [];
  let deletedFiles = [];
  let errors = [];

  // Recursively find all MDX/MD files
  function findFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        files.push(...findFiles(fullPath));
      } else if (item.endsWith('.mdx') || item.endsWith('.md')) {
        files.push(fullPath);
      }
    }
    return files;
  }

  const allFiles = findFiles(knowledgeDir);
  console.log(`Found ${allFiles.length} MDX/MD files to check...\n`);

  allFiles.forEach(filePath => {
    const relativePath = filePath.replace(process.cwd() + '/', '');
    
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: body } = matter(content);
      
      let needsFix = false;
      let changes = [];

      // Fix 1: Remove problematic excerpt field if it contains newlines
      if (data.excerpt && data.excerpt.includes('\n')) {
        const lines = data.excerpt.split('\n').filter(line => line.trim());
        data.excerpt = lines[0] ? lines[0].substring(0, 200).trim() : data.description || '';
        needsFix = true;
        changes.push('Fixed multi-line excerpt');
      }

      // Fix 2: Remove problematic frontmatter fields
      const problematicFields = ['toc', 'featured', 'subcategory'];
      problematicFields.forEach(field => {
        if (data[field] !== undefined) {
          delete data[field];
          needsFix = true;
          changes.push(`Removed ${field} field`);
        }
      });

      // Fix 3: Ensure there's proper content after frontmatter
      const bodyLines = body.split('\n');
      
      // Check if body starts with a title that's the same as frontmatter title
      if (bodyLines[0] && bodyLines[0].trim() === data.title) {
        // Remove duplicate title
        bodyLines.shift();
        needsFix = true;
        changes.push('Removed duplicate title');
      }

      // Check if content has proper MDX structure
      let cleanBody = bodyLines.join('\n').trim();
      
      // If body doesn't start with a heading, add the title as an H1
      if (cleanBody && !cleanBody.startsWith('#')) {
        cleanBody = `# ${data.title}\n\n${cleanBody}`;
        needsFix = true;
        changes.push('Added proper H1 heading');
      }

      // Fix 4: Ensure required frontmatter fields exist
      if (!data.title) {
        data.title = path.basename(filePath, path.extname(filePath))
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase());
        needsFix = true;
        changes.push('Added missing title');
      }

      if (!data.description && data.excerpt) {
        data.description = data.excerpt;
        needsFix = true;
        changes.push('Added missing description from excerpt');
      }

      if (!data.date) {
        data.date = new Date().toISOString().split('T')[0];
        needsFix = true;
        changes.push('Added missing date');
      }

      // Apply fixes if needed
      if (needsFix) {
        const newContent = matter.stringify(cleanBody, data);
        fs.writeFileSync(filePath, newContent);
        fixedFiles.push({ file: relativePath, changes });
        console.log(`✅ Fixed: ${relativePath}`);
        changes.forEach(change => console.log(`   - ${change}`));
      }

    } catch (error) {
      errors.push({ file: relativePath, error: error.message });
      console.error(`❌ Error processing ${relativePath}: ${error.message}`);
    }
  });

  // Summary
  console.log('\n📊 Summary:');
  console.log(`Total files checked: ${allFiles.length}`);
  console.log(`Files fixed: ${fixedFiles.length}`);
  console.log(`Errors encountered: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\n❌ Files with errors:');
    errors.forEach(({ file, error }) => {
      console.log(`  - ${file}: ${error}`);
    });
  }
}

// Run the fix
fixAllMDXIssues();