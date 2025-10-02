import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Airtable() {
  const features = [
    {
      title: 'HIPAA-Compliant Storage',
      description: 'Secure, encrypted storage that meets healthcare privacy requirements.',
      icon: '🔒'
    },
    {
      title: 'Automated Client Records',
      description: 'Automatic creation of client records from intake calls and forms.',
      icon: '👤'
    },
    {
      title: 'Case Status Tracking',
      description: 'Real-time updates on case progress and status changes.',
      icon: '📊'
    },
    {
      title: 'Document Organization',
      description: 'Automatic filing and organization of case documents and evidence.',
      icon: '📁'
    },
    {
      title: 'Team Collaboration',
      description: 'Shared access for attorneys and staff with role-based permissions.',
      icon: '👥'
    },
    {
      title: 'Custom Views',
      description: 'Customizable views and filters for different practice areas.',
      icon: '👁️'
    }
  ]

  const workflow = [
    {
      step: '1',
      title: 'Client Call',
      description: 'Client calls and information is collected by AI receptionist'
    },
    {
      step: '2',
      title: 'Data Processing',
      description: 'Information is processed and validated for accuracy'
    },
    {
      step: '3',
      title: 'Airtable Sync',
      description: 'Client record is automatically created in your Airtable base'
    },
    {
      step: '4',
      title: 'Case Assignment',
      description: 'Case is assigned to appropriate attorney based on practice area'
    },
    {
      step: '5',
      title: 'Status Updates',
      description: 'Case status is updated in real-time across all systems'
    },
    {
      step: '6',
      title: 'Document Management',
      description: 'Documents are automatically filed and linked to case records'
    }
  ]

  const benefits = [
    'Eliminate manual data entry',
    'Ensure data consistency across systems',
    'Improve team collaboration and visibility',
    'Maintain HIPAA compliance automatically',
    'Reduce administrative overhead',
    'Better client service with real-time updates'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">Airtable Integration</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                HIPAA-compliant integration with Airtable for seamless client data management. 
                Automatically sync client information, case status, and documents.
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
                <span className="text-primary/60 small-text">✓ HIPAA Compliant</span>
                <span className="text-primary/60 small-text">✓ Real-time Sync</span>
                <span className="text-primary/60 small-text">✓ Automated Workflows</span>
              </div>
            </div>
            <div>
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">📊</span>
                  </div>
                  <p className="text-primary/60">Airtable Dashboard</p>
                  <p className="small-text text-primary/40">HIPAA-compliant database</p>
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
            <h2 className="mb-4">Airtable Integration Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Powerful features that make Airtable the perfect database for your legal practice.
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

      {/* Workflow Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Automated Workflow</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              See how client information flows seamlessly from initial contact to your Airtable database.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-primary/80 small-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">HIPAA Compliance Built-In</h2>
                <p className="text-primary/80 mb-6">
                  Our Airtable integration is designed with HIPAA compliance in mind, ensuring 
                  your client data is protected according to healthcare privacy regulations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">End-to-end encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Secure API connections with authentication</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Audit logs for all data access and modifications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Role-based access controls and permissions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <p className="text-primary/60">Security Dashboard</p>
                  <p className="small-text text-primary/40">HIPAA compliance monitoring</p>
                </div>
              </div>
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
                <h2 className="mb-6">Why Choose Airtable Integration?</h2>
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
                    <span className="text-2xl">📈</span>
                  </div>
                  <p className="text-primary/60">Performance Metrics</p>
                  <p className="small-text text-primary/40">Track integration performance</p>
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
              Get your Airtable integration up and running in minutes with our guided setup process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3">Connect Airtable</h3>
              <p className="text-primary/80 small-text">
                Provide your Airtable API key and select the base you want to sync with.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3">Configure Fields</h3>
              <p className="text-primary/80 small-text">
                Map our data fields to your Airtable columns and set up automation rules.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3">Test & Go Live</h3>
              <p className="text-primary/80 small-text">
                Test the integration with sample data and go live with real client information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Connect Your Airtable?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Streamline your client data management with HIPAA-compliant Airtable integration.
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
