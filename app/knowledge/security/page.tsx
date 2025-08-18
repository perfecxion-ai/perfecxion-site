import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, AlertTriangle, Target, Lock, Eye, ChevronRight, ArrowRight, BookOpen, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Security - Knowledge Hub',
  description: 'Comprehensive guides on AI security, threat detection, red team testing, and defense strategies.',
}

const subcategories = [
  {
    title: 'Fundamentals',
    description: 'Core concepts and foundational knowledge for AI security',
    icon: BookOpen,
    href: '/knowledge/security/fundamentals',
    articleCount: 12,
    featured: ['Getting Started with AI Security', 'Understanding AI Vulnerabilities', 'Security Architecture Basics']
  },
  {
    title: 'Threats & Attacks',
    description: 'Deep dives into attack vectors, vulnerabilities, and exploitation techniques',
    icon: AlertTriangle,
    href: '/knowledge/security/threats',
    articleCount: 15,
    featured: ['Prompt Injection Attacks', 'Data Poisoning', 'Model Extraction Techniques']
  },
  {
    title: 'Red Team Testing',
    description: 'Methodologies and tools for testing AI system security',
    icon: Target,
    href: '/knowledge/security/red-team',
    articleCount: 8,
    featured: ['50 Attack Vectors', 'Red Team Playbook', 'Testing Methodologies']
  },
  {
    title: 'Defense Strategies',
    description: 'Protective measures, guardrails, and security implementations',
    icon: Shield,
    href: '/knowledge/security/defense',
    articleCount: 10,
    featured: ['Building Guardrails', 'Defense in Depth', 'Security Monitoring']
  }
]

const featuredArticles = [
  {
    title: 'The Complete Guide to Prompt Injection Defense',
    description: 'Learn advanced techniques to protect your LLMs from prompt injection attacks, including detection methods and mitigation strategies.',
    category: 'Threats',
    readTime: '22 min',
    difficulty: 'Intermediate',
    href: '/knowledge/security/threats/prompt-injection-defense'
  },
  {
    title: 'Building Secure AI Systems from the Ground Up',
    description: 'Architectural patterns and best practices for designing security into AI systems from day one.',
    category: 'Fundamentals',
    readTime: '18 min',
    difficulty: 'Advanced',
    href: '/knowledge/security/fundamentals/secure-architecture'
  },
  {
    title: 'AI Red Team Testing: A Practical Guide',
    description: 'Step-by-step methodology for conducting comprehensive security assessments of AI systems.',
    category: 'Red Team',
    readTime: '25 min',
    difficulty: 'Advanced',
    href: '/knowledge/security/red-team/practical-guide'
  }
]

const recentUpdates = [
  { title: 'New Attack Vector: Indirect Prompt Injection via Email', date: '2 days ago' },
  { title: 'Updated: OWASP Top 10 for LLM Applications', date: '1 week ago' },
  { title: 'Case Study: Fortune 500 AI Security Breach Analysis', date: '2 weeks ago' }
]

export default function SecurityKnowledgePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50/50 to-background dark:from-red-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mb-4">
              <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              AI Security Knowledge Base
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the art and science of securing AI systems. From fundamental concepts to advanced 
              red team techniques, explore comprehensive resources trusted by security professionals worldwide.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-8 flex justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">45</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">4</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">Weekly</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Explore Security Topics</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {subcategories.map((subcategory) => {
              const Icon = subcategory.icon
              return (
                <Link
                  key={subcategory.title}
                  href={subcategory.href}
                  className="group p-6 bg-background rounded-lg border border-border hover:border-red-500/50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-red-600 dark:group-hover:text-red-400">
                          {subcategory.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {subcategory.articleCount} articles
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {subcategory.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Popular Articles:</p>
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
            <h2 className="text-2xl font-bold text-foreground">Featured Security Articles</h2>
            <Link
              href="/knowledge/security/all"
              className="text-red-600 dark:text-red-400 hover:underline flex items-center"
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
                className="group bg-background rounded-lg border border-border p-6 hover:border-red-500/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-red-600 dark:text-red-400">
                    {article.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    article.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                    article.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                    'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  }`}>
                    {article.difficulty}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 mb-2">
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

      {/* Recent Updates */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Recent Updates</h2>
          
          <div className="space-y-4">
            {recentUpdates.map((update) => (
              <div
                key={update.title}
                className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-red-500/50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-foreground">{update.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">{update.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-red-50 dark:bg-red-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Start Your AI Security Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Follow our structured learning path to master AI security from fundamentals to advanced techniques.
          </p>
          <Link
            href="/learning-paths/ai-security-professional"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Begin Learning Path
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}