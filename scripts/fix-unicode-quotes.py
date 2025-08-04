#!/usr/bin/env python3
import re
import sys

def fix_unicode_quotes(content):
    """Replace various Unicode quote characters with standard ASCII quotes."""
    
    # Replace smart quotes and other Unicode quotes with standard quotes
    replacements = [
        ('"', '"'),  # Left double quotation mark
        ('"', '"'),  # Right double quotation mark
        (''', "'"),  # Left single quotation mark
        (''', "'"),  # Right single quotation mark
        ('″', '"'),  # Double prime
        ('‴', '"'),  # Triple prime
        ('〝', '"'),  # Reversed double prime quotation mark
        ('〞', '"'),  # Double prime quotation mark
        ('‟', '"'),  # Double high-reversed-9 quotation mark
        ('„', '"'),  # Double low-9 quotation mark
    ]
    
    for old, new in replacements:
        content = content.replace(old, new)
    
    return content

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python fix-unicode-quotes.py <file.mdx>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixed_content = fix_unicode_quotes(content)
    
    if fixed_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed Unicode quotes in {filepath}")
    else:
        print(f"No Unicode quotes found in {filepath}")