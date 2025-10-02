import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Zapier() {
  const features = [
    {
      title: '5000+ App Connections',
      description: 'Connect with virtually any app or service your law firm uses.',
      icon: '🔗'
    },
    {
      title: 'Automated Workflows',
      description: 'Create multi-step workflows that trigger automatically based on events.',
      icon: '⚡'
    },
    {
      title: 'Data Synchronization',
      description: 'Keep all your systems updated with the latest client information.',
      icon: '🔄'
    },
    {
      title: 'Custom Triggers',
      description: 'Set up custom triggers based on specific events in your legal practice.',
      icon: '🎯'
    },
    {
      title: 'Error Handling',
      description: 'Built-in error handling and retry logic for reliable automation.',
      icon: '🛡️'
    },
    {
      title: 'Multi-step Workflows',
      description: 'Create complex workflows with multiple steps and conditional logic.',
      icon: '📋'
    }
  ]

  const popularZaps = [
    {
      title: 'New Client → CRM',
      description: 'Automatically create new client records in your CRM when a new case is received.',
      icon: '👤'
    },
    {
      title: 'Case Update → Email',
      description: 'Send email notifications to clients when case status changes.',
      icon: '📧'
    },
    {
      title: 'Document Upload → Storage',
      description: 'Automatically save uploaded documents to your cloud storage.',
      icon: '📁'
    },
    {
      title: 'Appointment → Calendar',
      description: 'Add new appointments to your calendar and send reminders.',
      icon: '📅'
    },
    {
      title: 'Payment → Accounting',
      description: 'Sync payment information with your accounting software.',
      icon: '💰'
    },
    {
      title: 'Lead → Follow-up',
      description: 'Automatically schedule follow-up tasks for new leads.',
      icon: '📞'
    }
  ]

  const benefits = [
    'Eliminate manual data entry across systems',
    'Reduce errors and improve data consistency',
    'Save hours of administrative work each week',
    'Improve client service with automated updates',
    'Scale your practice without adding staff',
    'Focus on high-value legal work instead of admin tasks'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">Zapier Integration</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Connect LegalClerk.ai with 5000+ apps through Zapier. Automate your legal 
                workflows and eliminate manual data entry across all your systems.
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
                <span className="text-primary/60 small-text">✓ 5000+ Apps</span>
                <span className="text-primary/60 small-text">✓ Automated Workflows</span>
                <span className="text-primary/60 small-text">✓ Real-time Sync</span>
              </div>
            </div>
            <div>
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">🔗</span>
                  </div>
                  <p className="text-primary/60">Zapier Dashboard</p>
                  <p className="small-text text-primary/40">Workflow automation</p>
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
            <h2 className="mb-4">Zapier Integration Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Powerful automation features that connect your legal practice with the tools you use every day.
            </p>
          </div>
          
          <div className="grid-responsive">
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

      {/* Popular Zaps Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Popular Legal Workflow Automations</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Pre-built automation templates designed specifically for legal practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularZaps.map((zap, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">{zap.icon}</span>
                </div>
                <h3 className="mb-3">{zap.title}</h3>
                <p className="text-primary/80 small-text">{zap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How Zapier Integration Works</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Simple trigger-action automation that connects your legal systems seamlessly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3">Trigger Event</h3>
              <p className="text-primary/80 small-text">
                Something happens in LegalClerk.ai (new client, case update, etc.)
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3">Zapier Processing</h3>
              <p className="text-primary/80 small-text">
                Zapier processes the trigger and prepares the action
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3">Action Execution</h3>
              <p className="text-primary/80 small-text">
                The action is executed in your connected app (CRM, email, etc.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Why Automate with Zapier?</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span className="text-primary/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <p className="text-primary/60">Time Savings</p>
                  <p className="small-text text-primary/40">Save 10+ hours per week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Easy Setup Process</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Get your Zapier integration up and running in minutes with our guided setup.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3">Connect Zapier</h3>
              <p className="text-primary/80 small-text">
                Connect your Zapier account and authorize LegalClerk.ai access.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3">Choose Templates</h3>
              <p className="text-primary/80 small-text">
                Select from pre-built legal workflow templates or create custom ones.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3">Test & Activate</h3>
              <p className="text-primary/80 small-text">
                Test your workflows and activate them for live automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Automate Your Legal Workflows?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Connect with 5000+ apps and eliminate manual work with Zapier automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-primary text-secondary hover:bg-primary/90">
              Start Automation Setup
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
