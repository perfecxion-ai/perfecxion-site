// Integration Testing Types and Interfaces

export interface TestScenario {
  id: string
  name: string
  description: string
  category: TestCategory
  priority: TestPriority
  steps: TestStep[]
  validations: TestValidation[]
  performanceTargets: PerformanceTargets
  dependencies?: string[]
  tags: string[]
}

export interface TestStep {
  id: string
  description: string
  action: TestAction
  expectedResult: string
  timeout?: number
  retryAttempts?: number
  screenshot?: boolean
  data?: Record<string, any>
}

export interface TestValidation {
  id: string
  description: string
  type: ValidationType
  assertion: string
  expectedValue: any
  tolerance?: number
  critical: boolean
}

export interface PerformanceTargets {
  pageLoadTime?: number
  apiResponseTime?: number
  timeToInteractive?: number
  firstContentfulPaint?: number
  largestContentfulPaint?: number
  cumulativeLayoutShift?: number
  firstInputDelay?: number
  memoryUsage?: number
  networkRequests?: number
}

export interface TestResult {
  scenarioId: string
  status: TestStatus
  startTime: Date
  endTime: Date
  duration: number
  steps: StepResult[]
  validations: ValidationResult[]
  performance: PerformanceResult
  errors: TestError[]
  screenshots?: string[]
  metadata: TestMetadata
}

export interface StepResult {
  stepId: string
  status: TestStatus
  duration: number
  actualResult: string
  screenshot?: string
  error?: TestError
}

export interface ValidationResult {
  validationId: string
  status: TestStatus
  expectedValue: any
  actualValue: any
  difference?: number
  error?: string
}

export interface PerformanceResult {
  metrics: Record<string, number>
  coreWebVitals: {
    lcp: number
    fid: number
    cls: number
  }
  customMetrics: Record<string, number>
  resourceTiming: ResourceTiming[]
  recommendations: PerformanceRecommendation[]
}

export interface ResourceTiming {
  name: string
  type: 'document' | 'script' | 'stylesheet' | 'image' | 'xhr' | 'fetch' | 'other'
  size: number
  duration: number
  startTime: number
  endTime: number
}

export interface PerformanceRecommendation {
  id: string
  type: 'critical' | 'important' | 'moderate' | 'minor'
  category: 'loading' | 'interactivity' | 'visual-stability' | 'accessibility'
  title: string
  description: string
  impact: number
  effort: 'low' | 'medium' | 'high'
  implementation: string
}

export interface TestError {
  id: string
  type: ErrorType
  severity: ErrorSeverity
  message: string
  stack?: string
  context?: Record<string, any>
  timestamp: Date
  screenshot?: string
}

export interface TestMetadata {
  browser: BrowserInfo
  device: DeviceInfo
  environment: string
  testRunner: string
  version: string
  tags: string[]
}

export interface BrowserInfo {
  name: string
  version: string
  userAgent: string
  viewport: { width: number; height: number }
  colorScheme: 'light' | 'dark'
  reducedMotion: boolean
}

export interface DeviceInfo {
  type: 'desktop' | 'tablet' | 'mobile'
  os: string
  screenSize: { width: number; height: number }
  pixelRatio: number
  touchSupport: boolean
  orientation: 'portrait' | 'landscape'
}

export interface UserJourney {
  id: string
  name: string
  description: string
  persona: UserPersona
  scenarios: string[]
  criticalPath: boolean
  conversionGoal?: string
  estimatedDuration: number
}

export interface UserPersona {
  id: string
  name: string
  role: 'visitor' | 'lead' | 'developer' | 'customer' | 'admin'
  goals: string[]
  painPoints: string[]
  technicalLevel: 'beginner' | 'intermediate' | 'advanced'
  devicePreference: 'desktop' | 'mobile' | 'both'
}

export interface SecurityTest {
  id: string
  name: string
  category: SecurityCategory
  severity: SecuritySeverity
  description: string
  targetUrl: string
  payload?: string
  expectedResponse: string
  vulnerabilityType: VulnerabilityType
  mitigationRequired: boolean
}

export interface AccessibilityTest {
  id: string
  name: string
  wcagLevel: 'A' | 'AA' | 'AAA'
  guideline: string
  description: string
  selector?: string
  expectedBehavior: string
  testMethod: 'automated' | 'manual' | 'both'
  toolSupport: string[]
}

export interface LoadTest {
  id: string
  name: string
  description: string
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  concurrentUsers: number
  duration: number
  rampUpTime: number
  thresholds: {
    averageResponseTime: number
    p95ResponseTime: number
    errorRate: number
    throughput: number
  }
}

// Enums and Types
export type TestCategory = 
  | 'unit'
  | 'integration' 
  | 'e2e'
  | 'performance'
  | 'security'
  | 'accessibility'
  | 'visual'
  | 'load'

export type TestPriority = 'critical' | 'high' | 'medium' | 'low'

export type TestStatus = 'pending' | 'running' | 'passed' | 'failed' | 'skipped' | 'timeout'

export type TestAction = 
  | 'navigate'
  | 'click'
  | 'type'
  | 'select'
  | 'hover'
  | 'scroll'
  | 'wait'
  | 'api-call'
  | 'screenshot'
  | 'validate'

export type ValidationType = 
  | 'element-exists'
  | 'element-visible'
  | 'text-content'
  | 'attribute-value'
  | 'url-match'
  | 'api-response'
  | 'performance-metric'
  | 'accessibility-rule'

export type ErrorType = 
  | 'assertion-failed'
  | 'element-not-found'
  | 'timeout'
  | 'network-error'
  | 'javascript-error'
  | 'performance-threshold'
  | 'security-violation'
  | 'accessibility-violation'

export type ErrorSeverity = 'critical' | 'high' | 'medium' | 'low'

export type SecurityCategory = 
  | 'authentication'
  | 'authorization'
  | 'input-validation'
  | 'data-protection'
  | 'session-management'
  | 'infrastructure'

export type SecuritySeverity = 'critical' | 'high' | 'medium' | 'low' | 'info'

export type VulnerabilityType = 
  | 'sql-injection'
  | 'xss'
  | 'csrf'
  | 'authentication-bypass'
  | 'privilege-escalation'
  | 'information-disclosure'
  | 'denial-of-service'

// Configuration Interfaces
export interface TestConfig {
  baseUrl: string
  timeout: number
  retryAttempts: number
  screenshotOnFailure: boolean
  videoRecording: boolean
  headless: boolean
  browsers: string[]
  devices: string[]
  environments: TestEnvironment[]
  parallel: boolean
  maxWorkers: number
}

export interface TestEnvironment {
  name: string
  url: string
  credentials: {
    username?: string
    password?: string
    apiKey?: string
    token?: string
  }
  database?: {
    host: string
    port: number
    database: string
    username: string
    password: string
  }
  features: string[]
}

// Test Suite Interfaces
export interface TestSuite {
  id: string
  name: string
  description: string
  scenarios: TestScenario[]
  setup?: TestHook[]
  teardown?: TestHook[]
  parallel: boolean
  timeout: number
}

export interface TestHook {
  type: 'before-all' | 'before-each' | 'after-each' | 'after-all'
  action: () => Promise<void>
  description: string
}

export interface TestReport {
  id: string
  suiteId: string
  name: string
  startTime: Date
  endTime: Date
  duration: number
  summary: TestSummary
  results: TestResult[]
  performance: PerformanceReport
  security: SecurityReport
  accessibility: AccessibilityReport
  coverage: CoverageReport
  recommendations: TestRecommendation[]
}

export interface TestSummary {
  total: number
  passed: number
  failed: number
  skipped: number
  passRate: number
  failureRate: number
  averageDuration: number
}

export interface PerformanceReport {
  summary: PerformanceSummary
  coreWebVitals: CoreWebVitalsReport
  resourceAnalysis: ResourceAnalysisReport
  recommendations: PerformanceRecommendation[]
}

export interface PerformanceSummary {
  averageLoadTime: number
  medianLoadTime: number
  p95LoadTime: number
  totalResources: number
  totalSize: number
  cacheHitRatio: number
}

export interface CoreWebVitalsReport {
  lcp: { average: number; median: number; p95: number }
  fid: { average: number; median: number; p95: number }
  cls: { average: number; median: number; p95: number }
  compliance: {
    good: number
    needsImprovement: number
    poor: number
  }
}

export interface ResourceAnalysisReport {
  byType: Record<string, { count: number; size: number; duration: number }>
  largest: ResourceTiming[]
  slowest: ResourceTiming[]
  unused: string[]
  optimization: string[]
}

export interface SecurityReport {
  summary: SecuritySummary
  vulnerabilities: SecurityVulnerability[]
  recommendations: SecurityRecommendation[]
  compliance: ComplianceReport
}

export interface SecuritySummary {
  total: number
  critical: number
  high: number
  medium: number
  low: number
  info: number
  riskScore: number
}

export interface SecurityVulnerability {
  id: string
  type: VulnerabilityType
  severity: SecuritySeverity
  title: string
  description: string
  location: string
  evidence: string
  remediation: string
  references: string[]
}

export interface SecurityRecommendation {
  id: string
  category: SecurityCategory
  title: string
  description: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  effort: 'low' | 'medium' | 'high'
  implementation: string
}

export interface ComplianceReport {
  frameworks: Record<string, {
    name: string
    version: string
    compliance: number
    requirements: ComplianceRequirement[]
  }>
}

export interface ComplianceRequirement {
  id: string
  title: string
  status: 'compliant' | 'non-compliant' | 'partial' | 'not-applicable'
  evidence: string
  remediation?: string
}

export interface AccessibilityReport {
  summary: AccessibilitySummary
  violations: AccessibilityViolation[]
  recommendations: AccessibilityRecommendation[]
  wcagCompliance: WCAGComplianceReport
}

export interface AccessibilitySummary {
  total: number
  violations: number
  warnings: number
  manual: number
  passed: number
  complianceLevel: 'A' | 'AA' | 'AAA' | 'Non-compliant'
}

export interface AccessibilityViolation {
  id: string
  guideline: string
  level: 'A' | 'AA' | 'AAA'
  impact: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  elements: AccessibilityElement[]
  fix: string
}

export interface AccessibilityElement {
  selector: string
  html: string
  target: string[]
}

export interface AccessibilityRecommendation {
  id: string
  category: string
  title: string
  description: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  implementation: string
  benefit: string
}

export interface WCAGComplianceReport {
  level: 'A' | 'AA' | 'AAA'
  guidelines: Record<string, {
    name: string
    status: 'pass' | 'fail' | 'partial'
    criteria: WCAGCriterion[]
  }>
}

export interface WCAGCriterion {
  id: string
  title: string
  level: 'A' | 'AA' | 'AAA'
  status: 'pass' | 'fail' | 'not-applicable'
  techniques: string[]
}

export interface CoverageReport {
  lines: number
  functions: number
  branches: number
  statements: number
  files: FileCoverage[]
  uncovered: UncoveredArea[]
}

export interface FileCoverage {
  path: string
  lines: number
  functions: number
  branches: number
  statements: number
}

export interface UncoveredArea {
  file: string
  line: number
  type: 'line' | 'function' | 'branch' | 'statement'
  description: string
}

export interface TestRecommendation {
  id: string
  category: 'performance' | 'security' | 'accessibility' | 'quality' | 'coverage'
  priority: 'critical' | 'high' | 'medium' | 'low'
  title: string
  description: string
  implementation: string
  effort: 'low' | 'medium' | 'high'
  impact: number
  deadline?: Date
}