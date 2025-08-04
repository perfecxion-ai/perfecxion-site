#!/usr/bin/env python3
import re
import sys
from pathlib import Path

def fix_self_closing_tags(content):
    """Fix self-closing tags that should have content."""
    
    # Fix h1-h6 tags with self-closing syntax followed by content
    for i in range(1, 7):
        pattern = rf'<h{i}([^>]*?)\s*/>([^<]+)</h{i}>'
        replacement = rf'<h{i}\1>\2</h{i}>'
        content = re.sub(pattern, replacement, content)
    
    # Fix div tags with self-closing syntax followed by content
    content = re.sub(
        r'<div([^>]*?)\s*/>([^<]+)</div>',
        r'<div\1>\2</div>',
        content
    )
    
    # Fix span tags with self-closing syntax followed by content
    content = re.sub(
        r'<span([^>]*?)\s*/>([^<]+)</span>',
        r'<span\1>\2</span>',
        content
    )
    
    # Fix p tags with self-closing syntax followed by content
    content = re.sub(
        r'<p([^>]*?)\s*/>([^<]+)</p>',
        r'<p\1>\2</p>',
        content
    )
    
    # Fix any other common tags with this pattern
    tags = ['strong', 'em', 'code', 'pre', 'blockquote', 'li', 'ul', 'ol']
    for tag in tags:
        pattern = rf'<{tag}([^>]*?)\s*/>([^<]+)</{tag}>'
        replacement = rf'<{tag}\1>\2</{tag}>'
        content = re.sub(pattern, replacement, content)
    
    return content

def fix_table_issues(content):
    """Fix table formatting issues."""
    
    # Fix broken table separators - multiple patterns
    # Pattern 1: pipes on separate lines
    content = re.sub(
        r'\|\s*\n\s*-+\s*\|\s*\n\s*-+\s*\|',
        '|----------|----------|',
        content
    )
    
    # Pattern 2: single column separator line issues
    content = re.sub(
        r'\|\s*\n\s*\n\s*-+\s*\|',
        '|----------|',
        content
    )
    
    # Pattern 3: Fix tables with incorrect separator counts
    lines = content.split('\n')
    fixed_lines = []
    in_table = False
    
    for i, line in enumerate(lines):
        if '|' in line and line.strip().startswith('|'):
            # Count pipes in header
            if not in_table:
                pipe_count = line.count('|')
                in_table = True
            
            # Check if this is a separator line
            if re.match(r'^\s*\|[\s\-:|]+\|\s*$', line):
                # Generate correct separator based on pipe count
                separator = '|' + '----------|' * (pipe_count - 1)
                fixed_lines.append(separator)
            else:
                fixed_lines.append(line)
        else:
            in_table = False
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_quotes_in_attributes(content):
    """Fix remaining quote issues in component attributes."""
    
    # Fix StatsBox with any remaining quote issues
    content = re.sub(
        r'<StatsBox\s+stats="{\[(.*?)\]}"\s*/>',
        lambda m: '<StatsBox stats={[' + m.group(1) + ']} />',
        content,
        flags=re.DOTALL
    )
    
    # Fix Timeline items
    content = re.sub(
        r'<Timeline\s+items="{\[(.*?)\]}"\s*/>',
        lambda m: '<Timeline items={[' + m.group(1) + ']} />',
        content,
        flags=re.DOTALL
    )
    
    # Fix ComparisonTable
    content = re.sub(
        r'rows="{\[(.*?)\]}"',
        lambda m: 'rows={[' + m.group(1) + ']}',
        content,
        flags=re.DOTALL
    )
    
    return content

def fix_unclosed_tags(content):
    """Ensure all opened tags are properly closed."""
    
    # Fix FeatureCard tags that might not have proper closing
    content = re.sub(
        r'<FeatureCard\s+([^>]+?)\s*>\s*</FeatureCard>\s*<FeatureCard',
        r'<FeatureCard \1></FeatureCard>\n<FeatureCard',
        content
    )
    
    # Remove duplicate closing tags
    for tag in ['FeatureCard', 'AlertBox', 'Timeline', 'ComparisonTable', 'StatsBox']:
        content = re.sub(f'</{tag}>\\s*</{tag}>', f'</{tag}>', content)
    
    return content

def process_file(file_path):
    """Process a single MDX file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_self_closing_tags(content)
        content = fix_table_issues(content)
        content = fix_quotes_in_attributes(content)
        content = fix_unclosed_tags(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Fixed: {file_path.name}")
            return True
        else:
            print(f"  No changes: {file_path.name}")
            return False
    except Exception as e:
        print(f"✗ Error processing {file_path.name}: {e}")
        return False

def main():
    """Process all MDX files in the blog directory."""
    blog_dir = Path("/Users/scott/Documents/code/scthornton/perfecxion-site/content/blog")
    
    if not blog_dir.exists():
        print(f"Error: Directory {blog_dir} does not exist")
        sys.exit(1)
    
    # Get all MDX files
    mdx_files = sorted(blog_dir.glob("*.mdx"))
    
    print(f"Processing {len(mdx_files)} MDX files...\n")
    
    fixed_count = 0
    for file_path in mdx_files:
        if process_file(file_path):
            fixed_count += 1
    
    print(f"\n✓ Fixed {fixed_count} files")
    print(f"  Total files processed: {len(mdx_files)}")

if __name__ == "__main__":
    main()