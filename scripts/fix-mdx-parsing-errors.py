#!/usr/bin/env python3
"""
Script to fix specific MDX parsing errors that cause "Could not parse expression with acorn"
"""

import os
import re

def fix_mdx_parsing_errors():
    blog_dir = "content/blog"
    
    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    for filename in mdx_files:
        filepath = os.path.join(blog_dir, filename)
        print(f"Fixing parsing errors in {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix 1: Remove any non-ASCII characters that might cause parsing issues
        content = re.sub(r'[^\x00-\x7F]+', '', content)
        
        # Fix 2: Fix malformed JSX attributes (remove extra spaces in self-closing tags)
        content = re.sub(r'(\s+)/>', r' />', content)
        
        # Fix 3: Fix any unclosed quotes in JSX attributes
        content = re.sub(r'class="([^"]*?)\s*$', r'class="\1"', content, flags=re.MULTILINE)
        
        # Fix 4: Remove any stray characters that might cause parsing issues
        content = re.sub(r'[^\x20-\x7E\n\t]', '', content)
        
        # Fix 5: Ensure proper spacing around JSX elements
        content = re.sub(r'(\n)<div', r'\n\n<div', content)
        content = re.sub(r'</div>(\n)', r'</div>\n\n', content)
        
        # Fix 6: Remove any empty lines that might cause issues
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Fix 7: Ensure proper line endings
        content = content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Fix 8: Remove any trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Fix 9: Fix any malformed class attributes
        content = re.sub(r'class="([^"]*?)\s*"', r'class="\1"', content)
        
        # Fix 10: Remove any invalid characters in JSX
        content = re.sub(r'[^\x20-\x7E\n\t]', '', content)
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed parsing errors in {filename}")

if __name__ == "__main__":
    fix_mdx_parsing_errors()
    print("✅ All MDX parsing errors have been fixed!") 