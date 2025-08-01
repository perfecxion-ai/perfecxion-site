import { Metadata } from 'next'
import Link from 'next/link'
import { Check, Star, Shield, Zap, Users, Building, ArrowRight, Calculator } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Pricing - perfecXion.ai',
    description: 'Flexible pricing options for AI security solutions. Enterprise-grade protection tailored to your organization\'s needs and scale.',
}

export default function PricingPage() {
    return (
        <main className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-width container-padding section-padding">
                {/* Hero Section */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Calculator className="h-4 w-4" />
                        Pricing
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        Flexible <span className="gradient-text">Pricing</span> for Every Organization
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Enterprise-grade AI security solutions designed to scale with your needs.
                        Get comprehensive protection without compromising on features or performance.
                    </p>
                </header>

                {/* Pricing Tiers */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Choose Your Plan</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Starter Plan */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 relative">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for small teams getting started with AI security</p>
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    Custom Pricing
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Contact us for a quote</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Basic AI security testing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Up to 5 AI models</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Standard support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Basic compliance reporting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Email support</span>
                                </li>
                            </ul>
                            <Link
                                href="/contact?subject=Starter Plan Inquiry"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                Get Started
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Professional Plan */}
                        <div className="bg-white dark:bg-gray-900 border-2 border-primary-500 rounded-xl p-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">Comprehensive protection for growing organizations</p>
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    Custom Pricing
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Contact us for a quote</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Advanced AI security testing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Up to 25 AI models</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Priority support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Advanced compliance reporting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Phone & email support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Custom integrations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Dedicated account manager</span>
                                </li>
                            </ul>
                            <Link
                                href="/contact?subject=Professional Plan Inquiry"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                            >
                                Get Started
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 relative">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">Full-scale protection for large organizations</p>
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    Custom Pricing
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Contact us for a quote</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Unlimited AI models</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">24/7 premium support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Custom compliance frameworks</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">On-premise deployment</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Dedicated security team</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">Custom training & onboarding</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300">SLA guarantees</span>
                                </li>
                            </ul>
                            <Link
                                href="/contact?subject=Enterprise Plan Inquiry"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                Contact Sales
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Pricing Factors */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">What Determines Your Pricing?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/20">
                                <Users className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Team Size</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Number of users and administrators who will access the platform
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/20">
                                <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Models</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Number and complexity of AI models you need to secure
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/20">
                                <Building className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Compliance Needs</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Regulatory requirements and compliance frameworks you need to meet
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/20">
                                <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Deployment</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Cloud vs. on-premise deployment and integration requirements
                            </p>
                        </div>
                    </div>
                </section>

                {/* ROI Calculator CTA */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Calculate Your ROI
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            Not sure which plan is right for you? Use our ROI calculator to estimate the cost savings
                            and security benefits for your organization.
                        </p>
                        <Link
                            href="/roi-calculator"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        >
                            Calculate ROI
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Do you offer volume discounts?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Yes, we offer volume discounts for larger deployments. Contact our sales team to discuss
                                pricing for your specific needs and scale.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Can I upgrade or downgrade my plan?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect
                                immediately, and we'll prorate any billing adjustments.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Is there a free trial available?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We offer a 30-day free trial for qualified organizations. Contact us to set up your
                                trial and see how our AI security solutions can protect your systems.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                What payment options do you accept?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We accept all major credit cards, bank transfers, and can accommodate enterprise
                                payment terms for larger contracts. All payments are processed securely.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="text-center">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Let's discuss your AI security needs and find the perfect plan for your organization.
                            Our team is ready to help you protect your AI systems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact?subject=Pricing Inquiry"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                            >
                                Get Custom Quote
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