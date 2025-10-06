import Layout from '@/components/Layout'
import Link from 'next/link'

export default function N8N() {
  const features = [
    {
      title: 'Open Source Platform',
      description: 'Full control over your automation platform with open-source flexibility.',
      icon: '🔓'
    },
    {
      title: 'Custom Node Development',
      description: 'Build custom nodes for specialized legal processes and integrations.',
      icon: '🔧'
    },
    {
      title: 'Self-Hosted Option',
      description: 'Host n8n on your own infrastructure for maximum security and control.',
      icon: '🏠'
    },
    {
      title: 'Advanced Data Processing',
      description: 'Powerful data transformation and processing for complex legal workflows.',
      icon: '⚙️'
    },
    {
      title: 'API Integrations',
      description: 'Connect with any API or service through custom integrations.',
      icon: '🔗'
    },
    {
      title: 'Community Support',
      description: 'Active community and extensive documentation for custom development.',
      icon: '👥'
    }
  ]

  const benefits = [
    'Complete control over your automation platform',
    'Custom development for unique legal processes',
    'Self-hosted option for maximum security',
    'No vendor lock-in with open-source platform',
    'Extensive customization capabilities',
    'Active community support and development'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">n8n Integration</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Open-source workflow automation for custom legal integrations. 
                Build exactly what you need with full control and flexibility.
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
                <span className="text-primary/60 small-text">✓ Open Source</span>
                <span className="text-primary/60 small-text">✓ Self-Hosted</span>
                <span className="text-primary/60 small-text">✓ Custom Development</span>
              </div>
            </div>
            <div>
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2 3h4v2h-4V5zm0 4h4v2h-4V9zm0 4h4v2h-4v-2z"/>
                      </svg>
                    </div>
                    <p className="text-green-600 font-semibold">n8n Dashboard</p>
                    <p className="text-green-500 text-sm">Open-source automation</p>
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
            <h2 className="mb-4">n8n Integration Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Open-source automation platform with unlimited customization possibilities.
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

      {/* Benefits Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Why Choose n8n for Legal Automation?</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span className="text-primary/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <span className="text-2xl text-white">🔓</span>
                    </div>
                    <p className="text-indigo-600 font-semibold">Open Source</p>
                    <p className="text-indigo-500 text-sm">Full control and flexibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready for Custom Automation?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Build custom legal workflows with n8n's open-source automation platform.
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
