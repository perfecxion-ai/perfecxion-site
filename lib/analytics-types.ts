export interface SecurityMetrics {
  id: string
  timestamp: string
  threatDetectionRate: number
  vulnerabilityResolutionTime: number
  complianceScore: number
  attacksPrevented: number
  falsePosivitiveRate: number
  systemUptime: number
  responseTime: number
  activeThreats: number
}

export interface VulnerabilityData {
  id: string
  systemId: string
  systemName: string
  title: string
  description: string
  severity: VulnerabilitySeverity
  cvssScore: number
  cvssVector: string
  discoveredAt: string
  updatedAt: string
  status: VulnerabilityStatus
  exploitability: ExploitabilityLevel
  impact: ImpactLevel
  category: VulnerabilityCategory
  cweId?: string
  affectedComponents: string[]
  remediationSteps: RemediationStep[]
  references: string[]
  tags: string[]
}

export type VulnerabilitySeverity = 'critical' | 'high' | 'medium' | 'low' | 'info'
export type VulnerabilityStatus = 'open' | 'in_progress' | 'resolved' | 'false_positive' | 'accepted_risk'
export type ExploitabilityLevel = 'functional' | 'proof_of_concept' | 'unproven' | 'high' | 'not_defined'
export type ImpactLevel = 'none' | 'partial' | 'complete' | 'high' | 'not_defined'
export type VulnerabilityCategory = 'injection' | 'broken_auth' | 'sensitive_data' | 'xxe' | 'broken_access' | 'security_misconfig' | 'xss' | 'insecure_deserialization' | 'known_vulnerabilities' | 'insufficient_logging'

export interface RemediationStep {
  id: string
  title: string
  description: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  estimatedEffort: string
  status: 'pending' | 'in_progress' | 'completed'
  assignedTo?: string
  dueDate?: string
  dependencies?: string[]
}

export interface TrendAnalysis {
  id: string
  metric: string
  period: TimePeriod
  data: TrendDataPoint[]
  trend: TrendDirection
  changePercent: number
  forecast?: TrendDataPoint[]
}

export interface TrendDataPoint {
  timestamp: string
  value: number
  label?: string
}

export type TrendDirection = 'up' | 'down' | 'stable'
export type TimePeriod = '1h' | '24h' | '7d' | '30d' | '90d' | '1y'

export interface RealTimeMetrics {
  timestamp: string
  activeScans: number
  threatsDetected: number
  systemsOnline: number
  alertsTriggered: number
  cpuUsage: number
  memoryUsage: number
  networkTraffic: number
  responseTime: number
}

export interface DashboardConfig {
  id: string
  name: string
  layout: WidgetLayout[]
  refreshInterval: number
  theme: 'light' | 'dark' | 'auto'
  userId: string
  isDefault: boolean
  createdAt: string
  updatedAt: string
}

export interface WidgetLayout {
  id: string
  type: WidgetType
  position: {
    x: number
    y: number
    width: number
    height: number
  }
  config: WidgetConfig
}

export type WidgetType = 'metrics_card' | 'chart' | 'vulnerability_list' | 'threat_map' | 'compliance_gauge' | 'alert_feed' | 'system_status'

export interface WidgetConfig {
  title: string
  dataSource: string
  chartType?: ChartType
  timeRange?: TimePeriod
  filters?: Record<string, any>
  refreshRate?: number
  showLegend?: boolean
  showGrid?: boolean
}

export type ChartType = 'line' | 'bar' | 'pie' | 'doughnut' | 'area' | 'scatter' | 'heatmap' | 'gauge'

export interface GeneratedReport {
  id: string
  name: string
  type: ReportType
  format: ExportFormat
  status: ReportStatus
  requestedBy: string
  requestedAt: string
  completedAt?: string
  downloadUrl?: string
  expiresAt?: string
  parameters: ReportParameters
  size?: number
}

export type ReportType = 'executive_summary' | 'technical_vulnerability' | 'compliance_assessment' | 'trend_analysis' | 'benchmark_comparison' | 'custom'
export type ExportFormat = 'pdf' | 'json' | 'csv' | 'excel' | 'html'
export type ReportStatus = 'pending' | 'generating' | 'completed' | 'failed' | 'expired'

export interface ReportParameters {
  timeRange: TimePeriod
  includeCharts: boolean
  includeRawData: boolean
  includeRecommendations: boolean
  filterBySeverity?: VulnerabilitySeverity[]
  filterByCategory?: VulnerabilityCategory[]
  includeCompliance?: string[]
  customSections?: string[]
}

export interface ReportTemplate {
  id: string
  name: string
  description: string
  type: ReportType
  sections: ReportSection[]
  defaultParameters: ReportParameters
  isCustom: boolean
  createdBy: string
  createdAt: string
}

export interface ReportSection {
  id: string
  title: string
  type: SectionType
  order: number
  config: SectionConfig
  required: boolean
}

export type SectionType = 'executive_summary' | 'metrics_overview' | 'vulnerability_analysis' | 'trend_charts' | 'recommendations' | 'compliance_status' | 'raw_data' | 'custom_chart'

export interface SectionConfig {
  dataSource: string
  chartType?: ChartType
  includeDetails?: boolean
  timeRange?: TimePeriod
  filters?: Record<string, any>
}

export interface CVSSScore {
  vulnerabilityId: string
  version: '3.1' | '3.0' | '2.0'
  baseScore: number
  temporalScore?: number
  environmentalScore?: number
  vector: string
  metrics: CVSSMetrics
  calculatedAt: string
}

export interface CVSSMetrics {
  attackVector: string
  attackComplexity: string
  privilegesRequired: string
  userInteraction: string
  scope: string
  confidentialityImpact: string
  integrityImpact: string
  availabilityImpact: string
  exploitCodeMaturity?: string
  remediationLevel?: string
  reportConfidence?: string
}

export interface RiskPriority {
  vulnerabilityId: string
  riskScore: number
  businessImpact: BusinessImpact
  exploitLikelihood: ExploitLikelihood
  remediationComplexity: RemediationComplexity
  complianceImpact: ComplianceImpact
  priority: PriorityLevel
  justification: string
  calculatedAt: string
}

export type BusinessImpact = 'critical' | 'high' | 'medium' | 'low'
export type ExploitLikelihood = 'very_high' | 'high' | 'medium' | 'low' | 'very_low'
export type RemediationComplexity = 'trivial' | 'simple' | 'moderate' | 'complex' | 'very_complex'
export type ComplianceImpact = 'severe' | 'major' | 'minor' | 'none'
export type PriorityLevel = 'p0' | 'p1' | 'p2' | 'p3' | 'p4'

export interface RemediationPlan {
  id: string
  vulnerabilityId: string
  title: string
  description: string
  steps: RemediationStep[]
  estimatedTimeline: string
  estimatedCost: number
  requiredSkills: string[]
  riskReduction: number
  businessImpact: string
  alternatives: AlternativeRemediation[]
  createdAt: string
  updatedAt: string
}

export interface AlternativeRemediation {
  id: string
  title: string
  description: string
  pros: string[]
  cons: string[]
  estimatedTimeline: string
  estimatedCost: number
  riskReduction: number
}

export interface Benchmark {
  id: string
  name: string
  industry: string
  organizationSize: OrganizationSize
  region: string
  metrics: BenchmarkMetrics
  dataPoints: number
  lastUpdated: string
  confidenceLevel: number
}

export type OrganizationSize = 'startup' | 'small' | 'medium' | 'large' | 'enterprise'

export interface BenchmarkMetrics {
  threatDetectionRate: BenchmarkValue
  vulnerabilityResolutionTime: BenchmarkValue
  complianceScore: BenchmarkValue
  securityIncidents: BenchmarkValue
  securitySpending: BenchmarkValue
}

export interface BenchmarkValue {
  percentile25: number
  percentile50: number
  percentile75: number
  percentile90: number
  average: number
  standardDeviation: number
}

export interface ComparisonData {
  id: string
  name: string
  current: SecurityMetrics
  benchmark: BenchmarkMetrics
  variance: VarianceAnalysis
  recommendations: string[]
  strengths: string[]
  weaknesses: string[]
  overallScore: number
  createdAt: string
}

export interface VarianceAnalysis {
  threatDetectionRate: VarianceResult
  vulnerabilityResolutionTime: VarianceResult
  complianceScore: VarianceResult
  securityIncidents: VarianceResult
}

export interface VarianceResult {
  current: number
  benchmark: number
  variance: number
  percentile: number
  status: 'above_average' | 'average' | 'below_average'
}

export interface HistoricalMetrics {
  id: string
  date: string
  metrics: SecurityMetrics
  events: SecurityEvent[]
  context: MetricsContext
}

export interface SecurityEvent {
  id: string
  type: EventType
  severity: EventSeverity
  timestamp: string
  description: string
  affectedSystems: string[]
  resolution?: string
  tags: string[]
}

export type EventType = 'vulnerability_discovered' | 'attack_detected' | 'policy_violation' | 'compliance_breach' | 'system_compromise' | 'remediation_completed'
export type EventSeverity = 'critical' | 'high' | 'medium' | 'low' | 'info'

export interface MetricsContext {
  environment: 'production' | 'staging' | 'development'
  region: string
  organizationChanges: string[]
  externalFactors: string[]
  dataQuality: DataQualityMetrics
}

export interface DataQualityMetrics {
  completeness: number
  accuracy: number
  consistency: number
  timeliness: number
  validity: number
}

// API Response Types
export interface APIResponse<T> {
  data: T
  status: 'success' | 'error'
  message?: string
  timestamp: string
  pagination?: PaginationInfo
}

export interface PaginationInfo {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

// Filter and Search Types
export interface AnalyticsFilters {
  timeRange?: TimePeriod
  severity?: VulnerabilitySeverity[]
  category?: VulnerabilityCategory[]
  status?: VulnerabilityStatus[]
  systems?: string[]
  tags?: string[]
  search?: string
}

export interface SortOptions {
  field: string
  direction: 'asc' | 'desc'
}

// WebSocket Types
export interface WebSocketMessage {
  type: WebSocketMessageType
  data: any
  timestamp: string
  id: string
}

export type WebSocketMessageType = 'metrics_update' | 'vulnerability_discovered' | 'threat_detected' | 'system_alert' | 'report_ready' | 'scan_completed'

// Error Types
export interface AnalyticsError {
  code: string
  message: string
  details?: Record<string, any>
  timestamp: string
  requestId?: string
}

// Configuration Types
export interface AnalyticsConfig {
  refreshInterval: number
  maxDataPoints: number
  defaultTimeRange: TimePeriod
  enableRealTime: boolean
  enableNotifications: boolean
  theme: 'light' | 'dark' | 'auto'
  locale: string
  timezone: string
}