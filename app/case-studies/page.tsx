import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Building, Shield, TrendingUp, Clock, ArrowRight, Users, Zap, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies - perfecXion.ai',
  description: 'Explore how leading organizations use perfecXion.ai to secure their AI systems. Real-world success stories and measurable results.',
}

// Placeholder case study data - replace with real case studies
const caseStudies = [
  {
    id: 'fintech-global-compliance',
    title: 'How FinTech Global Achieved 100% AI Compliance in 90 Days',
    company: 'FinTech Global',
    industry: 'Financial Services',
    companySize: '5,000+ employees',
    products: ['perfecX Comply', 'perfecX Agent'],
    challenge: 'Needed to meet strict financial AI regulations across multiple jurisdictions while maintaining rapid deployment cycles.',
    solution: 'Implemented automated compliance workflows and real-time monitoring to ensure all AI systems met regulatory requirements.',
    results: [
      '100% compliance across 15 jurisdictions',
      '75% reduction in compliance workload',
      '0 regulatory violations in 12 months',
      '$2M saved in potential fines'
    ],
    testimonial: {
      quote: "perfecXion.ai transformed our compliance from a bottleneck into a competitive advantage.",
      author: "Maria Santos",
      role: "Chief Compliance Officer"
    },
    readTime: '5 min read',
    featured: true
  },
  {
    id: 'techcorp-security-transformation',
    title: 'TechCorp Prevents 99.8% of AI Attacks with ADAPT-AI',
    company: 'TechCorp Solutions',
    industry: 'Technology',
    companySize: '10,000+ employees',
    products: ['ADAPT-AI', 'PromptShield'],
    challenge: 'Facing sophisticated prompt injection attacks on customer-facing AI chatbots handling sensitive data.',
    solution: 'Deployed ADAPT-AI for continuous security testing and PromptShield for real-time attack prevention.',
    results: [
      '99.8% attack prevention rate',
      '500+ vulnerabilities discovered and fixed',
      '90% reduction in security incidents',
      '24/7 automated protection'
    ],
    testimonial: {
      quote: "ADAPT-AI found attack vectors we didn't even know existed. It's like having a team of elite security researchers working 24/7.",
      author: "Alex Chen",
      role: "Head of AI Security"
    },
    readTime: '7 min read',
    featured: true
  },
  {
    id: 'healthcare-ai-safety',
    title: 'MedTech Innovations Ensures Patient Safety with AI Guardrails',
    company: 'MedTech Innovations',
    industry: 'Healthcare',
    companySize: '2,500 employees',
    products: ['perfecX G-Rails', 'perfecX Agent'],
    challenge: 'Critical need to ensure AI-powered diagnostic tools never produce harmful recommendations.',
    solution: 'Implemented comprehensive guardrails and monitoring to validate all AI outputs before reaching healthcare providers.',
    results: [
      '100% harmful output prevention',
      '15ms average latency added',
      '50,000+ edge cases handled',
      'FDA approval achieved'
    ],
    testimonial: {
      quote: "Patient safety is non-negotiable. perfecXion.ai helps us deploy AI confidently in life-critical applications.",
      author: "Dr. Sarah Williams",
      role: "Chief Medical Officer"
    },
    readTime: '6 min read',
    featured: false
  },
  {
    id: 'retail-chatbot-security',
    title: 'RetailMax Secures 10M Daily Chatbot Interactions',
    company: 'RetailMax',
    industry: 'E-commerce',
    companySize: '1,000 employees',
    products: ['PromptShield', 'perfecX Red-T'],
    challenge: 'Protecting customer service chatbots from manipulation attempts and data extraction attacks.',
    solution: 'Layered defense with PromptShield for real-time protection and regular red team testing.',
    results: [
      '10M+ interactions secured daily',
      '95% attack detection rate',
      '<2% false positive rate',
      '$5M fraud prevented annually'
    ],
    testimonial: {
      quote: "PromptShield scales effortlessly with our traffic while maintaining incredible accuracy.",
      author: "James Thompson",
      role: "VP of Engineering"
    },
    readTime: '4 min read',
    featured: false
  }
]

const industries = [
  { name: 'Financial Services', count: 2 },
  { name: 'Healthcare', count: 1 },
  { name: 'Technology', count: 3 },
  { name: 'E-commerce', count: 1 }
]

export default function CaseStudiesPage() {
  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            Success Stories
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Customer Case Studies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn how leading organizations secure their AI systems with perfecXion.ai
          </p>
        </header>

        {/* Industry Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="px-4 py-2 rounded-lg border-2 border-primary-600 bg-primary-600 text-white font-medium">
              All Industries
            </button>
            {industries.map((industry) => (
              <button
                key={industry.name}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {industry.name} ({industry.count})
              </button>
            ))}
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(cs => cs.featured).map((study) => (
              <div key={study.id} className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  {/* Company Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {study.company}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {study.industry} • {study.companySize}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {study.title}
                  </h4>

                  {/* Challenge */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Products Used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.products.map((product) => (
                      <span key={product} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400">
                        {product}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <Link href={`/case-studies/${study.id}`} className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {study.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.filter(cs => !cs.featured).map((study) => (
              <div key={study.id} className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {study.company}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {study.industry}
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {study.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                  {study.challenge}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {study.results[0].split(' ')[0]} improved
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {study.companySize}
                    </span>
                  </div>
                </div>

                <Link href={`/case-studies/${study.id}`} className="inline-flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                  Read Case Study
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Results Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Proven Results Across Industries
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  99.8%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Attack Prevention Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  75%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Reduced Compliance Time
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  $10M+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Saved in Security Costs
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Automated Protection
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join these organizations in securing your AI systems with perfecXion.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/products" className="btn-secondary">
                <Zap className="mr-2 h-4 w-4" />
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}