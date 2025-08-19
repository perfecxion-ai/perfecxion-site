'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, BookOpen, FileText, Zap, Building, X, Tag, Rss, Menu, X as CloseIcon } from 'lucide-react'
import React from 'react'
import { ContentItem } from '@/lib/content-loader'

// Content types/formats
const contentFormats = [
    { id: 'all', label: 'All Content', icon: null },
    { id: 'article', label: 'Articles', icon: BookOpen },
    { id: 'whitepaper', label: 'White Papers', icon: FileText },
    { id: 'learning', label: 'Learning Paths', icon: Zap },
    { id: 'architecture', label: 'Reference Architectures', icon: Building }
]

// Main domains
const domains = [
    { id: 'all', label: 'All Domains' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'security', label: 'Security' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'operations', label: 'Operations' }
]

interface KnowledgeNavigationProps {
    content: ContentItem[]
    currentPath?: string
    onNavigate?: (path: string) => void
}

export default function KnowledgeNavigation({ content, currentPath, onNavigate }: KnowledgeNavigationProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [sidebarOpen, setSidebarOpen] = useState(false)

    // Extract popular topics from content
    const popularTopics = content.slice(0, 6).map(item => item.topics[0]).filter(Boolean)

    const handleNavigation = (path: string) => {
        if (onNavigate) {
            onNavigate(path)
        } else {
            // Default navigation
            window.location.href = path
        }
    }

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden border-b border-border bg-muted/30">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold text-foreground">Knowledge</h1>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 rounded-lg border border-border bg-background hover:bg-muted"
                    >
                        {sidebarOpen ? <CloseIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Left Sidebar Navigation - Much Smaller Width */}
            <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-border transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="h-full flex flex-col">
                    {/* Sidebar Header */}
                    <div className="p-3 border-b border-border">
                        <div className="lg:hidden flex items-center justify-between mb-3">
                            <h2 className="text-sm font-semibold">Navigation</h2>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="p-1 rounded hover:bg-muted"
                            >
                                <CloseIcon className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-7 pr-3 py-1.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-2 top-1/2 -translate-y-1/2"
                                >
                                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Navigation Tree */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-4">
                        {/* Home Link */}
                        <div>
                            <button
                                onClick={() => handleNavigation('/knowledge')}
                                className={`w-full text-left px-2 py-1.5 rounded text-xs font-medium transition-colors ${currentPath === '/knowledge'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-muted hover:bg-muted/80 text-foreground'
                                    }`}
                            >
                                🏠 Knowledge Hub
                            </button>
                        </div>

                        {/* Content Type Navigation */}
                        <div>
                            <h3 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wider">Content Type</h3>
                            <div className="space-y-1">
                                {contentFormats.map(format => (
                                    <button
                                        key={format.id}
                                        onClick={() => handleNavigation(`/knowledge?type=${format.id}`)}
                                        className="w-full flex items-center px-2 py-1.5 rounded text-xs font-medium transition-colors bg-muted hover:bg-muted/80 text-foreground"
                                    >
                                        {format.icon && React.createElement(format.icon, { className: 'h-3 w-3 mr-2' })}
                                        {format.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Domain Navigation */}
                        <div>
                            <h3 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wider">Domains</h3>
                            <div className="space-y-1">
                                {domains.map(domain => (
                                    <button
                                        key={domain.id}
                                        onClick={() => handleNavigation(`/knowledge?domain=${domain.id}`)}
                                        className="w-full text-left px-2 py-1.5 rounded text-xs font-medium transition-colors bg-muted hover:bg-muted/80 text-foreground"
                                    >
                                        {domain.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Trending Topics */}
                        {popularTopics.length > 0 && (
                            <div>
                                <h3 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wider">Trending</h3>
                                <div className="flex flex-wrap gap-1">
                                    {popularTopics.map((topic, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleNavigation(`/knowledge?topic=${topic}`)}
                                            className="inline-flex items-center px-1.5 py-1 rounded-full text-xs font-medium transition-colors bg-muted hover:bg-muted/80 text-muted-foreground"
                                        >
                                            <Tag className="h-2.5 w-2.5 mr-1" />
                                            {topic}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wider">Quick Links</h3>
                            <div className="space-y-1">
                                <button
                                    onClick={() => handleNavigation('/docs')}
                                    className="w-full text-left px-2 py-1.5 rounded text-xs font-medium transition-colors bg-muted hover:bg-muted/80 text-foreground"
                                >
                                    📚 Documentation
                                </button>
                                <button
                                    onClick={() => handleNavigation('/learn')}
                                    className="w-full text-left px-2 py-1.5 rounded text-xs font-medium transition-colors bg-muted hover:bg-muted/80 text-foreground"
                                >
                                    🎓 Learning Paths
                                </button>
                                <button
                                    onClick={() => handleNavigation('/white-papers')}
                                    className="w-full text-left px-2 py-1.5 rounded text-xs font-medium transition-colors bg-muted hover:bg-muted/80 text-foreground"
                                >
                                    📄 White Papers
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RSS Feed Link */}
                    <div className="p-3 border-t border-border">
                        <Link
                            href="/api/rss"
                            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Rss className="h-3 w-3" />
                            RSS Feed
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </>
    )
}
