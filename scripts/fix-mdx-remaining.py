#!/usr/bin/env python3
import re
import sys
from pathlib import Path

def fix_anchor_tags(content):
    """Fix self-closing anchor tags."""
    # Fix anchor tags with self-closing syntax
    # Pattern: <a ... /> followed by content and then </a>
    content = re.sub(
        r'<a([^>]*?)\s*/>([^<]+)<([^>]+)\s*/>([^<]+)</a>',
        r'<a\1>\2<\3>\4</a>',
        content
    )
    
    # Simpler pattern for basic anchor tags
    content = re.sub(
        r'<a([^>]*?)\s*/>([^<]+)</a>',
        r'<a\1>\2</a>',
        content
    )
    
    return content

def fix_spread_syntax(content):
    """Fix the spread syntax issues in StatsBox and similar components."""
    # The issue is with the quotes around the curly braces in arrays
    # Pattern: stats="{ ... }" should be stats={ ... }
    
    # Fix StatsBox
    def fix_stats_box(match):
        attrs = match.group(1)
        stats_content = match.group(2)
        closing = match.group(3)
        
        # Remove quotes around the array
        return f'<StatsBox {attrs}stats={{[{stats_content}]}}{closing}/>'
    
    content = re.sub(
        r'<StatsBox\s+([^>]*?)stats="{\[(.*?)\]}"([^>]*?)/>',
        fix_stats_box,
        content,
        flags=re.DOTALL
    )
    
    # Fix Timeline
    def fix_timeline(match):
        attrs = match.group(1)
        items_content = match.group(2)
        closing = match.group(3)
        
        return f'<Timeline {attrs}items={{[{items_content}]}}{closing}/>'
    
    content = re.sub(
        r'<Timeline\s+([^>]*?)items="{\[(.*?)\]}"([^>]*?)/>',
        fix_timeline,
        content,
        flags=re.DOTALL
    )
    
    # Fix ComparisonTable
    content = re.sub(
        r'<ComparisonTable\s+([^>]*?)rows="{\[(.*?)\]}"([^>]*?)>',
        r'<ComparisonTable \1rows={[\2]}\3>',
        content,
        flags=re.DOTALL
    )
    
    return content

def fix_unclosed_tags(content):
    """Fix any remaining unclosed tags."""
    # Look for self-closing JSX components that should have content
    components = ['FeatureCard', 'AlertBox', 'Timeline', 'StatsBox']
    
    for comp in components:
        # Fix pattern where component has self-closing tag but content follows
        pattern = rf'<{comp}([^>]*?)>\s*</{comp}>\s*([^<]+)\s*</{comp}>'
        replacement = rf'<{comp}\1>\n  \2\n</{comp}>'
        content = re.sub(pattern, replacement, content)
    
    return content

def fix_table_separators(content):
    """Fix malformed table separators."""
    # Fix tables with broken column separators
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Check if this looks like a table separator
        if re.match(r'^\s*\|\s*-+\s*\|', line):
            # Count pipes in previous line to determine columns
            if i > 0 and '|' in lines[i-1]:
                pipe_count = lines[i-1].count('|')
                if pipe_count > 2:
                    # Generate proper separator
                    separator = '|' + ('----------|' * (pipe_count - 1))
                    fixed_lines.append(separator)
                    continue
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_backtick_in_headings(content):
    """Fix backticks that appear right after heading markers."""
    # Pattern: ##`2. or similar
    content = re.sub(r'(#+)\s*`(\d+\.)', r'\1 \2', content)
    return content

def process_file(file_path):
    """Process a single MDX file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_anchor_tags(content)
        content = fix_spread_syntax(content)
        content = fix_unclosed_tags(content)
        content = fix_table_separators(content)
        content = fix_backtick_in_headings(content)
        
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
    
    # Focus on files that still have errors
    problem_files = [
        "50-attack-vectors-ai-red-team-guide.mdx",
        "advanced-prompt-engineering-security-defense-through-design.mdx",
        "ai-arch-security.mdx",
        "ai-governance-at-scale-enterprise-strategies-responsible-ai.mdx",
        "ai-guardrails-that-actually-work-beyond-basic-content-filtering.mdx",
        "ai-red-team-testing-complete-guide.mdx",
        "ai-red-team-testing-production-lessons.mdx",
        "ai-security-financial-services-regulatory-requirements.mdx",
        "building-mature-ai-security-program-startup-to-enterprise.mdx",
        "executives-guide-ai-risk-management-liability.mdx",
        "from-chatbots-to-autonomous-agents-evolution-ai-security.mdx",
        "future-ai-security-preparing-next-generation-threats.mdx",
        "healthcare-ai-security-protecting-patient-data-safety.mdx",
        "hidden-risks-agentic-ai-monitoring-fails.mdx",
        "multi-agent-systems-security-safe-ai-collaboration.mdx",
        "multi-cloud-ai-security-strategies-hybrid-deployments.mdx",
        "navigating-ai-compliance-framework-security-standards.mdx",
        "prompt-injection-playbook-attack-techniques-defenses.mdx",
        "securing-ai-critical-infrastructure-lessons-from-field.mdx",
        "securing-ai-infrastructure-training-to-deployment.mdx",
        "the-agentic-leap-understanding-and-building-modern-ai-agents.mdx",
        "zero-day-ai-vulnerabilities-detection-response.mdx"
    ]
    
    print(f"Processing {len(problem_files)} MDX files with remaining issues...\n")
    
    fixed_count = 0
    for filename in problem_files:
        file_path = blog_dir / filename
        if file_path.exists():
            if process_file(file_path):
                fixed_count += 1
        else:
            print(f"✗ File not found: {filename}")
    
    print(f"\n✓ Fixed {fixed_count} files")
    print(f"  Total files processed: {len(problem_files)}")

if __name__ == "__main__":
    main()