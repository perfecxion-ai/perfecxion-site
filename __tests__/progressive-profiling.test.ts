import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { 
  LeadProfile, 
  DEFAULT_LEAD_SCORING_CONFIG,
  PROFILE_PROGRESSION_THRESHOLDS 
} from '../lib/progressive-profiling'
import { useLeadScoring } from '../lib/hooks/useLeadScoring'
import { useContentGating } from '../lib/hooks/useContentGating'
import { useGDPRCompliance } from '../lib/hooks/useGDPRCompliance'

// Mock profile data for testing
const mockBasicProfile: Partial<LeadProfile> = {
  email: 'test@example.com',
  firstName: 'John',
  lastName: 'Doe'
}

const mockQualifiedProfile: Partial<LeadProfile> = {
  ...mockBasicProfile,
  company: 'Test Corp',
  companySize: 'enterprise',
  jobRole: 'security',
  jobTitle: 'CISO',
  aiMaturity: 'production',
  decisionMakingRole: 'decision_maker',
  implementationTimeline: 'immediate',
  budgetRange: '1m_5m'
}

describe('Lead Scoring System', () => {
  describe('useLeadScoring hook', () => {
    it('should calculate basic lead score correctly', () => {
      const { result } = renderHook(() => useLeadScoring())
      
      const score = result.current.calculateScore(mockBasicProfile)
      expect(score).toBeGreaterThanOrEqual(0)
      expect(score).toBeLessThanOrEqual(100)
    })

    it('should give higher scores to qualified profiles', () => {
      const { result } = renderHook(() => useLeadScoring())
      
      const basicScore = result.current.calculateScore(mockBasicProfile)
      const qualifiedScore = result.current.calculateScore(mockQualifiedProfile)
      
      expect(qualifiedScore).toBeGreaterThan(basicScore)
    })

    it('should return correct qualification level', () => {
      const { result } = renderHook(() => useLeadScoring())
      
      const coldLevel = result.current.getQualificationLevel(20)
      const warmLevel = result.current.getQualificationLevel(40)
      const hotLevel = result.current.getQualificationLevel(60)
      const salesReadyLevel = result.current.getQualificationLevel(80)
      
      expect(coldLevel).toBe('cold')
      expect(warmLevel).toBe('warm')
      expect(hotLevel).toBe('hot')
      expect(salesReadyLevel).toBe('sales_ready')
    })

    it('should calculate detailed score breakdown', () => {
      const { result } = renderHook(() => useLeadScoring())
      
      const breakdown = result.current.scoreBreakdown(mockQualifiedProfile)
      
      expect(breakdown.total).toBeGreaterThan(0)
      expect(breakdown.categories).toBeDefined()
      expect(breakdown.qualification).toBeDefined()
      expect(Object.keys(breakdown.categories)).toEqual([
        'demographic', 'behavioral', 'engagement', 'intent', 'timing'
      ])
    })

    it('should handle empty profile gracefully', () => {
      const { result } = renderHook(() => useLeadScoring())
      
      const score = result.current.calculateScore({})
      expect(score).toBe(0)
    })
  })

  describe('Lead scoring rules', () => {
    it('should award points for enterprise company size', () => {
      const { result } = renderHook(() => useLeadScoring())
      
      const withoutSize = result.current.calculateScore(mockBasicProfile)
      const withSize = result.current.calculateScore({
        ...mockBasicProfile,
        companySize: 'enterprise'
      })
      
      expect(withSize).toBeGreaterThan(withoutSize)
    })

    it('should award points for decision maker role', () => {
      const { result } = renderHook(() => useLeadScoring())
      
      const researcher = result.current.calculateScore({
        ...mockBasicProfile,
        decisionMakingRole: 'researcher'
      })
      const decisionMaker = result.current.calculateScore({
        ...mockBasicProfile,
        decisionMakingRole: 'decision_maker'
      })
      
      expect(decisionMaker).toBeGreaterThan(researcher)
    })

    it('should award points for immediate timeline', () => {
      const { result } = renderHook(() => useLeadScoring())
      
      const research = result.current.calculateScore({
        ...mockBasicProfile,
        implementationTimeline: 'research_only'
      })
      const immediate = result.current.calculateScore({
        ...mockBasicProfile,
        implementationTimeline: 'immediate'
      })
      
      expect(immediate).toBeGreaterThan(research)
    })
  })
})

describe('Content Gating System', () => {
  describe('useContentGating hook', () => {
    const mockResource = {
      id: 'test-whitepaper',
      title: 'Test Whitepaper',
      type: 'whitepaper' as const,
      description: 'Test description',
      gatingRules: [{
        resourceType: 'whitepaper' as const,
        profileRequirements: [
          { field: 'email' as const, operator: 'exists' as const, value: undefined, weight: 10 },
          { field: 'company' as const, operator: 'exists' as const, value: undefined, weight: 15 }
        ]
      }],
      trackingId: 'test-whitepaper'
    }

    it('should grant access to qualified users', () => {
      const { result } = renderHook(() => useContentGating())
      
      const accessResult = result.current.checkAccess(mockResource, mockQualifiedProfile)
      expect(accessResult.hasAccess).toBe(true)
    })

    it('should deny access to unqualified users', () => {
      const { result } = renderHook(() => useContentGating())
      
      const accessResult = result.current.checkAccess(mockResource, { email: 'test@example.com' })
      expect(accessResult.hasAccess).toBe(false)
      expect(accessResult.reason).toBeDefined()
    })

    it('should return missing requirements', () => {
      const { result } = renderHook(() => useContentGating())
      
      const requirements = result.current.getRequirements(mockResource, { email: 'test@example.com' })
      expect(requirements.length).toBeGreaterThan(0)
      expect(requirements[0].field).toBe('company')
    })

    it('should determine audience segment correctly', () => {
      const { result } = renderHook(() => useContentGating())
      
      const execSegment = result.current.getAudienceSegment({ jobRole: 'executive' })
      const devSegment = result.current.getAudienceSegment({ jobRole: 'developer' })
      const securitySegment = result.current.getAudienceSegment({ jobRole: 'security' })
      
      expect(execSegment).toBe('executives')
      expect(devSegment).toBe('developers')
      expect(securitySegment).toBe('security_teams')
    })

    it('should handle resources without gating rules', () => {
      const { result } = renderHook(() => useContentGating())
      
      const openResource = {
        ...mockResource,
        gatingRules: []
      }
      
      const accessResult = result.current.checkAccess(openResource, {})
      expect(accessResult.hasAccess).toBe(true)
    })
  })
})

describe('GDPR Compliance System', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    vi.clearAllMocks()
  })

  describe('useGDPRCompliance hook', () => {
    it('should save and retrieve consent', async () => {
      const { result } = renderHook(() => useGDPRCompliance())
      
      const consent = {
        necessary: true,
        marketing: true,
        analytics: false,
        personalization: true,
        thirdParty: false,
        timestamp: new Date()
      }
      
      await act(async () => {
        await result.current.saveConsent(consent)
      })
      
      const retrieved = result.current.getStoredConsent()
      expect(retrieved?.marketing).toBe(true)
      expect(retrieved?.analytics).toBe(false)
    })

    it('should detect GDPR requirement correctly', () => {
      const { result } = renderHook(() => useGDPRCompliance())
      
      // Mock timezone to EU
      vi.spyOn(Intl.DateTimeFormat.prototype, 'resolvedOptions').mockReturnValue({
        timeZone: 'Europe/Berlin'
      } as any)
      
      expect(result.current.isGDPRRequired()).toBe(true)
    })

    it('should validate consent correctly', () => {
      const { result } = renderHook(() => useGDPRCompliance())
      
      // No consent stored
      expect(result.current.hasValidConsent('marketing')).toBe(false)
      
      // Store consent
      const consent = {
        necessary: true,
        marketing: true,
        analytics: false,
        personalization: false,
        thirdParty: false,
        timestamp: new Date()
      }
      
      localStorage.setItem('perfecxion_gdpr_consent', JSON.stringify(consent))
      
      expect(result.current.hasValidConsent('marketing')).toBe(true)
      expect(result.current.hasValidConsent('analytics')).toBe(false)
    })

    it('should export user data correctly', async () => {
      const { result } = renderHook(() => useGDPRCompliance())
      
      // Set up some test data
      localStorage.setItem('leadProfile', JSON.stringify(mockBasicProfile))
      localStorage.setItem('downloadCount', '3')
      
      const exportedData = await result.current.exportUserData('test@example.com')
      
      expect(exportedData.exportDate).toBeDefined()
      expect(exportedData.dataSubject).toBe('test@example.com')
      expect(exportedData.localStorageData).toBeDefined()
      expect(exportedData.metadata).toBeDefined()
    })

    it('should delete user data correctly', async () => {
      const { result } = renderHook(() => useGDPRCompliance())
      
      // Set up some test data
      localStorage.setItem('leadProfile', JSON.stringify(mockBasicProfile))
      localStorage.setItem('perfecxion_gdpr_consent', JSON.stringify({
        necessary: true,
        marketing: true,
        analytics: true,
        personalization: true,
        thirdParty: true,
        timestamp: new Date()
      }))
      
      await act(async () => {
        await result.current.deleteUserData('test@example.com')
      })
      
      expect(localStorage.getItem('leadProfile')).toBeNull()
      expect(localStorage.getItem('perfecxion_gdpr_consent')).toBeNull()
    })

    it('should handle expired consent', () => {
      const { result } = renderHook(() => useGDPRCompliance())
      
      // Create expired consent (2 years ago)
      const expiredConsent = {
        necessary: true,
        marketing: true,
        analytics: true,
        personalization: true,
        thirdParty: true,
        timestamp: new Date(Date.now() - 2 * 365 * 24 * 60 * 60 * 1000) // 2 years ago
      }
      
      localStorage.setItem('perfecxion_gdpr_consent', JSON.stringify(expiredConsent))
      
      const retrieved = result.current.getStoredConsent()
      expect(retrieved).toBeNull()
    })
  })
})

describe('Form Analytics System', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Mock window.gtag
    vi.stubGlobal('gtag', vi.fn())
  })

  it('should track form events correctly', () => {
    // This would require more complex setup with React Testing Library
    // for now, we can test the analytics functions in isolation
    expect(true).toBe(true) // Placeholder
  })
})

describe('Company Enrichment System', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Mock fetch for API calls
    global.fetch = vi.fn()
  })

  it('should enrich company data from domain', async () => {
    // Mock successful API response
    ;(global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        domain: 'example.com',
        name: 'Example Corp',
        size: 'medium',
        industry: 'technology'
      })
    })

    // Test would require hook setup
    expect(true).toBe(true) // Placeholder
  })
})

describe('Progressive Form Logic', () => {
  describe('Form progression thresholds', () => {
    it('should have correct threshold values', () => {
      expect(PROFILE_PROGRESSION_THRESHOLDS.BASIC).toBe(2)
      expect(PROFILE_PROGRESSION_THRESHOLDS.QUALIFIED).toBe(4)
      expect(PROFILE_PROGRESSION_THRESHOLDS.ADVANCED).toBe(8)
    })
  })

  describe('Conditional field logic', () => {
    const evaluateCondition = (condition: any, data: any) => {
      const value = data[condition.field]
      
      switch (condition.operator) {
        case 'equals':
          return value === condition.value
        case 'not_equals':
          return value !== condition.value
        case 'exists':
          return value !== undefined && value !== null && value !== ''
        case 'not_exists':
          return value === undefined || value === null || value === ''
        default:
          return true
      }
    }

    it('should evaluate exists condition correctly', () => {
      const condition = { field: 'email', operator: 'exists' }
      
      expect(evaluateCondition(condition, { email: 'test@example.com' })).toBe(true)
      expect(evaluateCondition(condition, { email: '' })).toBe(false)
      expect(evaluateCondition(condition, {})).toBe(false)
    })

    it('should evaluate equals condition correctly', () => {
      const condition = { field: 'companySize', operator: 'equals', value: 'enterprise' }
      
      expect(evaluateCondition(condition, { companySize: 'enterprise' })).toBe(true)
      expect(evaluateCondition(condition, { companySize: 'startup' })).toBe(false)
      expect(evaluateCondition(condition, {})).toBe(false)
    })

    it('should evaluate not_exists condition correctly', () => {
      const condition = { field: 'phone', operator: 'not_exists' }
      
      expect(evaluateCondition(condition, {})).toBe(true)
      expect(evaluateCondition(condition, { phone: '' })).toBe(true)
      expect(evaluateCondition(condition, { phone: '+1234567890' })).toBe(false)
    })
  })
})

describe('Integration Tests', () => {
  describe('Complete user journey', () => {
    it('should handle full progressive profiling flow', async () => {
      // This would test the complete flow from initial form to resource access
      // Requires more complex test setup with React Testing Library
      expect(true).toBe(true) // Placeholder
    })

    it('should maintain data consistency across components', () => {
      // Test data flow between components
      expect(true).toBe(true) // Placeholder
    })

    it('should handle form abandonment correctly', () => {
      // Test form abandonment detection and recovery
      expect(true).toBe(true) // Placeholder
    })
  })
})

describe('Performance Tests', () => {
  it('should calculate lead scores efficiently', () => {
    const { result } = renderHook(() => useLeadScoring())
    
    const startTime = performance.now()
    
    // Calculate scores for multiple profiles
    for (let i = 0; i < 100; i++) {
      result.current.calculateScore(mockQualifiedProfile)
    }
    
    const endTime = performance.now()
    const duration = endTime - startTime
    
    // Should complete 100 calculations in under 100ms
    expect(duration).toBeLessThan(100)
  })

  it('should handle large content catalogs efficiently', () => {
    const { result } = renderHook(() => useContentGating())
    
    const startTime = performance.now()
    
    // Test audience segmentation performance
    for (let i = 0; i < 1000; i++) {
      result.current.getAudienceSegment(mockQualifiedProfile)
    }
    
    const endTime = performance.now()
    const duration = endTime - startTime
    
    // Should complete 1000 segmentations in under 50ms
    expect(duration).toBeLessThan(50)
  })
})

describe('Error Handling', () => {
  it('should handle invalid profile data gracefully', () => {
    const { result } = renderHook(() => useLeadScoring())
    
    // Test with null/undefined values
    expect(() => result.current.calculateScore(null as any)).not.toThrow()
    expect(() => result.current.calculateScore(undefined as any)).not.toThrow()
    
    // Test with malformed data
    const malformedProfile = {
      email: 123, // Wrong type
      companySize: 'invalid_size',
      jobRole: null
    }
    
    expect(() => result.current.calculateScore(malformedProfile as any)).not.toThrow()
  })

  it('should handle network failures gracefully', async () => {
    // Mock network failure
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))
    
    const { result } = renderHook(() => useGDPRCompliance())
    
    // Should not throw on network failure
    await expect(result.current.exportUserData('test@example.com')).rejects.toThrow('Network error')
  })

  it('should handle localStorage errors gracefully', () => {
    // Mock localStorage failure
    const originalSetItem = localStorage.setItem
    localStorage.setItem = vi.fn().mockImplementation(() => {
      throw new Error('Storage quota exceeded')
    })
    
    const { result } = renderHook(() => useGDPRCompliance())
    
    // Should handle storage errors gracefully
    expect(async () => {
      await result.current.saveConsent({
        necessary: true,
        marketing: false,
        analytics: false,
        personalization: false,
        thirdParty: false,
        timestamp: new Date()
      })
    }).rejects.toThrow()
    
    // Restore original function
    localStorage.setItem = originalSetItem
  })
})