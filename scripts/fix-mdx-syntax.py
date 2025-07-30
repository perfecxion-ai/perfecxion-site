#!/usr/bin/env python3
"""
Script to fix MDX syntax issues
"""

import os
import re

def fix_mdx_syntax():
    blog_dir = "content/blog"
    
    # Get all MDX files in the blog directory
    if not os.path.exists(blog_dir):
        print(f"Blog directory not found: {blog_dir}")
        return
        
    files_to_fix = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    for filename in files_to_fix:
        filepath = os.path.join(blog_dir, filename)
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue
            
        print(f"Fixing MDX syntax in {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix className -> class for MDX compatibility
        content = re.sub(r'className="([^"]*)"', r'class="\1"', content)
        
        # Fix any remaining JSX-specific syntax
        content = re.sub(r'<br />', r'<br>', content)
        
        # Fix invalid self-closing tags like <Component class="..." ></Component>
        # Convert them to proper self-closing tags <Component class="..." />
        content = re.sub(r'<([A-Z][a-zA-Z]+)\s+([^>]*)\s*></\1>', r'<\1 \2 />', content)
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed MDX syntax in {filename}")

def fix_typos():
    """Fix specific typos found in the files"""
    blog_dir = "content/blog"
    
    # Fix the font-semibent typo
    typo_files = [
        "advanced-prompt-engineering-security-defense-through-design.mdx"
    ]
    
    for filename in typo_files:
        filepath = os.path.join(blog_dir, filename)
        if not os.path.exists(filepath):
            continue
            
        print(f"Fixing typos in {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix typo
        content = content.replace('font-semibent', 'font-semibold')
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed typos in {filename}")

if __name__ == "__main__":
    fix_mdx_syntax()
    fix_typos()
    print("✅ All MDX syntax issues have been fixed!") 