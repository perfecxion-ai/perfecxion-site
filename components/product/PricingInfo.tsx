import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { 
  Check,
  X,
  Star,
  ArrowRight,
  Calculator,
  Building,
  Users,
  Zap,
  Shield,
  Phone,
  Mail,
  MessageCircle,
  Crown,
  Sparkles,
  Globe,
  Clock
} from "lucide-react"
import { Product } from "@/lib/products"
import { useState } from "react"

interface PricingInfoProps {
  product: Product
  customPricing?: PricingTier[]
}

interface PricingTier {
  id: string
  name: string
  price: number | 'custom'
  originalPrice?: number
  period: 'month' | 'year'
  description: string
  features: string[]
  limits: {
    [key: string]: string | number
  }
  support: string
  popular?: boolean
  enterprise?: boolean
}

export function PricingInfo({ product, customPricing }: PricingInfoProps) {
  const [isAnnual, setIsAnnual] = useState(false)

  // Generate pricing tiers based on product characteristics
  const generatePricingTiers = (): PricingTier[] => {
    const baseTiers: PricingTier[] = [
      {
        id: 'starter',
        name: 'Starter',
        price: 99,
        originalPrice: isAnnual ? 119 : undefined,
        period: isAnnual ? 'year' : 'month',
        description: 'Perfect for small teams and individual developers',
        features: [
          'Core security testing features',
          'Basic API access',
          'Email support',
          'Community access',
          'Standard documentation'
        ],
        limits: {
          'API Requests': '10,000/month',
          'Team Members': '3',
          'Projects': '5',
          'Storage': '1GB'
        },
        support: 'Email support (48hr response)'
      },
      {
        id: 'professional',
        name: 'Professional',
        price: isAnnual ? 2388 : 249,
        originalPrice: isAnnual ? 2988 : 299,
        period: isAnnual ? 'year' : 'month',
        description: 'Advanced features for growing teams and businesses',
        features: [
          'All Starter features',
          'Advanced security testing',
          'Premium API access',
          'Priority support',
          'Advanced analytics',
          'Custom integrations',
          'Webhook support'
        ],
        limits: {
          'API Requests': '100,000/month',
          'Team Members': '10',
          'Projects': 'Unlimited',
          'Storage': '10GB'
        },
        support: 'Priority support (24hr response)',
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'custom',
        period: 'month',
        description: 'Custom solutions for large organizations',
        features: [
          'All Professional features',
          'Unlimited API access',
          'Dedicated account manager',
          'SLA guarantees',
          'Custom development',
          'On-premise deployment',
          'White-label options',
          'Advanced compliance features'
        ],
        limits: {
          'API Requests': 'Unlimited',
          'Team Members': 'Unlimited',
          'Projects': 'Unlimited',
          'Storage': 'Unlimited'
        },
        support: 'Dedicated support (4hr response)',
        enterprise: true
      }
    ]

    // Customize pricing based on product type
    switch (product.category) {
      case 'AI Security Testing':
      case 'Red Team Testing':
        return baseTiers.map(tier => ({
          ...tier,
          price: tier.price === 'custom' ? 'custom' : (typeof tier.price === 'number' ? tier.price * 1.2 : tier.price),
          features: tier.id === 'starter' 
            ? [...tier.features, 'Basic attack scenarios', '10 test runs/month']
            : tier.id === 'professional'
            ? [...tier.features, 'Advanced attack scenarios', '100 test runs/month', 'Custom payloads']
            : [...tier.features, 'Unlimited test runs', 'Custom attack development']
        }))
      case 'Child Safety':
        return baseTiers.map(tier => ({
          ...tier,
          price: tier.price === 'custom' ? 'custom' : (typeof tier.price === 'number' ? tier.price * 0.6 : tier.price),
          features: tier.id === 'starter'
            ? ['Basic content filtering', 'Browser extension', 'Activity reports', 'Email support']
            : tier.id === 'professional'
            ? ['Advanced filtering', 'Real-time alerts', 'Family management', 'Priority support']
            : ['Enterprise family management', 'Custom filtering rules', 'Advanced analytics']
        }))
      default:
        return baseTiers
    }
  }

  const pricingTiers = customPricing || generatePricingTiers()

  const formatPrice = (price: number | 'custom', period: string) => {
    if (price === 'custom') return 'Custom'
    
    if (period === 'year') {
      return `$${Math.round(price / 12)}/mo`
    }
    return `$${price}/mo`
  }

  const PricingCard = ({ tier }: { tier: PricingTier }) => (
    <Card className={`relative ${tier.popular ? 'border-purple-500 shadow-xl scale-105' : ''} ${tier.enterprise ? 'border-gold-500' : ''}`}>
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-purple-600 text-white px-4 py-1">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}
      {tier.enterprise && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-amber-600 text-white px-4 py-1">
            <Crown className="w-3 h-3 mr-1" />
            Enterprise
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl">{tier.name}</CardTitle>
        <div className="text-4xl font-bold">
          {formatPrice(tier.price, tier.period)}
          {tier.originalPrice && typeof tier.price === 'number' && (
            <span className="text-lg text-gray-500 line-through ml-2">
              ${Math.round(tier.originalPrice / (tier.period === 'year' ? 12 : 1))}/mo
            </span>
          )}
        </div>
        {tier.period === 'year' && typeof tier.price === 'number' && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            ${tier.price} billed annually
          </div>
        )}
        <CardDescription className="mt-2">{tier.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {/* Features */}
          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <ul className="space-y-2">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Limits */}
          <div>
            <h4 className="font-semibold mb-3">Usage Limits</h4>
            <div className="space-y-2">
              {Object.entries(tier.limits).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{tier.support}</p>
          </div>

          {/* CTA Button */}
          <Button 
            className={`w-full ${
              tier.popular 
                ? 'bg-purple-600 hover:bg-purple-700' 
                : tier.enterprise 
                ? 'bg-amber-600 hover:bg-amber-700'
                : ''
            }`}
            variant={tier.popular || tier.enterprise ? 'default' : 'outline'}
          >
            {tier.price === 'custom' ? 'Contact Sales' : 'Get Started'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const ROICalculator = () => {
    const [teamSize, setTeamSize] = useState(10)
    const [securityIncidents, setSecurityIncidents] = useState(2)
    const [averageIncidentCost, setAverageIncidentCost] = useState(50000)

    const calculateROI = () => {
      const annualCost = 249 * 12 // Professional tier
      const preventedCosts = securityIncidents * averageIncidentCost * 0.8 // 80% prevention rate
      const timeSavings = teamSize * 40 * 50 // 40 hours saved per person per year at $50/hour
      const totalSavings = preventedCosts + timeSavings
      const roi = ((totalSavings - annualCost) / annualCost) * 100

      return {
        annualCost,
        totalSavings,
        roi: Math.round(roi),
        paybackMonths: Math.round(annualCost / (totalSavings / 12))
      }
    }

    const roiResults = calculateROI()

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            ROI Calculator
          </CardTitle>
          <CardDescription>
            Calculate the return on investment for {product.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Team Size</label>
                <input 
                  type="number" 
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Security Incidents/Year</label>
                <input 
                  type="number" 
                  value={securityIncidents}
                  onChange={(e) => setSecurityIncidents(Number(e.target.value))}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Average Incident Cost</label>
                <input 
                  type="number" 
                  value={averageIncidentCost}
                  onChange={(e) => setAverageIncidentCost(Number(e.target.value))}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {roiResults.roi}%
                </div>
                <div className="text-sm text-green-700 dark:text-green-300">
                  Annual ROI
                </div>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="text-xl font-bold text-blue-600">
                  ${roiResults.totalSavings.toLocaleString()}
                </div>
                <div className="text-sm text-blue-700 dark:text-blue-300">
                  Annual Savings
                </div>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <div className="text-xl font-bold text-purple-600">
                  {roiResults.paybackMonths} months
                </div>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  Payback Period
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Choose the plan that fits your needs. All plans include core security features.
            </p>
            
            {/* Annual/Monthly Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${!isAnnual ? 'font-semibold' : ''}`}>Monthly</span>
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-purple-600"
              />
              <span className={`text-sm ${isAnnual ? 'font-semibold' : ''}`}>
                Annual
                <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Save 20%</Badge>
              </span>
            </div>
          </div>

          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pricing">Pricing Plans</TabsTrigger>
              <TabsTrigger value="calculator">ROI Calculator</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="pricing" className="mt-8">
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {pricingTiers.map((tier) => (
                  <PricingCard key={tier.id} tier={tier} />
                ))}
              </div>

              {/* Additional Information */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  All plans include 14-day free trial • No setup fees • Cancel anytime
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    SOC 2 Compliant
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue-500" />
                    99.9% Uptime SLA
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple-500" />
                    24/7 Monitoring
                  </div>
                </div>
              </div>

              {/* Enterprise Contact */}
              <Card className="max-w-4xl mx-auto">
                <CardContent className="text-center py-8">
                  <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Need something custom?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Contact our enterprise team for custom pricing, volume discounts, and specialized features.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="outline">
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule Call
                    </Button>
                    <Button variant="outline">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Sales
                    </Button>
                    <Button variant="outline">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calculator" className="mt-8">
              <ROICalculator />
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <div className="max-w-4xl mx-auto space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          question: "Can I change plans at any time?",
                          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
                        },
                        {
                          question: "What happens if I exceed my usage limits?",
                          answer: "We'll notify you when you approach your limits. You can either upgrade your plan or purchase additional usage credits to avoid service interruption."
                        },
                        {
                          question: "Do you offer volume discounts?",
                          answer: "Yes, we offer volume discounts for large teams and enterprise customers. Contact our sales team for custom pricing."
                        },
                        {
                          question: "Is there a free trial?",
                          answer: "All plans include a 14-day free trial with full access to features. No credit card required to start."
                        },
                        {
                          question: "What payment methods do you accept?",
                          answer: "We accept all major credit cards, bank transfers, and can accommodate purchase orders for enterprise customers."
                        }
                      ].map((faq, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <h4 className="font-semibold mb-2">{faq.question}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}