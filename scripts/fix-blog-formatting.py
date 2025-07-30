#!/usr/bin/env python3
"""
Script to fix blog formatting issues by replacing custom components with standard HTML
"""

import os
import re

def fix_blog_formatting():
    blog_dir = "content/blog"
    
    # List of files that need fixing
    files_to_fix = [
        "securing-ai-critical-infrastructure-lessons-from-field.mdx",
        "building-mature-ai-security-program-startup-to-enterprise.mdx", 
        "future-ai-security-preparing-next-generation-threats.mdx",
        "prompt-injection-playbook-attack-techniques-defenses.mdx",
        "ai-security-financial-services-regulatory-requirements.mdx"
    ]
    
    for filename in files_to_fix:
        filepath = os.path.join(blog_dir, filename)
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue
            
        print(f"Fixing {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix frontmatter
        content = fix_frontmatter(content)
        
        # Fix HeroSection components
        content = fix_hero_section(content)
        
        # Fix Badge components
        content = fix_badge_components(content)
        
        # Fix Button components
        content = fix_button_components(content)
        
        # Fix CalloutBox components
        content = fix_callout_box_components(content)
        
        # Write the fixed content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Fixed {filename}")

def fix_frontmatter(content):
    """Fix frontmatter to match website standards"""
    
    # Replace non-standard frontmatter fields
    replacements = {
        'publishDate:': 'date:',
        'readingTime:': 'readTime:',
        'authorRole:': '# authorRole:',
        'category: "Industry Deep Dive"': 'category: "Industry Applications"',
        'category: "Governance & Strategy"': 'category: "Compliance & Governance"',
        'category: "Technical Deep Dive"': 'category: "Technical Research"',
        'category: "Implementation Guide"': 'category: "Implementation Guides"',
        'category: "Security Analysis"': 'category: "AI Security"',
        'category: "Red Team Operations"': 'category: "Red Team Testing"',
        'category: "Enterprise Strategy"': 'category: "Compliance & Governance"',
        'category: "Threat Intelligence"': 'category: "AI Security"',
        'category: "Financial Security"': 'category: "Industry Applications"',
        'category: "Critical Infrastructure"': 'category: "Industry Applications"',
        'category: "Program Development"': 'category: "Implementation Guides"',
        'category: "Future Threats"': 'category: "AI Security"'
    }
    
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    # Add missing fields if they don't exist
    if 'featured:' not in content:
        content = content.replace('toc: true', 'featured: false\ntoc: true')
    
    return content

def fix_hero_section(content):
    """Replace HeroSection components with standard div structure"""
    
    # Pattern to match HeroSection components
    hero_pattern = r'<HeroSection>\s*<div className="flex flex-col lg:flex-row items-center gap-8">(.*?)</HeroSection>'
    
    def replace_hero(match):
        inner_content = match.group(1)
        
        # Extract the main content and create a standard header
        # This is a simplified replacement - you might need to customize based on specific content
        return f'''<div className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-500 dark:to-primary-700 rounded-lg p-8 text-white mb-8 shadow-lg">
  <div className="flex items-center gap-4 mb-4">
    <Shield className="h-12 w-12 text-white" />
    <div>
      <h2 className="text-3xl font-bold mb-2 text-white">AI Security Insights</h2>
      <div className="text-white/90">Comprehensive analysis and practical guidance</div>
    </div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
    <div className="bg-white/20 dark:bg-white/10 rounded-lg p-4 border border-white/20">
      <div className="flex items-center gap-2 mb-2">
        <Target className="h-5 w-5 text-white" />
        <span className="font-semibold text-white">Expert Analysis</span>
      </div>
      <div className="text-sm text-white/90">Deep technical insights</div>
    </div>
    <div className="bg-white/20 dark:bg-white/10 rounded-lg p-4 border border-white/20">
      <div className="flex items-center gap-2 mb-2">
        <Shield className="h-5 w-5 text-white" />
        <span className="font-semibold text-white">Practical Guidance</span>
      </div>
      <div className="text-sm text-white/90">Actionable strategies</div>
    </div>
    <div className="bg-white/20 dark:bg-white/10 rounded-lg p-4 border border-white/20">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="h-5 w-5 text-white" />
        <span className="font-semibold text-white">Security Focus</span>
      </div>
      <div className="text-sm text-white/90">Threat-aware approach</div>
    </div>
  </div>
</div>'''
    
    content = re.sub(hero_pattern, replace_hero, content, flags=re.DOTALL)
    return content

def fix_badge_components(content):
    """Replace Badge components with standard spans"""
    
    # Pattern to match Badge components
    badge_pattern = r'<Badge variant="([^"]*)" className="([^"]*)">\s*<([^>]+) className="([^"]*)" />\s*([^<]+)</Badge>'
    
    def replace_badge(match):
        variant = match.group(1)
        className = match.group(2)
        icon = match.group(3)
        icon_class = match.group(4)
        text = match.group(5).strip()
        
        # Map variants to appropriate colors
        color_map = {
            'secondary': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400',
            'destructive': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
            'default': 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400'
        }
        
        color_class = color_map.get(variant, 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400')
        
        return f'<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {color_class} {className}"><{icon} className="{icon_class}" /><span className="ml-1">{text}</span></span>'
    
    content = re.sub(badge_pattern, replace_badge, content)
    return content

def fix_button_components(content):
    """Replace Button components with standard Link components"""
    
    # Pattern to match Button components
    button_pattern = r'<Button([^>]*)>\s*<([^>]+) className="([^"]*)" />\s*([^<]+)</Button>'
    
    def replace_button(match):
        button_attrs = match.group(1)
        icon = match.group(2)
        icon_class = match.group(3)
        text = match.group(4).strip()
        
        # Extract className from button attributes
        className_match = re.search(r'className="([^"]*)"', button_attrs)
        if className_match:
            button_class = className_match.group(1)
            # Convert button classes to link classes
            if 'bg-gradient-to-r' in button_class:
                link_class = f'inline-flex items-center px-6 py-3 {button_class} text-white rounded-lg font-medium transition-colors'
            else:
                link_class = 'inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium'
        else:
            link_class = 'inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium'
        
        return f'<Link href="/contact" className="{link_class}"><{icon} className="{icon_class}" /><span className="ml-2">{text}</span></Link>'
    
    content = re.sub(button_pattern, replace_button, content)
    return content

def fix_callout_box_components(content):
    """Replace CalloutBox components with standard div structure"""
    
    # Pattern to match CalloutBox components
    callout_pattern = r'<CalloutBox type="([^"]*)" title="([^"]*)">\s*(.*?)\s*</CalloutBox>'
    
    def replace_callout(match):
        callout_type = match.group(1)
        title = match.group(2)
        content_text = match.group(3).strip()
        
        # Map types to appropriate colors and icons
        type_map = {
            'warning': {
                'bg': 'bg-yellow-50 dark:bg-yellow-900/20',
                'border': 'border-yellow-500',
                'icon': 'AlertTriangle',
                'icon_color': 'text-yellow-600 dark:text-yellow-400',
                'title_color': 'text-yellow-900 dark:text-yellow-200',
                'text_color': 'text-yellow-800 dark:text-yellow-300'
            },
            'success': {
                'bg': 'bg-green-50 dark:bg-green-900/20',
                'border': 'border-green-500',
                'icon': 'CheckCircle',
                'icon_color': 'text-green-600 dark:text-green-400',
                'title_color': 'text-green-900 dark:text-green-200',
                'text_color': 'text-green-800 dark:text-green-300'
            },
            'insight': {
                'bg': 'bg-blue-50 dark:bg-blue-900/20',
                'border': 'border-blue-500',
                'icon': 'Info',
                'icon_color': 'text-blue-600 dark:text-blue-400',
                'title_color': 'text-blue-900 dark:text-blue-200',
                'text_color': 'text-blue-800 dark:text-blue-300'
            }
        }
        
        style = type_map.get(callout_type, type_map['insight'])
        
        return f'''<div className="{style['bg']} border-l-4 {style['border']} p-6 mb-8 rounded-r-lg">
  <div className="flex items-start gap-3">
    <{style['icon']} className="h-6 w-6 {style['icon_color']} mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-bold {style['title_color']} mb-3">{title}</h3>
      <p className="{style['text_color']} leading-relaxed">
        {content_text}
      </p>
    </div>
  </div>
</div>'''
    
    content = re.sub(callout_pattern, replace_callout, content, flags=re.DOTALL)
    return content

if __name__ == "__main__":
    fix_blog_formatting()
    print("✅ All blog formatting issues have been fixed!") 