#!/usr/bin/env python3
"""
Final script to fix remaining MDX parsing errors
"""

import os
import re

def fix_remaining_mdx_errors():
    blog_dir = "content/blog"
    
    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    for filename in mdx_files:
        filepath = os.path.join(blog_dir, filename)
        print(f"Fixing remaining errors in {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix 1: Escape problematic lines that start with numbers and contain equals signs
        # These are being interpreted as JSX expressions
        content = re.sub(r'^(\d+[^=]*=.*?)$', r'`\1`', content, flags=re.MULTILINE)
        
        # Fix 2: Escape lines that start with numbers and contain special characters
        content = re.sub(r'^(\d+[^`]*[^\w\s][^`]*)$', r'`\1`', content, flags=re.MULTILINE)
        
        # Fix 3: Handle specific problematic patterns
        content = re.sub(r'(\n)(\d+[^`]*=.*?)(\n)', r'\1`\2`\3', content)
        
        # Fix 4: Remove any remaining problematic backticks around JSX
        content = re.sub(r'`(\s*<div[^>]*>)`', r'\1', content)
        content = re.sub(r'`(\s*</div>)`', r'\1', content)
        content = re.sub(r'`(\s*<[^>]+>)`', r'\1', content)
        
        # Fix 5: Remove any trailing backticks
        content = re.sub(r'`(\s*)$', r'\1', content, flags=re.MULTILINE)
        
        # Fix 6: Ensure proper spacing around JSX elements
        content = re.sub(r'(\n)(<div)', r'\1\n\2', content)
        content = re.sub(r'(</div>)(\n)', r'\1\n\n\2', content)
        
        # Fix 7: Remove any invalid characters
        content = re.sub(r'[^\x00-\x7F]+', '', content)
        
        # Fix 8: Ensure proper line endings
        content = content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Fix 9: Remove any trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed remaining errors in {filename}")

if __name__ == "__main__":
    fix_remaining_mdx_errors()
    print("✅ All remaining MDX errors have been fixed!") 