import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ArrowRight,
  ArrowDown,
  Database,
  Server,
  Globe,
  Shield,
  Zap,
  Code,
  Monitor,
  Cloud,
  Lock,
  Users,
  BarChart3,
  Settings,
  CheckCircle
} from "lucide-react"
import { Product } from "@/lib/products"

interface ArchitectureDiagramProps {
  product: Product
  customDiagram?: React.ReactNode
}

export function ArchitectureDiagram({ product, customDiagram }: ArchitectureDiagramProps) {
  // Icon mapping for different component types
  const getComponentIcon = (type: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'api': <Globe className="h-6 w-6" />,
      'database': <Database className="h-6 w-6" />,
      'server': <Server className="h-6 w-6" />,
      'security': <Shield className="h-6 w-6" />,
      'processing': <Zap className="h-6 w-6" />,
      'frontend': <Monitor className="h-6 w-6" />,
      'auth': <Lock className="h-6 w-6" />,
      'analytics': <BarChart3 className="h-6 w-6" />,
      'management': <Settings className="h-6 w-6" />,
      'ml': <Code className="h-6 w-6" />,
      'cloud': <Cloud className="h-6 w-6" />,
      'users': <Users className="h-6 w-6" />
    }
    return iconMap[type.toLowerCase()] || <Server className="h-6 w-6" />
  }

  // Generate architecture diagram based on product type
  const generateArchitectureDiagram = () => {
    if (customDiagram) return customDiagram

    switch (product.category) {
      case 'AI Security Testing':
      case 'Red Team Testing':
        return <SecurityTestingArchitecture product={product} />
      case 'Prompt Security':
        return <PromptSecurityArchitecture product={product} />
      case 'Agent Monitoring':
        return <AgentMonitoringArchitecture product={product} />
      case 'Child Safety':
        return <BrowserExtensionArchitecture product={product} />
      case 'Compliance Management':
        return <ComplianceArchitecture product={product} />
      case 'Dark Web Intelligence':
        return <DarkWebArchitecture product={product} />
      case 'AI Safety & Guardrails':
        return <GuardrailArchitecture product={product} />
      default:
        return <GenericArchitecture product={product} />
    }
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              System Architecture
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive overview of {product.name} architecture and data flow
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Architecture Overview</TabsTrigger>
              <TabsTrigger value="components">Component Details</TabsTrigger>
              <TabsTrigger value="dataflow">Data Flow</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>System Architecture Diagram</CardTitle>
                  <CardDescription>
                    High-level architecture showing key components and their relationships
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {generateArchitectureDiagram()}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="components" className="mt-8">
              {product.architecture ? (
                <div className="space-y-6">
                  {product.architecture.layers.map((layer, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Badge variant="outline">{layer.name}</Badge>
                        </CardTitle>
                        <CardDescription>{layer.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {layer.detects.map((capability, capIndex) => (
                            <div key={capIndex} className="flex items-center gap-2 p-3 border rounded-lg">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <ComponentDetailsPlaceholder product={product} />
              )}
            </TabsContent>

            <TabsContent value="dataflow" className="mt-8">
              <DataFlowDiagram product={product} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

// Specialized architecture components
function SecurityTestingArchitecture({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <Users className="h-8 w-8 text-blue-600" />
          <span className="font-semibold">Security Researchers / Red Team</span>
        </div>
        <ArrowDown className="mx-auto mt-4 h-6 w-6 text-gray-400" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-950">
            <Globe className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">API Gateway</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Authentication, rate limiting, request routing
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950">
            <Code className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Attack Engine</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gradient attacks, pattern recognition, ML algorithms
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-orange-200 dark:border-orange-800 rounded-lg bg-orange-50 dark:bg-orange-950">
            <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Results analysis, reporting, insights
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <ArrowDown className="mx-auto h-6 w-6 text-gray-400" />
        <div className="inline-flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mt-4">
          <Shield className="h-8 w-8 text-gray-600" />
          <span className="font-semibold">Target AI Systems</span>
        </div>
      </div>
    </div>
  )
}

function PromptSecurityArchitecture({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <Monitor className="h-8 w-8 text-blue-600" />
          <span className="font-semibold">Client Application</span>
        </div>
        <ArrowDown className="mx-auto mt-4 h-6 w-6 text-gray-400" />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-950 text-center">
          <Zap className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <h4 className="font-semibold text-sm">Layer 1: Heuristic</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">Pattern matching</p>
        </div>
        <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-950 text-center">
          <Code className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <h4 className="font-semibold text-sm">Layer 2: AI Detection</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">LLM analysis</p>
        </div>
        <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950 text-center">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-semibold text-sm">Layer 3: Canary Tokens</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">Leak detection</p>
        </div>
      </div>

      <div className="text-center">
        <ArrowDown className="mx-auto h-6 w-6 text-gray-400" />
        <div className="inline-flex items-center gap-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg mt-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
          <span className="font-semibold">Detection Result</span>
        </div>
      </div>
    </div>
  )
}

function BrowserExtensionArchitecture({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-semibold text-center">Browser Extension</h3>
          <div className="space-y-3">
            <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950 text-center">
              <Monitor className="h-6 w-6 text-blue-600 mx-auto mb-1" />
              <span className="text-sm font-medium">Popup Interface</span>
            </div>
            <div className="p-3 border rounded-lg bg-purple-50 dark:bg-purple-950 text-center">
              <Settings className="h-6 w-6 text-purple-600 mx-auto mb-1" />
              <span className="text-sm font-medium">Background Service</span>
            </div>
            <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950 text-center">
              <Code className="h-6 w-6 text-green-600 mx-auto mb-1" />
              <span className="text-sm font-medium">Content Scripts</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-center">AI Platforms</h3>
          <div className="grid grid-cols-2 gap-2">
            {['ChatGPT', 'Claude', 'Gemini', 'Perplexity'].map((platform) => (
              <div key={platform} className="p-2 border rounded text-center text-sm">
                <Globe className="h-4 w-4 mx-auto mb-1" />
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function GenericArchitecture({ product }: { product: Product }) {
  return (
    <div className="text-center py-12">
      <div className="mb-8">
        <Server className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">{product.name} Architecture</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed architecture diagram coming soon
        </p>
      </div>
      <Button variant="outline">
        View Technical Documentation
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

function ComponentDetailsPlaceholder({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Component Details</CardTitle>
        <CardDescription>
          Detailed component specifications for {product.name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            Detailed component documentation is being prepared
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Missing architecture components
function AgentMonitoringArchitecture({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <Users className="h-8 w-8 text-blue-600" />
          <span className="font-semibold">AI Agents & Multi-Agent Systems</span>
        </div>
        <ArrowDown className="mx-auto mt-4 h-6 w-6 text-gray-400" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-950">
            <Monitor className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Real-time Monitoring</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Behavioral analysis and anomaly detection
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Security Controls</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Policy enforcement and access control
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-orange-200 dark:border-orange-800 rounded-lg bg-orange-50 dark:bg-orange-950">
            <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Performance metrics and insights
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ComplianceArchitecture({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <Shield className="h-8 w-8 text-blue-600" />
          <span className="font-semibold">AI Governance & Compliance</span>
        </div>
        <ArrowDown className="mx-auto mt-4 h-6 w-6 text-gray-400" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-950">
            <Database className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Asset Management</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI model discovery and cataloging
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Risk Assessment</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Automated compliance monitoring
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-950">
            <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Reporting</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Compliance reports and audit trails
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function DarkWebArchitecture({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <Globe className="h-8 w-8 text-gray-600" />
          <span className="font-semibold">Dark Web Intelligence Platform</span>
        </div>
        <ArrowDown className="mx-auto mt-4 h-6 w-6 text-gray-400" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="p-6 border-2 border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950">
            <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Tor Crawler</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Secure .onion site crawling
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg bg-yellow-50 dark:bg-yellow-950">
            <Database className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Elasticsearch</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full-text search and indexing
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-950">
            <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Threat Intel</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              MISP and OpenCTI integration
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function GuardrailArchitecture({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
          <Shield className="h-8 w-8 text-green-600" />
          <span className="font-semibold">AI Safety & Guardrails</span>
        </div>
        <ArrowDown className="mx-auto mt-4 h-6 w-6 text-gray-400" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Safety Testing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Comprehensive guardrail effectiveness testing
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-950">
            <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Monitoring</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Real-time safety mechanism validation
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-950">
            <Settings className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Configuration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Custom guardrail management
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function DataFlowDiagram({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Flow</CardTitle>
        <CardDescription>
          How data moves through the {product.name} system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            Data flow diagrams are being prepared
          </p>
        </div>
      </CardContent>
    </Card>
  )
}