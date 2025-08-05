#!/usr/bin/env python3
"""
Enhanced MDX blog files formatting fix - Version 2
Converts JSX/HTML components to clean markdown with better handling of nested structures.
"""

import os
import re
import sys
from pathlib import Path

def clean_jsx_divs(content):
    """Remove all JSX div containers and clean up their content."""
    
    # Remove opening divs with any attributes
    content = re.sub(r'<div[^>]*>', '', content)
    
    # Remove closing divs
    content = re.sub(r'</div>', '', content)
    
    # Clean up any remaining JSX closing tags
    content = re.sub(r'</[^>]+>', '', content)
    
    # Remove any self-closing tags except images
    content = re.sub(r'<(?!img)[^>]*/>', '', content)
    
    return content

def convert_jsx_headers(content):
    """Convert JSX headers to markdown headers."""
    
    # Convert h1-h6 with any attributes
    for i in range(1, 7):
        pattern = rf'<h{i}[^>]*>(.*?)</h{i}>'
        replacement = rf'{"#" * i} \1'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    return content

def convert_jsx_text_formatting(content):
    """Convert JSX text formatting to markdown."""
    
    # Convert strong tags
    content = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', content, flags=re.DOTALL)
    
    # Convert em/i tags
    content = re.sub(r'<(?:em|i)[^>]*>(.*?)</(?:em|i)>', r'*\1*', content, flags=re.DOTALL)
    
    # Convert code tags
    content = re.sub(r'<code[^>]*>(.*?)</code>', r'`\1`', content, flags=re.DOTALL)
    
    # Convert span tags (just remove them, keep content)
    content = re.sub(r'<span[^>]*>(.*?)</span>', r'\1', content, flags=re.DOTALL)
    
    # Convert p tags to proper paragraphs
    content = re.sub(r'<p[^>]*>(.*?)</p>', r'\n\1\n', content, flags=re.DOTALL)
    
    return content

def convert_jsx_lists(content):
    """Convert JSX lists to markdown lists."""
    
    # Convert unordered lists
    content = re.sub(r'<ul[^>]*>', '\n', content)
    content = re.sub(r'</ul>', '\n', content)
    content = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1', content, flags=re.DOTALL)
    
    # Convert ordered lists
    content = re.sub(r'<ol[^>]*>', '\n', content)
    content = re.sub(r'</ol>', '\n', content)
    
    return content

def convert_links(content):
    """Convert JSX links to markdown links."""
    
    # Convert anchor tags
    content = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', content, flags=re.DOTALL)
    
    return content

def process_mdx_file_v2(content):
    """Process MDX content with enhanced formatting fixes."""
    
    # Remove import statements
    content = re.sub(r'^import\s+.*?;?\s*$', '', content, flags=re.MULTILINE)
    
    # Remove empty lines at the beginning (after removing imports)
    content = re.sub(r'^(\s*\n)+', '', content)
    
    # Convert icon components to emojis (comprehensive list)
    icon_mappings = {
        r'<Shield[^>]*/?>' : '🛡️',
        r'<Lock[^>]*/?>' : '🔒',
        r'<Target[^>]*/?>' : '🎯',
        r'<Cpu[^>]*/?>' : '💻',
        r'<Database[^>]*/?>' : '🗄️',
        r'<AlertTriangle[^>]*/?>' : '⚠️',
        r'<CheckCircle[^>]*/?>' : '✅',
        r'<XCircle[^>]*/?>' : '❌',
        r'<Info[^>]*/?>' : 'ℹ️',
        r'<AlertCircle[^>]*/?>' : '⚠️',
        r'<Terminal[^>]*/?>' : '💻',
        r'<Code[^>]*/?>' : '💻',
        r'<FileText[^>]*/?>' : '📄',
        r'<Users[^>]*/?>' : '👥',
        r'<Building[^>]*/?>' : '🏢',
        r'<Brain[^>]*/?>' : '🧠',
        r'<Zap[^>]*/?>' : '⚡',
        r'<ChevronRight[^>]*/?>' : '➡️',
        r'<ArrowRight[^>]*/?>' : '→',
        r'<Clock[^>]*/?>' : '🕐',
        r'<Calendar[^>]*/?>' : '📅',
        r'<Mail[^>]*/?>' : '✉️',
        r'<Phone[^>]*/?>' : '📞',
        r'<Globe[^>]*/?>' : '🌐',
        r'<Search[^>]*/?>' : '🔍',
        r'<Settings[^>]*/?>' : '⚙️',
        r'<Tool[^>]*/?>' : '🔧',
        r'<Wrench[^>]*/?>' : '🔧',
        r'<Key[^>]*/?>' : '🔑',
        r'<Eye[^>]*/?>' : '👁️',
        r'<TrendingUp[^>]*/?>' : '📈',
        r'<TrendingDown[^>]*/?>' : '📉',
        r'<DollarSign[^>]*/?>' : '💰',
        r'<Activity[^>]*/?>' : '📊',
        r'<BarChart[^>]*/?>' : '📊',
        r'<PieChart[^>]*/?>' : '📊',
        r'<LineChart[^>]*/?>' : '📈',
        r'<Award[^>]*/?>' : '🏆',
        r'<Star[^>]*/?>' : '⭐',
        r'<Heart[^>]*/?>' : '❤️',
        r'<ThumbsUp[^>]*/?>' : '👍',
        r'<ThumbsDown[^>]*/?>' : '👎',
        r'<MessageCircle[^>]*/?>' : '💬',
        r'<MessageSquare[^>]*/?>' : '💬',
        r'<Send[^>]*/?>' : '📤',
        r'<Download[^>]*/?>' : '📥',
        r'<Upload[^>]*/?>' : '📤',
        r'<Bookmark[^>]*/?>' : '🔖',
        r'<Flag[^>]*/?>' : '🚩',
        r'<MapPin[^>]*/?>' : '📍',
        r'<Home[^>]*/?>' : '🏠',
        r'<Package[^>]*/?>' : '📦',
        r'<Box[^>]*/?>' : '📦',
        r'<Folder[^>]*/?>' : '📁',
        r'<File[^>]*/?>' : '📄',
        r'<Layers[^>]*/?>' : '📚',
        r'<Filter[^>]*/?>' : '🔽',
        r'<Sliders[^>]*/?>' : '🎛️',
        r'<Gauge[^>]*/?>' : '🎯',
        r'<CheckSquare[^>]*/?>' : '☑️',
        r'<Square[^>]*/?>' : '⬜',
        r'<Circle[^>]*/?>' : '⭕',
        r'<HelpCircle[^>]*/?>' : '❓',
        r'<Plus[^>]*/?>' : '➕',
        r'<Minus[^>]*/?>' : '➖',
        r'<X[^>]*/?>' : '❌',
        r'<Check[^>]*/?>' : '✓'
    }
    
    for pattern, emoji in icon_mappings.items():
        content = re.sub(pattern, emoji, content, flags=re.IGNORECASE)
    
    # Convert JSX headers first
    content = convert_jsx_headers(content)
    
    # Convert text formatting
    content = convert_jsx_text_formatting(content)
    
    # Convert lists
    content = convert_jsx_lists(content)
    
    # Convert links
    content = convert_links(content)
    
    # Clean up all remaining divs
    content = clean_jsx_divs(content)
    
    # Convert className to class for any remaining elements
    content = re.sub(r'className=', 'class=', content)
    
    # Fix multiple consecutive line breaks
    content = re.sub(r'\n{4,}', '\n\n\n', content)
    
    # Fix spacing around headers
    content = re.sub(r'(^#{1,6} .+)$\n(?=[^\n])', r'\1\n\n', content, flags=re.MULTILINE)
    
    # Fix list spacing
    content = re.sub(r'(\n- .+)(\n)(?=\S)', r'\1\n\n', content)
    
    # Clean up leading/trailing whitespace on lines
    lines = content.split('\n')
    lines = [line.rstrip() for line in lines]
    content = '\n'.join(lines)
    
    # Remove excessive empty lines at the end
    content = re.sub(r'\n{3,}$', '\n', content)
    
    return content

def main():
    """Main function to process all MDX files."""
    blog_dir = Path("/Users/scott/Documents/code/scthornton/perfecxion-site/content/blog")
    
    if not blog_dir.exists():
        print(f"Error: Blog directory not found at {blog_dir}")
        sys.exit(1)
    
    # Get all MDX files
    mdx_files = list(blog_dir.glob("*.mdx"))
    
    if not mdx_files:
        print("No MDX files found in the blog directory")
        sys.exit(1)
    
    print(f"Found {len(mdx_files)} MDX files to process")
    
    success_count = 0
    error_count = 0
    
    for mdx_file in mdx_files:
        try:
            print(f"Processing: {mdx_file.name}")
            
            # Read the file
            with open(mdx_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Process the content
            processed_content = process_mdx_file_v2(content)
            
            # Write back the processed content
            with open(mdx_file, 'w', encoding='utf-8') as f:
                f.write(processed_content)
            
            success_count += 1
            print(f"  ✓ Successfully processed {mdx_file.name}")
            
        except Exception as e:
            error_count += 1
            print(f"  ✗ Error processing {mdx_file.name}: {str(e)}")
    
    print(f"\nProcessing complete:")
    print(f"  - Success: {success_count} files")
    print(f"  - Errors: {error_count} files")

if __name__ == "__main__":
    main()