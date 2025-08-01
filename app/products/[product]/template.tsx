'use client'

import { notFound } from 'next/navigation'
import { getProduct } from '@/lib/products'
import {
  ProductHero,
  TechnicalSpecs,
  ArchitectureDiagram,
  IntegrationGuide,
  FeatureMatrix,
  ImplementationTimeline,
  PricingInfo
} from '@/components/product'

interface ProductPageProps {
  params: {
    product: string
  }
}

export default function ProductPageTemplate({ params }: ProductPageProps) {
  const product = getProduct(params.product)
  
  if (!product) {
    notFound()
  }

  // Repository URLs based on product analysis
  const getRepositoryUrl = (productId: string) => {
    const repoMap: { [key: string]: string } = {
      'adapt-ai': 'https://github.com/perfecxion-ai/adapt-ai',
      'perfecxion-red-t': 'https://github.com/perfecxion-ai/red-t',
      'perfecxion-agent': 'https://github.com/perfecxion-ai/agent-scan',
      'safeai-guard': 'https://github.com/perfecxion-ai/browse-safe',
      'perfecxion-comply': 'https://github.com/perfecxion-ai/comply',
      'perfecxion-g-rails': 'https://github.com/perfecxion-ai/g-rails',
      'promptshield': 'https://github.com/perfecxion-ai/prompt-shield',
      'torscan': 'https://github.com/perfecxion-ai/TorScan'
    }
    return repoMap[productId]
  }

  // Additional integration examples based on repository analysis
  const getAdditionalExamples = (productId: string) => {
    const exampleMap: { [key: string]: any } = {
      'adapt-ai': {
        'go': {
          title: 'Go SDK',
          description: 'Native Go client for high-performance applications',
          installation: 'go get github.com/perfecxion-ai/adapt-ai-go',
          code: `package main

import (
    "context"
    "fmt"
    "github.com/perfecxion-ai/adapt-ai-go"
)

func main() {
    client := adaptai.NewClient("your-api-key")
    
    result, err := client.Attack.GradientOptimize(context.Background(), &adaptai.AttackRequest{
        Target: "https://api.example.com/chat",
        Objective: "test_jailbreak",
        Iterations: 100,
    })
    
    if err != nil {
        panic(err)
    }
    
    fmt.Printf("Success rate: %.2f%%\\n", result.SuccessRate)
}`,
          documentation: 'https://docs.perfecxion.ai/adapt-ai/go-sdk'
        }
      },
      'promptshield': {
        'php': {
          title: 'PHP SDK',
          description: 'PHP library for Laravel and other frameworks',
          installation: 'composer require perfecxion/prompt-shield',
          code: `<?php
use Perfecxion\\PromptShield\\Client;

$shield = new Client(['api_key' => 'your-api-key']);

$result = $shield->detect([
    'text' => 'User input to analyze'
]);

if ($result['is_injection']) {
    echo "Threat detected! Confidence: " . $result['confidence'];
} else {
    echo "Input is safe to process";
}`,
          documentation: 'https://docs.perfecxion.ai/prompt-shield/php-sdk'
        }
      }
    }
    return exampleMap[productId]
  }

  // Additional technical specifications based on product analysis
  const getAdditionalSpecs = (productId: string) => {
    const specsMap: { [key: string]: any } = {
      'adapt-ai': {
        'maxAttackVectors': {
          value: '50+',
          description: 'Comprehensive attack vector coverage',
          category: 'Security'
        },
        'mlModels': {
          value: '10+',
          description: 'Machine learning models for attack optimization',
          category: 'AI'
        },
        'supportedPlatforms': {
          value: '15+',
          description: 'AI platforms and model providers supported',
          category: 'Integration'
        }
      },
      'promptshield': {
        'detectionLayers': {
          value: '3',
          description: 'Multi-layered detection system',
          category: 'Security'
        },
        'falsePositiveRate': {
          value: '<2%',
          description: 'Industry-leading accuracy',
          category: 'Performance'
        },
        'supportedLanguages': {
          value: '50+',
          description: 'Natural language detection coverage',
          category: 'Localization'
        }
      }
    }
    return specsMap[productId]
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ProductHero
        product={product}
        repositoryUrl={getRepositoryUrl(product.id)}
        demoUrl={product.status === 'available' ? `/products/${product.id}/demo` : undefined}
        documentationUrl={`/docs/${product.id}`}
      />

      {/* Technical Specifications */}
      <TechnicalSpecs
        product={product}
        additionalSpecs={getAdditionalSpecs(product.id)}
      />

      {/* Architecture Diagram */}
      <ArchitectureDiagram product={product} />

      {/* Feature Matrix & Comparison */}
      <FeatureMatrix 
        product={product}
        showPricing={true}
      />

      {/* Integration Guide */}
      <IntegrationGuide
        product={product}
        additionalExamples={getAdditionalExamples(product.id)}
      />

      {/* Implementation Timeline */}
      <ImplementationTimeline product={product} />

      {/* Pricing Information */}
      <PricingInfo product={product} />
    </div>
  )
}

// Export metadata for Next.js App Router
export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProduct(params.product)
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.'
    }
  }

  return {
    title: `${product.name} - ${product.category} | perfecXion.ai`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      'AI Security',
      'perfecXion.ai',
      ...product.features.map(f => f.split(' - ')[0])
    ].join(', '),
    openGraph: {
      title: `${product.name} - Advanced ${product.category}`,
      description: product.description,
      type: 'website',
      url: `https://perfecxion.ai/products/${product.id}`,
      images: [
        {
          url: `/images/products/${product.id}-og.png`,
          width: 1200,
          height: 630,
          alt: `${product.name} - ${product.category}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - Advanced ${product.category}`,
      description: product.description,
      images: [`/images/products/${product.id}-twitter.png`]
    }
  }
}