#!/usr/bin/env python3

import re
import sys
import os

def fix_self_closing_components(file_path):
    """Fix self-closing React component tags in MDX files."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Pattern to match self-closing component tags that need to be converted
    # Matches patterns like <ComponentName className="..." >
    # But not regular HTML tags like <div>, <p>, etc.
    component_pattern = r'<([A-Z][A-Za-z]*)\s+([^>]*?)>\s*(?!\s*</\1>)'
    
    def replace_component(match):
        component_name = match.group(1)
        attributes = match.group(2).strip()
        return f'<{component_name} {attributes}></{component_name}>'
    
    # Fix self-closing component tags
    content = re.sub(component_pattern, replace_component, content)
    
    # Also fix self-closing <p> tags that should wrap content
    # Pattern: <p className="..."> followed by content that's not properly wrapped
    p_pattern = r'<p\s+([^>]*?)>\s*\n([^<]+?)(?=\n<|$)'
    
    def replace_p_tag(match):
        attributes = match.group(1)
        text_content = match.group(2).strip()
        return f'<p {attributes}>\n{text_content}\n</p>'
    
    content = re.sub(p_pattern, replace_p_tag, content, flags=re.MULTILINE)
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed self-closing components in {file_path}")
        return True
    else:
        print(f"No changes needed in {file_path}")
        return False

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 fix-self-closing-components.py <file_path>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        sys.exit(1)
    
    fix_self_closing_components(file_path)