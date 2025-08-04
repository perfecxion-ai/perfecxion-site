#!/usr/bin/env python3
import re
import sys

def fix_p_tag_structure(content):
    """Fix self-closing p tags that should wrap content."""
    
    # Find patterns where self-closing p tag is followed by content and then a closing p tag
    pattern = r'(<p[^>]*?)\s*/>\n([^<]+(?:<[^/][^>]*>[^<]*</[^>]+>[^<]*)*)\n</p>'
    
    # Replace self-closing tag with proper opening tag
    fixed_content = re.sub(pattern, r'\1>\n\2\n</p>', content, flags=re.MULTILINE | re.DOTALL)
    
    return fixed_content

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python fix-p-tag-structure.py <file.mdx>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixed_content = fix_p_tag_structure(content)
    
    if fixed_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed p tag structure in {filepath}")
    else:
        print(f"No p tag issues found in {filepath}")