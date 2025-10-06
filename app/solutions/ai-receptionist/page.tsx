import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'
import Link from 'next/link'

export default function AIReceptionist() {
  const features = [
    {
      title: 'Natural Conversation',
      description: 'Advanced AI that understands context and responds naturally to client inquiries.',
      icon: '💬'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Seamlessly schedule appointments and sync with your calendar system.',
      icon: '📅'
    },
    {
      title: 'Client Screening',
      description: 'Intelligent screening to qualify leads and route urgent matters appropriately.',
      icon: '🔍'
    },
    {
      title: 'Information Collection',
      description: 'Gather essential client information and case details during initial contact.',
      icon: '📝'
    },
    {
      title: 'Call Routing',
      description: 'Smart routing to the right attorney based on practice area and availability.',
      icon: '📞'
    },
    {
      title: 'Follow-up Automation',
      description: 'Automated follow-up reminders and appointment confirmations.',
      icon: '⏰'
    },
    {
      title: 'Multi-language Support',
      description: 'Communicate with clients in multiple languages including Spanish and English.',
      icon: '🌍'
    },
    {
      title: 'HIPAA Compliance',
      description: 'Fully compliant with healthcare privacy regulations for sensitive client data.',
      icon: '🔒'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights into call patterns, client interactions, and performance metrics.',
      icon: '📊'
    }
  ]

  const benefits = [
    'Never miss another potential client call',
    '24/7 availability for your clients',
    'Consistent, professional service',
    'Reduced administrative workload',
    'Improved client satisfaction',
    'Higher conversion rates'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-purple-100 to-violet-100">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">AI Receptionist for Law Firms</h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Advanced artificial intelligence that handles client calls, schedules appointments, 
                and provides professional service 24/7. Never miss another opportunity.
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
                <span className="text-text-secondary/60 small-text">✓ HIPAA Compliant</span>
                <span className="text-text-secondary/60 small-text">✓ 24/7 Available</span>
                <span className="text-text-secondary/60 small-text">✓ Custom Training</span>
              </div>
            </div>
            <div>
              <div className="w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1ef5d0896c0c10cfd99d9_legal4.png"
                  alt="AI Receptionist for Law Firms Dashboard"
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
            <h2 className="mb-4">Powerful AI Features</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our AI receptionist is trained specifically for legal practices and understands 
              the unique needs of law firms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="card border border-border-light text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-secondary">{feature.icon}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Get your AI receptionist up and running in three simple steps
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Setup & Training</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We configure your AI with your firm's information, practice areas, and specific requirements.
                  </p>
                </div>
                {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Go Live</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your AI receptionist starts handling calls immediately, with your phone system integration.
                  </p>
                </div>
                {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Monitor & Optimize</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Track performance, review conversations, and continuously improve your AI's responses.
                  </p>
                </div>
              </div>
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
                <h2 className="mb-6">Why Choose Our AI Receptionist?</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1ecfbaf18c60931fe8939_legal2.png"
                  alt="Why Choose Our AI Receptionist - Performance Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Simple, Transparent Pricing</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Choose the plan that fits your firm's call volume and needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center border border-border-light">
              <h3 className="mb-2">Starter</h3>
              <div className="text-3xl font-bold text-text-primary mb-2">$299<span className="text-lg text-text-secondary">/month</span></div>
              <p className="text-text-secondary small-text mb-4">Up to 200 calls/month</p>
              <Link href="/pricing" className="text-primary hover:text-purple-700 transition-colors">
                View Details →
              </Link>
            </div>
            
            <div className="card text-center ring-2 ring-primary border border-border-light">
              <div className="bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="mb-2">Professional</h3>
              <div className="text-3xl font-bold text-text-primary mb-2">$599<span className="text-lg text-text-secondary">/month</span></div>
              <p className="text-text-secondary small-text mb-4">Up to 500 calls/month</p>
              <Link href="/pricing" className="text-primary hover:text-purple-700 transition-colors">
                View Details →
              </Link>
            </div>
            
            <div className="card text-center border border-border-light">
              <h3 className="mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-text-primary mb-2">Custom</div>
              <p className="text-text-secondary small-text mb-4">Unlimited calls</p>
              <Link href="/contact" className="text-primary hover:text-purple-700 transition-colors">
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GlobalCTA 
        title="Ready to Get Your AI Receptionist?"
        subtitle="Join hundreds of law firms already using our AI receptionist to never miss another client call."
        buttonText="Start Free Trial"
        buttonLink="/contact"
      />
    </Layout>
  )
}
