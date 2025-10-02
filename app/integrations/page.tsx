import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Integrations() {
  const integrations = [
    {
      title: 'Airtable',
      description: 'HIPAA-compliant database integration for client information and case management.',
      features: [
        'HIPAA-compliant data storage',
        'Automated client record creation',
        'Case status tracking',
        'Document organization',
        'Team collaboration tools'
      ],
      href: '/integrations/airtable',
      icon: '📊',
      popular: true
    },
    {
      title: 'Zapier',
      description: 'Connect with 5000+ apps to automate your legal workflow and case management.',
      features: [
        '5000+ app connections',
        'Automated workflow triggers',
        'Data synchronization',
        'Custom automation rules',
        'Multi-step workflows'
      ],
      href: '/integrations/zapier',
      icon: '🔗',
      popular: true
    },
    {
      title: 'Make (formerly Integromat)',
      description: 'Visual automation platform for complex legal workflows and data processing.',
      features: [
        'Visual workflow builder',
        'Complex data transformations',
        'Conditional logic',
        'Error handling',
        'Advanced scheduling'
      ],
      href: '/integrations/make',
      icon: '⚙️',
      popular: false
    },
    {
      title: 'n8n',
      description: 'Open-source workflow automation for custom legal integrations and processes.',
      features: [
        'Open-source platform',
        'Custom node development',
        'Self-hosted option',
        'Advanced data processing',
        'API integrations'
      ],
      href: '/integrations/n8n',
      icon: '🔧',
      popular: false
    }
  ]

  const benefits = [
    {
      title: 'Seamless Data Flow',
      description: 'Automatic synchronization between systems eliminates manual data entry.',
      icon: '🔄'
    },
    {
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and focus on high-value legal work.',
      icon: '⚡'
    },
    {
      title: 'Real-time Updates',
      description: 'Keep all systems updated in real-time with client information and case status.',
      icon: '📱'
    },
    {
      title: 'Reduced Errors',
      description: 'Eliminate manual data entry errors with automated synchronization.',
      icon: '✅'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Seamless Integrations</h1>
            <p className="text-xl text-primary/80 leading-relaxed">
              Connect LegalClerk.ai with your existing legal software and workflow tools. 
              HIPAA-compliant integrations that work with your current tech stack.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Popular Integrations</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Connect with the tools you already use to streamline your legal practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className={`card relative ${integration.popular ? 'ring-2 ring-secondary' : ''}`}>
                {integration.popular && (
                  <div className="absolute -top-4 left-4">
                    <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{integration.icon}</span>
                  </div>
                  <div>
                    <h3 className="mb-2">{integration.title}</h3>
                    <p className="text-primary/80 small-text">{integration.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {integration.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <span className="text-secondary">✓</span>
                      <span className="text-primary/80 small-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={integration.href}
                  className="text-secondary hover:text-orange-600 transition-colors font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Integrations Matter</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Seamless integrations help you work more efficiently and provide better client service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-primary/80 small-text">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Easy Setup Process</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Get your integrations up and running in minutes, not hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3">Choose Integration</h3>
              <p className="text-primary/80 small-text">
                Select from our pre-built integrations or request a custom integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3">Configure Settings</h3>
              <p className="text-primary/80 small-text">
                Set up your integration with simple configuration steps and API keys.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3">Test & Go Live</h3>
              <p className="text-primary/80 small-text">
                Test your integration and go live with automated data synchronization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integrations */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Need a Custom Integration?</h2>
                <p className="text-primary/80 mb-6">
                  Don't see the integration you need? Our team can build custom integrations 
                  for your specific legal software and workflow requirements.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Custom API development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Legacy system integration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">HIPAA-compliant data handling</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Ongoing support and maintenance</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-primary">
                  Request Custom Integration
                </Link>
              </div>
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <p className="text-primary/60">Custom Development</p>
                  <p className="small-text text-primary/40">Tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Connect Your Systems?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Streamline your legal practice with seamless integrations that work with your existing tools.
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
