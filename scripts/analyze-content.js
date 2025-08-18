const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the new Knowledge Hub categories
const KNOWLEDGE_CATEGORIES = {
  security: {
    name: 'Security',
    subcategories: ['fundamentals', 'threats', 'red-team', 'defense'],
    keywords: ['security', 'attack', 'defense', 'vulnerability', 'threat', 'red team', 'prompt injection', 'guardrail', 'protection', 'owasp']
  },
  infrastructure: {
    name: 'Infrastructure',
    subcategories: ['ai-fabrics', 'networking', 'architecture', 'performance'],
    keywords: ['infrastructure', 'network', 'architecture', 'deployment', 'scale', 'performance', 'gpu', 'cluster', 'fabric', 'cloud']
  },
  compliance: {
    name: 'Compliance',
    subcategories: ['regulations', 'standards', 'governance', 'auditing'],
    keywords: ['compliance', 'regulation', 'governance', 'hipaa', 'gdpr', 'audit', 'framework', 'standard', 'policy', 'risk']
  },
  industry: {
    name: 'Industry',
    subcategories: ['healthcare', 'finance', 'government', 'enterprise'],
    keywords: ['healthcare', 'finance', 'financial', 'medical', 'hospital', 'bank', 'government', 'enterprise', 'industry']
  }
};

// Function to determine category based on content
function determineCategory(title, tags, content) {
  const searchText = `${title} ${tags.join(' ')} ${content}`.toLowerCase();
  
  let bestMatch = { category: 'security', score: 0 }; // Default to security
  
  for (const [key, cat] of Object.entries(KNOWLEDGE_CATEGORIES)) {
    let score = 0;
    cat.keywords.forEach(keyword => {
      const regex = new RegExp(keyword, 'gi');
      const matches = searchText.match(regex);
      if (matches) {
        score += matches.length;
      }
    });
    
    if (score > bestMatch.score) {
      bestMatch = { category: key, score };
    }
  }
  
  return bestMatch.category;
}

// Function to determine subcategory
function determineSubcategory(category, title, content) {
  const cat = KNOWLEDGE_CATEGORIES[category];
  
  // Specific rules for subcategories
  if (category === 'security') {
    if (/red.?team|testing|assessment/i.test(title)) return 'red-team';
    if (/attack|injection|vulnerabilit|exploit|threat/i.test(title)) return 'threats';
    if (/defense|protect|guard|secure/i.test(title)) return 'defense';
    return 'fundamentals';
  }
  
  if (category === 'infrastructure') {
    if (/network|ethernet|infiniband|roce/i.test(title)) return 'networking';
    if (/architecture|design|pattern/i.test(title)) return 'architecture';
    if (/performance|optimi/i.test(title)) return 'performance';
    return 'ai-fabrics';
  }
  
  if (category === 'compliance') {
    if (/governance|program|management/i.test(title)) return 'governance';
    if (/audit|monitor|report/i.test(title)) return 'auditing';
    if (/standard|framework|iso|soc|nist/i.test(title)) return 'standards';
    return 'regulations';
  }
  
  if (category === 'industry') {
    if (/healthcare|medical|hospital|patient/i.test(title)) return 'healthcare';
    if (/financ|bank|trading|investment/i.test(title)) return 'finance';
    if (/government|defense|national/i.test(title)) return 'government';
    return 'enterprise';
  }
  
  return cat.subcategories[0];
}

// Analyze blog content
function analyzeBlogContent() {
  const blogDir = path.join(__dirname, '..', 'content', 'blog');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));
  
  const analysis = {
    total: files.length,
    categorized: {},
    files: []
  };
  
  files.forEach(file => {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content: mdxContent } = matter(content);
    
    const category = determineCategory(
      frontmatter.title || file,
      frontmatter.tags || [],
      mdxContent.substring(0, 1000) // Sample first 1000 chars
    );
    
    const subcategory = determineSubcategory(
      category,
      frontmatter.title || file,
      mdxContent.substring(0, 1000)
    );
    
    const fileInfo = {
      file,
      title: frontmatter.title,
      currentPath: `/blog/${file.replace('.mdx', '')}`,
      suggestedCategory: category,
      suggestedSubcategory: subcategory,
      newPath: `/knowledge/${category}/${subcategory}/${file.replace('.mdx', '')}`,
      tags: frontmatter.tags || [],
      description: frontmatter.description
    };
    
    analysis.files.push(fileInfo);
    
    if (!analysis.categorized[category]) {
      analysis.categorized[category] = {};
    }
    if (!analysis.categorized[category][subcategory]) {
      analysis.categorized[category][subcategory] = [];
    }
    analysis.categorized[category][subcategory].push(fileInfo);
  });
  
  return analysis;
}

// Analyze learning content
function analyzeLearningContent() {
  const learningDir = path.join(__dirname, '..', 'content', 'learning');
  
  if (!fs.existsSync(learningDir)) {
    return { total: 0, files: [] };
  }
  
  const files = fs.readdirSync(learningDir).filter(f => f.endsWith('.mdx'));
  
  const analysis = {
    total: files.length,
    files: []
  };
  
  files.forEach(file => {
    const filePath = path.join(learningDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(content);
    
    // Learning content typically goes to security/fundamentals
    analysis.files.push({
      file,
      title: frontmatter.title,
      currentPath: `/learn/${file.replace('.mdx', '')}`,
      suggestedCategory: 'security',
      suggestedSubcategory: 'fundamentals',
      newPath: `/knowledge/security/fundamentals/${file.replace('.mdx', '')}`
    });
  });
  
  return analysis;
}

// Main execution
console.log('🔍 Analyzing Content for Migration...\n');
console.log('='

.repeat(60));

const blogAnalysis = analyzeBlogContent();
const learningAnalysis = analyzeLearningContent();

console.log('\n📊 BLOG CONTENT ANALYSIS');
console.log('-'.repeat(60));
console.log(`Total blog posts: ${blogAnalysis.total}`);
console.log('\nContent Distribution by Category:');

Object.entries(blogAnalysis.categorized).forEach(([category, subcats]) => {
  const total = Object.values(subcats).flat().length;
  console.log(`\n  📁 ${KNOWLEDGE_CATEGORIES[category].name} (${total} articles)`);
  
  Object.entries(subcats).forEach(([subcat, files]) => {
    console.log(`     └─ ${subcat}: ${files.length} articles`);
  });
});

console.log('\n\n📚 LEARNING CONTENT ANALYSIS');
console.log('-'.repeat(60));
console.log(`Total learning articles: ${learningAnalysis.total}`);

console.log('\n\n📋 DETAILED MIGRATION PLAN');
console.log('-'.repeat(60));
console.log('\nBlog Posts to Migrate:\n');

blogAnalysis.files.forEach((file, index) => {
  console.log(`${index + 1}. ${file.title || file.file}`);
  console.log(`   Current: ${file.currentPath}`);
  console.log(`   New:     ${file.newPath}`);
  console.log(`   Category: ${file.suggestedCategory} > ${file.suggestedSubcategory}`);
  console.log('');
});

if (learningAnalysis.files.length > 0) {
  console.log('\nLearning Content to Migrate:\n');
  learningAnalysis.files.forEach((file, index) => {
    console.log(`${index + 1}. ${file.title || file.file}`);
    console.log(`   Current: ${file.currentPath}`);
    console.log(`   New:     ${file.newPath}`);
    console.log('');
  });
}

// Save analysis to JSON for migration script
const migrationPlan = {
  timestamp: new Date().toISOString(),
  blog: blogAnalysis,
  learning: learningAnalysis,
  totalFiles: blogAnalysis.total + learningAnalysis.total
};

fs.writeFileSync(
  path.join(__dirname, 'migration-plan.json'),
  JSON.stringify(migrationPlan, null, 2)
);

console.log('\n✅ Analysis complete! Migration plan saved to scripts/migration-plan.json');
console.log('\nNext step: Run the migration script to move files to their new locations.');