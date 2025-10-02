import Layout from '@/components/Layout'
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
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">📞</span>
                  </div>
                  <p className="text-primary/60">24/7 Call Center</p>
                  <p className="small-text text-primary/40">Professional operators</p>
                </div>
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
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How Our 24/7 Service Works</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Simple setup, professional service, and seamless integration with your practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3">Setup & Training</h3>
              <p className="text-primary/80 small-text">
                We configure your service with custom scripts, call routing, and escalation procedures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3">Go Live</h3>
              <p className="text-primary/80 small-text">
                Your calls are automatically routed to our professional operators 24/7.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3">Monitor & Optimize</h3>
              <p className="text-primary/80 small-text">
                Review call logs, recordings, and performance metrics to continuously improve service.
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
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <p className="text-primary/60">Performance Dashboard</p>
                  <p className="small-text text-primary/40">Real-time call analytics</p>
                </div>
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
            <div className="card text-center">
              <h3 className="mb-2">Basic Coverage</h3>
              <div className="text-3xl font-bold text-secondary mb-2">$199<span className="text-lg text-primary/60">/month</span></div>
              <p className="text-primary/80 small-text mb-4">After hours & weekends</p>
              <Link href="/pricing" className="text-secondary hover:text-orange-600 transition-colors">
                View Details →
              </Link>
            </div>
            
            <div className="card text-center ring-2 ring-secondary">
              <div className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="mb-2">Full Coverage</h3>
              <div className="text-3xl font-bold text-secondary mb-2">$399<span className="text-lg text-primary/60">/month</span></div>
              <p className="text-primary/80 small-text mb-4">24/7 coverage</p>
              <Link href="/pricing" className="text-secondary hover:text-orange-600 transition-colors">
                View Details →
              </Link>
            </div>
            
            <div className="card text-center">
              <h3 className="mb-2">Premium</h3>
              <div className="text-3xl font-bold text-secondary mb-2">$599<span className="text-lg text-primary/60">/month</span></div>
              <p className="text-primary/80 small-text mb-4">24/7 + AI features</p>
              <Link href="/pricing" className="text-secondary hover:text-orange-600 transition-colors">
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready for 24/7 Coverage?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Never miss another potential client. Get started with our professional 24/7 answering service today.
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
