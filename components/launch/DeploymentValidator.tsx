'use client'

import { useState, useEffect } from 'react'
import { 
  Server,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Play,
  RefreshCw,
  Globe,
  Shield,
  Database,
  Cloud,
  GitBranch,
  Package,
  Activity,
  Zap,
  Lock,
  Eye,
  Terminal,
  FileCode,
  Settings,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckSquare,
  Square,
  Info,
  Layers
} from 'lucide-react'

interface DeploymentStage {
  id: string
  name: string
  description: string
  status: 'pending' | 'running' | 'completed' | 'failed' | 'rolled-back'
  tasks: DeploymentTask[]
  startTime?: Date
  endTime?: Date
  duration?: number
  canRollback: boolean
  environment: 'staging' | 'production'
}

interface DeploymentTask {
  id: string
  name: string
  command?: string
  validation?: ValidationCheck[]
  status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped'
  output?: string[]
  error?: string
  duration?: number
}

interface ValidationCheck {
  id: string
  name: string
  type: 'health' | 'performance' | 'security' | 'functionality'
  endpoint?: string
  expectedResponse?: any
  timeout: number
  retries: number
  status: 'pending' | 'passed' | 'failed'
  result?: any
}

interface DeploymentConfig {
  strategy: 'blue-green' | 'canary' | 'rolling' | 'direct'
  rollbackEnabled: boolean
  healthCheckInterval: number
  maxDeploymentTime: number
  autoRollbackOnFailure: boolean
  notificationChannels: string[]
}

interface DeploymentMetrics {
  deploymentTime: number
  tasksCompleted: number
  tasksFailed: number
  validationsPassed: number
  validationsFailed: number
  rollbacksPerformed: number
  lastSuccessfulDeployment?: Date
}

export default function DeploymentValidator() {
  const [deploymentStages] = useState<DeploymentStage[]>([
    {
      id: 'pre-deployment',
      name: 'Pre-Deployment Validation',
      description: 'Validate environment and dependencies before deployment',
      status: 'pending',
      canRollback: false,
      environment: 'staging',
      tasks: [
        {
          id: 'check-dependencies',
          name: 'Check Dependencies',
          command: 'npm ci --production',
          status: 'pending',
          validation: [
            {
              id: 'node-version',
              name: 'Node.js Version Check',
              type: 'functionality',
              timeout: 5000,
              retries: 1,
              status: 'pending'
            }
          ]
        },
        {
          id: 'run-tests',
          name: 'Run Integration Tests',
          command: 'npm run test:integration',
          status: 'pending'
        },
        {
          id: 'build-assets',
          name: 'Build Production Assets',
          command: 'npm run build',
          status: 'pending'
        },
        {
          id: 'security-scan',
          name: 'Security Vulnerability Scan',
          command: 'npm audit --production',
          status: 'pending'
        }
      ]
    },
    {
      id: 'staging-deployment',
      name: 'Staging Deployment',
      description: 'Deploy to staging environment for final validation',
      status: 'pending',
      canRollback: true,
      environment: 'staging',
      tasks: [
        {
          id: 'deploy-staging',
          name: 'Deploy to Staging',
          command: 'vercel --prod --env=staging',
          status: 'pending'
        },
        {
          id: 'smoke-tests',
          name: 'Run Smoke Tests',
          status: 'pending',
          validation: [
            {
              id: 'homepage-load',
              name: 'Homepage Load Test',
              type: 'functionality',
              endpoint: 'https://staging.perfecxion.ai',
              expectedResponse: { status: 200 },
              timeout: 10000,
              retries: 3,
              status: 'pending'
            },
            {
              id: 'api-health',
              name: 'API Health Check',
              type: 'health',
              endpoint: 'https://staging.perfecxion.ai/api/health',
              expectedResponse: { status: 'healthy' },
              timeout: 5000,
              retries: 3,
              status: 'pending'
            }
          ]
        },
        {
          id: 'performance-test',
          name: 'Performance Validation',
          status: 'pending',
          validation: [
            {
              id: 'page-speed',
              name: 'Page Speed Test',
              type: 'performance',
              endpoint: 'https://staging.perfecxion.ai',
              timeout: 30000,
              retries: 2,
              status: 'pending'
            }
          ]
        }
      ]
    },
    {
      id: 'production-deployment',
      name: 'Production Deployment',
      description: 'Deploy to production with blue-green strategy',
      status: 'pending',
      canRollback: true,
      environment: 'production',
      tasks: [
        {
          id: 'blue-green-switch',
          name: 'Blue-Green Deployment',
          command: 'vercel alias production-green production',
          status: 'pending'
        },
        {
          id: 'dns-update',
          name: 'DNS Update & Propagation',
          status: 'pending',
          validation: [
            {
              id: 'dns-propagation',
              name: 'DNS Propagation Check',
              type: 'functionality',
              timeout: 60000,
              retries: 5,
              status: 'pending'
            }
          ]
        },
        {
          id: 'ssl-validation',
          name: 'SSL Certificate Validation',
          status: 'pending',
          validation: [
            {
              id: 'ssl-check',
              name: 'SSL Certificate Valid',
              type: 'security',
              endpoint: 'https://perfecxion.ai',
              timeout: 10000,
              retries: 2,
              status: 'pending'
            }
          ]
        },
        {
          id: 'cdn-purge',
          name: 'CDN Cache Purge',
          command: 'vercel cache purge',
          status: 'pending'
        }
      ]
    },
    {
      id: 'post-deployment',
      name: 'Post-Deployment Validation',
      description: 'Validate production deployment and monitor initial performance',
      status: 'pending',
      canRollback: true,
      environment: 'production',
      tasks: [
        {
          id: 'health-checks',
          name: 'Production Health Checks',
          status: 'pending',
          validation: [
            {
              id: 'prod-uptime',
              name: 'Production Uptime Check',
              type: 'health',
              endpoint: 'https://perfecxion.ai/health',
              expectedResponse: { status: 'healthy' },
              timeout: 5000,
              retries: 3,
              status: 'pending'
            },
            {
              id: 'critical-paths',
              name: 'Critical User Paths',
              type: 'functionality',
              timeout: 30000,
              retries: 2,
              status: 'pending'
            }
          ]
        },
        {
          id: 'monitoring-activation',
          name: 'Activate Monitoring',
          command: 'npm run monitoring:activate',
          status: 'pending'
        },
        {
          id: 'performance-baseline',
          name: 'Establish Performance Baseline',
          status: 'pending',
          validation: [
            {
              id: 'core-web-vitals',
              name: 'Core Web Vitals Check',
              type: 'performance',
              endpoint: 'https://perfecxion.ai',
              timeout: 60000,
              retries: 1,
              status: 'pending'
            }
          ]
        }
      ]
    }
  ])

  const [config] = useState<DeploymentConfig>({
    strategy: 'blue-green',
    rollbackEnabled: true,
    healthCheckInterval: 30,
    maxDeploymentTime: 3600,
    autoRollbackOnFailure: true,
    notificationChannels: ['email', 'slack', 'pagerduty']
  })

  const [currentStage, setCurrentStage] = useState<string | null>(null)
  const [deploymentResults, setDeploymentResults] = useState<Map<string, DeploymentStage>>(new Map())
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploymentLog, setDeploymentLog] = useState<string[]>([])
  const [metrics, setMetrics] = useState<DeploymentMetrics>({
    deploymentTime: 0,
    tasksCompleted: 0,
    tasksFailed: 0,
    validationsPassed: 0,
    validationsFailed: 0,
    rollbacksPerformed: 0
  })

  const addLog = (message: string, type: 'info' | 'success' | 'error' | 'warning' = 'info') => {
    const timestamp = new Date().toLocaleTimeString()
    const icon = type === 'success' ? '✅' : 
                type === 'error' ? '❌' : 
                type === 'warning' ? '⚠️' : 'ℹ️'
    setDeploymentLog(prev => [...prev, `[${timestamp}] ${icon} ${message}`])
  }

  const startDeployment = async () => {
    setIsDeploying(true)
    setDeploymentLog([])
    setDeploymentResults(new Map())
    const startTime = Date.now()

    addLog('Starting deployment process...', 'info')
    
    try {
      for (const stage of deploymentStages) {
        setCurrentStage(stage.id)
        addLog(`Starting stage: ${stage.name}`, 'info')
        
        const stageResult = await executeStage(stage)
        setDeploymentResults(prev => new Map(prev).set(stage.id, stageResult))
        
        if (stageResult.status === 'failed') {
          addLog(`Stage failed: ${stage.name}`, 'error')
          
          if (config.autoRollbackOnFailure && stage.canRollback) {
            addLog('Initiating automatic rollback...', 'warning')
            await performRollback(stage.id)
          }
          
          break
        }
        
        addLog(`Stage completed: ${stage.name}`, 'success')
      }
      
      const endTime = Date.now()
      const deploymentTime = Math.floor((endTime - startTime) / 1000)
      
      setMetrics(prev => ({
        ...prev,
        deploymentTime,
        lastSuccessfulDeployment: new Date()
      }))
      
      addLog(`Deployment completed in ${deploymentTime}s`, 'success')
      
    } catch (error) {
      addLog(`Deployment error: ${error}`, 'error')
    } finally {
      setIsDeploying(false)
      setCurrentStage(null)
    }
  }

  const executeStage = async (stage: DeploymentStage): Promise<DeploymentStage> => {
    const updatedStage = { ...stage, status: 'running' as DeploymentStage['status'], startTime: new Date() }
    const updatedTasks: DeploymentTask[] = []

    for (const task of stage.tasks) {
      addLog(`Executing task: ${task.name}`, 'info')
      
      const taskResult = await executeTask(task)
      updatedTasks.push(taskResult)
      
      if (taskResult.status === 'completed') {
        setMetrics(prev => ({ ...prev, tasksCompleted: prev.tasksCompleted + 1 }))
      } else if (taskResult.status === 'failed') {
        setMetrics(prev => ({ ...prev, tasksFailed: prev.tasksFailed + 1 }))
        
        // Stop stage execution on critical task failure
        updatedStage.status = 'failed'
        break
      }
    }

    updatedStage.tasks = updatedTasks
    updatedStage.endTime = new Date()
    updatedStage.duration = updatedStage.endTime.getTime() - updatedStage.startTime.getTime()
    
    if (updatedStage.status !== 'failed') {
      updatedStage.status = 'completed'
    }

    return updatedStage
  }

  const executeTask = async (task: DeploymentTask): Promise<DeploymentTask> => {
    // Simulate task execution
    await new Promise(resolve => setTimeout(resolve, Math.random() * 3000 + 1000))
    
    const success = Math.random() > 0.1 // 90% success rate simulation
    
    const updatedTask: DeploymentTask = {
      ...task,
      status: success ? 'completed' : 'failed',
      duration: Math.floor(Math.random() * 5000 + 1000),
      output: success ? 
        [`${task.name} completed successfully`, 'All checks passed'] : 
        [`${task.name} failed`],
      error: success ? undefined : 'Task execution failed'
    }

    // Run validations if present
    if (task.validation && success) {
      const validationResults = await runValidations(task.validation)
      updatedTask.validation = validationResults
      
      const allPassed = validationResults.every(v => v.status === 'passed')
      if (!allPassed) {
        updatedTask.status = 'failed'
        updatedTask.error = 'Validation checks failed'
      }
    }

    return updatedTask
  }

  const runValidations = async (validations: ValidationCheck[]): Promise<ValidationCheck[]> => {
    const results: ValidationCheck[] = []
    
    for (const validation of validations) {
      // Simulate validation execution
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 500))
      
      const passed = Math.random() > 0.2 // 80% pass rate
      
      const result: ValidationCheck = {
        ...validation,
        status: passed ? 'passed' : 'failed',
        result: passed ? validation.expectedResponse : { error: 'Validation failed' }
      }
      
      results.push(result)
      
      if (passed) {
        setMetrics(prev => ({ ...prev, validationsPassed: prev.validationsPassed + 1 }))
      } else {
        setMetrics(prev => ({ ...prev, validationsFailed: prev.validationsFailed + 1 }))
      }
    }
    
    return results
  }

  const performRollback = async (stageId: string) => {
    addLog(`Rolling back stage: ${stageId}`, 'warning')
    
    // Simulate rollback
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setDeploymentResults(prev => {
      const stage = prev.get(stageId)
      if (stage) {
        return new Map(prev).set(stageId, {
          ...stage,
          status: 'rolled-back'
        })
      }
      return prev
    })
    
    setMetrics(prev => ({ ...prev, rollbacksPerformed: prev.rollbacksPerformed + 1 }))
    addLog(`Rollback completed for stage: ${stageId}`, 'success')
  }

  const getStageIcon = (stage: DeploymentStage) => {
    switch (stage.id) {
      case 'pre-deployment': return <Package className="w-5 h-5" />
      case 'staging-deployment': return <Layers className="w-5 h-5" />
      case 'production-deployment': return <Globe className="w-5 h-5" />
      case 'post-deployment': return <Activity className="w-5 h-5" />
      default: return <Server className="w-5 h-5" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />
      case 'running': return <Clock className="w-5 h-5 text-blue-600 animate-spin" />
      case 'rolled-back': return <RotateCcw className="w-5 h-5 text-yellow-600" />
      default: return <Square className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'failed': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'running': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'rolled-back': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const formatDuration = (ms?: number) => {
    if (!ms) return '0s'
    const seconds = Math.floor(ms / 1000)
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <Server className="w-8 h-8 mr-3 text-blue-600" />
                Deployment Automation & Validation
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Automated deployment pipeline with validation and rollback
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={startDeployment}
                disabled={isDeploying}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isDeploying ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                <span>{isDeploying ? 'Deploying...' : 'Start Deployment'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Deployment Configuration */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Deployment Configuration</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Strategy</h3>
              <div className="flex items-center space-x-2">
                <GitBranch className="w-5 h-5 text-blue-600" />
                <span className="text-gray-800 dark:text-gray-200 font-medium capitalize">
                  {config.strategy.replace('-', ' ')}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Rollback</h3>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-800 dark:text-gray-200">
                  {config.rollbackEnabled ? 'Enabled' : 'Disabled'}
                  {config.autoRollbackOnFailure && ' (Auto)'}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Health Checks</h3>
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-green-600" />
                <span className="text-gray-800 dark:text-gray-200">
                  Every {config.healthCheckInterval}s
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Deployment Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{metrics.tasksCompleted}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tasks Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{metrics.tasksFailed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tasks Failed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{metrics.validationsPassed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Validations Passed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{metrics.rollbacksPerformed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Rollbacks</div>
            </div>
          </div>
          {metrics.lastSuccessfulDeployment && (
            <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
              Last successful deployment: {metrics.lastSuccessfulDeployment.toLocaleString()}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Deployment Stages */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <h2 className="text-xl font-semibold dark:text-white">Deployment Pipeline</h2>
              </div>

              <div className="p-6">
                {deploymentStages.map((stage, index) => {
                  const stageResult = deploymentResults.get(stage.id) || stage
                  const isActive = currentStage === stage.id

                  return (
                    <div key={stage.id}>
                      <div className={`border rounded-lg p-6 ${
                        isActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 
                        'border-gray-200 dark:border-gray-700'
                      }`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            {getStatusIcon(stageResult.status)}
                            {getStageIcon(stage)}
                            <div>
                              <h3 className="font-semibold dark:text-white">{stage.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {stage.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              getStatusColor(stageResult.status)
                            }`}>
                              {stageResult.status}
                            </span>
                            <span className="px-2 py-1 rounded text-xs font-semibold text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                              {stage.environment}
                            </span>
                          </div>
                        </div>

                        {/* Tasks */}
                        <div className="space-y-2">
                          {stageResult.tasks.map((task) => (
                            <div key={task.id} className="ml-8 flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700/50">
                              <div className="flex items-center space-x-2">
                                {task.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-600" />}
                                {task.status === 'failed' && <XCircle className="w-4 h-4 text-red-600" />}
                                {task.status === 'running' && <Clock className="w-4 h-4 text-blue-600 animate-spin" />}
                                {task.status === 'pending' && <Square className="w-4 h-4 text-gray-400" />}
                                <span className="text-sm text-gray-700 dark:text-gray-300">{task.name}</span>
                              </div>
                              {task.duration && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {formatDuration(task.duration)}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Stage Duration */}
                        {stageResult.duration && (
                          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            Duration: {formatDuration(stageResult.duration)}
                          </div>
                        )}

                        {/* Rollback Button */}
                        {stage.canRollback && stageResult.status === 'completed' && (
                          <div className="mt-4">
                            <button
                              onClick={() => performRollback(stage.id)}
                              className="text-sm text-yellow-600 hover:text-yellow-700 flex items-center space-x-1"
                            >
                              <RotateCcw className="w-4 h-4" />
                              <span>Rollback Stage</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {index < deploymentStages.length - 1 && (
                        <div className="flex justify-center my-2">
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Deployment Log */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <h3 className="font-semibold text-lg dark:text-white flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  Deployment Log
                </h3>
              </div>
              
              <div className="p-6">
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-green-400 h-96 overflow-y-auto">
                  {deploymentLog.length === 0 ? (
                    <div className="text-gray-500">Waiting for deployment to start...</div>
                  ) : (
                    deploymentLog.map((log, index) => (
                      <div key={index} className="mb-1">{log}</div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}