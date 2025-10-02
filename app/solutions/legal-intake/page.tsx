import Layout from '@/components/Layout'
import Link from 'next/link'

export default function LegalIntake() {
  const features = [
    {
      title: 'Automated Intake Forms',
      description: 'Smart forms that adapt based on practice area and case type.',
      icon: '📋'
    },
    {
      title: 'Document Collection',
      description: 'Secure document upload and organization for case files.',
      icon: '📁'
    },
    {
      title: 'Client Screening',
      description: 'Intelligent screening to qualify leads and identify urgent matters.',
      icon: '🔍'
    },
    {
      title: 'Conflict Checking',
      description: 'Automated conflict of interest checking against existing clients.',
      icon: '⚖️'
    },
    {
      title: 'Case File Creation',
      description: 'Automatic case file setup with organized client information.',
      icon: '🗂️'
    },
    {
      title: 'Integration Ready',
      description: 'Seamless integration with your existing case management system.',
      icon: '🔗'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Initial Contact',
      description: 'Client reaches out via phone, website, or referral'
    },
    {
      step: '2',
      title: 'Automated Screening',
      description: 'AI collects basic information and screens for conflicts'
    },
    {
      step: '3',
      title: 'Intake Form',
      description: 'Comprehensive form tailored to practice area'
    },
    {
      step: '4',
      title: 'Document Collection',
      description: 'Secure upload of relevant documents and evidence'
    },
    {
      step: '5',
      title: 'Case Creation',
      description: 'Automatic case file setup in your management system'
    },
    {
      step: '6',
      title: 'Attorney Review',
      description: 'Complete case package ready for attorney review'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">Legal Intake Automation</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Streamline your client intake process with intelligent automation. 
                From initial contact to case file creation, we handle it all.
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
                <span className="text-primary/60 small-text">✓ Custom Forms</span>
                <span className="text-primary/60 small-text">✓ Auto Integration</span>
              </div>
            </div>
            <div>
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">📋</span>
                  </div>
                  <p className="text-primary/60">Intake Dashboard</p>
                  <p className="small-text text-primary/40">Automated form builder</p>
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
            <h2 className="mb-4">Comprehensive Intake Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Everything you need to automate and streamline your client intake process.
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

      {/* Process Flow */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Streamlined Intake Process</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              From initial contact to case file creation, our automated process saves time and reduces errors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
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

      {/* Benefits Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Benefits of Automated Intake</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Faster Processing</span>
                      <p className="text-primary/80 small-text">Reduce intake time from hours to minutes</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Fewer Errors</span>
                      <p className="text-primary/80 small-text">Automated validation reduces human error</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Better Organization</span>
                      <p className="text-primary/80 small-text">Consistent file structure and data entry</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Improved Client Experience</span>
                      <p className="text-primary/80 small-text">Faster response times and smoother process</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-primary/60">Intake Analytics</p>
                  <p className="small-text text-primary/40">Track performance and optimize</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Seamless Integrations</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Works with your existing legal software and case management systems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-card-bg rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="small-text">Airtable</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-card-bg rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="small-text">Zapier</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-card-bg rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="small-text">Clio</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-card-bg rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="small-text">MyCase</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Automate Your Intake?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Transform your client intake process and never miss another opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-primary text-secondary hover:bg-primary/90">
              Start Free Trial
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
