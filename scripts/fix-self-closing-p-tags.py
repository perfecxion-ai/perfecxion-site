#!/usr/bin/env python3
import re
import sys

def fix_self_closing_p_tags(content):
    """Fix self-closing p tags which are invalid in MDX."""
    
    # Pattern to find self-closing p tags
    pattern = r'(<p[^>]*?)\s*/>'
    
    # Replace with opening p tag - we'll need to find where to close it
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        if re.search(pattern, line):
            # Found a self-closing p tag
            # Replace it with an opening tag
            fixed_line = re.sub(pattern, r'\1>', line)
            fixed_lines.append(fixed_line)
            
            # Look for where to close it - typically before the next closing tag
            # or at the end of a paragraph
            j = i + 1
            paragraph_content = []
            while j < len(lines):
                next_line = lines[j]
                # Check if we hit a closing tag that would end the paragraph
                if re.match(r'^\s*</(?:div|section|article)', next_line):
                    # Insert the content and closing p tag before this line
                    if paragraph_content:
                        fixed_lines.extend(paragraph_content)
                    fixed_lines.append('</p>')
                    fixed_lines.append(next_line)
                    # Skip the line we just added
                    j += 1
                    break
                elif next_line.strip() == '':
                    # Empty line might indicate end of paragraph
                    if paragraph_content:
                        fixed_lines.extend(paragraph_content)
                        fixed_lines.append('</p>')
                    fixed_lines.append(next_line)
                    j += 1
                    break
                else:
                    paragraph_content.append(next_line)
                    j += 1
            
            # Update i to skip the lines we've already processed
            i = j - 1
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python fix-self-closing-p-tags.py <file.mdx>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixed_content = fix_self_closing_p_tags(content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print(f"Fixed self-closing p tags in {filepath}")