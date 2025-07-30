#!/usr/bin/env python3
"""
Script to update all blog post dates to start from 2025 and space them 2 weeks apart
"""

import os
import re
from datetime import datetime, timedelta

def update_blog_dates():
    blog_dir = "content/blog"
    
    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]
    
    # Sort files to ensure consistent ordering
    mdx_files.sort()
    
    # Start date: January 1, 2025
    start_date = datetime(2025, 1, 1)
    
    for i, filename in enumerate(mdx_files):
        filepath = os.path.join(blog_dir, filename)
        print(f"Updating date for {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Calculate the date for this blog post (2 weeks apart)
        blog_date = start_date + timedelta(weeks=i*2)
        date_str = blog_date.strftime('%Y-%m-%d')
        
        # Update the date in the frontmatter
        # Pattern to match the date line in frontmatter
        date_pattern = r'date:\s*["\']?[0-9]{4}-[0-9]{2}-[0-9]{2}["\']?'
        new_date_line = f'date: "{date_str}"'
        
        # Replace the date
        if re.search(date_pattern, content):
            content = re.sub(date_pattern, new_date_line, content)
        else:
            # If no date found, add it after the title
            title_pattern = r'(title:\s*"[^"]*")'
            if re.search(title_pattern, content):
                content = re.sub(title_pattern, f'\\1\ndate: "{date_str}"', content)
        
        # Write the updated content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Updated {filename} to {date_str}")

if __name__ == "__main__":
    update_blog_dates()
    print("✅ All blog dates have been updated!") 