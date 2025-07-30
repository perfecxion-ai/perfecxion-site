#!/usr/bin/env python3
"""
Script to fix all remaining MDX syntax issues
"""

import os
import re

def fix_mdx_syntax():
    blog_dir = "content/blog"
    
    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    for filename in mdx_files:
        filepath = os.path.join(blog_dir, filename)
        print(f"Fixing {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix 1: Replace <br> with proper line breaks
        content = re.sub(r'<br>', '\n\n', content)
        
        # Fix 2: Remove any invalid characters that might cause parsing issues
        content = re.sub(r'[^\x00-\x7F]+', '', content)
        
        # Fix 3: Ensure proper spacing around headings
        content = re.sub(r'(\n)##\s+', r'\n\n## ', content)
        content = re.sub(r'(\n)###\s+', r'\n\n### ', content)
        
        # Fix 4: Remove any empty lines that might cause issues
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Fix 5: Ensure proper spacing around divs
        content = re.sub(r'(\n)<div', r'\n\n<div', content)
        content = re.sub(r'</div>(\n)', r'</div>\n\n', content)
        
        # Fix 6: Remove any trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Fix 7: Ensure proper line endings
        content = content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed {filename}")

if __name__ == "__main__":
    fix_mdx_syntax()
    print("✅ All MDX syntax issues have been fixed!") 