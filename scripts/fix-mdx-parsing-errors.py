#!/usr/bin/env python3
"""
Advanced MDX Parsing Error Fixer
Addresses specific parsing issues causing build failures.
"""

import os
import re
import sys
from pathlib import Path

def fix_mdx_content(content):
    """Fix specific MDX parsing issues."""
    
    # Step 1: Fix frontmatter separation - ensure proper spacing after ---
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter = parts[1]
            body = parts[2]
            # Ensure proper spacing after frontmatter
            if not body.startswith('\n'):
                body = '\n' + body
            if not body.startswith('\n\n'):
                body = '\n' + body
            content = f"---{frontmatter}---{body}"
    
    # Step 2: Fix malformed tags - remove extra '<' characters
    content = re.sub(r'<</([a-zA-Z][a-zA-Z0-9]*)', r'</\1', content)
    content = re.sub(r'<<([a-zA-Z][a-zA-Z0-9]*)', r'<\1', content)
    
    # Step 3: Fix incomplete closing tags - ensure proper closure
    content = re.sub(r'></([A-Z][a-zA-Z]*[^>]*)><', r'>\n</\1>\n<', content)
    
    # Step 4: Fix JSX self-closing tags that are missing the closing part
    content = re.sub(r'(<[A-Z][a-zA-Z]* [^/>]*)(>)(?!</)', r'\1/>', content)
    
    # Step 5: Ensure blank lines around JSX blocks to separate from markdown
    # Add blank line before JSX that starts a line
    content = re.sub(r'(\n)(<div[^>]*>)', r'\1\n\2', content)
    content = re.sub(r'(\n)(<[A-Z][a-zA-Z]*[^>]*>)', r'\1\n\2', content)
    
    # Add blank line after JSX that ends a block
    content = re.sub(r'(</div>)(\n)([A-Z#])', r'\1\2\n\3', content)
    content = re.sub(r'(</[a-z]+>)(\n)(##)', r'\1\2\n\3', content)
    
    # Step 6: Fix specific pattern issues
    # Fix broken JSX attribute syntax
    content = re.sub(r'className="([^"]*)"([A-Za-z])', r'className="\1" \2', content)
    
    # Step 7: Fix lazy line errors in containers - ensure proper indentation
    # This addresses markdown list/blockquote issues
    lines = content.split('\n')
    fixed_lines = []
    in_blockquote = False
    in_list = False
    
    for i, line in enumerate(lines):
        # Detect blockquote context
        if line.strip().startswith('>'):
            in_blockquote = True
        elif in_blockquote and line.strip() == '':
            in_blockquote = False
        elif in_blockquote and not line.startswith('>') and line.strip() != '':
            # Fix lazy line in blockquote
            line = '> ' + line.lstrip()
        
        # Detect list context
        if re.match(r'^\s*[-*+]\s', line) or re.match(r'^\s*\d+\.\s', line):
            in_list = True
            list_indent = len(line) - len(line.lstrip())
        elif in_list and line.strip() == '':
            in_list = False
        elif in_list and not re.match(r'^\s*[-*+\d]', line) and line.strip() != '':
            # Fix lazy line in list - ensure proper indentation
            if len(line) - len(line.lstrip()) <= list_indent:
                line = ' ' * (list_indent + 2) + line.lstrip()
        
        fixed_lines.append(line)
    
    content = '\n'.join(fixed_lines)
    
    # Step 8: Clean up excessive whitespace
    content = re.sub(r'\n\n\n+', '\n\n', content)
    
    # Step 9: Ensure file ends with newline (but not multiple)
    content = content.rstrip() + '\n'
    
    return content

def process_mdx_file(file_path):
    """Process a single MDX file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        # Apply fixes
        fixed_content = fix_mdx_content(original_content)
        
        # Only write if content changed
        if fixed_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"✅ Fixed: {file_path}")
            return True
        else:
            print(f"⏭️  No changes needed: {file_path}")
            return True
            
    except Exception as e:
        print(f"❌ Error processing {file_path}: {str(e)}")
        return False

def main():
    """Main function to process all MDX files."""
    # Get the content directory
    content_dir = Path(__file__).parent.parent / 'content' / 'blog'
    
    if not content_dir.exists():
        print(f"❌ Content directory not found: {content_dir}")
        sys.exit(1)
    
    # Get all MDX files
    mdx_files = list(content_dir.glob('*.mdx'))
    
    if not mdx_files:
        print("❌ No MDX files found in content/blog/")
        sys.exit(1)
    
    print(f"🔧 Processing {len(mdx_files)} MDX files...")
    
    success_count = 0
    for mdx_file in mdx_files:
        if process_mdx_file(mdx_file):
            success_count += 1
    
    print(f"\n✅ Successfully processed {success_count}/{len(mdx_files)} files")
    
    if success_count == len(mdx_files):
        print("🎉 All MDX files have been processed!")
        print("\nNext step: Run 'npm run build' to test the fixes")
    else:
        print("⚠️  Some files had errors. Please check the output above.")

if __name__ == '__main__':
    main()