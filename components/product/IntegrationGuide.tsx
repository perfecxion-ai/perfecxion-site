import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { 
  Copy,
  ExternalLink,
  Code,
  Terminal,
  Globe,
  Download,
  CheckCircle,
  ArrowRight,
  Book,
  Zap
} from "lucide-react"
import { Product } from "@/lib/products"
import { useState } from "react"

interface IntegrationGuideProps {
  product: Product
  additionalExamples?: {
    [language: string]: {
      title: string
      description: string
      code: string
      installation?: string
      documentation?: string
    }
  }
}

export function IntegrationGuide({ product, additionalExamples }: IntegrationGuideProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const CodeBlock = ({ 
    code, 
    language, 
    id, 
    title 
  }: { 
    code: string
    language: string
    id: string
    title?: string
  }) => (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium">{title}</h4>
          <Badge variant="secondary" className="text-xs">
            {language}
          </Badge>
        </div>
      )}
      <div className="relative bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 p-0 text-gray-400 hover:text-white"
          onClick={() => copyToClipboard(code, id)}
        >
          {copiedCode === id ? (
            <CheckCircle className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        <pre className="text-sm text-gray-100 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )

  const QuickStartGuide = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="text-center p-4 border rounded-lg">
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-blue-600 font-bold">1</span>
          </div>
          <h3 className="font-semibold mb-1">Get API Key</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sign up and obtain your API credentials
          </p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-green-600 font-bold">2</span>
          </div>
          <h3 className="font-semibold mb-1">Install SDK</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Choose your preferred language and install
          </p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-purple-600 font-bold">3</span>
          </div>
          <h3 className="font-semibold mb-1">Start Testing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Run your first security test
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Quick Start
          </CardTitle>
          <CardDescription>
            Get up and running with {product.name} in under 5 minutes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Installation</h4>
              <CodeBlock
                code={`# Using npm
npm install @perfecxion/${product.id}-sdk

# Using pip
pip install perfecxion-${product.id}

# Using curl (Direct API)
curl -H "X-API-Key: your-key" https://api.perfecxion.ai/v1/health`}
                language="bash"
                id="installation"
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">2. Basic Usage</h4>
              <CodeBlock
                code={`// JavaScript/TypeScript
import { ${product.name.replace(/[^a-zA-Z]/g, '')} } from '@perfecxion/${product.id}-sdk';

const client = new ${product.name.replace(/[^a-zA-Z]/g, '')}({
  apiKey: process.env.PERFECXION_API_KEY
});

const result = await client.scan({
  target: 'your-ai-endpoint',
  options: { deep: true }
});

console.log('Security score:', result.score);`}
                language="javascript"
                id="basic-usage"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integration Guide
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get started with {product.name} using your preferred programming language
            </p>
          </div>

          <Tabs defaultValue="quickstart" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
              <TabsTrigger value="examples">Code Examples</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="quickstart" className="mt-8">
              <QuickStartGuide />
            </TabsContent>

            <TabsContent value="examples" className="mt-8">
              <div className="space-y-8">
                {product.integrationExamples && (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {Object.entries(product.integrationExamples).map(([lang, code]) => (
                      <Card key={lang}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 capitalize">
                            <Code className="h-5 w-5" />
                            {lang === 'api' ? 'REST API' : lang}
                          </CardTitle>
                          <CardDescription>
                            {lang === 'python' && 'Python SDK with async/await support'}
                            {lang === 'javascript' && 'JavaScript/TypeScript SDK for Node.js'}
                            {lang === 'api' && 'Direct REST API integration'}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <CodeBlock
                            code={code}
                            language={lang === 'api' ? 'bash' : lang}
                            id={`${lang}-example`}
                          />
                          <div className="mt-4 flex gap-2">
                            <Button size="sm" variant="outline">
                              <Book className="mr-2 h-4 w-4" />
                              Documentation
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              SDK
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {additionalExamples && (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {Object.entries(additionalExamples).map(([lang, example]) => (
                      <Card key={lang}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Code className="h-5 w-5" />
                            {example.title}
                          </CardTitle>
                          <CardDescription>{example.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          {example.installation && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold mb-2">Installation</h4>
                              <CodeBlock
                                code={example.installation}
                                language="bash"
                                id={`${lang}-install`}
                              />
                            </div>
                          )}
                          <CodeBlock
                            code={example.code}
                            language={lang}
                            id={`${lang}-additional`}
                            title="Example Implementation"
                          />
                          {example.documentation && (
                            <div className="mt-4">
                              <Button size="sm" variant="outline" asChild>
                                <a href={example.documentation} target="_blank">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  View Documentation
                                </a>
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="frameworks" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Next.js', icon: '⚡', description: 'React framework integration' },
                  { name: 'Django', icon: '🐍', description: 'Python web framework' },
                  { name: 'Express.js', icon: '🚀', description: 'Node.js backend framework' },
                  { name: 'FastAPI', icon: '⚡', description: 'Modern Python API framework' },
                  { name: 'Spring Boot', icon: '☕', description: 'Java enterprise framework' },
                  { name: 'Rails', icon: '💎', description: 'Ruby web framework' }
                ].map((framework) => (
                  <Card key={framework.name} className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-3">{framework.icon}</div>
                      <h3 className="font-semibold mb-2">{framework.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {framework.description}
                      </p>
                      <Button size="sm" variant="outline">
                        View Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise Configuration</CardTitle>
                    <CardDescription>
                      Advanced configuration options for enterprise deployments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={`# Enterprise configuration example
import os
from perfecxion import ${product.name.replace(/[^a-zA-Z]/g, '')}Config

config = ${product.name.replace(/[^a-zA-Z]/g, '')}Config(
    api_key=os.getenv('PERFECXION_API_KEY'),
    base_url='https://enterprise.perfecxion.ai',
    timeout=30,
    retry_attempts=3,
    enable_logging=True,
    log_level='INFO',
    custom_headers={
        'X-Organization-ID': 'your-org-id',
        'X-Environment': 'production'
    }
)

client = ${product.name.replace(/[^a-zA-Z]/g, '')}(config=config)`}
                      language="python"
                      id="enterprise-config"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Webhook Configuration</CardTitle>
                    <CardDescription>
                      Set up webhooks for real-time notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={`// Webhook endpoint example
app.post('/webhooks/perfecxion', (req, res) => {
  const { event, data } = req.body;
  
  switch (event) {
    case 'scan.completed':
      console.log('Scan completed:', data.scanId);
      // Process results
      break;
    case 'threat.detected':
      console.log('Threat detected:', data.threatLevel);
      // Handle threat
      break;
  }
  
  res.status(200).json({ received: true });
});`}
                      language="javascript"
                      id="webhook-config"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Batch Processing</CardTitle>
                    <CardDescription>
                      Process multiple requests efficiently
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={`# Batch processing example
import asyncio
from perfecxion import ${product.name.replace(/[^a-zA-Z]/g, '')}

async def batch_scan(targets):
    client = ${product.name.replace(/[^a-zA-Z]/g, '')}()
    
    # Create batch request
    batch = await client.batch.create(
        targets=targets,
        callback_url='https://your-app.com/webhook'
    )
    
    # Monitor progress
    while not batch.is_complete:
        await asyncio.sleep(5)
        batch = await client.batch.get(batch.id)
        print(f"Progress: {batch.progress}%")
    
    return batch.results

# Usage
targets = ['target1.com', 'target2.com', 'target3.com']
results = asyncio.run(batch_scan(targets))`}
                      language="python"
                      id="batch-processing"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Additional Resources */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Book className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">API Documentation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Complete API reference with examples
                </p>
                <Button variant="outline" size="sm">
                  View Docs
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Terminal className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">CLI Tool</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Command-line interface for automation
                </p>
                <Button variant="outline" size="sm">
                  Install CLI
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Globe className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Join our developer community
                </p>
                <Button variant="outline" size="sm">
                  Join Discord
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}