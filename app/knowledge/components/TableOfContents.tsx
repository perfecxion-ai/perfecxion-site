'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Hash } from 'lucide-react'

interface TableOfContentsProps {
    content: string
    title: string
}

interface TocItem {
    id: string
    text: string
    level: number
    children?: TocItem[]
}

export default function TableOfContents({ content, title }: TableOfContentsProps) {
    const [tocItems, setTocItems] = useState<TocItem[]>([])
    const [activeId, setActiveId] = useState<string>('')
    const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

    // Extract headings from content and build TOC
    useEffect(() => {
        if (typeof content === 'string') {
            const headingRegex = /^(#{1,6})\s+(.+)$/gm
            const items: TocItem[] = []
            let match

            while ((match = headingRegex.exec(content)) !== null) {
                const level = match[1].length
                const text = match[2].trim()
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')

                items.push({
                    id,
                    text,
                    level
                })
            }

            // Build hierarchical structure
            const hierarchicalItems: TocItem[] = []
            const stack: TocItem[] = []

            items.forEach(item => {
                while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
                    stack.pop()
                }

                if (stack.length === 0) {
                    hierarchicalItems.push(item)
                } else {
                    if (!stack[stack.length - 1].children) {
                        stack[stack.length - 1].children = []
                    }
                    stack[stack.length - 1].children!.push(item)
                }

                stack.push(item)
            })

            setTocItems(hierarchicalItems)
        }
    }, [content])

    // Handle scroll and update active section
    useEffect(() => {
        const handleScroll = () => {
            const headings = tocItems.flatMap(item =>
                item.children ? [item, ...item.children] : [item]
            )

            for (let i = headings.length - 1; i >= 0; i--) {
                const element = document.getElementById(headings[i].id)
                if (element && element.getBoundingClientRect().top <= 100) {
                    setActiveId(headings[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [tocItems])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setActiveId(id)
        }
    }

    const toggleSection = (id: string) => {
        const newExpanded = new Set(expandedSections)
        if (newExpanded.has(id)) {
            newExpanded.delete(id)
        } else {
            newExpanded.add(id)
        }
        setExpandedSections(newExpanded)
    }

    const renderTocItem = (item: TocItem, depth: number = 0) => {
        const isActive = activeId === item.id
        const hasChildren = item.children && item.children.length > 0
        const isExpanded = expandedSections.has(item.id)

        return (
            <div key={item.id} style={{ marginLeft: `${depth * 12}px` }}>
                <div className="flex items-center">
                    {hasChildren && (
                        <button
                            onClick={() => toggleSection(item.id)}
                            className="p-0.5 hover:bg-muted rounded transition-colors"
                        >
                            {isExpanded ? (
                                <ChevronDown className="h-3 w-3 text-muted-foreground" />
                            ) : (
                                <ChevronRight className="h-3 w-3 text-muted-foreground" />
                            )}
                        </button>
                    )}

                    <button
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${isActive
                                ? 'bg-blue-600 text-white'
                                : 'text-foreground hover:bg-muted'
                            }`}
                    >
                        <Hash className="h-3 w-3" />
                        <span className="line-clamp-1">{item.text}</span>
                    </button>
                </div>

                {hasChildren && isExpanded && (
                    <div className="mt-1">
                        {item.children!.map(child => renderTocItem(child, depth + 1))}
                    </div>
                )}
            </div>
        )
    }

    if (tocItems.length === 0) {
        return (
            <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Table of Contents</h3>
                <p className="text-xs text-muted-foreground">
                    No headings found in this content.
                </p>
            </div>
        )
    }

    return (
        <div className="p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">Table of Contents</h3>

            {/* Document Title */}
            <div className="mb-3 pb-2 border-b border-border">
                <h4 className="text-xs font-medium text-foreground line-clamp-2">
                    {title}
                </h4>
            </div>

            {/* TOC Items */}
            <div className="space-y-1">
                {tocItems.map(item => renderTocItem(item))}
            </div>

            {/* Quick Actions */}
            <div className="mt-4 pt-3 border-t border-border">
                <div className="space-y-2">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-full text-left px-2 py-1.5 rounded text-xs font-medium transition-colors bg-muted hover:bg-muted/80 text-foreground"
                    >
                        ↑ Back to Top
                    </button>

                    <button
                        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        className="w-full text-left px-2 py-1.5 rounded text-xs font-medium transition-colors bg-muted hover:bg-muted/80 text-foreground"
                    >
                        ↓ Go to Bottom
                    </button>
                </div>
            </div>
        </div>
    )
}
