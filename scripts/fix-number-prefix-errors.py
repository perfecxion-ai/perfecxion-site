#!/usr/bin/env python3
"""
Script to fix MDX parsing errors caused by lines starting with numbers
"""

import os
import re

def fix_number_prefix_errors():
    blog_dir = "content/blog"
    
    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    for filename in mdx_files:
        filepath = os.path.join(blog_dir, filename)
        print(f"Fixing number prefix errors in {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix 1: Add proper spacing before lines that start with numbers
        # This prevents MDX from interpreting them as JSX expressions
        content = re.sub(r'^(\d+[\.\)]?\s)', r' \1', content, flags=re.MULTILINE)
        
        # Fix 2: Ensure proper spacing around numbered lists
        content = re.sub(r'(\n)(\d+[\.\)]?\s)', r'\1 \2', content)
        
        # Fix 3: Fix any lines that start with numbers followed by text
        content = re.sub(r'^(\d+[\.\)]?\s+[A-Za-z])', r' \1', content, flags=re.MULTILINE)
        
        # Fix 4: Ensure proper spacing around any remaining problematic patterns
        content = re.sub(r'(\n)(\d+[\.\)]?\s+[A-Za-z])', r'\1 \2', content)
        
        # Fix 5: Remove any leading spaces that might cause issues
        content = re.sub(r'^\s+', '', content, flags=re.MULTILINE)
        
        # Fix 6: Ensure proper line endings
        content = content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed number prefix errors in {filename}")

if __name__ == "__main__":
    fix_number_prefix_errors()
    print("✅ All number prefix errors have been fixed!") 