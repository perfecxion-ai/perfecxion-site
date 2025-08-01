import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Check, 
  X, 
  Circle,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Building,
  Crown,
  Sparkles
} from "lucide-react"
import { Product, products } from "@/lib/products"

interface FeatureMatrixProps {
  product: Product
  compareWith?: string[] // Product IDs to compare with
  showPricing?: boolean
}

export function FeatureMatrix({ product, compareWith, showPricing = true }: FeatureMatrixProps) {
  // Get comparison products
  const comparisonProducts = compareWith 
    ? products.filter(p => compareWith.includes(p.id))
    : products.filter(p => p.category === product.category && p.id !== product.id)

  // Define feature categories based on product analysis
  const getFeatureCategories = () => {
    const categories: { [key: string]: string[] } = {
      'Core Features': [],
      'Security & Compliance': [
        'SOC 2 Type II Compliance',
        'GDPR Compliance',
        'Enterprise SSO',
        'Audit Logging',
        'Data Encryption',
        'API Security'
      ],
      'Performance': [
        'Real-time Processing',
        'Batch Processing',
        'High Availability (99.9%)',
        'Global CDN',
        'Auto Scaling',
        'Load Balancing'
      ],
      'Integration': [
        'REST API',
        'Python SDK',
        'JavaScript SDK',
        'Webhooks',
        'CLI Tool',
        'Docker Support'
      ],
      'Enterprise': [
        'Multi-tenant Architecture',
        'Role-based Access Control',
        'Custom Branding',
        'Dedicated Support',
        'SLA Guarantees',
        'Professional Services'
      ]
    }

    // Extract core features from product features
    categories['Core Features'] = product.features.map(feature => 
      feature.split(' - ')[0] // Take the main feature name before description
    )

    return categories
  }

  const featureCategories = getFeatureCategories()

  // Mock pricing tiers (replace with actual pricing data)
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: ['Basic features', 'Email support', '10,000 requests/month']
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'For growing businesses',
      features: ['All starter features', 'Priority support', '100,000 requests/month', 'Advanced analytics'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['All professional features', 'Dedicated support', 'Unlimited requests', 'Custom integrations']
    }
  ]

  const FeatureIcon = ({ available, partial }: { available: boolean; partial?: boolean }) => {
    if (partial) {
      return <Circle className="h-4 w-4 text-yellow-500 fill-yellow-100" />
    }
    return available 
      ? <Check className="h-4 w-4 text-green-500" />
      : <X className="h-4 w-4 text-gray-400" />
  }

  const ComparisonTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 font-medium">Features</th>
            <th className="text-center p-4">
              <div className="flex flex-col items-center">
                <Badge className="mb-2 bg-purple-600">{product.name}</Badge>
                <div className="text-xs text-gray-500">Current Product</div>
              </div>
            </th>
            {comparisonProducts.slice(0, 3).map((compProduct) => (
              <th key={compProduct.id} className="text-center p-4">
                <div className="flex flex-col items-center">
                  <Badge variant="outline" className="mb-2">{compProduct.name}</Badge>
                  <div className="text-xs text-gray-500">{compProduct.category}</div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(featureCategories).map(([category, features]) => (
            <>
              <tr key={category} className="bg-gray-50 dark:bg-gray-900">
                <td colSpan={4} className="p-4 font-semibold text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  {category}
                </td>
              </tr>
              {features.map((feature, index) => (
                <tr key={`${category}-${index}`} className="border-b hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td className="p-4">{feature}</td>
                  <td className="p-4 text-center">
                    <FeatureIcon available={true} />
                  </td>
                  {comparisonProducts.slice(0, 3).map((compProduct) => (
                    <td key={compProduct.id} className="p-4 text-center">
                      <FeatureIcon 
                        available={Math.random() > 0.3} // Mock availability
                        partial={Math.random() > 0.8}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )

  const PricingComparison = () => (
    <div className="grid md:grid-cols-3 gap-6">
      {pricingTiers.map((tier, index) => (
        <Card key={tier.name} className={`relative ${tier.popular ? 'border-purple-500 shadow-lg' : ''}`}>
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-purple-600 text-white px-4 py-1">
                <Star className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            </div>
          )}
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{tier.name}</CardTitle>
            <div className="text-3xl font-bold">
              {tier.price}
              <span className="text-sm font-normal text-gray-500">{tier.period}</span>
            </div>
            <CardDescription>{tier.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className={`w-full ${tier.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
              variant={tier.popular ? 'default' : 'outline'}
            >
              {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const CategoryComparison = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">How {product.name} Compares</h3>
        <p className="text-gray-600 dark:text-gray-400">
          See how we stack up against other solutions in the {product.category.toLowerCase()} space
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Features', score: 98, icon: Sparkles, color: 'text-purple-500' },
          { label: 'Performance', score: 95, icon: Zap, color: 'text-yellow-500' },
          { label: 'Security', score: 99, icon: Shield, color: 'text-green-500' },
          { label: 'Support', score: 97, icon: Users, color: 'text-blue-500' }
        ].map((metric) => (
          <Card key={metric.label} className="text-center">
            <CardContent className="pt-6">
              <metric.icon className={`h-8 w-8 ${metric.color} mx-auto mb-2`} />
              <div className="text-2xl font-bold mb-1">{metric.score}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ComparisonTable />
    </div>
  )

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Feature Matrix & Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Compare features, capabilities, and pricing to make an informed decision
            </p>
          </div>

          <Tabs defaultValue="comparison" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="comparison">Feature Comparison</TabsTrigger>
              {showPricing && <TabsTrigger value="pricing">Pricing</TabsTrigger>}
              <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
            </TabsList>

            <TabsContent value="comparison" className="mt-8">
              <CategoryComparison />
            </TabsContent>

            {showPricing && (
              <TabsContent value="pricing" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Simple, Transparent Pricing</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Choose the plan that fits your needs. All plans include core security features.
                    </p>
                  </div>
                  <PricingComparison />
                  <div className="text-center pt-8">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      All plans include 24/7 support, 99.9% uptime SLA, and enterprise-grade security
                    </p>
                    <Button variant="outline">
                      <Building className="mr-2 h-4 w-4" />
                      Request Enterprise Quote
                    </Button>
                  </div>
                </div>
              </TabsContent>
            )}

            <TabsContent value="capabilities" className="mt-8">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Core Capabilities</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Detailed breakdown of {product.name} capabilities and use cases
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        Security Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {product.features.filter(f => 
                          f.toLowerCase().includes('security') || 
                          f.toLowerCase().includes('protection') ||
                          f.toLowerCase().includes('detection')
                        ).map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-sm">
                                {feature.split(' - ')[0]}
                              </div>
                              {feature.includes(' - ') && (
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                  {feature.split(' - ')[1]}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-yellow-500" />
                        Performance Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {product.features.filter(f => 
                          f.toLowerCase().includes('real-time') || 
                          f.toLowerCase().includes('performance') ||
                          f.toLowerCase().includes('monitoring')
                        ).map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-sm">
                                {feature.split(' - ')[0]}
                              </div>
                              {feature.includes(' - ') && (
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                  {feature.split(' - ')[1]}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Use Cases */}
                {product.useCases && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-500" />
                        Use Cases
                      </CardTitle>
                      <CardDescription>
                        Common scenarios where {product.name} provides value
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {product.useCases.map((useCase, index) => (
                          <div key={index} className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
                            <h4 className="font-medium mb-2">{useCase}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Optimized for {useCase.toLowerCase()} scenarios
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}