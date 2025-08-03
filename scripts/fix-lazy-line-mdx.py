#!/usr/bin/env python3
"""
Script to fix MDX "lazy line in container" errors
"""

import os
import re

def fix_lazy_lines():
    blog_dir = "content/blog"
    
    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    for filename in mdx_files:
        filepath = os.path.join(blog_dir, filename)
        print(f"Checking {filename} for lazy line issues...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix pattern 1: FeatureCard with closing > on separate line followed by indented content
        # This pattern causes MDX to interpret > as a blockquote
        content = re.sub(
            r'(\s+)(color="[^"]+"\n\s*>\n\s+)([^\n])',
            r'\1color="\2">\3',
            content,
            flags=re.MULTILINE
        )
        
        # More general fix for any JSX component with > on its own line
        content = re.sub(
            r'(\s+)>\n\s+([A-Z])',
            r'\1>\2',
            content,
            flags=re.MULTILINE
        )
        
        # Fix components where > is on its own line
        pattern = re.compile(r'^(\s*)(.*?)(\s*>\s*)$\n^(\s+)(.+)$', re.MULTILINE)
        
        def replace_lazy_line(match):
            indent1, attrs, closing_bracket, indent2, content_line = match.groups()
            # If the second line has more indentation than the first, it's likely content
            if len(indent2) > len(indent1):
                return f"{indent1}{attrs}>{content_line}"
            return match.group(0)
        
        content = pattern.sub(replace_lazy_line, content)
        
        # Specific fix for the pattern we're seeing
        content = re.sub(
            r'(color="[^"]+")(\s*\n\s*>\s*\n\s*)([A-Z])',
            r'\1>\3',
            content
        )
        
        if content != original_content:
            # Write the fixed content back
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed lazy line issues in {filename}")
        else:
            print(f"  No lazy line issues found in {filename}")

if __name__ == "__main__":
    fix_lazy_lines()
    print("✅ Lazy line fixing complete!")