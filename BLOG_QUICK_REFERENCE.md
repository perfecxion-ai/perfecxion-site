# Blog Quick Reference Guide

## Frontmatter Template
```yaml
---
title: "Your SEO-Optimized Title (60-70 chars)"
description: "Compelling 150-160 character description with keywords"
date: "YYYY-MM-DD"
author: "Author Name or perfecXion Research Team"
category: "AI Security|Compliance|Technical Guide|Industry News|Case Study|Best Practices|Product Updates"
tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"]
readTime: "X min read"
featured: false
toc: true
---
```

## Content Structure

### 1. Hero Section (Optional)
```jsx
<div className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-500 dark:to-primary-700 rounded-lg p-8 text-white mb-8 shadow-lg">
  <div className="flex items-center gap-4 mb-4">
    <Shield className="h-12 w-12 text-white" />
    <div>
      <h2 className="text-3xl font-bold mb-2 text-white">Your Hero Title</h2>
      <div className="text-white/90">Supporting subtitle</div>
    </div>
  </div>
</div>
```

### 2. Executive Summary
```jsx
<div className="bg-yellow-200 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 mb-8 shadow-sm">
  <div className="flex items-start gap-3">
    <AlertTriangle className="h-6 w-6 text-yellow-800 dark:text-yellow-400 mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">Key Insight</h3>
      <div className="text-yellow-900 dark:text-yellow-300 leading-relaxed">
        Your key message here.
      </div>
    </div>
  </div>
</div>
```

### 3. Content Blocks

**Info Box:**
```jsx
<div className="bg-blue-200 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 shadow-sm">
  <div className="flex items-start gap-3">
    <Info className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">Title</h3>
      <div className="text-blue-900 dark:text-blue-300">Content</div>
    </div>
  </div>
</div>
```

**Warning Box:**
```jsx
<div className="bg-red-200 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-8 shadow-sm">
  <div className="flex items-start gap-3">
    <AlertCircle className="h-6 w-6 text-red-800 mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">Warning</h3>
      <div className="text-red-900 dark:text-red-300">Content</div>
    </div>
  </div>
</div>
```

**Success Box:**
```jsx
<div className="bg-green-200 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-8 shadow-sm">
  <div className="flex items-start gap-3">
    <CheckCircle className="h-6 w-6 text-green-800 mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-bold text-green-900 dark:text-green-200 mb-2">Success</h3>
      <div className="text-green-900 dark:text-green-300">Content</div>
    </div>
  </div>
</div>
```

**Code Block:**
```jsx
<div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 font-mono text-sm">
  <div className="text-gray-400">Description:</div>
  <div>Your code here</div>
</div>
```

**Grid Layout:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
    <div className="flex items-center gap-3 mb-4">
      <Users className="h-8 w-8 text-red-500" />
      <h3 className="text-lg font-bold">Title 1</h3>
    </div>
    <div className="text-gray-600 dark:text-gray-400">Content</div>
  </div>
  <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
    <div className="flex items-center gap-3 mb-4">
      <Cpu className="h-8 w-8 text-blue-500" />
      <h3 className="text-lg font-bold">Title 2</h3>
    </div>
    <div className="text-gray-600 dark:text-gray-400">Content</div>
  </div>
</div>
```

### 4. Conclusion
```jsx
<div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg p-8 text-white mb-8">
  <h3 className="text-2xl font-bold mb-4">Conclusion Title</h3>
  <div className="text-primary-100 mb-6">Your conclusion</div>
</div>
```

### 5. Call-to-Action
```jsx
<div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 text-center">
  <h3 className="text-xl font-bold mb-4">Ready to Take Action?</h3>
  <div className="text-gray-600 dark:text-gray-400 mb-6">Description</div>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/products" className="btn-primary inline-flex items-center justify-center">
      Explore Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
    </a>
    <a href="/contact" className="btn-secondary inline-flex items-center justify-center">
      Get Started
    </a>
  </div>
</div>
```

## Available Icons
`Shield`, `AlertTriangle`, `Lock`, `Eye`, `Cpu`, `Database`, `Network`, `Users`, `CheckCircle`, `XCircle`, `ArrowRight`, `Info`, `AlertCircle`, `Zap`, `Target`, `Brain`, `Layers`

## Common Categories
- AI Security
- Compliance
- Technical Guide
- Industry News
- Case Study
- Best Practices
- Product Updates

## Common Tags
- AI Security
- LLM Security
- Prompt Injection
- OWASP
- Machine Learning
- Neural Networks
- Compliance
- Risk Management
- Threat Modeling
- Incident Response

## File Naming
Use kebab-case: `ai-security-guide-2025.mdx`

## Quick Checklist
- [ ] Frontmatter complete
- [ ] SEO title/description
- [ ] Proper headings (## for sections)
- [ ] Content blocks used appropriately
- [ ] Internal/external links
- [ ] Call-to-action included
- [ ] Professional tone
- [ ] Mobile-friendly 