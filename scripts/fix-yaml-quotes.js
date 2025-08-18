#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files with known YAML quote issues
const filesToFix = [
  'content/knowledge/compliance/governance/executives-guide-ai-risk-management-liability.mdx',
  'content/knowledge/security/defense/secure-ai-deployment-production-best-practices.mdx',
  'content/knowledge/security/red-team/50-attack-vectors-ai-red-team-guide.mdx'
];

function fixYamlQuotes(filePath) {
  console.log(`Fixing YAML quotes in: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix specific problematic patterns
  let fixed = content;
  
  // Fix apostrophes in descriptions
  fixed = fixed.replace(
    /description: 'A comprehensive guide for C-suite executives on understanding AI risks, managing liability exposure, and building resilient AI strategies that protect shareholder value while enabling innovation\./,
    'description: "A comprehensive guide for C-suite executives on understanding AI risks, managing liability exposure, and building resilient AI strategies that protect shareholder value while enabling innovation."'
  );
  
  fixed = fixed.replace(
    /description: 'A comprehensive CISO's guide to deploying AI systems securely in production environments\. Learn MLSecOps principles, threat modeling, and governance frameworks for resilient AI security\./,
    'description: "A comprehensive CISO guide to deploying AI systems securely in production environments. Learn MLSecOps principles, threat modeling, and governance frameworks for resilient AI security."'
  );
  
  fixed = fixed.replace(
    /description: 'Master the complete taxonomy of AI attack vectors with detailed techniques, real-world examples, and defensive strategies\. The definitive guide for security professionals testing AI systems\./,
    'description: "Master the complete taxonomy of AI attack vectors with detailed techniques, real-world examples, and defensive strategies. The definitive guide for security professionals testing AI systems."'
  );
  
  // Fix any other problematic single quotes in titles that contain apostrophes
  fixed = fixed.replace(
    /title: '50\+ Attack Vectors - A Red Teamer's Guide to Breaking AI Systems'/,
    'title: "50+ Attack Vectors - A Red Teamer Guide to Breaking AI Systems"'
  );
  
  fixed = fixed.replace(
    /title: 'The Executive's Guide to AI Risk Management and Liability'/,
    'title: "The Executive Guide to AI Risk Management and Liability"'
  );
  
  if (fixed !== content) {
    fs.writeFileSync(filePath, fixed);
    console.log(`✓ Fixed YAML quotes in ${filePath}`);
    return true;
  }
  
  console.log(`- No changes needed for ${filePath}`);
  return false;
}

// Fix all files
let fixedCount = 0;
filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixYamlQuotes(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`! File not found: ${filePath}`);
  }
});

console.log(`\n${fixedCount} files fixed.`);