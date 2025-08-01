import { Metadata } from 'next'
import Link from 'next/link'
import { Users, MapPin, Calendar, Zap, Shield, Brain, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Careers - perfecXion.ai',
    description: 'Join our mission to secure the future of AI. Explore opportunities at perfecXion.ai and help build the next generation of AI security solutions.',
}

export default function CareersPage() {
    return (
        <main className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-width container-padding section-padding">
                {/* Hero Section */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Users className="h-4 w-4" />
                        Join Our Team
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        Build the Future of <span className="gradient-text">AI Security</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        We're on a mission to make AI systems secure, compliant, and trustworthy.
                        Join our team of experts and help shape the future of AI security.
                    </p>
                </header>

                {/* Why Join Us */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Why Join perfecXion.ai?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/20">
                                <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Mission-Driven
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Work on cutting-edge AI security challenges that impact the future of technology
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/20">
                                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Innovation First
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Build state-of-the-art security tools and push the boundaries of what's possible
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/20">
                                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Rapid Growth
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Join a fast-growing company with opportunities for career advancement
                            </p>
                        </div>
                    </div>
                </section>

                {/* Current Openings */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Current Openings</h2>

                    <div className="space-y-6">
                        {/* AI Security Engineer */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        AI Security Engineer
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Build and deploy AI security tools that protect against emerging threats.
                                        Work on red teaming, adversarial testing, and security automation.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>Remote / San Francisco</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>Full-time</span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/contact?subject=AI Security Engineer Position"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                                >
                                    Apply Now
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Machine Learning Engineer */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        Machine Learning Engineer
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Develop ML models for threat detection, anomaly detection, and security automation.
                                        Work with large-scale datasets and real-time systems.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>Remote / San Francisco</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>Full-time</span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/contact?subject=Machine Learning Engineer Position"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                                >
                                    Apply Now
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Security Researcher */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        Security Researcher
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Research emerging AI security threats and develop novel defense mechanisms.
                                        Publish findings and contribute to the security community.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>Remote / San Francisco</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>Full-time</span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/contact?subject=Security Researcher Position"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                                >
                                    Apply Now
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Benefits & Perks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Competitive Compensation</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Competitive salary, equity, and performance bonuses
                            </p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Remote-First</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Work from anywhere with flexible hours
                            </p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Health & Wellness</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Comprehensive health, dental, and vision coverage
                            </p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Learning & Development</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Conference attendance, courses, and certifications
                            </p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Team Events</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Regular team building and social events
                            </p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Equipment</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Latest hardware and software tools
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="text-center">
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Don't See the Right Role?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            We're always looking for talented individuals who are passionate about AI security.
                            Send us your resume and let's discuss how you can contribute to our mission.
                        </p>
                        <Link
                            href="/contact?subject=General Application"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        >
                            Send General Application
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
} 