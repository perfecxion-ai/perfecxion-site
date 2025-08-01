'use client'

import { useState, useCallback, useRef } from 'react'
import { 
  CompanyEnrichmentData, 
  EnrichmentProvider, 
  CompanySize, 
  Industry 
} from '@/lib/progressive-profiling'

interface UseCompanyEnrichmentReturn {
  enrichCompany: (domain: string) => Promise<CompanyEnrichmentData | null>
  enrichFromIP: (ipAddress?: string) => Promise<Partial<CompanyEnrichmentData> | null>
  isEnriching: boolean
  enrichmentCache: Map<string, CompanyEnrichmentData>
  clearCache: () => void
}

// Cache for enrichment data (in-memory for demo, could be localStorage/IndexedDB)
const enrichmentCache = new Map<string, CompanyEnrichmentData>()

// Mock enrichment data for common domains (in production, this would come from APIs)
const MOCK_COMPANY_DATA: Record<string, CompanyEnrichmentData> = {
  'google.com': {
    domain: 'google.com',
    name: 'Google',
    size: 'enterprise',
    industry: 'technology',
    revenue: '$282.8B',
    employees: 174014,
    techStack: ['React', 'Angular', 'Go', 'Python', 'Kubernetes'],
    socialProfiles: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/google' },
      { platform: 'Twitter', url: 'https://twitter.com/google' }
    ],
    location: {
      country: 'United States',
      region: 'California',
      city: 'Mountain View',
      timezone: 'America/Los_Angeles'
    }
  },
  'microsoft.com': {
    domain: 'microsoft.com',
    name: 'Microsoft',
    size: 'enterprise',
    industry: 'technology',
    revenue: '$211.9B',
    employees: 221000,
    techStack: ['Azure', '.NET', 'TypeScript', 'C#', 'React'],
    socialProfiles: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/microsoft' }
    ],
    location: {
      country: 'United States',
      region: 'Washington',
      city: 'Redmond',
      timezone: 'America/Los_Angeles'
    }
  },
  'amazon.com': {
    domain: 'amazon.com',
    name: 'Amazon',
    size: 'enterprise',
    industry: 'retail',
    revenue: '$513.9B',
    employees: 1608000,
    techStack: ['AWS', 'Java', 'Python', 'React', 'DynamoDB'],
    socialProfiles: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/amazon' }
    ],
    location: {
      country: 'United States',
      region: 'Washington',
      city: 'Seattle',
      timezone: 'America/Los_Angeles'
    }
  }
}

export function useCompanyEnrichment(
  providers: EnrichmentProvider[] = [
    { name: 'clearbit', enabled: true, priority: 1 },
    { name: 'builtwith', enabled: true, priority: 2 }
  ]
): UseCompanyEnrichmentReturn {
  const [isEnriching, setIsEnriching] = useState(false)
  const abortController = useRef<AbortController | null>(null)

  // Enrich company data from domain
  const enrichCompany = useCallback(async (domain: string): Promise<CompanyEnrichmentData | null> => {
    if (!domain) return null
    
    // Check cache first
    const cached = enrichmentCache.get(domain)
    if (cached) return cached

    setIsEnriching(true)
    abortController.current = new AbortController()

    try {
      // In production, this would call actual enrichment APIs
      const enrichmentData = await enrichFromMultipleSources(domain, providers, abortController.current.signal)
      
      if (enrichmentData) {
        enrichmentCache.set(domain, enrichmentData)
      }
      
      return enrichmentData
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Enrichment aborted')
      } else {
        console.error('Company enrichment failed:', error)
      }
      return null
    } finally {
      setIsEnriching(false)
      abortController.current = null
    }
  }, [providers])

  // Enrich from IP address (for anonymous visitors)
  const enrichFromIP = useCallback(async (ipAddress?: string): Promise<Partial<CompanyEnrichmentData> | null> => {
    if (!ipAddress) {
      // Try to get visitor's IP
      try {
        const response = await fetch('/api/visitor-ip')
        const data = await response.json()
        ipAddress = data.ip
      } catch (error) {
        console.warn('Could not get visitor IP:', error)
        return null
      }
    }

    try {
      // In production, use IP geolocation services like MaxMind or IPinfo
      const geoData = await fetch(`/api/ip-enrichment?ip=${ipAddress}`)
      const result = await geoData.json()
      
      return {
        location: {
          country: result.country,
          region: result.region,
          city: result.city,
          timezone: result.timezone
        }
      }
    } catch (error) {
      console.error('IP enrichment failed:', error)
      return null
    }
  }, [])

  // Clear enrichment cache
  const clearCache = useCallback(() => {
    enrichmentCache.clear()
  }, [])

  return {
    enrichCompany,
    enrichFromIP,
    isEnriching,
    enrichmentCache,
    clearCache
  }
}

// Helper function to enrich from multiple sources
async function enrichFromMultipleSources(
  domain: string, 
  providers: EnrichmentProvider[],
  signal: AbortSignal
): Promise<CompanyEnrichmentData | null> {
  
  // Check mock data first (for demo purposes)
  if (MOCK_COMPANY_DATA[domain]) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    return MOCK_COMPANY_DATA[domain]
  }

  // Try each provider in priority order
  const enabledProviders = providers
    .filter(p => p.enabled)
    .sort((a, b) => a.priority - b.priority)

  for (const provider of enabledProviders) {
    try {
      const data = await enrichFromProvider(domain, provider, signal)
      if (data) return data
    } catch (error) {
      console.warn(`Enrichment failed for provider ${provider.name}:`, error)
      continue
    }
  }

  // Fallback: basic domain parsing
  return enrichFromDomain(domain)
}

// Enrich from specific provider
async function enrichFromProvider(
  domain: string,
  provider: EnrichmentProvider,
  signal: AbortSignal
): Promise<CompanyEnrichmentData | null> {
  
  switch (provider.name) {
    case 'clearbit':
      return enrichFromClearbit(domain, provider.apiKey, signal)
    case 'zoominfo':
      return enrichFromZoomInfo(domain, provider.apiKey, signal)
    case 'apollo':
      return enrichFromApollo(domain, provider.apiKey, signal)
    case 'builtwith':
      return enrichFromBuiltWith(domain, provider.apiKey, signal)
    default:
      return null
  }
}

// Clearbit enrichment (mock implementation)
async function enrichFromClearbit(
  domain: string, 
  apiKey?: string, 
  signal?: AbortSignal
): Promise<CompanyEnrichmentData | null> {
  if (!apiKey) return null

  try {
    // In production: const response = await fetch(`https://company.clearbit.com/v2/companies/find?domain=${domain}`, {
    const response = await fetch(`/api/enrichment/clearbit?domain=${domain}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      signal
    })

    if (!response.ok) return null
    
    const data = await response.json()
    
    return mapClearbitData(data)
  } catch (error) {
    console.error('Clearbit enrichment error:', error)
    return null
  }
}

// Other provider implementations (mock)
async function enrichFromZoomInfo(domain: string, apiKey?: string, signal?: AbortSignal): Promise<CompanyEnrichmentData | null> {
  // Mock implementation
  return null
}

async function enrichFromApollo(domain: string, apiKey?: string, signal?: AbortSignal): Promise<CompanyEnrichmentData | null> {
  // Mock implementation  
  return null
}

async function enrichFromBuiltWith(domain: string, apiKey?: string, signal?: AbortSignal): Promise<CompanyEnrichmentData | null> {
  // Mock implementation for tech stack detection
  const commonTechStacks: Record<string, string[]> = {
    'shopify.com': ['Shopify', 'React', 'Ruby', 'GraphQL'],
    'wordpress.com': ['WordPress', 'PHP', 'MySQL', 'jQuery'],
    'squarespace.com': ['Squarespace', 'React', 'Node.js'],
    'wix.com': ['Wix', 'React', 'Angular', 'Node.js']
  }

  const techStack = commonTechStacks[domain] || ['Unknown']
  
  return {
    domain,
    name: domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1),
    size: 'medium',
    industry: 'technology',
    techStack
  } as CompanyEnrichmentData
}

// Fallback enrichment from domain analysis
function enrichFromDomain(domain: string): CompanyEnrichmentData {
  const companyName = domain.split('.')[0]
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())

  // Basic size estimation based on domain patterns
  let size: CompanySize = 'medium'
  if (['google', 'microsoft', 'amazon', 'apple', 'facebook', 'netflix'].some(big => domain.includes(big))) {
    size = 'enterprise'
  } else if (domain.includes('startup') || domain.includes('io')) {
    size = 'startup'
  }

  // Basic industry detection from domain
  let industry: Industry = 'other'
  if (domain.includes('tech') || domain.includes('software') || domain.includes('app')) {
    industry = 'technology'
  } else if (domain.includes('health') || domain.includes('med')) {
    industry = 'healthcare'
  } else if (domain.includes('bank') || domain.includes('finance')) {
    industry = 'financial'
  }

  return {
    domain,
    name: companyName,
    size,
    industry,
    techStack: [],
    socialProfiles: [],
    location: {
      country: 'Unknown',
      timezone: 'UTC'
    }
  }
}

// Map Clearbit response to our data structure
function mapClearbitData(clearbitData: any): CompanyEnrichmentData {
  return {
    domain: clearbitData.domain,
    name: clearbitData.name,
    size: mapCompanySize(clearbitData.metrics?.employees),
    industry: mapIndustry(clearbitData.category?.industry),
    revenue: clearbitData.metrics?.annualRevenue ? `$${clearbitData.metrics.annualRevenue}` : undefined,
    employees: clearbitData.metrics?.employees,
    techStack: clearbitData.tech || [],
    socialProfiles: [
      clearbitData.linkedin && { platform: 'LinkedIn', url: clearbitData.linkedin.handle },
      clearbitData.twitter && { platform: 'Twitter', url: clearbitData.twitter.handle }
    ].filter(Boolean),
    location: {
      country: clearbitData.geo?.country,
      region: clearbitData.geo?.state,
      city: clearbitData.geo?.city,
      timezone: clearbitData.timeZone
    }
  }
}

// Helper functions to map external data to our enums
function mapCompanySize(employees?: number): CompanySize {
  if (!employees) return 'medium'
  if (employees < 11) return 'startup'
  if (employees < 51) return 'small'  
  if (employees < 201) return 'medium'
  if (employees < 1000) return 'large'
  return 'enterprise'
}

function mapIndustry(industryString?: string): Industry {
  if (!industryString) return 'other'
  
  const industry = industryString.toLowerCase()
  if (industry.includes('tech') || industry.includes('software')) return 'technology'
  if (industry.includes('health') || industry.includes('medical')) return 'healthcare'
  if (industry.includes('finance') || industry.includes('bank')) return 'financial'
  if (industry.includes('retail') || industry.includes('ecommerce')) return 'retail'
  if (industry.includes('manufacturing')) return 'manufacturing'
  if (industry.includes('education')) return 'education'
  if (industry.includes('government')) return 'government'
  if (industry.includes('consulting')) return 'consulting'
  if (industry.includes('media') || industry.includes('entertainment')) return 'media'
  
  return 'other'
}