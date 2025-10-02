import Layout from '@/components/Layout'
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
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">AI Receptionist for Law Firms</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
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
                <span className="text-primary/60 small-text">✓ HIPAA Compliant</span>
                <span className="text-primary/60 small-text">✓ 24/7 Available</span>
                <span className="text-primary/60 small-text">✓ Custom Training</span>
              </div>
            </div>
            <div>
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <p className="text-primary/60">AI Receptionist Dashboard</p>
                  <p className="small-text text-primary/40">Live conversation interface</p>
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
            <h2 className="mb-4">Powerful AI Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Our AI receptionist is trained specifically for legal practices and understands 
              the unique needs of law firms.
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

      {/* How It Works */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Simple setup, powerful results. Get your AI receptionist up and running in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3">Setup & Training</h3>
              <p className="text-primary/80 small-text">
                We configure your AI with your firm's information, practice areas, and specific requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3">Go Live</h3>
              <p className="text-primary/80 small-text">
                Your AI receptionist starts handling calls immediately, with your phone system integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3">Monitor & Optimize</h3>
              <p className="text-primary/80 small-text">
                Track performance, review conversations, and continuously improve your AI's responses.
              </p>
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
                      <span className="text-secondary mt-1">✓</span>
                      <span className="text-primary/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-primary/60">Performance Analytics</p>
                  <p className="small-text text-primary/40">Real-time insights and reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Simple, Transparent Pricing</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Choose the plan that fits your firm's call volume and needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <h3 className="mb-2">Starter</h3>
              <div className="text-3xl font-bold text-secondary mb-2">$299<span className="text-lg text-primary/60">/month</span></div>
              <p className="text-primary/80 small-text mb-4">Up to 200 calls/month</p>
              <Link href="/pricing" className="text-secondary hover:text-orange-600 transition-colors">
                View Details →
              </Link>
            </div>
            
            <div className="card text-center ring-2 ring-secondary">
              <div className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="mb-2">Professional</h3>
              <div className="text-3xl font-bold text-secondary mb-2">$599<span className="text-lg text-primary/60">/month</span></div>
              <p className="text-primary/80 small-text mb-4">Up to 500 calls/month</p>
              <Link href="/pricing" className="text-secondary hover:text-orange-600 transition-colors">
                View Details →
              </Link>
            </div>
            
            <div className="card text-center">
              <h3 className="mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-secondary mb-2">Custom</div>
              <p className="text-primary/80 small-text mb-4">Unlimited calls</p>
              <Link href="/contact" className="text-secondary hover:text-orange-600 transition-colors">
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Get Your AI Receptionist?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of law firms already using our AI receptionist to never miss another client call.
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
