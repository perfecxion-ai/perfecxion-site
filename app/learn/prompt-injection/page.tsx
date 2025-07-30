import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prompt Injection Attacks - AI Security Learning Center | perfecXion.ai',
  description: 'Master defending against prompt injection attacks. Learn detection techniques, prevention strategies, and real-world defense implementations for LLMs.',
  keywords: 'prompt injection, LLM security, jailbreak attacks, prompt manipulation, AI security, indirect prompt injection, prompt defense',
}

export default function PromptInjectionPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-6">
        Prompt Injection Attacks
      </h1>
      <p className="text-xl text-gray-300 mb-12 leading-relaxed">
        Master defending against prompt injection attacks. Learn detection techniques, prevention strategies, and real-world defense implementations for LLMs and AI systems.
      </p>
      
      <div className="prose prose-invert max-w-none">
        <h2>Coming Soon</h2>
        <p>This comprehensive guide to prompt injection defense is being prepared. Check back soon for in-depth content covering:</p>
        <ul>
          <li>Understanding prompt injection attack vectors</li>
          <li>Direct vs indirect injection techniques</li>
          <li>Jailbreak detection and prevention</li>
          <li>Input validation and sanitization</li>
          <li>Output filtering and monitoring</li>
          <li>Real-world attack scenarios</li>
          <li>Defense implementation strategies</li>
          <li>Best practices and compliance</li>
        </ul>
      </div>
    </div>
  )
}