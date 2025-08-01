import { Metadata } from 'next'
import DemoBooking from '@/components/DemoBooking'
import { Shield, Search, FileText, CheckCircle, AlertTriangle, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security Assessment - perfecXion.ai',
  description: 'Book a comprehensive AI security assessment. Get expert analysis of your AI systems vulnerabilities and a roadmap to secure implementation.',
}

export default function AssessmentPage() {
  const assessmentSteps = [
    {
      icon: Search,
      title: 'Discovery & Analysis',
      description: 'We analyze your current AI infrastructure, models, and data flows',
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Identification',
      description: 'Comprehensive testing to identify security gaps and potential attack vectors',
    },
    {
      icon: Target,
      title: 'Risk Prioritization',
      description: 'Prioritized list of vulnerabilities based on impact and likelihood',
    },
    {
      icon: FileText,
      title: 'Detailed Report',
      description: 'Comprehensive report with findings and remediation recommendations',
    },
    {
      icon: Shield,
      title: 'Implementation Roadmap',
      description: 'Step-by-step plan to implement security improvements',
    },
    {
      icon: CheckCircle,
      title: 'Follow-up Support',
      description: 'Ongoing support to ensure successful security implementation',
    },
  ]

  const includedServices = [
    'AI model security analysis',
    'Prompt injection testing',
    'Data poisoning vulnerability assessment',
    'Model extraction attack simulation',
    'Adversarial robustness testing',
    'Compliance gap analysis',
    'Integration security review',
    'Best practices recommendations',
  ]

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Professional Service
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                AI Security <span className="gradient-text">Assessment</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Get a comprehensive security audit of your AI systems from our expert team. 
                Identify vulnerabilities, understand risks, and receive a detailed roadmap for securing your AI infrastructure.
              </p>
            </div>

            <div className="space-y-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Assessment Process
                </h2>
                <div className="space-y-4">
                  {assessmentSteps.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {index + 1}. {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  What's Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {includedServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6">
                <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-2">
                  Why Security Assessment?
                </h3>
                <p className="text-primary-800 dark:text-primary-300 text-sm mb-3">
                  With AI systems becoming critical infrastructure, security can't be an afterthought. Our assessment helps you:
                </p>
                <ul className="space-y-1 text-primary-800 dark:text-primary-300 text-sm">
                  <li>• Identify vulnerabilities before attackers do</li>
                  <li>• Meet compliance requirements proactively</li>
                  <li>• Build trust with your customers</li>
                  <li>• Reduce risk of costly security incidents</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:sticky lg:top-8">
            <DemoBooking />
          </div>
        </div>
      </div>
    </main>
  )
}