import { Metadata } from 'next'
import Link from 'next/link'
import { FileCheck, Shield, Scale, FileText, AlertCircle, ChevronRight, ArrowRight, CheckCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compliance & Governance - Knowledge Hub',
  description: 'Navigate AI regulations, compliance frameworks, and governance best practices. Stay compliant with GDPR, HIPAA, EU AI Act, and emerging regulations.',
}

const subcategories = [
  {
    title: 'Regulatory Frameworks',
    description: 'Understanding global AI regulations, laws, and compliance requirements',
    icon: Scale,
    href: '/knowledge/compliance/regulations',
    articleCount: 8,
    featured: ['EU AI Act Guide', 'GDPR for AI Systems', 'California CCPA/CPRA']
  },
  {
    title: 'Industry Standards',
    description: 'SOC 2, ISO 27001, NIST, and other security framework implementations',
    icon: Shield,
    href: '/knowledge/compliance/standards',
    articleCount: 6,
    featured: ['SOC 2 for AI', 'ISO 27001 Implementation', 'NIST AI Framework']
  },
  {
    title: 'Governance Programs',
    description: 'Building and managing enterprise AI governance structures',
    icon: FileText,
    href: '/knowledge/compliance/governance',
    articleCount: 5,
    featured: ['AI Ethics Committees', 'Risk Management', 'Policy Templates']
  },
  {
    title: 'Audit & Reporting',
    description: 'Compliance auditing, monitoring, and regulatory reporting',
    icon: CheckCircle,
    href: '/knowledge/compliance/auditing',
    articleCount: 3,
    featured: ['Audit Checklists', 'Compliance Monitoring', 'Incident Reporting']
  }
]

const featuredArticles = [
  {
    title: 'Navigating the EU AI Act: A Practical Implementation Guide',
    description: 'Complete guide to understanding and implementing EU AI Act requirements, risk categories, and compliance strategies.',
    category: 'Regulations',
    readTime: '20 min',
    difficulty: 'Intermediate',
    href: '/knowledge/compliance/regulations/eu-ai-act',
    isNew: true
  },
  {
    title: 'HIPAA Compliance for Healthcare AI Systems',
    description: 'Ensuring PHI protection, patient safety, and regulatory compliance in healthcare AI implementations.',
    category: 'Healthcare',
    readTime: '18 min',
    difficulty: 'Advanced',
    href: '/knowledge/compliance/healthcare/hipaa-ai'
  },
  {
    title: 'Building an AI Governance Framework from Scratch',
    description: 'Step-by-step guide to establishing comprehensive AI governance for enterprises.',
    category: 'Governance',
    readTime: '25 min',
    difficulty: 'Intermediate',
    href: '/knowledge/compliance/governance/framework-guide'
  }
]

const complianceTools = [
  {
    title: 'Compliance Checklist Generator',
    description: 'Generate customized compliance checklists for your industry',
    href: '/tools/compliance-checklist'
  },
  {
    title: 'Risk Assessment Matrix',
    description: 'Evaluate AI system risks against regulatory requirements',
    href: '/tools/risk-assessment'
  },
  {
    title: 'Policy Template Library',
    description: 'Download AI governance policy templates',
    href: '/resources/policy-templates'
  }
]

const upcomingRegulations = [
  { title: 'US Federal AI Regulation Framework', status: 'Draft Released', date: 'Q2 2025' },
  { title: 'China AI Regulation Update', status: 'In Development', date: 'Q3 2025' },
  { title: 'UK AI Bill', status: 'Parliamentary Review', date: 'Q4 2025' }
]

export default function ComplianceKnowledgePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50/50 to-background dark:from-green-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mb-4">
              <FileCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Compliance & Governance Knowledge Base
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the complex landscape of AI compliance with comprehensive guides on regulations, 
              standards, and governance frameworks. Stay ahead of evolving requirements and build 
              robust compliance programs.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-8 flex justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">22</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                <div className="text-sm text-muted-foreground">Frameworks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">Monthly</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Compliance Topics</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {subcategories.map((subcategory) => {
              const Icon = subcategory.icon
              return (
                <Link
                  key={subcategory.title}
                  href={subcategory.href}
                  className="group p-6 bg-background rounded-lg border border-border hover:border-green-500/50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400">
                          {subcategory.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {subcategory.articleCount} articles
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {subcategory.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Key Topics:</p>
                    {subcategory.featured.map((article) => (
                      <div key={article} className="text-sm text-muted-foreground">
                        • {article}
                      </div>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Compliance Guides</h2>
            <Link
              href="/knowledge/compliance/all"
              className="text-green-600 dark:text-green-400 hover:underline flex items-center"
            >
              View all articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group bg-background rounded-lg border border-border p-6 hover:border-green-500/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {article.isNew && (
                      <span className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        NEW
                      </span>
                    )}
                    <span className={`text-xs px-2 py-1 rounded ${
                      article.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                      article.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                      'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}>
                      {article.difficulty}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 mb-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {article.description}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Tools */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Compliance Tools & Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {complianceTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group p-4 bg-background rounded-lg border border-border hover:border-green-500/50 transition-all duration-200"
              >
                <h3 className="font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Updates */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Upcoming Regulations</h2>
            <AlertCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          
          <div className="space-y-4">
            {upcomingRegulations.map((regulation) => (
              <div
                key={regulation.title}
                className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
              >
                <div>
                  <h3 className="font-semibold text-foreground">{regulation.title}</h3>
                  <span className="text-sm text-muted-foreground">Status: {regulation.status}</span>
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  {regulation.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-green-50 dark:bg-green-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <Scale className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Help with Compliance?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our compliance experts can help you navigate complex regulations and build robust governance programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Compliance Help
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/resources/compliance-checklist"
              className="inline-flex items-center px-6 py-3 bg-background border border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/20 transition-colors"
            >
              Download Checklist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}