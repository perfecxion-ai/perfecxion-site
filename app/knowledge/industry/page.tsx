import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Heart, DollarSign, Landmark, Factory, ChevronRight, ArrowRight, TrendingUp, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industry Applications - Knowledge Hub',
  description: 'Sector-specific AI security implementations for healthcare, finance, government, and enterprise organizations.',
}

const industries = [
  {
    title: 'Healthcare & Life Sciences',
    description: 'AI security for medical devices, patient data protection, and clinical AI systems',
    icon: Heart,
    href: '/knowledge/industry/healthcare',
    articleCount: 6,
    keyTopics: ['HIPAA Compliance', 'Medical Device Security', 'Clinical AI Safety', 'PHI Protection'],
    challenges: ['Patient safety', 'Data privacy', 'Regulatory compliance'],
    color: 'red'
  },
  {
    title: 'Financial Services',
    description: 'Securing AI in banking, trading, insurance, and fintech applications',
    icon: DollarSign,
    href: '/knowledge/industry/finance',
    articleCount: 5,
    keyTopics: ['Fraud Detection', 'Algorithmic Trading', 'Risk Management', 'Basel III'],
    challenges: ['Transaction security', 'Model risk', 'Regulatory compliance'],
    color: 'green'
  },
  {
    title: 'Government & Defense',
    description: 'AI security for national security, public services, and critical infrastructure',
    icon: Landmark,
    href: '/knowledge/industry/government',
    articleCount: 4,
    keyTopics: ['National Security', 'Critical Infrastructure', 'Public Services', 'Data Sovereignty'],
    challenges: ['Nation-state threats', 'Public trust', 'Operational security'],
    color: 'blue'
  },
  {
    title: 'Manufacturing & Industrial',
    description: 'Securing AI in smart factories, supply chains, and industrial IoT',
    icon: Factory,
    href: '/knowledge/industry/manufacturing',
    articleCount: 3,
    keyTopics: ['Industrial IoT', 'Supply Chain', 'Predictive Maintenance', 'Quality Control'],
    challenges: ['OT/IT convergence', 'Safety systems', 'IP protection'],
    color: 'purple'
  }
]

const featuredCaseStudies = [
  {
    title: 'Securing AI in a Fortune 500 Healthcare System',
    description: 'How a major healthcare provider implemented comprehensive AI security across 50+ hospitals.',
    industry: 'Healthcare',
    results: '60% reduction in security incidents, 100% HIPAA compliance',
    href: '/knowledge/industry/healthcare/case-study-fortune500'
  },
  {
    title: 'AI Risk Management at a Global Investment Bank',
    description: 'Building AI governance for high-frequency trading and risk assessment systems.',
    industry: 'Finance',
    results: '$2M saved in potential regulatory fines, 40% faster model validation',
    href: '/knowledge/industry/finance/case-study-investment-bank'
  },
  {
    title: 'Protecting National Infrastructure AI Systems',
    description: 'Implementing zero-trust architecture for critical infrastructure AI.',
    industry: 'Government',
    results: 'Zero breaches in 2 years, 99.99% system availability',
    href: '/knowledge/industry/government/case-study-infrastructure'
  }
]

const industryMetrics = [
  {
    industry: 'Healthcare',
    stat: '73%',
    description: 'of healthcare orgs use AI',
    risk: 'High patient safety risk'
  },
  {
    industry: 'Finance',
    stat: '$10M+',
    description: 'average breach cost',
    risk: 'Regulatory penalties'
  },
  {
    industry: 'Government',
    stat: '500%',
    description: 'increase in AI threats',
    risk: 'National security'
  },
  {
    industry: 'Manufacturing',
    stat: '45%',
    description: 'have AI security gaps',
    risk: 'IP theft risk'
  }
]

const resources = [
  {
    title: 'Healthcare AI Security Playbook',
    type: 'Guide',
    href: '/resources/healthcare-playbook'
  },
  {
    title: 'Financial Services Compliance Matrix',
    type: 'Template',
    href: '/resources/finance-compliance-matrix'
  },
  {
    title: 'Government AI Risk Framework',
    type: 'Framework',
    href: '/resources/government-risk-framework'
  },
  {
    title: 'Industrial AI Security Checklist',
    type: 'Checklist',
    href: '/resources/industrial-checklist'
  }
]

export default function IndustryKnowledgePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/50 to-background dark:from-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-4">
              <Building2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Industry-Specific AI Security
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored AI security solutions for healthcare, finance, government, and manufacturing. 
              Learn from real-world implementations and industry-specific best practices.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-8 flex justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">18</div>
                <div className="text-sm text-muted-foreground">Case Studies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</div>
                <div className="text-sm text-muted-foreground">Industries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-sm text-muted-foreground">Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Select Your Industry</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon
              const colorClasses = {
                red: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-500/50',
                green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-500/50',
                blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-500/50',
                purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-500/50'
              }
              const colors = colorClasses[industry.color as keyof typeof colorClasses]
              
              return (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className={`group p-6 bg-background rounded-lg border border-border hover:${colors.split(' ')[4]} transition-all duration-200`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${colors.split(' ').slice(0, 2).join(' ')}`}>
                        <Icon className={`h-6 w-6 ${colors.split(' ').slice(2, 4).join(' ')}`} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-foreground">
                          {industry.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {industry.articleCount} articles
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Key Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.keyTopics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs bg-muted rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Top Challenges:</p>
                    <div className="space-y-1">
                      {industry.challenges.map((challenge) => (
                        <div key={challenge} className="text-sm text-muted-foreground">
                          • {challenge}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Industry AI Security Landscape</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryMetrics.map((metric) => (
              <div
                key={metric.industry}
                className="bg-background rounded-lg border border-border p-6 text-center"
              >
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  {metric.industry}
                </div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {metric.stat}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {metric.description}
                </div>
                <div className="text-xs text-red-600 dark:text-red-400 font-medium">
                  {metric.risk}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Case Studies</h2>
            <Link
              href="/knowledge/industry/case-studies"
              className="text-purple-600 dark:text-purple-400 hover:underline flex items-center"
            >
              View all case studies
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredCaseStudies.map((study) => (
              <Link
                key={study.title}
                href={study.href}
                className="group bg-background rounded-lg border border-border p-6 hover:border-purple-500/50 transition-all duration-200"
              >
                <div className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-2">
                  {study.industry}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 mb-2">
                  {study.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {study.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    Results:
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    {study.results}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Resources */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Industry-Specific Resources</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group p-4 bg-background rounded-lg border border-border hover:border-purple-500/50 transition-all duration-200"
              >
                <div className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-2">
                  {resource.type}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {resource.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-50 dark:bg-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Get Industry-Specific AI Security Guidance
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our experts understand the unique challenges and requirements of your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Schedule Industry Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center px-6 py-3 bg-background border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors"
            >
              Take Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}