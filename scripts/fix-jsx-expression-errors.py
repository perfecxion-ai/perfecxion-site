#!/usr/bin/env python3
"""
Script to fix JSX expression parsing errors in MDX files
"""

import os
import re

def fix_jsx_expression_errors():
    blog_dir = "content/blog"
    
    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    for filename in mdx_files:
        filepath = os.path.join(blog_dir, filename)
        print(f"Fixing JSX expression errors in {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix 1: Escape lines that start with numbers and contain equals signs
        # These are being interpreted as JSX expressions
        content = re.sub(r'^(\d+[^=]*=.*)$', r'`\1`', content, flags=re.MULTILINE)
        
        # Fix 2: Escape lines that start with numbers and contain special characters
        content = re.sub(r'^(\d+[^`]*[^\w\s][^`]*)$', r'`\1`', content, flags=re.MULTILINE)
        
        # Fix 3: Ensure proper spacing around problematic patterns
        content = re.sub(r'(\n)(\d+[^`]*=.*?)(\n)', r'\1`\2`\3', content)
        
        # Fix 4: Handle specific problematic patterns
        content = re.sub(r'(\n)(\d+\s+[^`]*=.*?)(\n)', r'\1`\2`\3', content)
        
        # Fix 5: Remove any invalid characters that might cause parsing issues
        content = re.sub(r'[^\x00-\x7F]+', '', content)
        
        # Fix 6: Ensure proper line endings
        content = content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed JSX expression errors in {filename}")

if __name__ == "__main__":
    fix_jsx_expression_errors()
    print("✅ All JSX expression errors have been fixed!") 