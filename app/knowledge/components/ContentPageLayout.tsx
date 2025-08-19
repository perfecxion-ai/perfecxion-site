'use client'

import { ReactNode } from 'react'
import KnowledgeNavigation from './KnowledgeNavigation'
import TableOfContents from './TableOfContents'
import { ContentItem } from '@/lib/content-loader'

interface ContentPageLayoutProps {
    content: ContentItem[]
    currentContent: ContentItem
    children: ReactNode
}

export default function ContentPageLayout({ content, currentContent, children }: ContentPageLayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            {/* Desktop Header */}
            <div className="hidden lg:block border-b border-border bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-foreground mb-2">
                            {currentContent.title}
                        </h1>
                        <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                            {currentContent.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex">
                {/* Left Sidebar Navigation */}
                <KnowledgeNavigation
                    content={content}
                    currentPath={currentContent.href}
                />

                {/* Main Content Area - Much Larger */}
                <div className="flex-1 flex flex-col lg:flex-row">
                    {/* Content */}
                    <div className="flex-1 p-4 lg:p-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Mobile Header */}
                            <div className="lg:hidden mb-6">
                                <h1 className="text-2xl font-bold text-foreground mb-2">
                                    {currentContent.title}
                                </h1>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {currentContent.description}
                                </p>

                                {/* Content Meta */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-2 py-1 text-xs font-medium rounded bg-muted text-muted-foreground capitalize">
                                        {currentContent.format}
                                    </span>
                                    <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                                        {currentContent.difficulty}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {currentContent.readTime}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <article className="prose prose-lg dark:prose-invert max-w-none">
                                {children}
                            </article>
                        </div>
                    </div>

                    {/* Right Sidebar - Table of Contents */}
                    <div className="w-full lg:w-72 border-t lg:border-t-0 lg:border-l border-border bg-muted/20">
                        <TableOfContents
                            content={currentContent.description} // This would be the full content in a real implementation
                            title={currentContent.title}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
