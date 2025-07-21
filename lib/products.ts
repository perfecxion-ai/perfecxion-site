export interface Product {
  id: string
  name: string
  description: string
  features: string[]
  pricing: string
  category: string
  status: 'available' | 'beta' | 'coming-soon'
}

export const products: Product[] = [
  {
    id: 'perfecxion-red-t',
    name: 'perfecXion Red-T',
    description: 'Advanced red team testing platform for AI systems. Comprehensive adversarial testing to identify vulnerabilities before they become threats.',
    features: [
      'Automated red team attack simulations',
      'Multi-vector vulnerability scanning',
      'Comprehensive security reports',
      'CI/CD pipeline integration',
      'Custom attack scenario creation',
      'Real-time threat assessment'
    ],
    pricing: 'Enterprise',
    category: 'Red Team Testing',
    status: 'available'
  },
  {
    id: 'perfecxion-agent',
    name: 'perfecXion Agent',
    description: 'Real-time AI agent monitoring and behavioral analysis. Detect anomalies, security threats, and unauthorized activities across your AI ecosystem.',
    features: [
      'Real-time agent behavior monitoring',
      'Advanced anomaly detection',
      'Threat intelligence integration',
      'Custom alerting and notifications',
      'Multi-agent environment support',
      'Performance impact analysis'
    ],
    pricing: 'From $299/month',
    category: 'Agent Monitoring',
    status: 'available'
  },
  {
    id: 'perfecxion-browse',
    name: 'perfecXion Browse',
    description: 'Intelligent browser extension providing real-time AI safety checks, content analysis, and protection against AI-generated threats.',
    features: [
      'Real-time content analysis',
      'AI-generated content detection',
      'Phishing and malware protection',
      'Privacy protection controls',
      'Custom safety rule configuration',
      'Cross-browser compatibility'
    ],
    pricing: 'Free',
    category: 'Browser Security',
    status: 'beta'
  },
  {
    id: 'perfecxion-comply',
    name: 'perfecXion Comply',
    description: 'Automated compliance management for AI systems. Ensure adherence to industry standards, regulations, and internal policies.',
    features: [
      'Multi-framework compliance checking',
      'Automated policy validation',
      'Regulatory reporting automation',
      'Audit trail generation',
      'Risk assessment workflows',
      'Compliance dashboard analytics'
    ],
    pricing: 'From $199/month',
    category: 'Compliance Management',
    status: 'available'
  },
  {
    id: 'perfecxion-g-rails',
    name: 'perfecXion G-Rails',
    description: 'Advanced guardrail management system for AI safety. Monitor, validate, and optimize your AI safety mechanisms in real-time.',
    features: [
      'Guardrail effectiveness testing',
      'Safety mechanism validation',
      'Performance impact monitoring',
      'Continuous safety assessment',
      'Custom guardrail configuration',
      'Integration with ML pipelines'
    ],
    pricing: 'From $399/month',
    category: 'AI Safety & Guardrails',
    status: 'coming-soon'
  }
]

export function getProduct(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}
