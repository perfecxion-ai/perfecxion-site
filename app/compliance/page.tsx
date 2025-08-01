import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, FileText, Lock, AlertTriangle, ArrowRight, Building, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
    title: 'AI Security Compliance - perfecXion.ai',
    description: 'Navigate AI security compliance requirements with our comprehensive solutions. Meet regulatory standards and protect your AI systems.',
}

export default function CompliancePage() {
    return (
        <main className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-width container-padding section-padding">
                {/* Hero Section */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Shield className="h-4 w-4" />
                        Compliance
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        AI Security <span className="gradient-text">Compliance</span> Made Simple
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Navigate complex AI security regulations with confidence. Our comprehensive compliance
                        solutions help you meet regulatory requirements while protecting your AI systems.
                    </p>
                </header>

                {/* Compliance Challenges */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">The AI Compliance Challenge</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                            <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Evolving Regulations
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                AI security regulations are rapidly evolving, making compliance a moving target
                                that requires constant monitoring and adaptation.
                            </p>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <FileText className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Documentation Burden
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Comprehensive documentation requirements for AI systems, security controls,
                                and incident response procedures create significant overhead.
                            </p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Security Validation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Proving AI system security to auditors requires sophisticated testing,
                                monitoring, and evidence collection capabilities.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Solutions */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Comprehensive Compliance Solutions</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Automated Compliance Testing
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Our AI security testing tools automatically validate compliance requirements
                                and generate detailed reports for auditors.
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Continuous security validation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Automated report generation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Regulatory requirement mapping</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                                    <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Documentation Management
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Streamline compliance documentation with automated policy generation,
                                audit trail management, and evidence collection.
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Policy template library</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Automated audit trails</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Evidence collection automation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Security Monitoring
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Real-time monitoring and alerting for AI security threats with
                                compliance-focused incident response workflows.
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>24/7 threat monitoring</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Compliance incident tracking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Automated response workflows</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Expert Guidance
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Access to compliance experts who understand both AI security and
                                regulatory requirements across multiple jurisdictions.
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Regulatory expertise</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Audit preparation support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>Compliance roadmap planning</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Regulatory Frameworks */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Supported Regulatory Frameworks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                            <Building className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">GDPR</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                European data protection and privacy requirements for AI systems
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                            <Globe className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">CCPA</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                California Consumer Privacy Act compliance for AI data handling
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                            <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">SOC 2</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Security, availability, and confidentiality controls for AI systems
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                            <FileText className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ISO 27001</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Information security management for AI infrastructure
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                            <CheckCircle className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">NIST AI</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                National Institute of Standards AI risk management framework
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
                            <Lock className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry-Specific</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Healthcare (HIPAA), Finance (SOX), and other industry regulations
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready to Simplify AI Compliance?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Let's discuss your compliance requirements and how our AI security solutions
                            can help you meet regulatory standards while protecting your systems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact?subject=Compliance Consultation"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                            >
                                Schedule Consultation
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/demo"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                Book Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
} 