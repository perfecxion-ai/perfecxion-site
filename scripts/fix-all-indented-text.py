#!/usr/bin/env python3
import re
import sys

def fix_all_indented_text(content):
    """Fix all indented text that might confuse MDX parser."""
    
    # Fix indented paragraphs after lists
    content = re.sub(r'(\n- [^\n]+)\n  ([A-Z][^\n]+)', r'\1\n\n\2', content)
    
    # Fix indented paragraphs after headers
    content = re.sub(r'(^#+ [^\n]+)\n  ([A-Z][^\n]+)', r'\1\n\n\2', content, flags=re.MULTILINE)
    
    # Fix general indented text
    content = re.sub(r'\n  ([A-Z][^\n]{20,})', r'\n\n\1', content)
    
    return content

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python fix-all-indented-text.py <file.mdx>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixed_content = fix_all_indented_text(content)
    
    if fixed_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed all indented text in {filepath}")
    else:
        print(f"No indented text issues found in {filepath}")