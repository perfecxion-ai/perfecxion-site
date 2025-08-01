export type QuestionType = 'single' | 'multiple' | 'scale' | 'text'
export type RiskLevel = 'minimal' | 'low' | 'medium' | 'high' | 'critical'
export type MaturityLevel = 1 | 2 | 3 | 4 | 5

export interface AssessmentQuestion {
  id: string
  category: string
  text: string
  type: QuestionType
  options?: QuestionOption[]
  required: boolean
  weight: number
  dependsOn?: {
    questionId: string
    value: string | string[]
  }
}

export interface QuestionOption {
  value: string
  label: string
  riskScore: number
  description?: string
}

export interface AssessmentResponse {
  questionId: string
  value: string | string[] | number
  timestamp: Date
}

export interface RiskFactor {
  category: string
  score: number
  weight: number
  findings: string[]
  recommendations: string[]
}

export interface RiskAssessmentResult {
  overallScore: number
  riskLevel: RiskLevel
  factors: RiskFactor[]
  topVulnerabilities: string[]
  prioritizedActions: RecommendedAction[]
  complianceGaps: ComplianceGap[]
  estimatedRemediationTime: string
  estimatedCost: {
    min: number
    max: number
  }
}

export interface RecommendedAction {
  priority: 'critical' | 'high' | 'medium' | 'low'
  title: string
  description: string
  effort: 'low' | 'medium' | 'high'
  impact: 'low' | 'medium' | 'high'
  timeframe: string
  resources: string[]
}

export interface ComplianceGap {
  framework: string
  requirement: string
  currentState: string
  gap: string
  remediation: string
}

export interface ThreatScenario {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  steps: SimulationStep[]
  learningObjectives: string[]
  realWorldExamples: string[]
}

export interface SimulationStep {
  id: string
  title: string
  description: string
  action: string
  expectedResult: string
  actualResult?: string
  success?: boolean
  explanation: string
}

export interface MaturityDimension {
  id: string
  name: string
  description: string
  currentLevel: MaturityLevel
  targetLevel: MaturityLevel
  gaps: string[]
  improvements: string[]
  metrics: MaturityMetric[]
}

export interface MaturityMetric {
  name: string
  current: number
  target: number
  unit: string
  trend: 'improving' | 'stable' | 'declining'
}

export interface MaturityAssessmentResult {
  overallLevel: MaturityLevel
  dimensions: MaturityDimension[]
  strengths: string[]
  weaknesses: string[]
  roadmap: MaturityRoadmapItem[]
  benchmarkComparison: BenchmarkData
}

export interface MaturityRoadmapItem {
  phase: number
  title: string
  duration: string
  objectives: string[]
  deliverables: string[]
  dependencies: string[]
  estimatedCost: {
    min: number
    max: number
  }
  resources: {
    internal: number
    external: number
  }
}

export interface BenchmarkData {
  industryAverage: number
  topPerformers: number
  yourScore: number
  percentile: number
  peerComparison: {
    category: string
    yourScore: number
    peerAverage: number
  }[]
}