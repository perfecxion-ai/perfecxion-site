import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Mail, Phone, MapPin, Shield, Users, Building, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Legal Information - perfecXion.ai',
    description: 'Legal information, terms, and contact details for perfecXion.ai. Find our privacy policy, terms of service, and legal contact information.',
}

export default function LegalPage() {
    return (
        <main className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-width container-padding section-padding">
                {/* Hero Section */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <FileText className="h-4 w-4" />
                        Legal
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        Legal <span className="gradient-text">Information</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Important legal documents, policies, and contact information for perfecXion.ai.
                        We're committed to transparency and protecting your rights.
                    </p>
                </header>

                {/* Legal Documents */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Legal Documents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link
                            href="/privacy"
                            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary-300 dark:hover:border-primary-600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/30 transition-colors">
                                    <Shield className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    Privacy Policy
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                How we collect, use, and protect your personal information and data.
                            </p>
                            <div className="flex items-center gap-2 mt-4 text-primary-600 dark:text-primary-400 text-sm font-medium">
                                <span>Read Policy</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link
                            href="/terms"
                            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary-300 dark:hover:border-primary-600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/30 transition-colors">
                                    <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    Terms of Service
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Terms and conditions for using our services and platform.
                            </p>
                            <div className="flex items-center gap-2 mt-4 text-purple-600 dark:text-purple-400 text-sm font-medium">
                                <span>Read Terms</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link
                            href="/privacy-preferences"
                            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary-300 dark:hover:border-primary-600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/30 transition-colors">
                                    <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                    Privacy Preferences
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Manage your privacy settings and data preferences.
                            </p>
                            <div className="flex items-center gap-2 mt-4 text-green-600 dark:text-green-400 text-sm font-medium">
                                <span>Manage Settings</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link
                            href="/compliance"
                            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary-300 dark:hover:border-primary-600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                                    <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    Compliance
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Information about our compliance with regulatory requirements.
                            </p>
                            <div className="flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium">
                                <span>Learn More</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link
                            href="/legal/contact"
                            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary-300 dark:hover:border-primary-600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-900/30 transition-colors">
                                    <Mail className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    Legal Contact
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Contact our legal team for questions about legal matters.
                            </p>
                            <div className="flex items-center gap-2 mt-4 text-orange-600 dark:text-orange-400 text-sm font-medium">
                                <span>Contact Legal</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Data Processing
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Information about how we process data and your rights under applicable laws.
                            </p>
                            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                <p>Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Information */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Company Information</h2>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Corporate Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Company Name</h4>
                                        <p className="text-gray-600 dark:text-gray-300">perfecXion.ai</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Address</h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            123 AI Security Blvd<br />
                                            San Francisco, CA 94105<br />
                                            United States
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Email</h4>
                                        <a href="mailto:legal@perfecxion.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                                            legal@perfecxion.ai
                                        </a>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Phone</h4>
                                        <a href="tel:+15551234567" className="text-primary-600 dark:text-primary-400 hover:underline">
                                            +1 (555) 123-4567
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Legal Representatives</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Data Protection Officer</h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            <a href="mailto:privacy@perfecxion.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                                                privacy@perfecxion.ai
                                            </a>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">General Counsel</h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            <a href="mailto:legal@perfecxion.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                                                legal@perfecxion.ai
                                            </a>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Compliance Officer</h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            <a href="mailto:compliance@perfecxion.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                                                compliance@perfecxion.ai
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Important Notices */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Important Legal Notices</h2>
                    <div className="space-y-6">
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200 mb-2">
                                Legal Disclaimer
                            </h3>
                            <p className="text-amber-800 dark:text-amber-300 text-sm">
                                The information provided on this website is for general informational purposes only.
                                While we strive to keep the information up to date and correct, we make no representations
                                or warranties of any kind about the completeness, accuracy, reliability, suitability, or
                                availability of the information, products, services, or related graphics contained on the
                                website for any purpose.
                            </p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
                                Updates to Legal Documents
                            </h3>
                            <p className="text-blue-800 dark:text-blue-300 text-sm">
                                We may update our legal documents from time to time. We will notify users of any material
                                changes by posting the new documents on this page and updating the "Last updated" date.
                                Continued use of our services after such changes constitutes acceptance of the updated terms.
                            </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-green-900 dark:text-green-200 mb-2">
                                Your Rights
                            </h3>
                            <p className="text-green-800 dark:text-green-300 text-sm">
                                You have the right to access, correct, or delete your personal information, and to object
                                to or restrict certain processing of your data. You also have the right to data portability
                                and to lodge a complaint with supervisory authorities. Contact us to exercise these rights.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="text-center">
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Questions About Legal Matters?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Our legal team is here to help with any questions about our policies,
                            terms, or legal compliance. Don't hesitate to reach out.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/legal/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                            >
                                Contact Legal Team
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                General Contact
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
} 