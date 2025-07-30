#!/usr/bin/env python3
"""
Final script to fix remaining MDX issues
"""

import os
import re

def fix_final_mdx_issues():
    blog_dir = "content/blog"
    
    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    for filename in mdx_files:
        filepath = os.path.join(blog_dir, filename)
        print(f"Fixing final issues in {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix 1: Remove problematic backticks that are causing JSX parsing errors
        content = re.sub(r'`(\d+[^`]*=.*?)`', r'\1', content)
        content = re.sub(r'`(\d+[^`]*[^\w\s][^`]*)`', r'\1', content)
        
        # Fix 2: Remove any remaining problematic backticks around JSX
        content = re.sub(r'`(<div[^>]*>)`', r'\1', content)
        content = re.sub(r'`(</div>)`', r'\1', content)
        
        # Fix 3: Ensure proper spacing around JSX elements
        content = re.sub(r'(\n)(<div)', r'\1\n\2', content)
        content = re.sub(r'(</div>)(\n)', r'\1\n\n\2', content)
        
        # Fix 4: Remove any invalid characters
        content = re.sub(r'[^\x00-\x7F]+', '', content)
        
        # Fix 5: Ensure proper line endings
        content = content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Fix 6: Remove any trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed final issues in {filename}")

if __name__ == "__main__":
    fix_final_mdx_issues()
    print("✅ All final MDX issues have been fixed!") 