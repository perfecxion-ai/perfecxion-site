#!/usr/bin/env python3
"""
Fix MDX blog files formatting issues by converting JSX/HTML components to clean markdown.
This script removes imports, converts JSX components to markdown, and ensures proper rendering.
"""

import os
import re
import sys
from pathlib import Path

def process_mdx_file(content):
    """Process MDX content to fix formatting issues."""
    
    # Remove import statements
    content = re.sub(r'^import\s+.*?;?\s*$', '', content, flags=re.MULTILINE)
    
    # Remove empty lines at the beginning (after removing imports)
    content = re.sub(r'^(\s*\n)+', '', content)
    
    # Convert icon components to emojis
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
        r'<Cloud[^>]*/?>' : '☁️',
        r'<CloudOff[^>]*/?>' : '🌫️',
        r'<Wifi[^>]*/?>' : '📶',
        r'<WifiOff[^>]*/?>' : '📵',
        r'<Battery[^>]*/?>' : '🔋',
        r'<Camera[^>]*/?>' : '📷',
        r'<Video[^>]*/?>' : '📹',
        r'<Mic[^>]*/?>' : '🎤',
        r'<Volume[^>]*/?>' : '🔊',
        r'<VolumeX[^>]*/?>' : '🔇',
        r'<Play[^>]*/?>' : '▶️',
        r'<Pause[^>]*/?>' : '⏸️',
        r'<Stop[^>]*/?>' : '⏹️',
        r'<FastForward[^>]*/?>' : '⏩',
        r'<Rewind[^>]*/?>' : '⏪',
        r'<RefreshCw[^>]*/?>' : '🔄',
        r'<RotateCw[^>]*/?>' : '🔄',
        r'<Save[^>]*/?>' : '💾',
        r'<Trash[^>]*/?>' : '🗑️',
        r'<Edit[^>]*/?>' : '✏️',
        r'<Copy[^>]*/?>' : '📋',
        r'<Clipboard[^>]*/?>' : '📋',
        r'<Link[^>]*/?>' : '🔗',
        r'<ExternalLink[^>]*/?>' : '🔗',
        r'<Share[^>]*/?>' : '🔗',
        r'<Bookmark[^>]*/?>' : '🔖',
        r'<Flag[^>]*/?>' : '🚩',
        r'<MapPin[^>]*/?>' : '📍',
        r'<Navigation[^>]*/?>' : '🧭',
        r'<Compass[^>]*/?>' : '🧭',
        r'<Home[^>]*/?>' : '🏠',
        r'<Package[^>]*/?>' : '📦',
        r'<Box[^>]*/?>' : '📦',
        r'<Archive[^>]*/?>' : '🗂️',
        r'<Folder[^>]*/?>' : '📁',
        r'<File[^>]*/?>' : '📄',
        r'<Paperclip[^>]*/?>' : '📎',
        r'<Printer[^>]*/?>' : '🖨️',
        r'<HardDrive[^>]*/?>' : '💿',
        r'<Server[^>]*/?>' : '🖥️',
        r'<Monitor[^>]*/?>' : '🖥️',
        r'<Smartphone[^>]*/?>' : '📱',
        r'<Tablet[^>]*/?>' : '📱',
        r'<Watch[^>]*/?>' : '⌚',
        r'<Headphones[^>]*/?>' : '🎧',
        r'<Speaker[^>]*/?>' : '🔊',
        r'<Bluetooth[^>]*/?>' : '📶',
        r'<Rss[^>]*/?>' : '📡',
        r'<Radio[^>]*/?>' : '📻',
        r'<Tv[^>]*/?>' : '📺',
        r'<Film[^>]*/?>' : '🎬',
        r'<Image[^>]*/?>' : '🖼️',
        r'<Aperture[^>]*/?>' : '📷',
        r'<Sun[^>]*/?>' : '☀️',
        r'<Moon[^>]*/?>' : '🌙',
        r'<CloudRain[^>]*/?>' : '🌧️',
        r'<CloudSnow[^>]*/?>' : '🌨️',
        r'<Wind[^>]*/?>' : '💨',
        r'<Droplet[^>]*/?>' : '💧',
        r'<Umbrella[^>]*/?>' : '☂️',
        r'<Coffee[^>]*/?>' : '☕',
        r'<Briefcase[^>]*/?>' : '💼',
        r'<ShoppingBag[^>]*/?>' : '🛍️',
        r'<ShoppingCart[^>]*/?>' : '🛒',
        r'<CreditCard[^>]*/?>' : '💳',
        r'<Gift[^>]*/?>' : '🎁',
        r'<Bell[^>]*/?>' : '🔔',
        r'<BellOff[^>]*/?>' : '🔕',
        r'<MessageCircle[^>]*/?>' : '💬',
        r'<Hash[^>]*/?>' : '#️⃣',
        r'<AtSign[^>]*/?>' : '@',
        r'<Percent[^>]*/?>' : '%',
        r'<Plus[^>]*/?>' : '➕',
        r'<Minus[^>]*/?>' : '➖',
        r'<X[^>]*/?>' : '❌',
        r'<Check[^>]*/?>' : '✓',
        r'<Circle[^>]*/?>' : '⭕',
        r'<Square[^>]*/?>' : '⬜',
        r'<Triangle[^>]*/?>' : '🔺',
        r'<Hexagon[^>]*/?>' : '⬡',
        r'<Octagon[^>]*/?>' : '🛑',
        r'<HelpCircle[^>]*/?>' : '❓',
        r'<Layers[^>]*/?>' : '📚',
        r'<Filter[^>]*/?>' : '🔽',
        r'<Sliders[^>]*/?>' : '🎛️',
        r'<Gauge[^>]*/?>' : '🎯',
        r'<Thermometer[^>]*/?>' : '🌡️',
        r'<Crosshair[^>]*/?>' : '🎯',
        r'<Anchor[^>]*/?>' : '⚓',
        r'<Feather[^>]*/?>' : '🪶',
        r'<Award[^>]*/?>' : '🏅',
        r'<GitBranch[^>]*/?>' : '🌿',
        r'<GitCommit[^>]*/?>' : '📌',
        r'<GitMerge[^>]*/?>' : '🔀',
        r'<GitPullRequest[^>]*/?>' : '🔄',
        r'<Github[^>]*/?>' : '🐙',
        r'<Gitlab[^>]*/?>' : '🦊',
        r'<Twitter[^>]*/?>' : '🐦',
        r'<Facebook[^>]*/?>' : '📘',
        r'<Instagram[^>]*/?>' : '📷',
        r'<Linkedin[^>]*/?>' : '💼',
        r'<Youtube[^>]*/?>' : '📺',
        r'<Twitch[^>]*/?>' : '🎮',
        r'<Slack[^>]*/?>' : '💬',
        r'<Chrome[^>]*/?>' : '🌐',
        r'<Figma[^>]*/?>' : '🎨',
        r'<Framer[^>]*/?>' : '🖼️'
    }
    
    for pattern, emoji in icon_mappings.items():
        content = re.sub(pattern, emoji, content, flags=re.IGNORECASE)
    
    # Convert complex div containers to markdown sections
    # Handle gradient hero sections
    hero_pattern = r'<div className="bg-gradient-to-r[^"]*"[^>]*>.*?</div>\s*</div>\s*</div>'
    for match in re.finditer(hero_pattern, content, re.DOTALL):
        content = content.replace(match.group(0), convert_hero_section(match.group(0)))
    
    # Handle alert/callout boxes
    callout_pattern = r'<div className="bg-(?:yellow|red|blue|green|gray)-\d+[^"]*"[^>]*>.*?</div>\s*</div>\s*</div>'
    for match in re.finditer(callout_pattern, content, re.DOTALL):
        content = content.replace(match.group(0), convert_callout_box(match.group(0)))
    
    # Handle grid layouts
    grid_pattern = r'<div className="grid[^"]*"[^>]*>.*?</div>(?:\s*</div>)*'
    for match in re.finditer(grid_pattern, content, re.DOTALL):
        content = content.replace(match.group(0), convert_grid_to_list(match.group(0)))
    
    # Convert remaining JSX self-closing tags to empty
    content = re.sub(r'<[A-Z][^>]*/>', '', content)
    
    # Convert className to class for any remaining divs
    content = re.sub(r'className=', 'class=', content)
    
    # Fix bold text that might have been affected
    content = re.sub(r'\*\*([^*]+)\*\*', r'**\1**', content)
    
    # Clean up excessive whitespace
    content = re.sub(r'\n{3,}', '\n\n', content)
    
    # Ensure proper spacing after headers
    content = re.sub(r'(^#{1,6} .+)$\n(?=[^\n])', r'\1\n\n', content, flags=re.MULTILINE)
    
    # Fix list spacing
    content = re.sub(r'(\n- .+)(\n)(?=\S)', r'\1\n\n', content)
    
    return content

def convert_hero_section(match):
    """Convert hero sections with gradients to markdown."""
    text = match
    
    # Extract title if present
    title_match = re.search(r'<h2[^>]*>(.*?)</h2>', text, re.DOTALL)
    title = title_match.group(1).strip() if title_match else ""
    
    # Extract subtitle/description
    desc_match = re.search(r'<div[^>]*>([^<]+)</div>', text[text.find('</h2>'):] if title_match else text)
    desc = desc_match.group(1).strip() if desc_match else ""
    
    # Extract metrics/cards
    metrics = []
    metric_pattern = r'<div className="bg-white[^"]*"[^>]*>.*?<span[^>]*>([^<]+)</span>.*?<div[^>]*>([^<]+)</div>'
    for m in re.finditer(metric_pattern, text, re.DOTALL):
        metrics.append(f"• **{m.group(1).strip()}**: {m.group(2).strip()}")
    
    result = f"\n## {title}\n\n" if title else "\n"
    if desc:
        result += f"{desc}\n\n"
    if metrics:
        result += "\n".join(metrics) + "\n"
    
    return result

def convert_callout_box(match):
    """Convert callout/alert boxes to markdown."""
    text = match
    
    # Determine the type based on color
    if 'yellow' in text:
        emoji = '⚠️'
    elif 'red' in text:
        emoji = '🚨'
    elif 'blue' in text:
        emoji = 'ℹ️'
    elif 'green' in text:
        emoji = '✅'
    else:
        emoji = '📌'
    
    # Extract heading
    heading_match = re.search(r'<h3[^>]*>([^<]+)</h3>', text)
    heading = heading_match.group(1).strip() if heading_match else ""
    
    # Extract content
    content_match = re.search(r'<div[^>]*>([^<]+)</div>\s*</div>\s*</div>$', text, re.DOTALL)
    content = content_match.group(1).strip() if content_match else ""
    
    result = f"\n{emoji} **{heading}**\n\n" if heading else f"\n{emoji} "
    if content:
        result += f"{content}\n"
    
    return result

def convert_grid_to_list(match):
    """Convert grid layouts to markdown lists."""
    text = match
    
    items = []
    # Extract individual grid items
    item_pattern = r'<div[^>]*>.*?<h3[^>]*>([^<]+)</h3>.*?<div[^>]*>([^<]+)</div>'
    for m in re.finditer(item_pattern, text, re.DOTALL):
        title = m.group(1).strip()
        desc = m.group(2).strip()
        items.append(f"• **{title}**: {desc}")
    
    if items:
        return "\n" + "\n".join(items) + "\n"
    
    return ""

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
            processed_content = process_mdx_file(content)
            
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