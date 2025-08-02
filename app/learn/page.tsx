import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Shield, 
  AlertTriangle, 
  Lock,
  FileText,
  Target,
  Building,
  CheckCircle,
  Users,
  TrendingUp,
  Brain,
  BookOpen,
  Eye
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Learn AI Security - perfecXion.ai',
  description: 'Master AI security with our comprehensive learning resources, tutorials, and best practices. Explore our AI Security 101 series, whitepapers, and interactive learning paths.',
  keywords: 'ai security learning, machine learning security, ai threat detection, security training, ai compliance, security best practices',
}

const learningTopics = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Essential foundations for AI security professionals',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    href: '/learn/quick-start',
    topics: [
      'Core AI security concepts',
      'Risk assessment fundamentals', 
      'Common vulnerability types',
      'Basic threat modeling'
    ],
    audience: 'Beginners',
    duration: '30 min read'
  },
  {
    id: 'ai-threats',
    title: 'Understanding AI Attacks',
    description: 'Comprehensive overview of AI-specific attack vectors and techniques',
    icon: AlertTriangle,
    color: 'from-red-500 to-orange-500',
    href: '/learn/ai-threats',
    topics: [
      'Adversarial attacks',
      'Model poisoning',
      'Prompt injection',
      'Data extraction methods'
    ],
    audience: 'All levels',
    duration: '45 min read'
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    description: 'Specialized incident response procedures for AI security breaches',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    href: '/learn/incident-response',
    topics: [
      'AI incident detection',
      'Containment strategies',
      'Forensic analysis',
      'Recovery procedures'
    ],
    audience: 'Advanced',
    duration: '60 min read'
  },
  {
    id: 'compliance',
    title: 'Compliance & Governance',
    description: 'Navigate regulatory requirements and governance frameworks for AI',
    icon: Building,
    color: 'from-purple-500 to-indigo-500',
    href: '/learn/compliance',
    topics: [
      'Regulatory landscape',
      'Compliance frameworks',
      'Audit requirements',
      'Documentation standards'
    ],
    audience: 'Management',
    duration: '40 min read'
  },
  {
    id: 'security-best-practices',
    title: 'Security Best Practices',
    description: 'Proven strategies and best practices for securing AI systems',
    icon: Lock,
    color: 'from-yellow-500 to-amber-500',
    href: '/learn/security-best-practices',
    topics: [
      'Secure development',
      'Defense in depth',
      'Monitoring strategies',
      'Access controls'
    ],
    audience: 'Practitioners',
    duration: '50 min read'
  },
  {
    id: 'building-programs',
    title: 'Building AI Security Programs',
    description: 'Strategic guidance for establishing enterprise AI security programs',
    icon: Target,
    color: 'from-teal-500 to-green-500',
    href: '/content/white-papers/building-ai-security-programs',
    topics: [
      'Program strategy',
      'Team structure',
      'Tool selection',
      'Implementation roadmap'
    ],
    audience: 'Leadership',
    duration: '55 min read'
  }
]

const whitePapers = [
  {
    title: 'AI-Specific Incident Response: A Comprehensive Guide',
    description: 'Advanced incident response strategies designed specifically for AI systems',
    pdfPath: '/white-papers/ai-incident-response.pdf',
    webPath: '/content/white-papers/ai-incident-response',
    duration: '45 min read',
    topics: ['Detection', 'Containment', 'Recovery', 'Forensics']
  },
  {
    title: 'Building AI Security Programs',
    description: 'Strategic framework for establishing enterprise AI security initiatives',
    pdfPath: '/white-papers/building-ai-security-programs.pdf',
    webPath: '/content/white-papers/building-ai-security-programs',
    duration: '55 min read',
    topics: ['Strategy', 'Implementation', 'Governance', 'Metrics']
  },
  {
    title: 'AI Regulatory Compliance Guide',
    description: 'Navigate the evolving landscape of AI regulations and standards',
    pdfPath: '/white-papers/ai-regulatory-compliance.pdf',
    webPath: '/content/white-papers/ai-regulatory-compliance',
    duration: '40 min read',
    topics: ['Regulations', 'Standards', 'Auditing', 'Documentation']
  },
  {
    title: 'Getting Started with AI Security',
    description: 'Essential guide for organizations beginning their AI security journey',
    pdfPath: '/white-papers/getting-started-ai-security.pdf',
    webPath: '/learn/quick-start',
    duration: '30 min read',
    topics: ['Fundamentals', 'Assessment', 'Planning', 'Quick Wins']
  }
]

export default function LearningCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Master AI Security
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive learning resources for AI security professionals. From foundational concepts to advanced incident response, build expertise that protects modern AI systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">10,000+ Practitioners</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">6 Core Topics</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Updated Monthly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Topics Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore comprehensive topics designed for different roles and experience levels in AI security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningTopics.map((topic) => {
              const IconComponent = topic.icon
              return (
                <Link
                  key={topic.id}
                  href={topic.href}
                  className="group relative"
                >
                  <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative p-8">
                      {/* Icon and Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">{topic.audience}</div>
                          <div className="text-xs text-gray-500">{topic.duration}</div>
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {topic.description}
                      </p>

                      {/* Topics List */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">What you'll learn:</h4>
                        <ul className="space-y-2">
                          {topic.topics.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Hover Effect Arrow */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <Brain className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* White Papers Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              In-Depth White Papers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive guides written by our security experts, covering advanced topics in detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitePapers.map((paper, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {paper.title}
                  </h3>
                  <div className="text-sm text-gray-400">{paper.duration}</div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  {paper.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={paper.pdfPath}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors text-white"
                    download
                  >
                    <FileText className="w-4 h-4" />
                    Download PDF
                  </a>
                  <a 
                    href={paper.webPath}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-white"
                  >
                    <Eye className="w-4 h-4" />
                    Read Online
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-700/50 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Implement AI Security?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with our practical implementation guides and tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/learn/quick-start"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors text-white font-semibold"
              >
                <BookOpen className="w-5 h-5" />
                Start Learning
              </Link>
              <Link 
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-white"
              >
                <Shield className="w-5 h-5" />
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}