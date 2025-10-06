import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'
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
      <section className="section-spacing bg-gradient-to-br from-purple-100 to-pink-100">
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
              <div className="w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1e8fa638caa9b7c1674df_legal.png"
                  alt="Legal Intake Automation Dashboard"
                  className="w-full h-full object-cover"
                />
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
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Streamlined Intake Process</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              From initial contact to case file creation - our automated process handles it all
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed small-text">{item.description}</p>
                  </div>
                  {/* Arrow for desktop - only show on first 5 items */}
                  {index < 5 && (
                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-6 bg-secondary rounded-full flex items-center justify-center z-10">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1eb8f3988fb988b4ea002_legal1.png"
                  alt="Benefits of Automated Intake - Legal Intake Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 to-indigo-50">
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
      <GlobalCTA 
        title="Ready to Automate Your Intake?"
        subtitle="Transform your client intake process and never miss another opportunity."
        buttonText="Start Free Trial"
        buttonLink="/contact"
      />
    </Layout>
  )
}
