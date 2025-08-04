#!/usr/bin/env python3
import re
import sys

def fix_stray_brackets(content):
    """Fix stray < characters on their own lines after closing tags."""
    
    # Pattern 1: Icon components with stray < on next line before text
    patterns = [
        (r'</XCircle>\n<\n', '</XCircle>\n'),
        (r'</CheckCircle>\n<\n', '</CheckCircle>\n'),
        (r'</Brain>\n<\n<span>', '</Brain>\n<span>'),
        (r'</ArrowRight>\n<\n<span>', '</ArrowRight>\n<span>'),
        (r'</Target>\n<\n<span>', '</Target>\n<span>'),
        (r'</Shield>\n<\n<span>', '</Shield>\n<span>'),
        (r'</ArrowRight>\n<\n</a>', '</ArrowRight>\n</a>'),
    ]
    
    for pattern, replacement in patterns:
        content = content.replace(pattern, replacement)
    
    # More general pattern: Any closing tag followed by < on its own line
    content = re.sub(r'(</\w+>)\n<\n', r'\1\n', content)
    
    return content

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python fix-stray-brackets.py <file.mdx>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixed_content = fix_stray_brackets(content)
    
    if fixed_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed stray brackets in {filepath}")
    else:
        print(f"No stray brackets found in {filepath}")