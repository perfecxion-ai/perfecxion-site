import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Play } from "lucide-react"
import Link from "next/link"
import { Product } from "@/lib/products"

interface ProductHeroProps {
  product: Product
  repositoryUrl?: string
  demoUrl?: string
  documentationUrl?: string
}

export function ProductHero({ 
  product, 
  repositoryUrl, 
  demoUrl, 
  documentationUrl 
}: ProductHeroProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'beta':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'coming-soon':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available Now'
      case 'beta':
        return 'Beta Release'
      case 'coming-soon':
        return 'Coming Soon'
      default:
        return status
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category & Status */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge 
              variant="outline" 
              className="border-purple-300 text-purple-300 bg-purple-900/20"
            >
              {product.category}
            </Badge>
            <Badge className={getStatusColor(product.status)}>
              {getStatusText(product.status)}
            </Badge>
          </div>

          {/* Product Name */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {product.name}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Technical Specs Quick View */}
          {product.technicalSpecs && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-black/20 rounded-lg backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">
                  {product.technicalSpecs.responseTime}
                </div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {product.technicalSpecs.throughput}
                </div>
                <div className="text-sm text-gray-400">Throughput</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {product.technicalSpecs.availability}
                </div>
                <div className="text-sm text-gray-400">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">
                  {product.technicalSpecs.latency}
                </div>
                <div className="text-sm text-gray-400">Latency</div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {product.status === 'available' && (
              <>
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                  asChild
                >
                  <Link href={`/products/${product.id}/get-started`}>
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {demoUrl && (
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3"
                    asChild
                  >
                    <Link href={demoUrl} target="_blank">
                      <Play className="mr-2 h-5 w-5" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </>
            )}

            {product.status === 'beta' && (
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                asChild
              >
                <Link href={`/products/${product.id}/beta-access`}>
                  Request Beta Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}

            {product.status === 'coming-soon' && (
              <Button 
                size="lg" 
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3"
                asChild
              >
                <Link href={`/products/${product.id}/notify`}>
                  Notify Me When Available
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}

            {documentationUrl && (
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-3"
                asChild
              >
                <Link href={documentationUrl}>
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Documentation
                </Link>
              </Button>
            )}

            {repositoryUrl && (
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-gray-400 hover:text-white hover:bg-gray-800 px-6 py-3"
                asChild
              >
                <Link href={repositoryUrl} target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Enterprise Grade
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Open Source Available
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}