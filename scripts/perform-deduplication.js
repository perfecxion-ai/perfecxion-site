const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Files that need migration (unique in old directories)
const filesToMigrate = [
  {
    source: './content/blog/ai-arch-security.mdx',
    target: './content/knowledge/security/fundamentals/ai-arch-security.mdx'
  },
  {
    source: './content/blog/prompt-injection-silent-threat-ai-systems.md',
    target: './content/knowledge/security/threats/prompt-injection-silent-threat-ai-systems.md'
  },
  {
    source: './content/white-papers/ai-incident-response.mdx',
    target: './content/knowledge/compliance/standards/ai-incident-response.mdx'
  },
  {
    source: './content/white-papers/ai-regulatory-compliance.mdx',
    target: './content/knowledge/compliance/regulations/ai-regulatory-compliance.mdx'
  },
  {
    source: './content/white-papers/building-ai-security-programs.mdx',
    target: './content/knowledge/security/fundamentals/white-paper-building-ai-security-programs.mdx' // Renamed to avoid conflict
  },
  {
    source: './content/reference-architectures/secure-llm-deployment.mdx',
    target: './content/knowledge/infrastructure/architecture/secure-llm-deployment.mdx'
  }
];

// Files to remove (duplicates in old directories)
const duplicatesToRemove = [
  // Blog duplicates
  './content/blog/50-attack-vectors-ai-red-team-guide.mdx',
  './content/blog/advanced-prompt-engineering-security-defense-through-design.mdx',
  './content/blog/agentic-ai-complete-guide.mdx',
  './content/blog/ai-and-hipaa-compliance-guide.mdx',
  './content/blog/ai-governance-at-scale-enterprise-strategies-responsible-ai.mdx',
  './content/blog/ai-guardrails-that-actually-work-beyond-basic-content-filtering.mdx',
  './content/blog/ai-powered-security-automation-transforming-enterprise-cybersecurity.mdx',
  './content/blog/ai-red-team-testing-complete-guide.mdx',
  './content/blog/ai-red-team-testing-production-lessons.mdx',
  './content/blog/ai-security-financial-services-regulatory-requirements.mdx',
  './content/blog/building-mature-ai-security-program-startup-to-enterprise.mdx',
  './content/blog/data-poisoning-attacks.mdx',
  './content/blog/executives-guide-ai-risk-management-liability.mdx',
  './content/blog/from-chatbots-to-autonomous-agents-evolution-ai-security.mdx',
  './content/blog/future-ai-security-emerging-threats-defenses.mdx',
  './content/blog/healthcare-ai-security-protecting-patient-data-safety.mdx',
  './content/blog/hidden-risks-agentic-ai-monitoring-fails.mdx',
  './content/blog/llm-security-protecting-language-models-production.mdx',
  './content/blog/making-sense-data-anonymization-ai.mdx',
  './content/blog/multi-agent-systems-security-safe-ai-collaboration.mdx',
  './content/blog/multi-cloud-ai-security-strategies-hybrid-deployments.mdx',
  './content/blog/navigating-ai-compliance-framework-security-standards.mdx',
  './content/blog/neural-network-security-beyond-traditional-defenses.mdx',
  './content/blog/owasp-top-10-ai-critical-security-vulnerabilities.mdx',
  './content/blog/prompt-injection-playbook-attack-techniques-defenses.mdx',
  './content/blog/secure-ai-deployment-production-best-practices.mdx',
  './content/blog/securing-ai-critical-infrastructure-lessons-from-field.mdx',
  './content/blog/securing-ai-infrastructure-training-to-deployment.mdx',
  './content/blog/securing-ai-systems-enterprise-frameworks.mdx',
  './content/blog/the-agentic-leap-understanding-and-building-modern-ai-agents.mdx',
  './content/blog/welcome.mdx',
  './content/blog/zero-day-ai-vulnerabilities-detection-response.mdx',
  './content/blog/zero-trust-architecture-ai-systems-implementation-guide.mdx',
  
  // Learning duplicates
  './content/learning/building-ai-security-programs.mdx',
  './content/learning/compliance-for-ai-systems.mdx',
  './content/learning/getting-started.mdx',
  './content/learning/incident-response-for-ai.mdx',
  './content/learning/types-of-ai-attacks.mdx',
  './content/learning/understanding-ai-vulnerabilities.mdx'
];

// Step 1: Migrate unique files
console.log('📦 Step 1: Migrating unique files to knowledge directory...');
console.log('=========================================================');

filesToMigrate.forEach(({ source, target }) => {
  const sourcePath = path.join(process.cwd(), source);
  const targetPath = path.join(process.cwd(), target);
  
  if (fs.existsSync(sourcePath)) {
    // Ensure target directory exists
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Check if target already exists
    if (fs.existsSync(targetPath)) {
      console.log(`⚠️  Target already exists, skipping: ${target}`);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Migrated: ${source} -> ${target}`);
    }
  } else {
    console.log(`⚠️  Source not found: ${source}`);
  }
});

// Step 2: Remove duplicates from old directories
console.log('\n🗑️  Step 2: Removing duplicate files from old directories...');
console.log('==========================================================');

let removedCount = 0;
let skippedCount = 0;

duplicatesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`✅ Removed: ${file}`);
    removedCount++;
  } else {
    console.log(`⚠️  File not found, skipping: ${file}`);
    skippedCount++;
  }
});

// Step 3: Remove files that were migrated
console.log('\n🗑️  Step 3: Removing migrated files from old directories...');
console.log('=========================================================');

filesToMigrate.forEach(({ source }) => {
  const sourcePath = path.join(process.cwd(), source);
  
  if (fs.existsSync(sourcePath)) {
    fs.unlinkSync(sourcePath);
    console.log(`✅ Removed migrated file: ${source}`);
    removedCount++;
  }
});

// Step 4: Clean up empty directories
console.log('\n🧹 Step 4: Cleaning up empty directories...');
console.log('==========================================');

function removeEmptyDirs(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath);
  
  if (files.length === 0) {
    fs.rmdirSync(dirPath);
    console.log(`✅ Removed empty directory: ${dirPath}`);
    return true;
  }
  
  // Check for hidden files only (like .DS_Store)
  const nonHiddenFiles = files.filter(f => !f.startsWith('.'));
  if (nonHiddenFiles.length === 0) {
    // Remove hidden files first
    files.forEach(f => {
      const filePath = path.join(dirPath, f);
      if (fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath);
      }
    });
    fs.rmdirSync(dirPath);
    console.log(`✅ Removed empty directory: ${dirPath}`);
    return true;
  }
  
  return false;
}

// Don't remove these directories even if empty, as they might be needed
const preserveDirs = [
  'content/blog',
  'content/learning',
  'content/white-papers',
  'content/reference-architectures'
];

// Summary
console.log('\n📊 Deduplication Summary:');
console.log('========================');
console.log(`Files migrated: ${filesToMigrate.length}`);
console.log(`Duplicate files removed: ${removedCount}`);
console.log(`Files skipped (not found): ${skippedCount}`);

console.log('\n✅ Deduplication complete!');
console.log('Next step: Update content-loader.ts to use only the knowledge directory.');