const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Load the migration plan
const migrationPlan = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'migration-plan.json'), 'utf8')
);

// Function to update frontmatter
function updateFrontmatter(content, category, subcategory) {
  const { data: frontmatter, content: mdxContent } = matter(content);
  
  // Add/update knowledge hub specific fields
  frontmatter.category = category;
  frontmatter.subcategory = subcategory;
  frontmatter.type = 'knowledge';
  
  // Ensure proper date format
  if (!frontmatter.date && frontmatter.publishedAt) {
    frontmatter.date = frontmatter.publishedAt;
  }
  
  // Add reading time if missing
  if (!frontmatter.readTime && frontmatter.readingTime) {
    frontmatter.readTime = `${frontmatter.readingTime} min read`;
  }
  
  // Rebuild the file with updated frontmatter
  const newContent = matter.stringify(mdxContent, frontmatter);
  return newContent;
}

// Function to migrate a single file
function migrateFile(fileInfo, sourceDir, isLearning = false) {
  const sourcePath = path.join(sourceDir, fileInfo.file);
  
  if (!fs.existsSync(sourcePath)) {
    console.log(`  ⚠️  File not found: ${sourcePath}`);
    return false;
  }
  
  // Create destination directory
  const destDir = path.join(
    __dirname,
    '..',
    'content',
    'knowledge',
    fileInfo.suggestedCategory,
    fileInfo.suggestedSubcategory
  );
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Read and update content
  const content = fs.readFileSync(sourcePath, 'utf8');
  const updatedContent = updateFrontmatter(
    content,
    fileInfo.suggestedCategory,
    fileInfo.suggestedSubcategory
  );
  
  // Write to new location
  const destPath = path.join(destDir, fileInfo.file);
  fs.writeFileSync(destPath, updatedContent);
  
  // Remove from old location (comment out if you want to keep originals for now)
  // fs.unlinkSync(sourcePath);
  
  console.log(`  ✅ Migrated: ${fileInfo.file}`);
  console.log(`     From: ${fileInfo.currentPath}`);
  console.log(`     To:   ${fileInfo.newPath}`);
  
  return true;
}

// Main migration function
function runMigration() {
  console.log('\n🚀 Starting Content Migration...\n');
  console.log('='.repeat(60));
  
  let successCount = 0;
  let failCount = 0;
  
  // Migrate blog content
  console.log('\n📝 Migrating Blog Content...\n');
  const blogDir = path.join(__dirname, '..', 'content', 'blog');
  
  migrationPlan.blog.files.forEach(fileInfo => {
    if (migrateFile(fileInfo, blogDir)) {
      successCount++;
    } else {
      failCount++;
    }
    console.log('');
  });
  
  // Migrate learning content
  if (migrationPlan.learning.files.length > 0) {
    console.log('\n📚 Migrating Learning Content...\n');
    const learningDir = path.join(__dirname, '..', 'content', 'learning');
    
    migrationPlan.learning.files.forEach(fileInfo => {
      if (migrateFile(fileInfo, learningDir, true)) {
        successCount++;
      } else {
        failCount++;
      }
      console.log('');
    });
  }
  
  console.log('='.repeat(60));
  console.log('\n📊 Migration Summary:');
  console.log(`  ✅ Successfully migrated: ${successCount} files`);
  if (failCount > 0) {
    console.log(`  ❌ Failed: ${failCount} files`);
  }
  
  // Generate redirect configuration
  generateRedirects();
  
  console.log('\n✨ Migration complete!');
  console.log('\nNext steps:');
  console.log('  1. Review the migrated content in /content/knowledge/');
  console.log('  2. Update the dynamic content loader to read from new locations');
  console.log('  3. Add redirects to next.config.js');
  console.log('  4. Test all links and navigation');
}

// Function to generate redirect configuration
function generateRedirects() {
  console.log('\n📄 Generating Redirect Configuration...\n');
  
  const redirects = [];
  
  // Blog redirects
  migrationPlan.blog.files.forEach(file => {
    redirects.push({
      source: file.currentPath,
      destination: file.newPath,
      permanent: true
    });
  });
  
  // Learning redirects
  migrationPlan.learning.files.forEach(file => {
    redirects.push({
      source: file.currentPath,
      destination: file.newPath,
      permanent: true
    });
  });
  
  // Save redirects to file
  const redirectConfig = `// Add these redirects to your next.config.js

async function redirects() {
  return ${JSON.stringify(redirects, null, 2)}
}

module.exports = {
  redirects
}`;
  
  fs.writeFileSync(
    path.join(__dirname, 'redirects-config.js'),
    redirectConfig
  );
  
  console.log(`  ✅ Generated ${redirects.length} redirects`);
  console.log('     Saved to: scripts/redirects-config.js');
}

// Run the migration
runMigration();