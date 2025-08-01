'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ThreatSimulator from './ThreatSimulator'
import RiskAssessment from './RiskAssessment'
import MaturityAssessment from './MaturityAssessment'
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react'

export default function SecurityPlayground() {
  const [activeTab, setActiveTab] = useState('threat-simulator')

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800 dark:text-amber-200">
            <p className="font-semibold mb-1">Safe Testing Environment</p>
            <p>All simulations run in an isolated sandbox. No actual attacks are performed, and no real systems are affected.</p>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="threat-simulator" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Threat Simulator
          </TabsTrigger>
          <TabsTrigger value="risk-assessment" className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Risk Assessment
          </TabsTrigger>
          <TabsTrigger value="maturity-assessment" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Maturity Assessment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="threat-simulator">
          <ThreatSimulator />
        </TabsContent>

        <TabsContent value="risk-assessment">
          <RiskAssessment />
        </TabsContent>

        <TabsContent value="maturity-assessment">
          <MaturityAssessment />
        </TabsContent>
      </Tabs>
    </div>
  )
}