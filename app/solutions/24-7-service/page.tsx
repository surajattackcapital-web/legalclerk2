import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'
import Link from 'next/link'

export default function Service247() {
  const features = [
    {
      title: '24/7 Availability',
      description: 'Round-the-clock coverage for your clients, including nights, weekends, and holidays.',
      icon: '🕐'
    },
    {
      title: 'Professional Call Handling',
      description: 'Trained professionals who understand legal terminology and client needs.',
      icon: '👥'
    },
    {
      title: 'Urgent Message Delivery',
      description: 'Immediate notification system for time-sensitive matters and emergencies.',
      icon: '🚨'
    },
    {
      title: 'Call Recording',
      description: 'Complete call recordings for quality assurance and legal documentation.',
      icon: '🎙️'
    },
    {
      title: 'Detailed Reports',
      description: 'Comprehensive call logs and analytics to track performance and trends.',
      icon: '📊'
    },
    {
      title: 'Custom Scripts',
      description: 'Tailored call scripts specific to your practice area and firm policies.',
      icon: '📝'
    },
    {
      title: 'Multi-language Support',
      description: 'Professional service in English and Spanish to serve diverse client bases.',
      icon: '🌍'
    },
    {
      title: 'HIPAA Compliance',
      description: 'Fully compliant with healthcare privacy regulations for sensitive client data.',
      icon: '🔒'
    },
    {
      title: 'Seamless Integration',
      description: 'Easy integration with your existing phone systems and case management software.',
      icon: '🔗'
    }
  ]

  const coverage = [
    {
      time: 'Business Hours',
      description: 'Professional receptionist service during your regular business hours',
      icon: '☀️'
    },
    {
      time: 'After Hours',
      description: 'Extended coverage for evenings and early mornings',
      icon: '🌙'
    },
    {
      time: 'Weekends',
      description: 'Full weekend coverage including Saturday and Sunday',
      icon: '📅'
    },
    {
      time: 'Holidays',
      description: 'Holiday coverage so you never miss important calls',
      icon: '🎉'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">24/7 Legal Answering Service</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Never miss another potential client with our round-the-clock professional 
                answering service. Available 24/7, 365 days a year.
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
                <span className="text-primary/60 small-text">✓ 24/7 Coverage</span>
                <span className="text-primary/60 small-text">✓ HIPAA Compliant</span>
                <span className="text-primary/60 small-text">✓ Custom Scripts</span>
              </div>
            </div>
            <div>
              <div className="w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1e8fa638caa9b7c1674df_legal.png"
                  alt="24/7 Legal Answering Service Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Complete Coverage</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Comprehensive coverage for all hours and situations when you can't answer the phone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverage.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="mb-3">{item.time}</h3>
                <p className="text-primary/80 small-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Professional Service Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Everything you need for professional client communication around the clock.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">How Our 24/7 Service Works</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Professional answering service that never sleeps - here's how we keep you connected
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Setup & Training</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We configure your service with custom scripts, call routing, and escalation procedures.
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
                <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Go Live</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your calls are automatically routed to our professional operators 24/7.
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
                <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Monitor & Optimize</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Review call logs, recordings, and performance metrics to continuously improve service.
                  </p>
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
                <h2 className="mb-6">Why Choose Our 24/7 Service?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Never Miss a Call</span>
                      <p className="text-primary/80 small-text">24/7 coverage ensures every potential client is captured</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Professional Image</span>
                      <p className="text-primary/80 small-text">Maintain a professional presence even when unavailable</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Work-Life Balance</span>
                      <p className="text-primary/80 small-text">Enjoy your time off knowing your practice is covered</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Increased Revenue</span>
                      <p className="text-primary/80 small-text">Capture more leads and convert more clients</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1ee03a276b3c16c539e3a_legal3.png"
                  alt="Why Choose Our 24/7 Service - Performance Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Flexible Pricing Options</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Choose the coverage level that fits your firm's needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center border border-gray-200 hover:border-primary/30 transition-all duration-300">
              <h3 className="mb-2 text-gray-900">Basic Coverage</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$199<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600 small-text mb-4">After hours & weekends</p>
              <Link href="/pricing" className="text-primary hover:text-purple-700 transition-colors font-semibold">
                View Details →
              </Link>
            </div>
            
            <div className="card text-center border-2 border-primary shadow-xl transform scale-105 relative">
              <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="mb-2 text-gray-900">Full Coverage</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$399<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600 small-text mb-4">24/7 coverage</p>
              <Link href="/pricing" className="bg-primary text-white hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors font-semibold inline-block">
                View Details →
              </Link>
            </div>
            
            <div className="card text-center border border-gray-200 hover:border-primary/30 transition-all duration-300">
              <h3 className="mb-2 text-gray-900">Premium</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$599<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600 small-text mb-4">24/7 + AI features</p>
              <Link href="/pricing" className="text-primary hover:text-purple-700 transition-colors font-semibold">
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GlobalCTA 
        title="Ready for 24/7 Coverage?"
        subtitle="Never miss another potential client. Get started with our professional 24/7 answering service today."
        buttonText="Start Free Trial"
        buttonLink="/contact"
      />
    </Layout>
  )
}
