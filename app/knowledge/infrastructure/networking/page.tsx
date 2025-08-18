import { Metadata } from 'next'
import Link from 'next/link'
import { Network, ArrowRight, Clock, TrendingUp, Shield, Zap, Server, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Networking - Infrastructure Knowledge Hub',
  description: 'Deep technical resources on high-performance networking for AI workloads, including InfiniBand, RoCEv2, and next-generation interconnects.',
}

const networkingArticles = [
  {
    slug: 'photonic-interconnects-1-6tb',
    title: '1.6Tb/s Photonic Interconnects: The Future of AI Infrastructure',
    description: 'Deep dive into photonic ASICs and optical interconnects enabling 1.6Tb/s speeds for next-generation AI clusters.',
    readTime: '25 min',
    difficulty: 'Advanced',
    tags: ['photonics', 'optical-networking', 'high-speed-interconnects'],
    featured: true
  },
  {
    slug: '400g-vs-800g-networking',
    title: '400G vs 800G Networking: Economic and Technical Analysis for AI',
    description: 'Comprehensive comparison of 400G and 800G networking technologies, including pluggables, co-packaged optics, and TCO analysis.',
    readTime: '15 min',
    difficulty: 'Intermediate',
    tags: ['400G', '800G', 'cost-analysis'],
    featured: true
  },
  {
    slug: 'ai-network-topologies',
    title: 'AI Network Topologies: Architecture Patterns for Scale',
    description: 'Analysis of network topologies optimized for AI workloads including fat-tree, dragonfly, and rail-optimized designs.',
    readTime: '18 min',
    difficulty: 'Intermediate',
    tags: ['topology', 'architecture', 'scale-out']
  },
  {
    slug: 'infiniband-vs-ethernet-future',
    title: 'InfiniBand vs Ethernet: Predicting the Future of AI Networking',
    description: 'Strategic analysis of InfiniBand and Ethernet technologies, market trends, and predictions for AI infrastructure.',
    readTime: '16 min',
    difficulty: 'Intermediate',
    tags: ['InfiniBand', 'Ethernet', 'predictions']
  },
  {
    slug: 'infiniband-vs-ethernet-security',
    title: 'Security Comparison: InfiniBand vs Ethernet in AI Environments',
    description: 'Security analysis comparing InfiniBand and Ethernet protocols, vulnerabilities, and protection strategies.',
    readTime: '30 min',
    difficulty: 'Advanced',
    tags: ['security', 'InfiniBand', 'Ethernet'],
    featured: true
  },
  {
    slug: 'llm-training-tail-latency',
    title: 'LLM Training and Tail Latency: Network Optimization Strategies',
    description: 'Understanding and optimizing network tail latency for large language model training.',
    readTime: '35 min',
    difficulty: 'Advanced',
    tags: ['LLM', 'training', 'optimization']
  },
  {
    slug: 'network-resilience-comparison',
    title: 'Network Resilience: InfiniBand vs Ethernet Fault Tolerance',
    description: 'Comparative analysis of fault tolerance, redundancy, and resilience mechanisms.',
    readTime: '32 min',
    difficulty: 'Advanced',
    tags: ['resilience', 'fault-tolerance', 'high-availability']
  },
  {
    slug: 'rocev2-vs-infiniband',
    title: 'RoCEv2 vs InfiniBand: Performance and Implementation Guide',
    description: 'Technical comparison of RoCEv2 and InfiniBand protocols with implementation best practices.',
    readTime: '38 min',
    difficulty: 'Advanced',
    tags: ['RoCEv2', 'InfiniBand', 'RDMA']
  }
]

const categories = [
  {
    title: 'Protocol Comparisons',
    icon: Network,
    articles: ['rocev2-vs-infiniband', 'infiniband-vs-ethernet-future', 'infiniband-vs-ethernet-security']
  },
  {
    title: 'Performance Optimization',
    icon: Zap,
    articles: ['llm-training-tail-latency', '400g-vs-800g-networking', 'photonic-interconnects-1-6tb']
  },
  {
    title: 'Architecture & Topology',
    icon: Server,
    articles: ['ai-network-topologies', 'network-resilience-comparison']
  },
  {
    title: 'Security & Resilience',
    icon: Shield,
    articles: ['infiniband-vs-ethernet-security', 'network-resilience-comparison']
  }
]

export default function NetworkingKnowledgePage() {
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
              AI Networking
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore high-performance networking technologies for AI infrastructure, from RoCEv2 and InfiniBand 
              to next-generation photonic interconnects.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-8 flex justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</div>
                <div className="text-sm text-muted-foreground">Featured</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">New</div>
                <div className="text-sm text-muted-foreground">This Week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {networkingArticles.filter(article => article.featured).map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge/infrastructure/networking/${article.slug}`}
                className="group bg-background rounded-lg border border-border p-6 hover:border-blue-500/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    Featured
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    article.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                    article.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                    'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  }`}>
                    {article.difficulty}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Networking Articles</h2>
          
          <div className="space-y-4">
            {networkingArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge/infrastructure/networking/${article.slug}`}
                className="group block p-6 bg-background rounded-lg border border-border hover:border-blue-500/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        article.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                        article.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                        'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                      }`}>
                        {article.difficulty}
                      </span>
                      <div className="flex gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform group-hover:translate-x-1 ml-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Topic</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="p-4 bg-background rounded-lg border border-border"
                >
                  <div className="flex items-center mb-3">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {category.articles.length} articles
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Back to Infrastructure */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/knowledge/infrastructure"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Back to Infrastructure Hub
          </Link>
        </div>
      </section>
    </div>
  )
}