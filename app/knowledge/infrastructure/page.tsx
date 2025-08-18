import { Metadata } from 'next'
import Link from 'next/link'
import { Network, Cpu, Server, Database, Cloud, Zap, ChevronRight, ArrowRight, TrendingUp, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Infrastructure - Knowledge Hub',
  description: 'Deep technical resources on AI fabrics, networking, architecture, and performance optimization for AI workloads.',
}

const subcategories = [
  {
    title: 'AI Fabrics & GPU Clusters',
    description: 'Security and optimization of GPU clusters, distributed training infrastructure, and HPC environments',
    icon: Cpu,
    href: '/knowledge/infrastructure/ai-fabrics',
    articleCount: 13,
    featured: ['AI Fabric Security', 'Congestion Control Vulnerabilities', 'Telemetry Exploitation'],
    isNew: true
  },
  {
    title: 'AI Networking',
    description: 'Network architectures, protocols, and optimization for AI workloads',
    icon: Network,
    href: '/knowledge/infrastructure/networking',
    articleCount: 8,
    featured: ['400G vs 800G Analysis', 'InfiniBand vs Ethernet', 'RoCEv2 vs InfiniBand'],
    isNew: true
  },
  {
    title: 'Architecture Patterns',
    description: 'Design patterns and architectural decisions for scalable AI systems',
    icon: Server,
    href: '/knowledge/infrastructure/architecture',
    articleCount: 8,
    featured: ['Scale-up vs Scale-out', 'Multi-cloud Deployments', 'Edge AI Architecture']
  },
  {
    title: 'Performance & Optimization',
    description: 'Techniques for optimizing AI infrastructure performance and efficiency',
    icon: Zap,
    href: '/knowledge/infrastructure/performance',
    articleCount: 5,
    featured: ['LLM Training Optimization', 'Inference Acceleration', 'Resource Utilization']
  }
]

const featuredArticles = [
  {
    title: '400G vs 800G Networking: Economic and Technical Analysis for AI',
    description: 'Comprehensive comparison of 400G and 800G networking technologies, including pluggables, co-packaged optics, and TCO analysis for AI workloads.',
    category: 'Networking',
    readTime: '15 min',
    difficulty: 'Intermediate',
    href: '/knowledge/infrastructure/networking/400g-vs-800g-networking',
    isNew: true
  },
  {
    title: 'RoCEv2 vs InfiniBand: Performance and Implementation Guide',
    description: 'Technical comparison of RoCEv2 and InfiniBand protocols, including performance benchmarks, implementation considerations, and best practices.',
    category: 'Networking',
    readTime: '20 min',
    difficulty: 'Advanced',
    href: '/knowledge/infrastructure/networking/rocev2-vs-infiniband',
    isNew: true
  },
  {
    title: 'LLM Training and Tail Latency: Network Optimization Strategies',
    description: 'Understanding and optimizing network tail latency for large language model training, including collective operations and gradient synchronization.',
    category: 'Networking',
    readTime: '18 min',
    difficulty: 'Advanced',
    href: '/knowledge/infrastructure/networking/llm-training-tail-latency',
    isNew: true
  }
]

const technicalTopics = [
  {
    title: 'AI Network Topologies',
    tags: ['Fat-tree', 'Dragonfly', 'Scale-out'],
    href: '/knowledge/infrastructure/networking/ai-network-topologies'
  },
  {
    title: 'Network Resilience Comparison',
    tags: ['Fault Tolerance', 'Redundancy', 'High Availability'],
    href: '/knowledge/infrastructure/networking/network-resilience-comparison'
  },
  {
    title: 'InfiniBand vs Ethernet Security',
    tags: ['Vulnerabilities', 'Protection', 'Best Practices'],
    href: '/knowledge/infrastructure/networking/infiniband-vs-ethernet-security'
  },
  {
    title: 'Photonic Interconnects 1.6Tb/s',
    tags: ['Optical', 'High-speed', 'Next-gen'],
    href: '/knowledge/infrastructure/networking/photonic-interconnects-1-6tb'
  }
]

const upcomingContent = [
  { title: 'CXL 3.1 and Memory Pooling for AI', date: 'Coming next week' },
  { title: 'DPU and SmartNIC Security Architecture', date: 'Coming soon' },
  { title: 'Quantum-Safe Cryptography for AI Networks', date: 'In development' }
]

export default function InfrastructureKnowledgePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
              <Network className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              AI Infrastructure Knowledge Base
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore cutting-edge research on AI fabrics, high-performance networking, and infrastructure 
              architecture. Learn from real-world deployments and optimize your AI systems for maximum performance.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-8 flex justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">38</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">25</div>
                <div className="text-sm text-muted-foreground">New This Month</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Infrastructure Topics</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {subcategories.map((subcategory) => {
              const Icon = subcategory.icon
              return (
                <Link
                  key={subcategory.title}
                  href={subcategory.href}
                  className="group p-6 bg-background rounded-lg border border-border hover:border-blue-500/50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {subcategory.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {subcategory.articleCount} articles
                        </p>
                      </div>
                    </div>
                    {subcategory.isNew && (
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                        NEW
                      </span>
                    )}
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {subcategory.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Featured Content:</p>
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
            <h2 className="text-2xl font-bold text-foreground">Featured Infrastructure Research</h2>
            <Link
              href="/knowledge/infrastructure/all"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
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
                className="group bg-background rounded-lg border border-border p-6 hover:border-blue-500/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {article.isNew && (
                      <span className="text-xs px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
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
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
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

      {/* Technical Deep Dives */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Technical Deep Dives</h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {technicalTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group p-4 bg-background rounded-lg border border-border hover:border-blue-500/50 transition-all duration-200"
              >
                <h3 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                  {topic.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Coming Soon</h2>
            <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          
          <div className="space-y-4">
            {upcomingContent.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-foreground">{item.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Tools CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50 dark:bg-blue-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <Database className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Interactive Infrastructure Tools
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Use our calculators and decision tools to optimize your AI infrastructure choices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/network-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Network Calculator
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/tools/topology-designer"
              className="inline-flex items-center px-6 py-3 bg-background border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
            >
              Topology Designer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}