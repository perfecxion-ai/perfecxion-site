import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Clock,
  CheckCircle,
  Circle,
  ArrowRight,
  Calendar,
  Users,
  Settings,
  Rocket,
  Shield,
  BarChart3,
  AlertTriangle,
  BookOpen,
  Zap,
  Building
} from "lucide-react"
import { Product } from "@/lib/products"

interface ImplementationTimelineProps {
  product: Product
  customTimeline?: TimelinePhase[]
}

interface TimelinePhase {
  id: string
  name: string
  duration: string
  description: string
  deliverables: string[]
  dependencies?: string[]
  resources: string[]
  status?: 'completed' | 'in-progress' | 'pending'
}

export function ImplementationTimeline({ product, customTimeline }: ImplementationTimelineProps) {
  // Generate timeline based on product characteristics
  const generateTimeline = (): TimelinePhase[] => {
    const baseTimeline: TimelinePhase[] = [
      {
        id: 'planning',
        name: 'Planning & Assessment',
        duration: '1-2 weeks',
        description: 'Initial consultation, requirements gathering, and implementation planning',
        deliverables: [
          'Technical requirements document',
          'Integration architecture plan',
          'Project timeline and milestones',
          'Resource allocation plan'
        ],
        resources: ['Solutions Architect', 'Technical Consultant'],
        status: 'completed'
      },
      {
        id: 'setup',
        name: 'Environment Setup',
        duration: '1 week',
        description: 'Prepare development and staging environments with necessary configurations',
        deliverables: [
          'Development environment configured',
          'Staging environment ready',
          'API keys and credentials issued',
          'Initial security configurations'
        ],
        dependencies: ['planning'],
        resources: ['DevOps Engineer', 'Security Specialist'],
        status: 'completed'
      },
      {
        id: 'integration',
        name: 'Core Integration',
        duration: '2-3 weeks',
        description: 'Implement core functionality and integrate with existing systems',
        deliverables: [
          'SDK integration completed',
          'Core features implemented',
          'Authentication configured',
          'Basic monitoring setup'
        ],
        dependencies: ['setup'],
        resources: ['Senior Developer', 'Integration Specialist'],
        status: 'in-progress'
      },
      {
        id: 'testing',
        name: 'Testing & Validation',
        duration: '1-2 weeks',
        description: 'Comprehensive testing including security, performance, and integration tests',
        deliverables: [
          'Test suite execution',
          'Security assessment report',
          'Performance benchmarks',
          'Integration validation'
        ],
        dependencies: ['integration'],
        resources: ['QA Engineer', 'Security Auditor'],
        status: 'pending'
      },
      {
        id: 'deployment',
        name: 'Production Deployment',
        duration: '1 week',
        description: 'Deploy to production environment with monitoring and alerting',
        deliverables: [
          'Production deployment',
          'Monitoring dashboards',
          'Alerting configuration',
          'Documentation handover'
        ],
        dependencies: ['testing'],
        resources: ['DevOps Engineer', 'Site Reliability Engineer'],
        status: 'pending'
      },
      {
        id: 'training',
        name: 'Training & Handover',
        duration: '1 week',
        description: 'Team training and knowledge transfer for ongoing operations',
        deliverables: [
          'Team training sessions',
          'Operational documentation',
          'Support procedures',
          'Go-live checklist'
        ],
        dependencies: ['deployment'],
        resources: ['Training Specialist', 'Technical Writer'],
        status: 'pending'
      }
    ]

    // Customize timeline based on product type
    switch (product.category) {
      case 'AI Security Testing':
      case 'Red Team Testing':
        return [
          ...baseTimeline,
          {
            id: 'security-tuning',
            name: 'Security Configuration',
            duration: '1 week',
            description: 'Fine-tune security settings and configure attack scenarios',
            deliverables: [
              'Attack scenario configuration',
              'Security policy setup',
              'Threat detection rules',
              'Compliance verification'
            ],
            dependencies: ['integration'],
            resources: ['Security Engineer', 'Compliance Specialist'],
            status: 'pending'
          }
        ]
      case 'Child Safety':
        return baseTimeline.map(phase => {
          if (phase.id === 'integration') {
            return {
              ...phase,
              deliverables: [
                ...phase.deliverables,
                'Parental control features',
                'Content filtering configuration',
                'Browser extension deployment'
              ]
            }
          }
          return phase
        })
      default:
        return baseTimeline
    }
  }

  const timeline = customTimeline || generateTimeline()

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'in-progress':
        return <Circle className="h-5 w-5 text-blue-500 animate-pulse" />
      default:
        return <Circle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  const calculateProgress = () => {
    const completed = timeline.filter(phase => phase.status === 'completed').length
    const inProgress = timeline.filter(phase => phase.status === 'in-progress').length * 0.5
    return ((completed + inProgress) / timeline.length) * 100
  }

  const TimelineView = () => (
    <div className="space-y-8">
      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-500" />
            Implementation Progress
          </CardTitle>
          <CardDescription>
            Overall progress of your {product.name} implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {Math.round(calculateProgress())}% Complete
              </span>
            </div>
            <Progress value={calculateProgress()} className="h-2" />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {timeline.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {timeline.filter(p => p.status === 'in-progress').length}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">In Progress</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-600">
                  {timeline.filter(p => p.status === 'pending' || !p.status).length}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Remaining</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Steps */}
      <div className="space-y-6">
        {timeline.map((phase, index) => (
          <Card key={phase.id} className={`relative ${phase.status === 'in-progress' ? 'border-blue-500' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(phase.status)}
                  <div>
                    <CardTitle className="text-lg">{phase.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {phase.duration}
                      </Badge>
                      <Badge className={getStatusColor(phase.status)}>
                        {phase.status?.replace('-', ' ') || 'pending'}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Phase {index + 1}</div>
                </div>
              </div>
              <CardDescription>{phase.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, delIndex) => (
                      <li key={delIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    Resources
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.resources.map((resource, resIndex) => (
                      <Badge key={resIndex} variant="secondary" className="text-xs">
                        {resource}
                      </Badge>
                    ))}
                  </div>
                  {phase.dependencies && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-sm text-gray-600 dark:text-gray-400">
                        Dependencies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.dependencies.map((dep, depIndex) => (
                          <Badge key={depIndex} variant="outline" className="text-xs">
                            {timeline.find(p => p.id === dep)?.name || dep}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Implementation Timeline
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Step-by-step roadmap for implementing {product.name} in your organization
            </p>
          </div>

          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="timeline">Implementation Steps</TabsTrigger>
              <TabsTrigger value="planning">Planning Guide</TabsTrigger>
              <TabsTrigger value="support">Support Options</TabsTrigger>
            </TabsList>

            <TabsContent value="timeline" className="mt-8">
              <TimelineView />
            </TabsContent>

            <TabsContent value="planning" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-purple-500" />
                      Pre-Implementation Checklist
                    </CardTitle>
                    <CardDescription>
                      Essential preparation steps before starting implementation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Technical Requirements</h4>
                        <ul className="space-y-2">
                          {[
                            'API access and authentication setup',
                            'Development environment preparation',
                            'Network security and firewall configuration',
                            'Database and storage requirements',
                            'Monitoring and logging infrastructure'
                          ].map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Team Preparation</h4>
                        <ul className="space-y-2">
                          {[
                            'Identify key stakeholders and project owners',
                            'Assign technical team members and roles',
                            'Schedule training sessions and workshops',
                            'Establish communication channels',
                            'Define success criteria and KPIs'
                          ].map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Users className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        Common Challenges
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="text-sm">
                          <strong>Integration Complexity:</strong> Ensure adequate time for custom integrations
                        </li>
                        <li className="text-sm">
                          <strong>Data Migration:</strong> Plan for existing data validation and migration
                        </li>
                        <li className="text-sm">
                          <strong>Team Training:</strong> Allow sufficient time for team onboarding
                        </li>
                        <li className="text-sm">
                          <strong>Change Management:</strong> Prepare for workflow adjustments
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-green-500" />
                        Success Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="text-sm">
                          <strong>Start Small:</strong> Begin with a pilot project or limited scope
                        </li>
                        <li className="text-sm">
                          <strong>Frequent Testing:</strong> Test early and often throughout implementation
                        </li>
                        <li className="text-sm">
                          <strong>Documentation:</strong> Maintain detailed documentation throughout
                        </li>
                        <li className="text-sm">
                          <strong>Stakeholder Engagement:</strong> Keep stakeholders informed and involved
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Self-Service</CardTitle>
                    <CardDescription className="text-center">
                      For technical teams with implementation experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold mb-4">Included</div>
                    <ul className="text-sm space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Comprehensive documentation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Community support forum
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Video tutorials and guides
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-purple-500 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-center">Guided Implementation</CardTitle>
                    <CardDescription className="text-center">
                      Expert-led implementation with dedicated support
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold mb-4">$5,000</div>
                    <ul className="text-sm space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Dedicated implementation manager
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Weekly progress calls
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Custom integration support
                      </li>
                    </ul>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Contact Sales
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Enterprise Concierge</CardTitle>
                    <CardDescription className="text-center">
                      White-glove service with custom requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold mb-4">Custom</div>
                    <ul className="text-sm space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Full-service implementation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Custom feature development
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Dedicated customer success manager
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      <Building className="mr-2 h-4 w-4" />
                      Enterprise Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}