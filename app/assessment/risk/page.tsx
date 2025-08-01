'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import RiskAssessment from '@/components/assessment/RiskAssessment'
import ThreatSimulator from '@/components/assessment/ThreatSimulator'
import MaturityAssessment from '@/components/assessment/MaturityAssessment'
import { Shield, AlertTriangle, TrendingUp, BarChart } from 'lucide-react'

export default function RiskAssessmentPage() {
  const [activeTab, setActiveTab] = useState('risk-assessment')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI Security Assessment Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Evaluate your AI security posture, explore threat scenarios, and get personalized recommendations 
              to strengthen your defenses.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[600px] mx-auto">
            <TabsTrigger value="risk-assessment" className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              <span className="hidden sm:inline">Risk Assessment</span>
              <span className="sm:hidden">Risk</span>
            </TabsTrigger>
            <TabsTrigger value="threat-simulator" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="hidden sm:inline">Threat Simulator</span>
              <span className="sm:hidden">Threats</span>
            </TabsTrigger>
            <TabsTrigger value="maturity-assessment" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Maturity Assessment</span>
              <span className="sm:hidden">Maturity</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="risk-assessment" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    AI Risk Assessment Calculator
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Answer questions about your AI usage to receive a personalized risk score and recommendations
                  </p>
                </div>
              </div>
              <RiskAssessment />
            </div>
          </TabsContent>

          <TabsContent value="threat-simulator" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Interactive Threat Simulator
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Experience common AI attacks in a safe environment and learn how to defend against them
                  </p>
                </div>
              </div>
              <ThreatSimulator />
            </div>
          </TabsContent>

          <TabsContent value="maturity-assessment" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Security Maturity Assessment
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Evaluate your AI security program maturity and get a roadmap for improvement
                  </p>
                </div>
              </div>
              <MaturityAssessment />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}