#!/usr/bin/env python3
"""
Comprehensive MDX Structure Fixer
Addresses all structural parsing issues in MDX files that cause build failures.
"""

import os
import re
import sys
from pathlib import Path

def fix_mdx_structure(content):
    """Fix all MDX structural issues that cause parsing errors."""
    
    # Step 1: Fix inline JSX concatenation by adding line breaks
    # This handles patterns like: ></Lock><div> and similar
    content = re.sub(r'></([A-Z][a-zA-Z]*)(>|/>|</)', r'></\1>\n<', content)
    content = re.sub(r'></([a-z]+)><([A-Z][a-zA-Z]*)', r'></\1>\n<\2', content)
    content = re.sub(r'></([a-z]+)><([a-z]+)', r'></\1>\n<\2', content)
    
    # Step 2: Fix self-closing tags followed by opening tags
    content = re.sub(r'(/>)(<[A-Za-z])', r'\1\n\2', content)
    
    # Step 3: Break up complex nested structures on single lines
    # Look for patterns like: ><h3...></h3><div...><div...>
    content = re.sub(r'(</h[1-6]>)(<div[^>]*>)(<div[^>]*>)', r'\1\n\2\n\3', content)
    content = re.sub(r'(</[^>]+>)(<h[1-6][^>]*>)', r'\1\n\2', content)
    content = re.sub(r'(</[^>]+>)(<div[^>]*>)(<div[^>]*>)', r'\1\n\2\n\3', content)
    
    # Step 4: Ensure blank lines before and after JSX blocks
    # Add blank line before JSX that follows markdown
    content = re.sub(r'(\n[^<\n]+)\n(<div[^>]*>)', r'\1\n\n\2', content)
    content = re.sub(r'(\n[^<\n]+)\n(<[A-Z][a-zA-Z]*[^>]*>)', r'\1\n\n\2', content)
    
    # Add blank line after JSX that precedes markdown headers
    content = re.sub(r'(</div>)\n(##[^#])', r'\1\n\n\2', content)
    content = re.sub(r'(</[^>]+>)\n(##[^#])', r'\1\n\n\2', content)
    
    # Step 5: Fix specific problematic patterns found in the errors
    # Fix the pattern: className="..."></Element><div>
    content = re.sub(r'(className="[^"]*")></([A-Z][a-zA-Z]*[^>]*)><div>', r'\1">\n</\2>\n<div>', content)
    
    # Fix the pattern: ><Element ... /></Element><div>
    content = re.sub(r'></([A-Z][a-zA-Z]*[^>]*)><div>', r'>\n</\1>\n<div>', content)
    
    # Step 6: Fix nested div structures that are too complex
    # Break up lines with multiple opening div tags
    content = re.sub(r'(<div[^>]*>)(<div[^>]*>)(<div[^>]*>)', r'\1\n\2\n\3', content)
    
    # Step 7: Fix missing spaces in JSX attributes
    content = re.sub(r'className="([^"]*)"([A-Za-z])', r'className="\1" \2', content)
    
    # Step 8: Clean up excessive whitespace but preserve intentional structure
    # Remove multiple consecutive empty lines (more than 2)
    content = re.sub(r'\n\n\n+', '\n\n', content)
    
    # Step 9: Fix specific icon patterns that cause issues
    # Ensure proper line breaks around self-closing icon components
    content = re.sub(r'(<[A-Z][a-zA-Z]* className="[^"]*"[^/>]*/>)(<[a-z]+)', r'\1\n<\2', content)
    
    # Step 10: Handle paragraph content mixed with JSX
    # Ensure paragraphs are properly separated from JSX
    content = re.sub(r'(<div[^>]*>[^<]+</div>)\n([A-Z][^<\n]+)', r'\1\n\n\2', content)
    
    return content.strip()

def process_mdx_file(file_path):
    """Process a single MDX file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract frontmatter
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter = parts[1]
            body = parts[2]
        else:
            frontmatter = ""
            body = content
        
        # Fix the body structure
        fixed_body = fix_mdx_structure(body)
        
        # Reconstruct the file
        if frontmatter:
            fixed_content = f"---{frontmatter}---{fixed_body}"
        else:
            fixed_content = fixed_body
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"✅ Fixed: {file_path}")
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
        print("🎉 All MDX files have been fixed!")
        print("\nNext steps:")
        print("1. Run 'npm run build' to test the fixes")
        print("2. If any files still fail, check the build output for remaining issues")
    else:
        print("⚠️  Some files had errors. Please check the output above.")

if __name__ == '__main__':
    main()