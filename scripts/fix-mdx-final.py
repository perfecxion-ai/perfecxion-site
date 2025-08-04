#!/usr/bin/env python3
import re
import sys
from pathlib import Path

def fix_mdx_issues(content):
    """Fix various MDX parsing issues with precision."""
    
    # 1. Fix StatsBox - the quotes around the curly braces are the issue
    content = re.sub(
        r'<StatsBox stats="{\[((?:[^][]|\[[^\]]*\])*)\]}" />',
        r'<StatsBox stats={[\1]} />',
        content,
        flags=re.DOTALL
    )
    
    # 2. Fix Timeline items
    content = re.sub(
        r'<Timeline items="{\[((?:[^][]|\[[^\]]*\])*)\]}" />',
        r'<Timeline items={[\1]} />',
        content,
        flags=re.DOTALL
    )
    
    # 3. Fix ComparisonTable rows
    content = re.sub(
        r'rows="{\[((?:[^][]|\[[^\]]*\])*)\]}"',
        r'rows={[\1]}',
        content,
        flags=re.DOTALL
    )
    
    # 4. Fix FeatureCard self-closing with content after
    # Pattern: <FeatureCard ... /> followed by content and then </FeatureCard>
    content = re.sub(
        r'<FeatureCard\s+([^>]+?)\/>\s*([^<]+?)\s*</FeatureCard>',
        r'<FeatureCard \1>\n    \2\n  </FeatureCard>',
        content,
        flags=re.DOTALL
    )
    
    # 5. Fix AlertBox self-closing to proper closing tags
    content = re.sub(
        r'<AlertBox\s+([^>]+?)/>(?!\s*</AlertBox>)',
        r'<AlertBox \1></AlertBox>',
        content
    )
    
    # 6. Fix doubled closing tags (from previous scripts)
    content = re.sub(r'</FeatureCard>\s*</FeatureCard>', '</FeatureCard>', content)
    content = re.sub(r'</AlertBox>\s*</AlertBox>', '</AlertBox>', content)
    
    # 7. Fix broken inline patterns in zero-day file
    # Fix the specific pattern with <strong /> instead of <strong>
    content = re.sub(r'<strong\s*/>', '<strong>', content)
    
    # 8. Ensure proper closing for all AlertBox elements
    # Find AlertBox that have content after them but before closing tag
    def fix_alertbox_content(match):
        attrs = match.group(1)
        content_text = match.group(2)
        # If the content doesn't start with a tag, wrap it properly
        if not content_text.strip().startswith('<'):
            return f'<AlertBox {attrs}>\n{content_text.strip()}\n</AlertBox>'
        return match.group(0)
    
    content = re.sub(
        r'<AlertBox\s+([^>]+?)>\s*</AlertBox>\s*([^<]+?)\s*</AlertBox>',
        fix_alertbox_content,
        content,
        flags=re.DOTALL
    )
    
    # 9. Fix table formatting issues
    # Remove extra pipes in table separators
    content = re.sub(r'\|\s*\n\s*\n\s*-+\|\s*\n\s*\n\s*-+\|', '|----------|', content)
    
    # 10. Clean up any remaining formatting issues
    # Remove duplicate blank lines
    content = re.sub(r'\n\n\n+', '\n\n', content)
    
    return content

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
    
    # Focus on the files that had errors in the last build
    problem_files = [
        "50-attack-vectors-ai-red-team-guide.mdx",
        "advanced-prompt-engineering-security-defense-through-design.mdx",
        "ai-governance-at-scale-enterprise-strategies-responsible-ai.mdx",
        "ai-guardrails-that-actually-work-beyond-basic-content-filtering.mdx",
        "ai-security-financial-services-regulatory-requirements.mdx",
        "building-mature-ai-security-program-startup-to-enterprise.mdx",
        "from-chatbots-to-autonomous-agents-evolution-ai-security.mdx",
        "future-ai-security-preparing-next-generation-threats.mdx",
        "healthcare-ai-security-protecting-patient-data-safety.mdx",
        "multi-agent-systems-security-safe-ai-collaboration.mdx",
        "multi-cloud-ai-security-strategies-hybrid-deployments.mdx",
        "prompt-injection-playbook-attack-techniques-defenses.mdx",
        "securing-ai-critical-infrastructure-lessons-from-field.mdx",
        "securing-ai-infrastructure-training-to-deployment.mdx",
        "the-agentic-leap-understanding-and-building-modern-ai-agents.mdx",
        "zero-day-ai-vulnerabilities-detection-response.mdx"
    ]
    
    print(f"Processing {len(problem_files)} problem MDX files...\n")
    
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