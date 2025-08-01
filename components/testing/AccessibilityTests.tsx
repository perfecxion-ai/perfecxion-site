'use client'

import { useState, useEffect } from 'react'
import { 
  Play,
  Eye,
  Ear,
  Accessibility,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Mouse,
  Keyboard,
  Monitor,
  Smartphone,
  Volume2,
  Contrast,
  Type,
  Zap,
  Download,
  Filter,
  Clock,
  Target,
  Book
} from 'lucide-react'
import { 
  AccessibilityTest,
  AccessibilityViolation,
  WCAGComplianceReport 
} from '@/lib/testing/integration-types'

interface AccessibilityTestResult {
  testId: string
  status: 'pending' | 'running' | 'passed' | 'failed' | 'warning' | 'manual-review'
  violations: AccessibilityViolation[]
  executionTime: number
  timestamp: Date
  wcagLevel: 'A' | 'AA' | 'AAA'
  automated: boolean
  manualReviewRequired: boolean
  score: number // 0-100
}

interface AccessibilityCategory {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  tests: AccessibilityTest[]
}

export default function AccessibilityTests() {
  const [categories] = useState<AccessibilityCategory[]>([
    {
      id: 'perceivable',
      name: 'Perceivable',
      description: 'Information must be presentable to users in ways they can perceive',
      icon: <Eye className="w-5 h-5" />,
      tests: [
        {
          id: 'color-contrast',
          name: 'Color Contrast Ratio',
          wcagLevel: 'AA',
          guideline: 'WCAG 1.4.3',
          description: 'Text has sufficient contrast against background',
          expectedBehavior: 'Contrast ratio >= 4.5:1 for normal text, >= 3:1 for large text',
          testMethod: 'automated',
          toolSupport: ['axe-core', 'WAVE', 'manual testing']
        },
        {
          id: 'alt-text',
          name: 'Alternative Text for Images',
          wcagLevel: 'A',
          guideline: 'WCAG 1.1.1',
          description: 'All images have appropriate alternative text',
          expectedBehavior: 'Meaningful alt text or empty alt for decorative images',
          testMethod: 'automated',
          toolSupport: ['axe-core', 'WAVE', 'screen reader testing']
        },
        {
          id: 'video-captions',
          name: 'Video Captions',
          wcagLevel: 'A',
          guideline: 'WCAG 1.2.2',
          description: 'Videos have synchronized captions',
          expectedBehavior: 'All video content includes accurate captions',
          testMethod: 'manual',
          toolSupport: ['manual review', 'caption validation tools']
        },
        {
          id: 'text-resize',
          name: 'Text Resize',
          wcagLevel: 'AA',
          guideline: 'WCAG 1.4.4',
          description: 'Text can be resized up to 200% without loss of functionality',
          expectedBehavior: 'Page remains functional when text is enlarged to 200%',
          testMethod: 'both',
          toolSupport: ['browser zoom', 'automated testing', 'manual validation']
        }
      ]
    },
    {
      id: 'operable',
      name: 'Operable',
      description: 'User interface components must be operable',
      icon: <Keyboard className="w-5 h-5" />,
      tests: [
        {
          id: 'keyboard-navigation',
          name: 'Keyboard Navigation',
          wcagLevel: 'A',
          guideline: 'WCAG 2.1.1',
          description: 'All functionality available via keyboard',
          expectedBehavior: 'Tab order is logical, all interactive elements reachable',
          testMethod: 'both',
          toolSupport: ['automated testing', 'manual keyboard testing']
        },
        {
          id: 'focus-indicators',
          name: 'Focus Indicators',
          wcagLevel: 'AA',
          guideline: 'WCAG 2.4.7',
          description: 'Keyboard focus is clearly visible',
          expectedBehavior: 'Clear visual indication of focused element',
          testMethod: 'both',
          toolSupport: ['automated testing', 'visual inspection']
        },
        {
          id: 'timing-controls',
          name: 'Timing Controls',
          wcagLevel: 'A',
          guideline: 'WCAG 2.2.1',
          description: 'Users can control time limits',
          expectedBehavior: 'Time limits can be extended, disabled, or adjusted',
          testMethod: 'manual',
          toolSupport: ['manual testing', 'user scenario testing']
        },
        {
          id: 'motion-controls',
          name: 'Motion and Animation',
          wcagLevel: 'AA',
          guideline: 'WCAG 2.3.3',
          description: 'Reduced motion preferences respected',
          expectedBehavior: 'Animations pause or reduce based on user preferences',
          testMethod: 'both',
          toolSupport: ['CSS media queries', 'automated testing']
        }
      ]
    },
    {
      id: 'understandable',
      name: 'Understandable',
      description: 'Information and UI operation must be understandable',
      icon: <Book className="w-5 h-5" />,
      tests: [
        {
          id: 'language-identification',
          name: 'Language Identification',
          wcagLevel: 'A',
          guideline: 'WCAG 3.1.1',
          description: 'Page language is properly identified',
          expectedBehavior: 'HTML lang attribute correctly set',
          testMethod: 'automated',
          toolSupport: ['axe-core', 'WAVE', 'HTML validator']
        },
        {
          id: 'form-labels',
          name: 'Form Labels and Instructions',
          wcagLevel: 'A',
          guideline: 'WCAG 3.3.2',
          description: 'Form fields have clear labels and instructions',
          expectedBehavior: 'All form inputs properly labeled and described',
          testMethod: 'automated',
          toolSupport: ['axe-core', 'form validation', 'screen reader testing']
        },
        {
          id: 'error-identification',
          name: 'Error Identification',
          wcagLevel: 'A',
          guideline: 'WCAG 3.3.1',
          description: 'Input errors are clearly identified',
          expectedBehavior: 'Error messages are descriptive and associated with fields',
          testMethod: 'both',
          toolSupport: ['automated testing', 'form validation testing']
        },
        {
          id: 'consistent-navigation',
          name: 'Consistent Navigation',
          wcagLevel: 'AA',
          guideline: 'WCAG 3.2.3',
          description: 'Navigation is consistent across pages',
          expectedBehavior: 'Navigation elements appear in same relative order',
          testMethod: 'manual',
          toolSupport: ['manual review', 'cross-page comparison']
        }
      ]
    },
    {
      id: 'robust',
      name: 'Robust',
      description: 'Content must be robust enough for interpretation by assistive technologies',
      icon: <Accessibility className="w-5 h-5" />,
      tests: [
        {
          id: 'html-validity',
          name: 'HTML Validity',
          wcagLevel: 'AA',
          guideline: 'WCAG 4.1.1',
          description: 'HTML markup is valid and properly structured',
          expectedBehavior: 'Valid HTML with proper element nesting and attributes',
          testMethod: 'automated',
          toolSupport: ['HTML validator', 'axe-core', 'automated testing']
        },
        {
          id: 'aria-implementation',
          name: 'ARIA Implementation',
          wcagLevel: 'AA',
          guideline: 'WCAG 4.1.2',
          description: 'ARIA attributes are properly implemented',
          expectedBehavior: 'ARIA roles, properties, and states are correctly used',
          testMethod: 'automated',
          toolSupport: ['axe-core', 'ARIA validator', 'screen reader testing']
        },
        {
          id: 'screen-reader-compatibility',
          name: 'Screen Reader Compatibility',
          wcagLevel: 'AA',
          guideline: 'WCAG 4.1.2',
          description: 'Content works with screen readers',
          expectedBehavior: 'All content accessible via assistive technologies',
          testMethod: 'manual',
          toolSupport: ['NVDA', 'JAWS', 'VoiceOver', 'TalkBack']
        },
        {
          id: 'semantic-structure',
          name: 'Semantic Structure',
          wcagLevel: 'A',
          guideline: 'WCAG 1.3.1',
          description: 'Content has meaningful semantic structure',
          expectedBehavior: 'Proper heading hierarchy and semantic HTML elements',
          testMethod: 'automated',
          toolSupport: ['axe-core', 'WAVE', 'heading structure tools']
        }
      ]
    }
  ])

  const [results, setResults] = useState<Map<string, AccessibilityTestResult>>(new Map())
  const [isRunning, setIsRunning] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filter, setFilter] = useState<{
    wcagLevel: 'all' | 'A' | 'AA' | 'AAA'
    status: 'all' | string
    testMethod: 'all' | 'automated' | 'manual' | 'both'
  }>({
    wcagLevel: 'all',
    status: 'all',
    testMethod: 'all'
  })
  const [complianceReport, setComplianceReport] = useState<WCAGComplianceReport | null>(null)

  // Get all tests across categories
  const allTests = categories.flatMap(cat => cat.tests)
  const filteredTests = allTests.filter(test => {
    if (selectedCategory !== 'all') {
      const category = categories.find(cat => cat.id === selectedCategory)
      if (!category?.tests.includes(test)) return false
    }
    if (filter.wcagLevel !== 'all' && test.wcagLevel !== filter.wcagLevel) return false
    if (filter.testMethod !== 'all' && test.testMethod !== filter.testMethod) return false
    if (filter.status !== 'all') {
      const result = results.get(test.id)
      if (!result || result.status !== filter.status) return false
    }
    return true
  })

  const runAccessibilityAudit = async () => {
    setIsRunning(true)

    try {
      // Run all tests
      for (const test of allTests) {
        await runSingleAccessibilityTest(test.id)
        // Small delay for realistic progress
        await new Promise(resolve => setTimeout(resolve, 500))
      }

      // Generate compliance report
      generateComplianceReport()

    } finally {
      setIsRunning(false)
    }
  }

  const runSingleAccessibilityTest = async (testId: string) => {
    const test = allTests.find(t => t.id === testId)
    if (!test) return

    // Set test as running
    setResults(prev => new Map(prev).set(testId, {
      testId,
      status: 'running',
      violations: [],
      executionTime: 0,
      timestamp: new Date(),
      wcagLevel: test.wcagLevel,
      automated: test.testMethod === 'automated' || test.testMethod === 'both',
      manualReviewRequired: test.testMethod === 'manual' || test.testMethod === 'both',
      score: 0
    }))

    const startTime = Date.now()

    try {
      // Simulate test execution with realistic results
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000))
      
      const { status, violations, score } = generateAccessibilityTestResult(test)

      const result: AccessibilityTestResult = {
        testId,
        status,
        violations,
        executionTime: Date.now() - startTime,
        timestamp: new Date(),
        wcagLevel: test.wcagLevel,
        automated: test.testMethod === 'automated' || test.testMethod === 'both',
        manualReviewRequired: test.testMethod === 'manual' || test.testMethod === 'both',
        score
      }

      setResults(prev => new Map(prev).set(testId, result))

    } catch (error) {
      setResults(prev => new Map(prev).set(testId, {
        testId,
        status: 'failed',
        violations: [],
        executionTime: Date.now() - startTime,
        timestamp: new Date(),
        wcagLevel: test.wcagLevel,
        automated: false,
        manualReviewRequired: true,
        score: 0
      }))
    }
  }

  const generateAccessibilityTestResult = (test: AccessibilityTest): { status: AccessibilityTestResult['status'], violations: AccessibilityViolation[], score: number } => {
    // Simulate different test outcomes based on test type
    const passRate = test.testMethod === 'automated' ? 0.8 : 0.9 // Automated tests catch more issues
    const shouldPass = Math.random() < passRate

    if (shouldPass) {
      return {
        status: test.testMethod === 'manual' ? 'manual-review' : 'passed',
        violations: [],
        score: Math.floor(Math.random() * 20 + 80) // 80-100 for passing tests
      }
    }

    // Generate realistic violations
    const violations: AccessibilityViolation[] = []
    const violationCount = Math.floor(Math.random() * 3) + 1

    for (let i = 0; i < violationCount; i++) {
      violations.push(generateViolation(test))
    }

    return {
      status: 'failed' as const,
      violations,
      score: Math.floor(Math.random() * 50 + 20) // 20-70 for failing tests
    }
  }

  const generateViolation = (test: AccessibilityTest): AccessibilityViolation => {
    const violationTypes = {
      'color-contrast': {
        impact: 'serious' as const,
        description: 'Text color does not have sufficient contrast with background',
        help: 'Ensure text has a contrast ratio of at least 4.5:1',
        elements: [{ selector: '.low-contrast-text', html: '<p class="low-contrast-text">Sample text</p>', target: ['.low-contrast-text'] }]
      },
      'alt-text': {
        impact: 'critical' as const,
        description: 'Image missing alternative text',
        help: 'Add meaningful alt text to describe the image content',
        elements: [{ selector: 'img[src="logo.png"]', html: '<img src="logo.png">', target: ['img[src="logo.png"]'] }]
      },
      'keyboard-navigation': {
        impact: 'serious' as const,
        description: 'Interactive element not keyboard accessible',
        help: 'Ensure all interactive elements can be reached and activated via keyboard',
        elements: [{ selector: '.custom-button', html: '<div class="custom-button">Click me</div>', target: ['.custom-button'] }]
      },
      'form-labels': {
        impact: 'critical' as const,
        description: 'Form input missing associated label',
        help: 'Associate form inputs with descriptive labels using for/id attributes',
        elements: [{ selector: 'input[type="email"]', html: '<input type="email" name="email">', target: ['input[type="email"]'] }]
      }
    }

    const baseViolation = violationTypes[test.id as keyof typeof violationTypes] || violationTypes['alt-text']

    return {
      id: `violation-${test.id}-${Date.now()}`,
      guideline: test.guideline,
      level: test.wcagLevel,
      impact: baseViolation.impact,
      description: baseViolation.description,
      help: baseViolation.help,
      elements: baseViolation.elements,
      fix: getFixRecommendation(test.id)
    }
  }

  const getFixRecommendation = (testId: string): string => {
    const fixes = {
      'color-contrast': 'Use a color contrast analyzer to ensure text meets WCAG contrast requirements',
      'alt-text': 'Add descriptive alt text that conveys the meaning and context of the image',
      'keyboard-navigation': 'Add tabindex="0" and keyboard event handlers to custom interactive elements',
      'form-labels': 'Use <label> elements or aria-label attributes to provide accessible names',
      'focus-indicators': 'Ensure focus indicators are visible with sufficient contrast and clear boundaries',
      'html-validity': 'Fix HTML validation errors and ensure proper element nesting',
      'aria-implementation': 'Review ARIA usage and ensure roles, properties, and states are correctly applied'
    }
    return fixes[testId as keyof typeof fixes] || 'Review accessibility guidelines and implement appropriate fixes'
  }

  const generateComplianceReport = () => {
    const resultArray = Array.from(results.values())
    const totalTests = resultArray.length
    const passedTests = resultArray.filter(r => r.status === 'passed').length
    const failedTests = resultArray.filter(r => r.status === 'failed').length
    const manualReviewTests = resultArray.filter(r => r.status === 'manual-review').length

    // Determine compliance level based on results
    let complianceLevel: 'A' | 'AA' | 'AAA' | 'Non-compliant' = 'Non-compliant'
    const passRate = passedTests / totalTests

    if (passRate >= 0.95) complianceLevel = 'AAA'
    else if (passRate >= 0.9) complianceLevel = 'AA'
    else if (passRate >= 0.8) complianceLevel = 'A'

    const report: WCAGComplianceReport = {
      level: complianceLevel === 'Non-compliant' ? 'A' : complianceLevel,
      guidelines: {
        'perceivable': {
          name: 'Perceivable',
          status: passRate >= 0.9 ? 'pass' : passRate >= 0.7 ? 'partial' : 'fail',
          criteria: []
        },
        'operable': {
          name: 'Operable', 
          status: passRate >= 0.9 ? 'pass' : passRate >= 0.7 ? 'partial' : 'fail',
          criteria: []
        },
        'understandable': {
          name: 'Understandable',
          status: passRate >= 0.9 ? 'pass' : passRate >= 0.7 ? 'partial' : 'fail',
          criteria: []
        },
        'robust': {
          name: 'Robust',
          status: passRate >= 0.9 ? 'pass' : passRate >= 0.7 ? 'partial' : 'fail',
          criteria: []
        }
      }
    }

    setComplianceReport(report)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'manual-review': return <Eye className="w-5 h-5 text-blue-600" />
      case 'running': return <Clock className="w-5 h-5 text-blue-600 animate-spin" />
      default: return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'failed': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'manual-review': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'running': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const getWCAGLevelColor = (level: string) => {
    switch (level) {
      case 'A': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'AA': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'AAA': return 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'critical': return <AlertTriangle className="w-4 h-4 text-red-600" />
      case 'serious': return <AlertTriangle className="w-4 h-4 text-orange-600" />
      case 'moderate': return <AlertTriangle className="w-4 h-4 text-yellow-600" />
      case 'minor': return <Info className="w-4 h-4 text-blue-600" />
      default: return <Info className="w-4 h-4 text-gray-400" />
    }
  }

  const formatDuration = (ms: number) => {
    if (ms < 1000) return `${ms}ms`
    const seconds = Math.floor(ms / 1000)
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  // Calculate summary statistics
  const totalTests = results.size
  const passedTests = Array.from(results.values()).filter(r => r.status === 'passed').length
  const failedTests = Array.from(results.values()).filter(r => r.status === 'failed').length
  const manualReviewTests = Array.from(results.values()).filter(r => r.status === 'manual-review').length
  const totalViolations = Array.from(results.values()).reduce((sum, r) => sum + r.violations.length, 0)
  const averageScore = totalTests > 0 ? 
    Array.from(results.values()).reduce((sum, r) => sum + r.score, 0) / totalTests : 0

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <Accessibility className="w-8 h-8 mr-3 text-blue-600" />
                Accessibility Compliance Testing
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                WCAG 2.1 compliance testing and accessibility validation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {complianceReport && (
                <div className={`px-4 py-2 rounded-lg border ${
                  complianceReport.level === 'AAA' ? 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800' :
                  complianceReport.level === 'AA' ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' :
                  'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                }`}>
                  <div className="text-sm font-medium">
                    WCAG {complianceReport.level} Compliance
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Score: {averageScore.toFixed(1)}/100
                  </div>
                </div>
              )}
              <button
                onClick={runAccessibilityAudit}
                disabled={isRunning}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isRunning ? <Clock className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Running Audit...' : 'Start Accessibility Audit'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Accessibility Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Test Summary</h3>
              <div className="space-y-4">
                <div className="border-b dark:border-gray-700 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Tests</span>
                    <span className="font-semibold dark:text-white">{totalTests}</span>
                  </div>
                </div>
                <div className="border-b dark:border-gray-700 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Passed</span>
                    <span className="font-semibold text-green-600">{passedTests}</span>
                  </div>
                </div>
                <div className="border-b dark:border-gray-700 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Failed</span>
                    <span className="font-semibold text-red-600">{failedTests}</span>
                  </div>
                </div>
                <div className="border-b dark:border-gray-700 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Manual Review</span>
                    <span className="font-semibold text-blue-600">{manualReviewTests}</span>
                  </div>
                </div>
                <div className="border-b dark:border-gray-700 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Violations</span>
                    <span className="font-semibold text-red-600">{totalViolations}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Average Score</span>
                    <span className={`font-semibold ${
                      averageScore >= 90 ? 'text-green-600' :
                      averageScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {averageScore.toFixed(1)}/100
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* WCAG Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">WCAG Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-900 dark:text-blue-200'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  All Categories ({allTests.length})
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-900 dark:text-blue-200'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <span>{category.name} ({category.tests.length})</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {category.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    WCAG Level
                  </label>
                  <select
                    value={filter.wcagLevel}
                    onChange={(e) => setFilter(prev => ({ ...prev, wcagLevel: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Levels</option>
                    <option value="A">Level A</option>
                    <option value="AA">Level AA</option>
                    <option value="AAA">Level AAA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Test Method
                  </label>
                  <select
                    value={filter.testMethod}
                    onChange={(e) => setFilter(prev => ({ ...prev, testMethod: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Methods</option>
                    <option value="automated">Automated</option>
                    <option value="manual">Manual</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    value={filter.status}
                    onChange={(e) => setFilter(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="passed">Passed</option>
                    <option value="failed">Failed</option>
                    <option value="manual-review">Manual Review</option>
                    <option value="running">Running</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold dark:text-white">Accessibility Tests</h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredTests.length} tests
                  </div>
                </div>
              </div>

              <div className="divide-y dark:divide-gray-700">
                {filteredTests.map((test) => {
                  const result = results.get(test.id)

                  return (
                    <div key={test.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getStatusIcon(result?.status || 'pending')}
                            <h3 className="font-semibold dark:text-white">{test.name}</h3>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${getWCAGLevelColor(test.wcagLevel)}`}>
                              WCAG {test.wcagLevel}
                            </span>
                            <span className="px-2 py-1 rounded text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                              {test.guideline}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {test.description}
                          </p>

                          <div className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            <strong>Expected:</strong> {test.expectedBehavior}
                          </div>

                          {/* Test Result Details */}
                          {result && (
                            <div className="space-y-3">
                              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{formatDuration(result.executionTime)}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Target className="w-4 h-4" />
                                  <span>Score: {result.score}/100</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {result.automated ? <Zap className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                  <span>{result.automated ? 'Automated' : 'Manual'}</span>
                                </div>
                              </div>

                              {/* Violations */}
                              {result.violations.map((violation, index) => (
                                <div key={index} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                  <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                      {getImpactIcon(violation.impact)}
                                      <h4 className="font-medium text-red-900 dark:text-red-200">
                                        {violation.description}
                                      </h4>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                      violation.impact === 'critical' ? 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200' :
                                      violation.impact === 'serious' ? 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200' :
                                      violation.impact === 'moderate' ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200' :
                                      'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
                                    }`}>
                                      {violation.impact}
                                    </span>
                                  </div>
                                  
                                  <p className="text-red-800 dark:text-red-300 text-sm mb-3">
                                    {violation.help}
                                  </p>

                                  <div className="bg-red-100 dark:bg-red-900/30 rounded p-2 mb-3">
                                    <div className="text-xs text-red-700 dark:text-red-400 mb-1">Affected Element:</div>
                                    <code className="text-xs text-red-800 dark:text-red-300 break-all">
                                      {violation.elements[0]?.html}
                                    </code>
                                  </div>

                                  <div className="text-red-700 dark:text-red-400 text-sm">
                                    <strong>Fix:</strong> {violation.fix}
                                  </div>
                                </div>
                              ))}

                              {/* Manual Review Required */}
                              {result.manualReviewRequired && result.violations.length === 0 && (
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Eye className="w-4 h-4 text-blue-600" />
                                    <h4 className="font-medium text-blue-900 dark:text-blue-200">
                                      Manual Review Required
                                    </h4>
                                  </div>
                                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                                    This test requires manual validation using assistive technologies or human judgment.
                                  </p>
                                  <div className="mt-2">
                                    <div className="text-blue-700 dark:text-blue-400 text-sm">
                                      <strong>Tools:</strong> {test.toolSupport.join(', ')}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => runSingleAccessibilityTest(test.id)}
                            disabled={isRunning}
                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Run accessibility test"
                          >
                            <Play className="w-5 h-5" />
                          </button>
                          
                          {result && (
                            <button
                              className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                              title="View details"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                          )}
                          
                          <button
                            className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                            title="Download report"
                          >
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {filteredTests.length === 0 && (
                <div className="p-12 text-center">
                  <Accessibility className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No Accessibility Tests Found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    No tests match your current filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}