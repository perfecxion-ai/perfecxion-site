#!/usr/bin/env python3
import re
import sys
from pathlib import Path

def fix_mdx_issues(content):
    """Fix various MDX parsing issues."""
    
    # 1. Fix StatsBox with quotes in attributes - the pattern with nested quotes
    content = re.sub(
        r'<StatsBox stats="{\[(.*?)\]}" />',
        lambda m: '<StatsBox stats={[' + m.group(1) + ']} />',
        content,
        flags=re.DOTALL
    )
    
    # 2. Fix Timeline items with quotes
    content = re.sub(
        r'<Timeline items="{\[(.*?)\]}" />',
        lambda m: '<Timeline items={[' + m.group(1) + ']} />',
        content,
        flags=re.DOTALL
    )
    
    # 3. Fix ComparisonTable rows
    content = re.sub(
        r'<ComparisonTable\s+(.*?)rows="{\[(.*?)\]}"(.*?)/>',
        lambda m: '<ComparisonTable ' + m.group(1) + 'rows={[' + m.group(2) + ']}' + m.group(3) + '/>',
        content,
        flags=re.DOTALL
    )
    
    # 4. Fix FeatureCard with missing closing tags
    content = re.sub(
        r'<FeatureCard title="([^"]+)" color="([^"]+)"/>\s*([^<]+)(?=\s*</FeatureCard>)',
        r'<FeatureCard title="\1" color="\2">\n    \3\n  </FeatureCard>',
        content
    )
    
    # 5. Fix FeatureCard with icon but missing content closing
    content = re.sub(
        r'<FeatureCard\s+icon="([^"]+)"\s+title="([^"]+)"\s+color="([^"]+)">\s*([^<]+)(?=\s*</FeatureCard>)',
        r'<FeatureCard icon="\1" title="\2" color="\3">\n    \4\n  </FeatureCard>',
        content
    )
    
    # 6. Fix AlertBox with missing closing tags
    # First fix self-closing AlertBox to have proper closing tags
    content = re.sub(
        r'<AlertBox type="([^"]+)" title="([^"]+)"/>',
        r'<AlertBox type="\1" title="\2"></AlertBox>',
        content
    )
    
    # 7. Fix any remaining attribute quotes issues
    # Fix attributes like color="color="red""
    content = re.sub(r'(\w+)="(\w+)="([^"]+)""', r'\1="\3"', content)
    
    # 8. Fix broken inline code in tables
    # Fix patterns like 60| | or similar
    content = re.sub(r'(\d+)\|\s*\|', r'\1| |', content)
    
    # 9. Ensure proper spacing around components
    # Add blank lines before headers after components
    content = re.sub(r'(</\w+>)\n(#+\s)', r'\1\n\n\2', content)
    
    # 10. Fix any unclosed tags by ensuring all opened tags are closed
    # This is a more complex operation, let's check for common patterns
    
    # Count opening and closing tags for common components
    components = ['FeatureCard', 'AlertBox', 'FeatureGrid', 'Timeline', 'ComparisonTable', 'StatsBox']
    for comp in components:
        opening = len(re.findall(f'<{comp}', content))
        closing = len(re.findall(f'</{comp}>', content))
        if opening > closing:
            print(f"Warning: {comp} has {opening} opening tags but only {closing} closing tags")
    
    # 11. Fix specific patterns that cause "unexpected end of file"
    # Ensure all self-closing tags are properly formatted
    content = re.sub(r'<(\w+)([^>]*?)(?<!\/)>(?!\s*<)', r'<\1\2 />', content)
    
    # 12. Fix spread syntax issues in the zero-day file
    # Look for patterns with multiple spreads
    content = re.sub(
        r'<StatsBox stats={\[(.*?)\]} />',
        lambda m: fix_stats_box_content(m.group(1)),
        content,
        flags=re.DOTALL
    )
    
    return content

def fix_stats_box_content(stats_content):
    """Fix the stats content to ensure proper formatting."""
    # Clean up the stats content
    stats_content = stats_content.strip()
    # Ensure proper object formatting
    stats_content = re.sub(r'\s+', ' ', stats_content)
    return f'<StatsBox stats={{[{stats_content}]}} />'

def process_file(file_path):
    """Process a single MDX file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_mdx_issues(content)
        
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
    
    mdx_files = sorted(blog_dir.glob("*.mdx"))
    
    if not mdx_files:
        print("No .mdx files found in the blog directory")
        sys.exit(1)
    
    print(f"Processing {len(mdx_files)} MDX files...\n")
    
    fixed_count = 0
    for file_path in mdx_files:
        if process_file(file_path):
            fixed_count += 1
    
    print(f"\n✓ Fixed {fixed_count} files")
    print(f"  Total files processed: {len(mdx_files)}")

if __name__ == "__main__":
    main()