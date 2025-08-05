import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ChevronLeft, Clock, User, Calendar, Tag, Download, FileText, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { contentManager } from '@/lib/content-manager'
import { WhitePaperContent } from '@/lib/content-types'

interface PageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const content = contentManager.findContentById(params.slug) as WhitePaperContent | null

    if (!content || content.type !== 'whitepaper') {
        return {
            title: 'White Paper Not Found - perfecXion.ai'
        }
    }

    return {
        title: `${content.title} - perfecXion.ai`,
        description: content.description,
        openGraph: {
            title: content.title,
            description: content.description,
            type: 'article',
            publishedTime: content.publishedAt,
            authors: [content.author?.name || 'perfecXion.ai Team'],
            tags: content.tags,
        }
    }
}

export default async function WhitePaperPage({ params }: PageProps) {
    const content = contentManager.findContentById(params.slug) as WhitePaperContent | null

    if (!content || content.type !== 'whitepaper') {
        notFound()
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
            case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Back Navigation */}
                <div className="mb-8">
                    <Link
                        href="/white-papers"
                        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back to White Papers & Reference Architectures
                    </Link>
                </div>

                {/* Header */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <FileText className="h-4 w-4" />
                                    <span>White Paper</span>
                                </div>
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(content.difficulty)}`}>
                                    {content.difficulty}
                                </span>
                                {content.featured && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                {content.title}
                            </h1>

                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                {content.description}
                            </p>

                            {/* Key Topics */}
                            {content.keyTopics && content.keyTopics.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Topics:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {content.keyTopics.map((topic, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Target Audience */}
                            {content.targetAudience && content.targetAudience.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Target Audience:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {content.targetAudience.map((audience, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                            >
                                                {audience}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Metadata */}
                            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {formatDate(content.publishedAt)}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {content.readingTime} min read
                                </div>
                                <div className="flex items-center gap-1">
                                    <FileText className="h-4 w-4" />
                                    {content.pageCount} pages
                                </div>
                                <div className="flex items-center gap-1">
                                    <Download className="h-4 w-4" />
                                    {content.fileSize}
                                </div>
                            </div>

                            {/* Download Button */}
                            <div className="flex gap-4">
                                <a
                                    href={content.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                                >
                                    <Download className="h-5 w-5" />
                                    Download PDF
                                </a>
                                {content.webUrl && (
                                    <a
                                        href={content.webUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                        View Online
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    {content.tags && content.tags.length > 0 && (
                        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-wrap gap-2">
                                {content.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Summary */}
                {content.summary && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Executive Summary</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {content.summary}
                        </p>
                    </div>
                )}

                {/* Related Content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Related Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link
                            href="/blog"
                            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">AI Security Blog</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Latest insights and technical articles</p>
                        </Link>
                        <Link
                            href="/learn"
                            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Learning Resources</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive learning paths and guides</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 