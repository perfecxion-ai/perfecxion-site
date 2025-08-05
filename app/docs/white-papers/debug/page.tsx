import { Metadata } from 'next'
import { contentManager } from '@/lib/content-manager'

export const metadata: Metadata = {
    title: 'White Papers Debug - AI Security Documentation',
    description: 'Debug page to test ContentHub component.',
}

export default function WhitePapersDebugPage() {
    const whitePapers = contentManager.getContentByType('whitepaper')

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                White Papers Debug
            </h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Content Manager Test</h2>

                <div className="space-y-4">
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <h3 className="text-lg font-semibold">White Papers from Content Manager</h3>
                        <p>Count: {whitePapers.length}</p>
                        {whitePapers.length > 0 ? (
                            <div className="mt-4 space-y-2">
                                {whitePapers.map((wp) => (
                                    <div key={wp.slug} className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                                        <strong>{wp.title}</strong>
                                        <br />
                                        <span className="text-sm text-gray-600">Type: {wp.type}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-red-600">No white papers found!</p>
                        )}
                    </div>

                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <h3 className="text-lg font-semibold">Search Test</h3>
                        <p>Searching for "AI" in white papers:</p>
                        {(() => {
                            const searchResults = contentManager.search('AI', { type: 'whitepaper' })
                            return (
                                <div className="mt-2">
                                    <p>Found {searchResults.length} results</p>
                                    {searchResults.map((result, index) => (
                                        <div key={index} className="p-2 bg-gray-50 dark:bg-gray-800 rounded mt-2">
                                            <strong>{result.content.title}</strong>
                                            <br />
                                            <span className="text-sm">Score: {result.score}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        })()}
                    </div>

                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <h3 className="text-lg font-semibold">All Content Types</h3>
                        <div className="space-y-2">
                            <p>Blog posts: {contentManager.getContentByType('blog').length}</p>
                            <p>Learning content: {contentManager.getContentByType('learning').length}</p>
                            <p>White papers: {contentManager.getContentByType('whitepaper').length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 