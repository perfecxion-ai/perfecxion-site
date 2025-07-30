#!/usr/bin/env python3
"""
Script to fix specific MDX parsing errors
"""

import os
import re

def fix_specific_mdx_errors():
    blog_dir = "content/blog"
    
    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    for filename in mdx_files:
        filepath = os.path.join(blog_dir, filename)
        print(f"Fixing specific errors in {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix 1: Remove problematic backticks that are causing JSX parsing errors
        content = re.sub(r'`(\s*<div[^>]*>)`', r'\1', content)
        content = re.sub(r'`(\s*</div>)`', r'\1', content)
        
        # Fix 2: Remove any remaining problematic backticks around JSX elements
        content = re.sub(r'`(\s*<[^>]+>)`', r'\1', content)
        
        # Fix 3: Fix specific problematic patterns
        content = re.sub(r'<div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">`', 
                        r'<div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">', content)
        
        # Fix 4: Remove any trailing backticks
        content = re.sub(r'`(\s*)$', r'\1', content, flags=re.MULTILINE)
        
        # Fix 5: Ensure proper spacing around JSX elements
        content = re.sub(r'(\n)(<div)', r'\1\n\2', content)
        content = re.sub(r'(</div>)(\n)', r'\1\n\n\2', content)
        
        # Fix 6: Remove any invalid characters
        content = re.sub(r'[^\x00-\x7F]+', '', content)
        
        # Fix 7: Ensure proper line endings
        content = content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Fix 8: Remove any trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed specific errors in {filename}")

if __name__ == "__main__":
    fix_specific_mdx_errors()
    print("✅ All specific MDX errors have been fixed!") 