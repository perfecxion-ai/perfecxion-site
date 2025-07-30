#!/usr/bin/env python3
"""
Script to fix hydration errors in MDX files
"""

import os
import re


def fix_hydration_errors():
    blog_dir = "content/blog"

    # Get all MDX files
    mdx_files = [f for f in os.listdir(blog_dir) if f.endswith('.mdx')]

    for filename in mdx_files:
        filepath = os.path.join(blog_dir, filename)
        print(f"Fixing hydration errors in {filename}...")

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Fix 1: Remove nested p tags - replace <p><p> with <p>
        content = re.sub(r'<p>\s*<p>', '<p>', content)
        content = re.sub(r'</p>\s*</p>', '</p>', content)

        # Fix 2: Remove empty p tags
        content = re.sub(r'<p>\s*</p>', '', content)

        # Fix 3: Fix any remaining nested paragraph structures
        # Replace <p><div> with <div>
        content = re.sub(r'<p>\s*<div', '<div', content)
        # Replace </div></p> with </div>
        content = re.sub(r'</div>\s*</p>', '</div>', content)

        # Fix 4: Remove any standalone p tags that might cause issues
        content = re.sub(r'<p>\s*</p>', '', content)

        # Fix 5: Ensure proper spacing around divs
        content = re.sub(r'</div>\s*<div', '</div>\n\n<div', content)

        # Fix 6: Remove any empty lines that might cause issues
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✅ Fixed {filename}")


if __name__ == "__main__":
    fix_hydration_errors()
    print("✅ All hydration errors have been fixed!")
