import Link from 'next/link'
import { ArrowRight, Shield, Brain, Zap, BookOpen, FileText, Building, Microscope, ChevronRight, CheckCircle, TrendingUp, Users, Clock, Star } from 'lucide-react'
import Image from 'next/image'

// Value propositions
const valueProps = [
  {
    icon: Shield,
    title: 'AI/ML Security Expertise',
    description: 'From prompt injection defense to model poisoning prevention'
  },
  {
    icon: Building,
    title: 'Infrastructure & Networking',
    description: 'GPU clusters, AI fabrics, and high-performance interconnects'
  },
  {
    icon: FileText,
    title: '50+ Technical Resources',
    description: 'Deep dives, white papers, and reference architectures'
  },
  {
    icon: Microscope,
    title: 'Reference Architectures',
    description: 'Battle-tested designs for production AI systems'
  }
]

// Featured topics (trending or important)
const featuredTopics = [
  {
    title: 'AI Guardrails That Work',
    description: 'Beyond basic filtering - advanced guardrail systems and implementation',
    tags: ['AI Security', 'Guardrails'],
    readTime: '25 min',
    href: '/knowledge/ai-security/defense/ai-guardrails-that-actually-work-beyond-basic-content-filtering'
  },
  {
    title: 'LLM Security & Defense',
    description: 'Advanced prompt engineering and security through design',
    tags: ['AI Security', 'LLM'],
    readTime: '25 min',
    href: '/knowledge/ai-security/defense/advanced-prompt-engineering-security-defense-through-design'
  },
  {
    title: 'RoCEv2 vs InfiniBand',
    description: 'Performance comparison and implementation guide for AI networking',
    tags: ['Networking', 'Performance'],
    readTime: '20 min',
    href: '/knowledge?topic=rocev2-infiniband'
  },
  {
    title: 'AI Fabric Architecture',
    description: 'Building scalable GPU clusters for distributed training',
    tags: ['Infrastructure', 'Architecture'],
    readTime: '25 min',
    href: '/knowledge?topic=ai-fabric'
  }
]

// Trust signals
const trustSignals = [
  { value: '48+', label: 'Articles & Papers' },
  { value: 'Weekly', label: 'Updates' },
  { value: 'Expert', label: 'Contributors' },
  { value: 'Open', label: 'Access' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
          <Image
            src="/images/homepage.png"
            alt=""
            fill
            className="object-cover opacity-20 dark:opacity-30"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
              <TrendingUp className="h-4 w-4 mr-2" />
              Updated weekly with latest research
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              The Definitive Source for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"> AI Security</span> &
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent"> Infrastructure</span> Knowledge
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Expert insights on building, securing, and scaling AI systems.
              From neural network architectures to production deployment strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/knowledge"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors group"
              >
                Explore Knowledge Hub
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#featured"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border border-border bg-background hover:bg-muted transition-colors"
              >
                Browse Topics
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="border-y border-border bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {signal.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {signal.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Engineers Choose PerfecXion
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive, technical content that goes beyond surface-level explanations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop) => {
              const Icon = prop.icon
              return (
                <div key={prop.title} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {prop.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Trending Topics This Week
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hot topics our community is exploring right now
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {featuredTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group p-6 bg-background rounded-xl border border-border hover:border-blue-500/50 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {topic.title}
                  </h3>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                </div>

                <p className="text-muted-foreground mb-4">
                  {topic.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {topic.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {topic.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/knowledge"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium group"
            >
              View all topics in Knowledge Hub
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Content Formats for Every Learning Style
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you want to consume information
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 rounded-xl">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">AI Security Research</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Advanced defense strategies, threat modeling, and prompt injection mitigation
              </p>
              <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                <CheckCircle className="h-4 w-4 mr-2" />
                25+ security articles
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20 rounded-xl">
              <Building className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Infrastructure Guides</h3>
              <p className="text-muted-foreground text-sm mb-4">
                GPU clusters, AI fabrics, networking architectures, and performance optimization
              </p>
              <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
                <CheckCircle className="h-4 w-4 mr-2" />
                20+ infrastructure papers
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20 rounded-xl">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Learning Paths</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Structured tutorials and step-by-step guides for complex topics
              </p>
              <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                <CheckCircle className="h-4 w-4 mr-2" />
                6+ paths available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mb-6">
            <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>

          <blockquote className="text-2xl sm:text-3xl font-medium text-foreground mb-6">
            "The most comprehensive resource for understanding AI infrastructure security.
            Essential reading for anyone building production AI systems."
          </blockquote>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Users className="h-5 w-5" />
            <span>Trusted by engineers at leading AI companies</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Your Deep Dive Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of engineers advancing their AI infrastructure knowledge
          </p>
          <Link
            href="/knowledge"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors group"
          >
            Explore Knowledge Hub
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}