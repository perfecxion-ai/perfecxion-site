import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Clock, 
  Zap, 
  Shield, 
  Timer, 
  Database, 
  Server, 
  Globe, 
  Lock,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react"
import { Product } from "@/lib/products"

interface TechnicalSpecsProps {
  product: Product
  additionalSpecs?: {
    [key: string]: {
      value: string
      description?: string
      category?: string
    }
  }
}

export function TechnicalSpecs({ product, additionalSpecs }: TechnicalSpecsProps) {
  const getIconForSpec = (key: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      responseTime: <Clock className="h-5 w-5" />,
      throughput: <Zap className="h-5 w-5" />,
      availability: <Shield className="h-5 w-5" />,
      latency: <Timer className="h-5 w-5" />,
      storage: <Database className="h-5 w-5" />,
      scalability: <Server className="h-5 w-5" />,
      geography: <Globe className="h-5 w-5" />,
      security: <Lock className="h-5 w-5" />
    }
    return iconMap[key] || <Info className="h-5 w-5" />
  }

  const getStatusIcon = (value: string) => {
    if (value.includes('99.9%') || value.includes('enterprise') || value.includes('real-time')) {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    }
    if (value.includes('beta') || value.includes('limited')) {
      return <AlertCircle className="h-4 w-4 text-yellow-500" />
    }
    return null
  }

  const specs = product.technicalSpecs
  if (!specs && !additionalSpecs) return null

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Detailed performance metrics and technical capabilities
            </p>
          </div>

          {/* Core Performance Metrics */}
          {specs && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-blue-500" />
                  Core Performance Metrics
                </CardTitle>
                <CardDescription>
                  Key performance indicators and SLA commitments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(specs).map(([key, value]) => (
                    <div 
                      key={key} 
                      className="flex flex-col p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          {getIconForSpec(key)}
                          <span className="text-sm font-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        </div>
                        {getStatusIcon(value)}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Architecture Specifications */}
          {product.architecture && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-6 w-6 text-purple-500" />
                  Architecture Overview
                </CardTitle>
                <CardDescription>
                  System architecture and component specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {product.architecture.layers.map((layer, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="font-mono">
                          Layer {index + 1}
                        </Badge>
                        <h3 className="text-lg font-semibold">{layer.name}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {layer.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {layer.detects.map((capability, capIndex) => (
                          <Badge 
                            key={capIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {capability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Additional Specifications */}
          {additionalSpecs && (
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(additionalSpecs).reduce((acc, [key, spec]) => {
                const category = spec.category || 'General'
                if (!acc[category]) acc[category] = []
                acc[category].push({ key, ...spec })
                return acc
              }, {} as { [category: string]: Array<{ key: string; value: string; description?: string }> }).map(([category, categorySpecs]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {getIconForSpec(category.toLowerCase())}
                      {category} Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {categorySpecs.map((spec, index) => (
                        <div key={spec.key}>
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium capitalize">
                              {spec.key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                              {spec.value}
                            </span>
                          </div>
                          {spec.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {spec.description}
                            </p>
                          )}
                          {index < categorySpecs.length - 1 && (
                            <Separator className="mt-4" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Compliance & Security */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-500" />
                Security & Compliance
              </CardTitle>
              <CardDescription>
                Security standards and compliance certifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">SOC 2 Type II</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enterprise security controls
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">GDPR Compliant</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data privacy protection
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Enterprise SLA</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    99.9% uptime guarantee
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}