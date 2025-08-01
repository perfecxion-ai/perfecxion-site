'use client'

import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns'
import { TimePeriod, AnalyticsFilters, TrendDataPoint } from '@/lib/analytics-types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Filler
)

interface TrendAnalysisChartProps {
  timeRange: TimePeriod
  filters: AnalyticsFilters
}

interface TrendData {
  threatDetection: TrendDataPoint[]
  vulnerabilities: TrendDataPoint[]
  compliance: TrendDataPoint[]
  responseTime: TrendDataPoint[]
}

export default function TrendAnalysisChart({ timeRange, filters }: TrendAnalysisChartProps) {
  const [trendData, setTrendData] = useState<TrendData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([
    'threatDetection',
    'vulnerabilities',
    'compliance'
  ])

  // Generate mock trend data
  const generateTrendData = (timeRange: TimePeriod): TrendData => {
    const now = new Date()
    const intervals = timeRange === '1h' ? 12 : timeRange === '24h' ? 24 : timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90
    const timeInterval = timeRange === '1h' ? 5 * 60 * 1000 : // 5 minutes
                        timeRange === '24h' ? 60 * 60 * 1000 : // 1 hour
                        timeRange === '7d' ? 24 * 60 * 60 * 1000 : // 1 day
                        timeRange === '30d' ? 24 * 60 * 60 * 1000 : // 1 day
                        7 * 24 * 60 * 60 * 1000 // 1 week

    const generateDataPoints = (baseValue: number, variance: number): TrendDataPoint[] => {
      return Array.from({ length: intervals }, (_, i) => {
        const timestamp = new Date(now.getTime() - (intervals - 1 - i) * timeInterval).toISOString()
        const noise = (Math.random() - 0.5) * variance
        const trend = Math.sin((i / intervals) * Math.PI * 2) * variance * 0.3
        return {
          timestamp,
          value: Math.max(0, baseValue + noise + trend)
        }
      })
    }

    return {
      threatDetection: generateDataPoints(94.2, 8),
      vulnerabilities: generateDataPoints(15, 10),
      compliance: generateDataPoints(87.5, 5),
      responseTime: generateDataPoints(145, 50)
    }
  }

  useEffect(() => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setTrendData(generateTrendData(timeRange))
      setLoading(false)
    }, 500)
  }, [timeRange, filters])

  if (loading || !trendData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const metricConfigs = {
    threatDetection: {
      label: 'Threat Detection Rate (%)',
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      yAxisID: 'y'
    },
    vulnerabilities: {
      label: 'Active Vulnerabilities',
      borderColor: 'rgb(239, 68, 68)',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      yAxisID: 'y1'
    },
    compliance: {
      label: 'Compliance Score (%)',
      borderColor: 'rgb(147, 51, 234)',
      backgroundColor: 'rgba(147, 51, 234, 0.1)',
      yAxisID: 'y'
    },
    responseTime: {
      label: 'Response Time (ms)',
      borderColor: 'rgb(249, 115, 22)',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      yAxisID: 'y2'
    }
  }

  const chartData = {
    datasets: selectedMetrics.map(metric => ({
      label: metricConfigs[metric as keyof typeof metricConfigs].label,
      data: trendData[metric as keyof TrendData].map(point => ({
        x: point.timestamp,
        y: point.value
      })),
      borderColor: metricConfigs[metric as keyof typeof metricConfigs].borderColor,
      backgroundColor: metricConfigs[metric as keyof typeof metricConfigs].backgroundColor,
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      pointRadius: 3,
      pointHoverRadius: 6,
      yAxisID: metricConfigs[metric as keyof typeof metricConfigs].yAxisID
    }))
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          color: 'rgb(107, 114, 128)'
        }
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        titleColor: 'rgb(243, 244, 246)',
        bodyColor: 'rgb(243, 244, 246)',
        borderColor: 'rgb(75, 85, 99)',
        borderWidth: 1,
        callbacks: {
          title: (context: any) => {
            return new Date(context[0].parsed.x).toLocaleString()
          },
          label: (context: any) => {
            const label = context.dataset.label || ''
            const value = context.parsed.y.toFixed(1)
            return `${label}: ${value}`
          }
        }
      }
    },
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: timeRange === '1h' ? 'minute' as const :
                timeRange === '24h' ? 'hour' as const :
                timeRange === '7d' ? 'day' as const : 'day' as const,
          displayFormats: {
            minute: 'HH:mm',
            hour: 'HH:mm',
            day: 'MMM dd'
          }
        },
        grid: {
          color: 'rgba(107, 114, 128, 0.1)'
        },
        ticks: {
          color: 'rgb(107, 114, 128)'
        }
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        grid: {
          color: 'rgba(107, 114, 128, 0.1)'
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
          callback: function(value: any) {
            return value + '%'
          }
        },
        title: {
          display: true,
          text: 'Percentage (%)',
          color: 'rgb(107, 114, 128)'
        }
      },
      y1: {
        type: 'linear' as const,
        display: selectedMetrics.includes('vulnerabilities'),
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: 'rgb(107, 114, 128)'
        },
        title: {
          display: true,
          text: 'Count',
          color: 'rgb(107, 114, 128)'
        }
      },
      y2: {
        type: 'linear' as const,
        display: selectedMetrics.includes('responseTime'),
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
          callback: function(value: any) {
            return value + 'ms'
          }
        },
        title: {
          display: true,
          text: 'Response Time (ms)',
          color: 'rgb(107, 114, 128)'
        }
      }
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 6
      }
    }
  }

  const toggleMetric = (metric: string) => {
    setSelectedMetrics(prev => 
      prev.includes(metric) 
        ? prev.filter(m => m !== metric)
        : [...prev, metric]
    )
  }

  return (
    <div className="space-y-4">
      {/* Metric Toggles */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(metricConfigs).map(([key, config]) => (
          <button
            key={key}
            onClick={() => toggleMetric(key)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedMetrics.includes(key)
                ? 'text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
            style={{
              backgroundColor: selectedMetrics.includes(key) ? config.borderColor : undefined
            }}
          >
            {config.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-64 sm:h-80">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        {selectedMetrics.map(metric => {
          const data = trendData[metric as keyof TrendData]
          const latest = data[data.length - 1]?.value || 0
          const previous = data[data.length - 2]?.value || 0
          const change = ((latest - previous) / previous * 100) || 0
          const config = metricConfigs[metric as keyof typeof metricConfigs]
          
          return (
            <div key={metric} className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {config.label}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {latest.toFixed(1)}
                {metric === 'responseTime' ? 'ms' : metric === 'vulnerabilities' ? '' : '%'}
              </div>
              <div className={`text-xs ${
                change > 0 ? 'text-red-600' : change < 0 ? 'text-green-600' : 'text-gray-500'
              }`}>
                {change > 0 ? '+' : ''}{change.toFixed(1)}%
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}