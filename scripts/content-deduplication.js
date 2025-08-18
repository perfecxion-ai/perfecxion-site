const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const matter = require('gray-matter');

// Function to get file hash
function getFileHash(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return crypto.createHash('md5').update(content).digest('hex');
}

// Function to get content metadata
function getContentMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: body } = matter(content);
    return {
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      hash: crypto.createHash('md5').update(body).digest('hex'),
      frontmatterHash: crypto.createHash('md5').update(JSON.stringify(data)).digest('hex'),
      size: fs.statSync(filePath).size
    };
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

// Find all content files
function findAllContent() {
  const contentMap = {
    blog: [],
    learning: [],
    whitePapers: [],
    referenceArchitectures: [],
    knowledge: []
  };

  // Find blog content
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  if (fs.existsSync(blogDir)) {
    contentMap.blog = fs.readdirSync(blogDir)
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(f => path.join(blogDir, f));
  }

  // Find learning content
  const learningDir = path.join(process.cwd(), 'content', 'learning');
  if (fs.existsSync(learningDir)) {
    contentMap.learning = fs.readdirSync(learningDir)
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(f => path.join(learningDir, f));
  }

  // Find white papers
  const whitepaperDir = path.join(process.cwd(), 'content', 'white-papers');
  if (fs.existsSync(whitepaperDir)) {
    contentMap.whitePapers = fs.readdirSync(whitepaperDir)
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(f => path.join(whitepaperDir, f));
  }

  // Find reference architectures
  const refArchDir = path.join(process.cwd(), 'content', 'reference-architectures');
  if (fs.existsSync(refArchDir)) {
    contentMap.referenceArchitectures = fs.readdirSync(refArchDir)
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(f => path.join(refArchDir, f));
  }

  // Find all knowledge content (recursive)
  function walkDir(dir, files = []) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        walkDir(fullPath, files);
      } else if (item.endsWith('.mdx') || item.endsWith('.md')) {
        files.push(fullPath);
      }
    }
    return files;
  }

  const knowledgeDir = path.join(process.cwd(), 'content', 'knowledge');
  if (fs.existsSync(knowledgeDir)) {
    contentMap.knowledge = walkDir(knowledgeDir);
  }

  return contentMap;
}

// Analyze duplicates
function analyzeDuplicates() {
  const contentMap = findAllContent();
  const analysis = {
    summary: {},
    duplicates: [],
    unique: {
      oldDirectories: [],
      knowledgeDirectory: []
    },
    recommendations: []
  };

  // Create a map of all files by their content hash
  const filesByHash = new Map();
  const allFiles = [];

  // Process old directories
  ['blog', 'learning', 'whitePapers', 'referenceArchitectures'].forEach(category => {
    contentMap[category].forEach(filePath => {
      const metadata = getContentMetadata(filePath);
      if (metadata) {
        const fileInfo = {
          path: filePath,
          category,
          ...metadata
        };
        allFiles.push(fileInfo);
        
        if (!filesByHash.has(metadata.hash)) {
          filesByHash.set(metadata.hash, []);
        }
        filesByHash.get(metadata.hash).push(fileInfo);
      }
    });
  });

  // Process knowledge directory
  contentMap.knowledge.forEach(filePath => {
    const metadata = getContentMetadata(filePath);
    if (metadata) {
      const fileInfo = {
        path: filePath,
        category: 'knowledge',
        ...metadata
      };
      allFiles.push(fileInfo);
      
      if (!filesByHash.has(metadata.hash)) {
        filesByHash.set(metadata.hash, []);
      }
      filesByHash.get(metadata.hash).push(fileInfo);
    }
  });

  // Find duplicates
  filesByHash.forEach((files, hash) => {
    if (files.length > 1) {
      // Check if duplicate exists between old and knowledge directories
      const hasOldDir = files.some(f => f.category !== 'knowledge');
      const hasKnowledgeDir = files.some(f => f.category === 'knowledge');
      
      if (hasOldDir && hasKnowledgeDir) {
        analysis.duplicates.push({
          hash,
          files: files.map(f => ({
            path: f.path.replace(process.cwd(), '.'),
            category: f.category,
            title: f.title
          }))
        });
      }
    } else {
      // Unique file
      const file = files[0];
      if (file.category === 'knowledge') {
        analysis.unique.knowledgeDirectory.push(file.path.replace(process.cwd(), '.'));
      } else {
        analysis.unique.oldDirectories.push(file.path.replace(process.cwd(), '.'));
      }
    }
  });

  // Generate summary
  analysis.summary = {
    totalFiles: allFiles.length,
    blogFiles: contentMap.blog.length,
    learningFiles: contentMap.learning.length,
    whitepaperFiles: contentMap.whitePapers.length,
    referenceArchFiles: contentMap.referenceArchitectures.length,
    knowledgeFiles: contentMap.knowledge.length,
    duplicateGroups: analysis.duplicates.length,
    totalDuplicateFiles: analysis.duplicates.reduce((sum, d) => sum + d.files.length, 0),
    uniqueInOldDirs: analysis.unique.oldDirectories.length,
    uniqueInKnowledge: analysis.unique.knowledgeDirectory.length
  };

  // Generate recommendations
  if (analysis.duplicates.length > 0) {
    analysis.recommendations.push(
      `Found ${analysis.duplicates.length} groups of duplicate content between old and knowledge directories.`,
      `Recommendation: Keep files in knowledge directory (better organized) and remove from old directories.`
    );
  }

  if (analysis.unique.oldDirectories.length > 0) {
    analysis.recommendations.push(
      `Found ${analysis.unique.oldDirectories.length} unique files in old directories that should be migrated to knowledge directory.`
    );
  }

  return analysis;
}

// Create backup
function createBackup() {
  const backupDir = path.join(process.cwd(), 'content-backup-' + new Date().toISOString().split('T')[0]);
  
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
    
    // Copy entire content directory
    const contentDir = path.join(process.cwd(), 'content');
    copyDirectory(contentDir, path.join(backupDir, 'content'));
    
    console.log(`✅ Backup created at: ${backupDir}`);
    return backupDir;
  } else {
    console.log(`⚠️  Backup already exists at: ${backupDir}`);
    return backupDir;
  }
}

// Helper to copy directory recursively
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Main execution
async function main() {
  console.log('🔍 Analyzing content structure...\n');
  
  const analysis = analyzeDuplicates();
  
  console.log('📊 Content Analysis Summary:');
  console.log('============================');
  console.log(`Total files: ${analysis.summary.totalFiles}`);
  console.log(`  - Blog: ${analysis.summary.blogFiles}`);
  console.log(`  - Learning: ${analysis.summary.learningFiles}`);
  console.log(`  - White Papers: ${analysis.summary.whitepaperFiles}`);
  console.log(`  - Reference Architectures: ${analysis.summary.referenceArchFiles}`);
  console.log(`  - Knowledge Directory: ${analysis.summary.knowledgeFiles}`);
  console.log('');
  console.log(`Duplicate groups: ${analysis.summary.duplicateGroups}`);
  console.log(`Total duplicate files: ${analysis.summary.totalDuplicateFiles}`);
  console.log(`Unique in old directories: ${analysis.summary.uniqueInOldDirs}`);
  console.log(`Unique in knowledge directory: ${analysis.summary.uniqueInKnowledge}`);
  
  if (analysis.duplicates.length > 0) {
    console.log('\n📋 Duplicate Files Found:');
    console.log('========================');
    analysis.duplicates.forEach((dup, index) => {
      console.log(`\nDuplicate Group ${index + 1}:`);
      dup.files.forEach(file => {
        console.log(`  - [${file.category}] ${file.path}`);
      });
    });
  }
  
  if (analysis.unique.oldDirectories.length > 0) {
    console.log('\n📌 Unique Files in Old Directories (need migration):');
    console.log('================================================');
    analysis.unique.oldDirectories.forEach(file => {
      console.log(`  - ${file}`);
    });
  }
  
  if (analysis.recommendations.length > 0) {
    console.log('\n💡 Recommendations:');
    console.log('==================');
    analysis.recommendations.forEach(rec => {
      console.log(`  - ${rec}`);
    });
  }
  
  // Save detailed report
  const reportPath = path.join(process.cwd(), 'content-analysis-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  
  // Prompt for backup
  console.log('\n⚠️  Before proceeding with deduplication, we should create a backup.');
  console.log('Run with --backup flag to create a backup first.');
  
  if (process.argv.includes('--backup')) {
    console.log('\n🔄 Creating backup...');
    const backupPath = createBackup();
    console.log(`✅ Backup complete: ${backupPath}`);
  }
}

main().catch(console.error);