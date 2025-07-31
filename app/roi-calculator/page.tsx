'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState({
    // Organization metrics
    numAIModels: 10,
    numDataScientists: 5,
    avgAnnualSalary: 150000,
    hoursPerIncident: 40,
    incidentsPerYear: 12,
    
    // Current costs
    currentSecuritySpend: 100000,
    dataBreachCost: 500000,
    compliancePenalties: 250000,
    reputationDamage: 1000000,
    
    // Implementation factors
    deploymentSize: 'medium',
    industryRegulated: true,
    currentMaturity: 'low'
  })

  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const calculateROI = () => {
    // Cost savings calculations
    const laborSavings = inputs.numDataScientists * inputs.avgAnnualSalary * 0.3 // 30% productivity gain
    const incidentReduction = inputs.incidentsPerYear * inputs.hoursPerIncident * (inputs.avgAnnualSalary / 2080) * 0.7 // 70% reduction
    const breachPrevention = inputs.dataBreachCost * 0.85 // 85% reduction in breach risk
    const complianceImprovement = inputs.industryRegulated ? inputs.compliancePenalties * 0.9 : 0 // 90% reduction
    const reputationProtection = inputs.reputationDamage * 0.6 // 60% risk mitigation
    
    // Platform costs (estimated)
    const platformCost = inputs.deploymentSize === 'small' ? 50000 : 
                        inputs.deploymentSize === 'medium' ? 150000 : 300000
    
    const totalSavings = laborSavings + incidentReduction + breachPrevention + 
                        complianceImprovement + reputationProtection
    const netBenefit = totalSavings - platformCost
    const roi = ((netBenefit / platformCost) * 100).toFixed(0)
    const paybackMonths = (platformCost / (totalSavings / 12)).toFixed(1)
    
    return {
      laborSavings,
      incidentReduction,
      breachPrevention,
      complianceImprovement,
      reputationProtection,
      totalSavings,
      platformCost,
      netBenefit,
      roi,
      paybackMonths
    }
  }

  const results = calculateROI()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-white dark:bg-gray-950 py-16">
      <Container>
        <SectionHeader
          title="AI Security ROI Calculator"
          subtitle="Calculate your potential return on investment with perfecXion.ai"
          centered
        />
        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Your Organization</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Number of AI Models in Production</label>
                  <input
                    type="number"
                    value={inputs.numAIModels}
                    onChange={(e) => handleInputChange('numAIModels', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Number of Data Scientists / ML Engineers</label>
                  <input
                    type="number"
                    value={inputs.numDataScientists}
                    onChange={(e) => handleInputChange('numDataScientists', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Average Annual Salary (USD)</label>
                  <input
                    type="number"
                    value={inputs.avgAnnualSalary}
                    onChange={(e) => handleInputChange('avgAnnualSalary', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Hours Spent Per Security Incident</label>
                  <input
                    type="number"
                    value={inputs.hoursPerIncident}
                    onChange={(e) => handleInputChange('hoursPerIncident', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Security Incidents Per Year</label>
                  <input
                    type="number"
                    value={inputs.incidentsPerYear}
                    onChange={(e) => handleInputChange('incidentsPerYear', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Deployment Size</label>
                  <select
                    value={inputs.deploymentSize}
                    onChange={(e) => handleInputChange('deploymentSize', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    <option value="small">Small (1-50 models)</option>
                    <option value="medium">Medium (51-200 models)</option>
                    <option value="large">Large (200+ models)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Regulated Industry?</label>
                  <select
                    value={inputs.industryRegulated.toString()}
                    onChange={(e) => handleInputChange('industryRegulated', e.target.value === 'true')}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <Button 
                  onClick={() => setShowResults(true)}
                  className="w-full"
                >
                  Calculate ROI
                </Button>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Your ROI Analysis</h2>
              
              {showResults ? (
                <div className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-2">Total ROI</h3>
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400">{results.roi}%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Payback Period: {results.paybackMonths} months
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Annual Savings Breakdown</h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Labor Productivity Gains</span>
                        <span className="font-medium">{formatCurrency(results.laborSavings)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Incident Response Reduction</span>
                        <span className="font-medium">{formatCurrency(results.incidentReduction)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Breach Prevention Savings</span>
                        <span className="font-medium">{formatCurrency(results.breachPrevention)}</span>
                      </div>
                      {inputs.industryRegulated && (
                        <div className="flex justify-between">
                          <span className="text-sm">Compliance Risk Mitigation</span>
                          <span className="font-medium">{formatCurrency(results.complianceImprovement)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-sm">Reputation Protection Value</span>
                        <span className="font-medium">{formatCurrency(results.reputationProtection)}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between font-semibold">
                        <span>Total Annual Savings</span>
                        <span className="text-green-600 dark:text-green-400">
                          {formatCurrency(results.totalSavings)}
                        </span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span>perfecXion.ai Investment</span>
                        <span>{formatCurrency(results.platformCost)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                        <span>Net Annual Benefit</span>
                        <span className="text-green-600 dark:text-green-400">
                          {formatCurrency(results.netBenefit)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-semibold mb-3">Additional Benefits</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Faster AI model deployment cycles
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Improved customer trust and retention
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Competitive advantage through secure AI
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Reduced insurance premiums
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>Enter your organization details and click "Calculate ROI" to see your potential savings</p>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          {showResults && (
            <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Secure Your AI and Save {formatCurrency(results.netBenefit)}?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Get a personalized demo and detailed ROI analysis for your organization
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Download Full Report
                </Button>
                <Button variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Schedule Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}