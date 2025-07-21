import { Metadata } from 'next'
import { Mail, Phone, MapPin, Shield, Target, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about perfecXion.ai and our mission to secure AI systems worldwide.',
}

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* About Section */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            About perfecXion.ai
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            We're on a mission to make AI systems secure, compliant, and trustworthy. 
            Our comprehensive suite of security tools helps organizations protect their AI infrastructure 
            from emerging threats while maintaining peak performance.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-20">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <Shield className="h-6 w-6 text-primary-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Security First</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We prioritize security in every aspect of AI development and deployment, 
              ensuring your systems are protected against current and future threats.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <Target className="h-6 w-6 text-primary-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Precision Engineering</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our tools are built with precision and attention to detail, providing accurate 
              threat detection and comprehensive security coverage.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <CheckCircle className="h-6 w-6 text-primary-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Compliance Ready</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stay ahead of regulations with our compliance-focused approach, ensuring your 
              AI systems meet all industry standards and requirements.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
              Get in Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="h-8 w-8 text-primary-500 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  contact@perfecxion.ai
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  We respond within 24 hours
                </p>
              </div>
              
              <div className="text-center">
                <Phone className="h-8 w-8 text-primary-500 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +1 (555) 123-4567
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Mon-Fri 9AM-6PM PST
                </p>
              </div>
              
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary-500 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Office</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  San Francisco, CA
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  By appointment only
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-background-subtle dark:bg-background-dark-subtle rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Ready to Secure Your AI?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Contact our team for a personalized demo and learn how perfecXion.ai 
                can protect your AI systems.
              </p>
              <a 
                href="mailto:contact@perfecxion.ai" 
                className="btn-primary inline-block"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}