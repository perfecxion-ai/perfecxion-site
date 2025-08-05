import { Metadata } from 'next'
import { contentManager } from '@/lib/content-manager'

export const metadata: Metadata = {
    title: 'White Papers Test - AI Security Documentation',
    description: 'Test page to verify white papers loading.',
}

export default function WhitePapersTestPage() {
    const whitePapers = contentManager.getContentByType('whitepaper')

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                White Papers Test
            </h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">White Papers Loaded: {whitePapers.length}</h2>

                {whitePapers.length > 0 ? (
                    <div className="space-y-4">
                        {whitePapers.map((wp) => (
                            <div key={wp.slug} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <h3 className="text-lg font-semibold">{wp.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{wp.description}</p>
                                <div className="mt-2 text-sm text-gray-500">
                                    <span>Type: {wp.type}</span> |
                                    <span> Category: {wp.category}</span> |
                                    <span> Slug: {wp.slug}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-red-600">No white papers found!</p>
                )}
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">All Content Types</h2>
                <div className="space-y-2">
                    <p>Blog posts: {contentManager.getContentByType('blog').length}</p>
                    <p>Learning content: {contentManager.getContentByType('learning').length}</p>
                    <p>White papers: {contentManager.getContentByType('whitepaper').length}</p>
                </div>
            </div>
        </div>
    )
} 