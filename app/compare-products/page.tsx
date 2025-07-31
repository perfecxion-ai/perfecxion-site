'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { Check, X } from 'lucide-react'

export default function CompareProductsPage() {
  const products = [
    {
      id: 'sentinel',
      name: 'AI Sentinel',
      tagline: 'Real-time threat detection',
      price: 'From $2,500/mo',
      category: 'Detection',
      features: {
        'Real-time Threat Detection': true,
        'Model Vulnerability Scanning': true,
        'Automated Response': true,
        'Compliance Monitoring': false,
        'Supply Chain Analysis': false,
        'Data Protection': true,
        'API Security': true,
        'Custom Integrations': true,
        'Advanced Analytics': true,
        '24/7 Monitoring': true,
        'Incident Response': true,
        'Risk Scoring': true,
        'Multi-cloud Support': true,
        'On-premise Deployment': false,
        'SLA Guarantee': '99.9%'
      }
    },
    {
      id: 'modelguard',
      name: 'Model Guard',
      tagline: 'Comprehensive security scanning',
      price: 'From $3,000/mo',
      category: 'Scanning',
      features: {
        'Real-time Threat Detection': false,
        'Model Vulnerability Scanning': true,
        'Automated Response': false,
        'Compliance Monitoring': true,
        'Supply Chain Analysis': false,
        'Data Protection': true,
        'API Security': false,
        'Custom Integrations': true,
        'Advanced Analytics': true,
        '24/7 Monitoring': false,
        'Incident Response': false,
        'Risk Scoring': true,
        'Multi-cloud Support': true,
        'On-premise Deployment': true,
        'SLA Guarantee': '99.5%'
      }
    },
    {
      id: 'complianceai',
      name: 'ComplianceAI',
      tagline: 'Automated compliance management',
      price: 'From $4,000/mo',
      category: 'Compliance',
      features: {
        'Real-time Threat Detection': false,
        'Model Vulnerability Scanning': false,
        'Automated Response': true,
        'Compliance Monitoring': true,
        'Supply Chain Analysis': false,
        'Data Protection': true,
        'API Security': false,
        'Custom Integrations': true,
        'Advanced Analytics': true,
        '24/7 Monitoring': true,
        'Incident Response': false,
        'Risk Scoring': true,
        'Multi-cloud Support': true,
        'On-premise Deployment': true,
        'SLA Guarantee': '99.9%'
      }
    },
    {
      id: 'securepipe',
      name: 'SecurePipe',
      tagline: 'ML pipeline security',
      price: 'From $2,000/mo',
      category: 'Pipeline',
      features: {
        'Real-time Threat Detection': true,
        'Model Vulnerability Scanning': true,
        'Automated Response': true,
        'Compliance Monitoring': false,
        'Supply Chain Analysis': true,
        'Data Protection': true,
        'API Security': true,
        'Custom Integrations': true,
        'Advanced Analytics': false,
        '24/7 Monitoring': true,
        'Incident Response': true,
        'Risk Scoring': false,
        'Multi-cloud Support': true,
        'On-premise Deployment': false,
        'SLA Guarantee': '99.5%'
      }
    }
  ]

  const [selectedProducts, setSelectedProducts] = useState<string[]>(['sentinel', 'modelguard'])
  const allFeatures = [...new Set(products.flatMap(p => Object.keys(p.features)))]

  const toggleProduct = (productId: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId)
      }
      if (prev.length < 3) {
        return [...prev, productId]
      }
      return prev
    })
  }

  const selectedProductsData = products.filter(p => selectedProducts.includes(p.id))

  return (
    <div className="bg-white dark:bg-gray-950 py-16">
      <Container>
        <SectionHeader
          title="Compare Products"
          subtitle="Find the perfect AI security solution for your needs"
          centered
        />
        
        <div className="max-w-7xl mx-auto mt-12">
          {/* Product Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Select products to compare (up to 3)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map(product => (
                <button
                  key={product.id}
                  onClick={() => toggleProduct(product.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedProducts.includes(product.id)
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-semibold">{product.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{product.tagline}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {selectedProductsData.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4 border-b dark:border-gray-700">Features</th>
                    {selectedProductsData.map(product => (
                      <th key={product.id} className="p-4 border-b dark:border-gray-700 min-w-[200px]">
                        <div className="text-center">
                          <h3 className="text-xl font-bold">{product.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{product.tagline}</p>
                          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-2">
                            {product.price}
                          </p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, idx) => (
                    <tr key={feature} className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}>
                      <td className="p-4 font-medium">{feature}</td>
                      {selectedProductsData.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          {typeof product.features[feature] === 'boolean' ? (
                            product.features[feature] ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{product.features[feature] || '-'}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Additional Comparison Sections */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Best For</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-600">AI Sentinel</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Organizations needing real-time threat detection and automated response
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600">Model Guard</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Teams focused on comprehensive vulnerability scanning and assessment
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600">ComplianceAI</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Regulated industries requiring automated compliance management
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600">SecurePipe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    DevOps teams securing ML pipelines and supply chains
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Deployment Options</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Cloud-Native</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    AI Sentinel, SecurePipe - Optimized for cloud deployment
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Hybrid</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Model Guard, ComplianceAI - Support both cloud and on-premise
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Integration Time</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Typical deployment: 1-2 weeks with professional services
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bundle Recommendation */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Recommended Bundle</h3>
            <p className="text-lg mb-6">
              Get comprehensive AI security with our Enterprise Suite
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Core Protection</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• AI Sentinel for real-time detection</li>
                  <li>• Model Guard for scanning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Advanced Security</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• SecurePipe for pipeline protection</li>
                  <li>• DataShield for privacy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Compliance & Response</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• ComplianceAI for regulations</li>
                  <li>• ResponseOrchestrator for incidents</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">$12,000/month</p>
                <p className="text-sm opacity-90">Save 25% with annual billing</p>
              </div>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}