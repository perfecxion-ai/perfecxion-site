#!/usr/bin/env python3
import re
import sys

def fix_indented_content(content):
    """Fix indented content after headers that causes MDX parsing issues."""
    
    # Fix pattern: **Header**\n  Content -> **Header**\n\nContent
    content = re.sub(r'(\*\*[^*]+\*\*)\n  ([A-Z])', r'\1\n\n\2', content)
    
    # Fix pattern: ### Header\n**Subheader**\n  Content -> proper spacing
    content = re.sub(r'(### [^\n]+)\n(\*\*[^*]+\*\*)\n  ([A-Z])', r'\1\n\n\2\n\n\3', content)
    
    return content

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python fix-indented-content.py <file.mdx>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixed_content = fix_indented_content(content)
    
    if fixed_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed indented content in {filepath}")
    else:
        print(f"No indented content issues found in {filepath}")