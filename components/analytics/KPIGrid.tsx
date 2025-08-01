'use client'

import { TrendingUp, TrendingDown, Minus, Shield, Clock, AlertTriangle, Activity, Target, Zap, Users } from 'lucide-react'
import { SecurityMetrics, TimePeriod, TrendDirection } from '@/lib/analytics-types'

interface KPIGridProps {
  metrics: SecurityMetrics
  timeRange: TimePeriod
}

interface KPIData {
  id: string
  title: string
  value: string | number
  change: number
  trend: TrendDirection
  format: 'percentage' | 'number' | 'time' | 'currency'
  target?: number
  icon: React.ReactNode
  color: string
  description: string
}

export default function KPIGrid({ metrics, timeRange }: KPIGridProps) {
  // Generate mock trend data - replace with real calculations
  const generateTrend = (): { change: number; trend: TrendDirection } => {
    const change = (Math.random() - 0.5) * 20
    return {
      change: Math.round(change * 10) / 10,
      trend: change > 2 ? 'up' : change < -2 ? 'down' : 'stable'
    }
  }

  const kpiData: KPIData[] = [
    {
      id: 'threat-detection',
      title: 'Threat Detection Rate',
      value: metrics.threatDetectionRate,
      ...generateTrend(),
      format: 'percentage',
      target: 95,
      icon: <Shield className="w-6 h-6" />,
      color: 'text-green-600',
      description: 'Percentage of threats successfully detected and blocked'
    },
    {
      id: 'vuln-resolution',
      title: 'Avg Resolution Time',
      value: metrics.vulnerabilityResolutionTime,
      ...generateTrend(),
      format: 'time',
      target: 2,
      icon: <Clock className="w-6 h-6" />,
      color: 'text-blue-600',
      description: 'Average time to resolve critical vulnerabilities (days)'
    },
    {
      id: 'compliance-score',
      title: 'Compliance Score',
      value: metrics.complianceScore,
      ...generateTrend(),
      format: 'percentage',
      target: 90,
      icon: <Target className="w-6 h-6" />,
      color: 'text-purple-600',
      description: 'Overall compliance across security frameworks'
    },
    {
      id: 'attacks-prevented',
      title: 'Attacks Prevented',
      value: metrics.attacksPrevented,
      ...generateTrend(),
      format: 'number',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-orange-600',
      description: 'Total number of attacks prevented this period'
    },
    {
      id: 'false-positive',
      title: 'False Positive Rate',
      value: metrics.falsePosivitiveRate,
      ...generateTrend(),
      format: 'percentage',
      target: 5,
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'text-yellow-600',
      description: 'Percentage of alerts that were false positives'
    },
    {
      id: 'system-uptime',
      title: 'System Uptime',
      value: metrics.systemUptime,
      ...generateTrend(),
      format: 'percentage',
      target: 99.9,
      icon: <Activity className="w-6 h-6" />,
      color: 'text-emerald-600',
      description: 'System availability and uptime percentage'
    },
    {
      id: 'response-time',
      title: 'Avg Response Time',
      value: metrics.responseTime,
      ...generateTrend(),
      format: 'number',
      icon: <Clock className="w-6 h-6" />,
      color: 'text-indigo-600',
      description: 'Average API response time (milliseconds)'
    },
    {
      id: 'active-threats',
      title: 'Active Threats',
      value: metrics.activeThreats,
      ...generateTrend(),
      format: 'number',
      icon: <Users className="w-6 h-6" />,
      color: 'text-red-600',
      description: 'Currently active threats requiring attention'
    }
  ]

  const formatValue = (value: number | string, format: KPIData['format']) => {
    if (typeof value === 'string') return value

    switch (format) {
      case 'percentage':
        return `${value.toFixed(1)}%`
      case 'time':
        return `${value.toFixed(1)}d`
      case 'currency':
        return `$${value.toLocaleString()}`
      case 'number':
        if (value >= 1000000) {
          return `${(value / 1000000).toFixed(1)}M`
        } else if (value >= 1000) {
          return `${(value / 1000).toFixed(1)}K`
        }
        return value.toString()
      default:
        return value.toString()
    }
  }

  const getTrendIcon = (trend: TrendDirection) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />
      case 'stable':
        return <Minus className="w-4 h-4 text-gray-500" />
    }
  }

  const getTrendColor = (trend: TrendDirection, isReverse?: boolean) => {
    if (isReverse) {
      return trend === 'up' ? 'text-red-600' : trend === 'down' ? 'text-green-600' : 'text-gray-600'
    }
    return trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'
  }

  const getTargetStatus = (value: number, target: number, format: KPIData['format']) => {
    const isReverse = format === 'time' // Lower is better for time metrics
    const percentage = (value / target) * 100
    
    if (isReverse) {
      return percentage <= 100 ? 'on-target' : percentage <= 120 ? 'near-target' : 'off-target'
    } else {
      return percentage >= 100 ? 'on-target' : percentage >= 90 ? 'near-target' : 'off-target'
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiData.map((kpi) => {
        const isReverse = kpi.format === 'time' || kpi.id === 'false-positive'
        const targetStatus = kpi.target ? getTargetStatus(kpi.value as number, kpi.target, kpi.format) : null
        
        return (
          <div
            key={kpi.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-700 ${kpi.color}`}>
                {kpi.icon}
              </div>
              <div className="flex items-center gap-1">
                {getTrendIcon(kpi.trend)}
                <span className={`text-sm font-medium ${getTrendColor(kpi.trend, isReverse)}`}>
                  {kpi.change > 0 ? '+' : ''}{kpi.change}%
                </span>
              </div>
            </div>

            {/* Value */}
            <div className="mb-2">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatValue(kpi.value, kpi.format)}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {kpi.title}
              </div>
            </div>

            {/* Target Indicator */}
            {kpi.target && targetStatus && (
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Target</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {formatValue(kpi.target, kpi.format)}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      targetStatus === 'on-target'
                        ? 'bg-green-500'
                        : targetStatus === 'near-target'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{
                      width: `${Math.min(100, Math.max(10, ((kpi.value as number) / kpi.target) * 100))}%`
                    }}
                  />
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {kpi.description}
            </p>

            {/* Status Badge */}
            {targetStatus && (
              <div className="mt-3 flex justify-end">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  targetStatus === 'on-target'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : targetStatus === 'near-target'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {targetStatus === 'on-target' ? 'On Target' : targetStatus === 'near-target' ? 'Near Target' : 'Needs Attention'}
                </span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}