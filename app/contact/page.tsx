'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <div className="bg-white dark:bg-background-dark min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Thank you for reaching out!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've received your message and will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-primary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Ready to secure your AI systems? Contact our team to learn more about our solutions 
            and how we can help protect your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">contact@perfecxion.ai</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Office</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 AI Security Blvd<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-background-subtle dark:bg-background-dark-subtle rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                Enterprise Sales
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                For enterprise solutions and custom pricing, contact our sales team directly 
                at sales@perfecxion.ai or schedule a demo.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-background-dark-subtle text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-background-dark-subtle text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-background-dark-subtle text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-background-dark-subtle text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your AI security needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
