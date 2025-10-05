import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'
import Link from 'next/link'

export default function Solutions() {
  const solutions = [
    {
      title: 'AI Receptionist for Law Firms',
      description: 'Advanced AI that handles client calls, schedules appointments, and provides instant responses 24/7.',
      features: [
        'Natural conversation flow',
        'Appointment scheduling',
        'Client information collection',
        'Call routing to attorneys',
        'Follow-up reminders'
      ],
      href: '/solutions/ai-receptionist',
      icon: '🤖'
    },
    {
      title: 'Legal Intake Automation',
      description: 'Streamline your client intake process with automated forms, data collection, and case management.',
      features: [
        'Automated intake forms',
        'Document collection',
        'Case file creation',
        'Client screening',
        'Conflict checking'
      ],
      href: '/solutions/legal-intake',
      icon: '📋'
    },
    {
      title: '24/7 Legal Answering Service',
      description: 'Never miss another potential client with our round-the-clock professional answering service.',
      features: [
        '24/7 availability',
        'Professional call handling',
        'Urgent message delivery',
        'Call recording',
        'Detailed call reports'
      ],
      href: '/solutions/24-7-service',
      icon: '📞'
    },
    {
      title: 'Bilingual Support (English & Spanish)',
      description: 'Serve your diverse client base with professional bilingual support in English and Spanish.',
      features: [
        'Native Spanish speakers',
        'Cultural sensitivity',
        'Legal terminology expertise',
        'Seamless language switching',
        'Cultural context understanding'
      ],
      href: '/solutions/bilingual',
      icon: '🌍'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Solutions for Law Firms</h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Comprehensive AI-powered solutions designed specifically for legal professionals. 
              From client intake to 24/7 answering services, we have everything your firm needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300 border border-border-light">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-secondary">{solution.icon}</span>
                  </div>
                  <div>
                    <h3 className="mb-2">{solution.title}</h3>
                    <p className="text-text-secondary small-text">{solution.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <span className="text-primary">✓</span>
                      <span className="text-text-secondary small-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={solution.href}
                  className="text-primary hover:text-purple-700 transition-colors font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-primary-lightest/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Why Choose Our Solutions?</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-white">🔒</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">HIPAA Compliant</h3>
                      <p className="text-text-secondary small-text">
                        Full compliance with healthcare privacy regulations and SOC2 certification for maximum security.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-white">⚡</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Lightning Fast</h3>
                      <p className="text-text-secondary small-text">
                        Instant responses and seamless integrations that work with your existing legal software stack.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-white">📈</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Proven Results</h3>
                      <p className="text-text-secondary small-text">
                        Join hundreds of law firms already using our solutions to grow their practice and serve clients better.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/689af50ed188209c894799a0_professional-virtual.webp"
                  alt="Why Choose Our Solutions - Professional Virtual Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GlobalCTA 
        title="Ready to Transform Your Practice?"
        subtitle="Schedule a free demo to see how our solutions can help your firm grow and serve clients better."
        buttonText="Schedule Free Demo"
        buttonLink="/contact"
      />
    </Layout>
  )
}
