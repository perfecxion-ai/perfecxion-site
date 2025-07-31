import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Quote, Building, User, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Testimonials - perfecXion.ai',
  description: 'See what our customers say about perfecXion.ai AI security solutions. Real stories from security teams worldwide.',
}

// Placeholder testimonial data - replace with real testimonials
const testimonials = [
  {
    id: 1,
    content: "perfecXion.ai's ADAPT-AI framework has transformed how we approach AI security testing. The gradient-based attack optimization found vulnerabilities our traditional tools completely missed.",
    author: "Sarah Chen",
    role: "Chief Security Officer",
    company: "TechCorp Global",
    companySize: "5000+ employees",
    rating: 5,
    product: "ADAPT-AI",
    highlight: "Found critical vulnerabilities traditional tools missed"
  },
  {
    id: 2,
    content: "The real-time monitoring capabilities of perfecX Agent saved us from a sophisticated prompt injection attack. The behavioral analysis caught anomalies we would have never detected manually.",
    author: "Michael Rodriguez",
    role: "AI Security Lead",
    company: "FinanceAI Solutions",
    companySize: "1000-5000 employees",
    rating: 5,
    product: "perfecX Agent",
    highlight: "Prevented major security incident"
  },
  {
    id: 3,
    content: "Achieving compliance with EU AI Act requirements seemed impossible until we implemented perfecX Comply. It automated 90% of our compliance workflows and keeps us audit-ready.",
    author: "Elena Volkov",
    role: "Compliance Director",
    company: "EuroTech Industries",
    companySize: "500-1000 employees",
    rating: 5,
    product: "perfecX Comply",
    highlight: "90% reduction in compliance workload"
  },
  {
    id: 4,
    content: "As a parent and tech professional, SafeAI Guard gives me peace of mind. My kids can use AI tools for homework while I know they're protected from inappropriate content.",
    author: "David Kim",
    role: "Software Engineer & Parent",
    company: "Individual User",
    companySize: "Family",
    rating: 5,
    product: "SafeAI Guard",
    highlight: "Perfect balance of safety and learning"
  },
  {
    id: 5,
    content: "PromptShield's multi-layered detection stopped several sophisticated attacks on our customer service chatbot. The false positive rate is incredibly low compared to other solutions.",
    author: "Amara Johnson",
    role: "Head of AI Operations",
    company: "RetailNext AI",
    companySize: "100-500 employees",
    rating: 5,
    product: "PromptShield",
    highlight: "95%+ detection rate with <2% false positives"
  },
  {
    id: 6,
    content: "The comprehensive approach of perfecXion.ai's platform is unmatched. Having all our AI security tools integrated saves us countless hours and provides better protection.",
    author: "James Thompson",
    role: "VP of Engineering",
    company: "CloudScale Systems",
    companySize: "1000+ employees",
    rating: 5,
    product: "Full Platform",
    highlight: "Complete AI security in one platform"
  }
]

const stats = [
  { label: "Customer Satisfaction", value: "98%" },
  { label: "Security Incidents Prevented", value: "10,000+" },
  { label: "Enterprise Customers", value: "500+" },
  { label: "Uptime SLA", value: "99.9%" }
]

export default function TestimonialsPage() {
  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Customer Success
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Trusted by Security Teams Worldwide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how organizations are securing their AI systems with perfecXion.ai
          </p>
        </header>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-200 dark:text-gray-700" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Highlight */}
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    {testimonial.highlight}
                  </span>
                </div>

                {/* Author */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-500">
                        {testimonial.company} • {testimonial.companySize}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400">
                      {testimonial.product} User
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Logos */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Trusted by Leading Organizations
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                    <Building className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
              * Customer logos coming soon
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join These Success Stories
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start securing your AI systems today with our comprehensive security platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary">
                Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                Read Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}