'use client'

import { useState } from 'react'
import ContentPageLayout from './ContentPageLayout'
import { ContentItem } from '@/lib/content-loader'

interface ContentPageExampleProps {
  content: ContentItem[]
}

export default function ContentPageExample({ content }: ContentPageExampleProps) {
  const [currentContent] = useState<ContentItem>({
    id: 'example-content',
    title: 'Example AI Security Article',
    description: 'This is an example of how individual content pages will look with the new layout.',
    format: 'article',
    domain: 'security',
    topics: ['AI Security', 'Machine Learning', 'Cybersecurity'],
    difficulty: 'intermediate',
    readTime: '15 min read',
    href: '/knowledge/example',
    isNew: true,
    date: '2025-01-21',
    author: 'perfecXion AI Team'
  })

  return (
    <ContentPageLayout 
      content={content} 
      currentContent={currentContent}
    >
      {/* This is where the actual article content would go */}
      <div className="space-y-6">
        <h1>Example AI Security Article</h1>
        
        <p>
          This is an example of how individual knowledge content pages will look with the new three-column layout.
        </p>

        <h2>Left Sidebar Navigation</h2>
        <p>
          The left sidebar contains the hierarchical navigation structure, allowing users to navigate between different
          content types, domains, and topics. It's much smaller in width and uses smaller font sizes.
        </p>

        <h2>Main Content Area</h2>
        <p>
          The main content area is much larger and displays the full content of the selected article, white paper,
          or learning path. This is where users will read the actual content.
        </p>

        <h2>Right Sidebar - Table of Contents</h2>
        <p>
          The right sidebar shows a table of contents for the current content piece, with clickable navigation
          to different sections. It's also much smaller in width and uses smaller font sizes.
        </p>

        <h3>Benefits of This Layout</h3>
        <ul>
          <li>Consistent navigation across all knowledge pages</li>
          <li>Easy content discovery and navigation</li>
          <li>Quick access to specific sections within content</li>
          <li>Mobile-responsive design</li>
          <li>Proper content hierarchy and organization</li>
        </ul>

        <h3>Implementation Notes</h3>
        <p>
          To use this layout for actual content pages, you would:
        </p>
        <ol>
          <li>Import the ContentPageLayout component</li>
          <li>Pass the content array and current content item</li>
          <li>Wrap your content in the component</li>
          <li>The layout will automatically handle navigation and table of contents</li>
        </ol>

        <h2>Navigation Structure</h2>
        <p>
          When users click on any card from the main knowledge hub, they'll be taken to a page like this that:
        </p>
        <ul>
          <li><strong>Left Sidebar:</strong> Shows the same navigation structure (content types, domains, topics)</li>
          <li><strong>Main Area:</strong> Displays the full article content</li>
          <li><strong>Right Sidebar:</strong> Shows a table of contents for the current article</li>
        </ul>

        <h2>Next Steps</h2>
        <p>
          This layout can now be used for all individual knowledge content pages, providing a consistent
          user experience across your knowledge hub.
        </p>
      </div>
    </ContentPageLayout>
  )
}
