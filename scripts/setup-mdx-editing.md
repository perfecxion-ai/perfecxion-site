# MDX Editing Setup Guide

## VS Code Extensions to Install

1. **Markdown All in One**
   - Extension ID: `yzhang.markdown-all-in-one`
   - Features: Auto-completion, formatting, TOC

2. **MDX**
   - Extension ID: `silvenon.mdx`
   - Features: Syntax highlighting, IntelliSense

3. **Markdown Preview Enhanced**
   - Extension ID: `shd101wyy.markdown-preview-enhanced`
   - Features: Live preview, custom CSS

4. **Auto Rename Tag**
   - Extension ID: `formulahendry.auto-rename-tag`
   - Features: Auto-rename JSX/HTML tags

5. **Tailwind CSS IntelliSense**
   - Extension ID: `bradlc.vscode-tailwindcss`
   - Features: Tailwind class autocomplete

## VS Code Settings for MDX

Add to your `.vscode/settings.json`:

```json
{
  "markdown.extension.toc.levels": "1..6",
  "markdown.extension.toc.orderedList": false,
  "markdown.extension.toc.updateOnSave": true,
  "markdown.extension.toc.plaintext": false,
  "markdown.extension.toc.githubCompatibility": true,
  "markdown.extension.preview.autoShowPreviewToSide": true,
  "markdown.extension.syntax.decorations": true,
  "files.associations": {
    "*.mdx": "markdown"
  }
}
```

## Quick Commands

- `Ctrl+Shift+V` - Open preview
- `Ctrl+K V` - Open preview to side
- `Ctrl+Shift+P` then "Markdown All in One: Create Table of Contents"

## Tips for Your Blog Posts

1. **Use the preview** to see how your MDX looks
2. **Test components** by writing them in MDX
3. **Use Tailwind classes** with IntelliSense
4. **Check frontmatter** syntax highlighting
5. **Use snippets** for common patterns

## Common MDX Patterns for Your Site

```mdx
---
title: "Your Title"
description: "Your description"
date: "2025-01-01"
author: "Author Name"
category: "AI Security"
tags: ["Tag1", "Tag2"]
readTime: "5 min read"
featured: false
toc: true
---

# Your Title

<div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
  <div className="flex items-start gap-3">
    <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-3">Important Note</h3>
      <p className="text-blue-800 dark:text-blue-300 leading-relaxed">
        Your content here.
      </p>
    </div>
  </div>
</div>

## Section Title

Your content here.

<div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-8 font-mono text-sm">
  <div className="text-gray-400 mb-3">🔍 Code Example:</div>
  <div className="space-y-2">
    <div>// Your code here</div>
  </div>
</div>
``` 