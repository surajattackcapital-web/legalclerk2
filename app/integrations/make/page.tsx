import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Make() {
  const features = [
    {
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface for creating complex legal automation workflows.',
      icon: '🎨'
    },
    {
      title: 'Advanced Data Processing',
      description: 'Powerful data transformation and processing capabilities for legal documents.',
      icon: '⚙️'
    },
    {
      title: 'Conditional Logic',
      description: 'Smart decision-making based on case type, client status, and other factors.',
      icon: '🧠'
    },
    {
      title: 'Error Handling',
      description: 'Robust error handling and retry mechanisms for reliable automation.',
      icon: '🛡️'
    },
    {
      title: 'Advanced Scheduling',
      description: 'Complex scheduling and timing controls for legal process automation.',
      icon: '⏰'
    },
    {
      title: 'Custom Modules',
      description: 'Build custom modules for specialized legal processes and integrations.',
      icon: '🔧'
    }
  ]

  const useCases = [
    {
      title: 'Complex Case Routing',
      description: 'Route cases based on multiple criteria including practice area, urgency, and attorney availability.',
      icon: '🔄'
    },
    {
      title: 'Document Processing',
      description: 'Automatically process and categorize legal documents based on content and metadata.',
      icon: '📄'
    },
    {
      title: 'Client Communication',
      description: 'Send personalized communications based on case status and client preferences.',
      icon: '💬'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Monitor case deadlines and compliance requirements with automated alerts.',
      icon: '📅'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-violet-100 to-purple-100">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">Make (Integromat) Integration</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Advanced visual automation platform for complex legal workflows. 
                Build sophisticated automations with drag-and-drop simplicity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary btn-mobile">
                  Get Started
                </Link>
                <Link href="/contact" className="btn-secondary btn-mobile">
                  Watch Demo
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <span className="text-primary/60 small-text">✓ Visual Builder</span>
                <span className="text-primary/60 small-text">✓ Advanced Logic</span>
                <span className="text-primary/60 small-text">✓ Custom Modules</span>
              </div>
            </div>
            <div>
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 3v6h2V5h-2zm0 8v2h2v-2h-2z"/>
                      </svg>
                    </div>
                    <p className="text-purple-600 font-semibold">Make Dashboard</p>
                    <p className="text-purple-500 text-sm">Visual workflow automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Make Integration Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Advanced automation capabilities designed for complex legal workflows.
            </p>
          </div>
          
          <div className="grid-3x3">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-primary/80 small-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Advanced Legal Use Cases</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Complex automation scenarios that Make handles better than simple tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">{useCase.icon}</span>
                </div>
                <h3 className="mb-3">{useCase.title}</h3>
                <p className="text-primary/80 small-text">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready for Advanced Automation?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Build sophisticated legal workflows with Make's visual automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-primary text-secondary hover:bg-primary/90">
              Start Integration Setup
            </Link>
            <Link href="/contact" className="btn-primary bg-primary/20 text-primary hover:bg-primary/30">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
