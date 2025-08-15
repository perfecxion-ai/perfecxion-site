import Link from 'next/link';
import { ArrowLeft, Home, Sparkles, BookOpen, Users, FileText } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Sparkles className="h-4 w-4" />
                        Coming Soon
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        This page is
                        <span className="block text-primary-600 dark:text-primary-400">Coming Soon</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        We're working hard to bring you this content. In the meantime, explore our available pages and stay tuned for updates.
                    </p>
                </div>

                {/* Available Pages Grid */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        Explore Our Available Pages
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/" className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
                            <Home className="w-8 h-8 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto" />
                            <div className="font-semibold mb-2 text-gray-900 dark:text-white">Homepage</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Learn about our AI security platform</div>
                        </Link>

                        <Link href="/learn" className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
                            <BookOpen className="w-8 h-8 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto" />
                            <div className="font-semibold mb-2 text-gray-900 dark:text-white">Learning Center</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">AI security guides and best practices</div>
                        </Link>

                        <Link href="/docs" className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
                            <FileText className="w-8 h-8 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto" />
                            <div className="font-semibold mb-2 text-gray-900 dark:text-white">Documentation</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">White papers and technical resources</div>
                        </Link>

                        <Link href="/blog" className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
                            <Users className="w-8 h-8 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto" />
                            <div className="font-semibold mb-2 text-gray-900 dark:text-white">Blog</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Latest insights and updates</div>
                        </Link>

                        <Link href="/about" className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
                            <div className="w-8 h-8 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto text-2xl font-bold">A</div>
                            <div className="font-semibold mb-2 text-gray-900 dark:text-white">About</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Learn about our mission</div>
                        </Link>

                        <Link href="/contact" className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
                            <div className="w-8 h-8 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto text-2xl font-bold">C</div>
                            <div className="font-semibold mb-2 text-gray-900 dark:text-white">Contact</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Get in touch with our team</div>
                        </Link>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Stay Updated
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Follow us for updates on new features, products, and content.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>
                        <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Error Code */}
                <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
                    Error 404 - Page Not Found
                </div>
            </div>
        </div>
    );
} 