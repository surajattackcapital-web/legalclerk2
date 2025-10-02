import Layout from '@/components/Layout'
import Link from 'next/link'

export default function PersonalInjury() {
  const features = [
    {
      title: 'Emergency Response',
      description: 'Immediate response to accident calls with urgent case protocols.',
      icon: '🚨'
    },
    {
      title: 'Accident Documentation',
      description: 'Detailed collection of accident scene information and witness details.',
      icon: '📋'
    },
    {
      title: 'Medical Records',
      description: 'Automated collection and organization of medical documentation.',
      icon: '🏥'
    },
    {
      title: 'Insurance Communication',
      description: 'Professional handling of insurance company inquiries and documentation.',
      icon: '🛡️'
    },
    {
      title: 'Client Updates',
      description: 'Regular status updates and case progress communication.',
      icon: '📞'
    },
    {
      title: 'Settlement Tracking',
      description: 'Monitor settlement negotiations and case resolution progress.',
      icon: '💰'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Initial Call',
      description: 'Immediate response to accident victim or family member'
    },
    {
      step: '2',
      title: 'Emergency Assessment',
      description: 'Determine urgency and immediate needs'
    },
    {
      step: '3',
      title: 'Information Collection',
      description: 'Gather accident details, injuries, and insurance information'
    },
    {
      step: '4',
      title: 'Attorney Assignment',
      description: 'Route to appropriate personal injury attorney'
    },
    {
      step: '5',
      title: 'Case Setup',
      description: 'Create case file with all collected information'
    },
    {
      step: '6',
      title: 'Follow-up',
      description: 'Schedule medical appointments and case updates'
    }
  ]

  const benefits = [
    'Never miss a time-sensitive accident case',
    'Professional handling of emotional situations',
    'Comprehensive documentation from day one',
    'Improved client satisfaction and trust',
    'Higher case conversion rates',
    'Reduced administrative burden on attorneys'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">Personal Injury Law Firms</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Specialized AI receptionist and intake system for personal injury cases. 
                Never miss another accident victim who needs immediate legal help.
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
                <span className="text-primary/60 small-text">✓ Emergency Response</span>
                <span className="text-primary/60 small-text">✓ 24/7 Coverage</span>
                <span className="text-primary/60 small-text">✓ HIPAA Compliant</span>
              </div>
            </div>
            <div>
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">🚗</span>
                  </div>
                  <p className="text-primary/60">Personal Injury Dashboard</p>
                  <p className="small-text text-primary/40">Emergency response system</p>
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
            <h2 className="mb-4">Specialized Personal Injury Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Built specifically for personal injury law firms with features that matter most to accident cases.
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
            <h2 className="mb-4">Personal Injury Intake Process</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Streamlined process designed to capture every detail while providing immediate support to accident victims.
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
                <h2 className="mb-6">Why Personal Injury Firms Choose Us</h2>
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
                  <p className="text-primary/60">Case Analytics</p>
                  <p className="small-text text-primary/40">Track intake and conversion rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="text-center mb-8">
                <h2 className="mb-4">Success Story: Johnson & Associates</h2>
                <p className="text-primary/80">
                  See how this personal injury firm transformed their practice with our specialized solution.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-4">Before LegalClerk.ai</h3>
                  <ul className="space-y-2 text-primary/80 small-text">
                    <li>• Missing 30% of potential cases</li>
                    <li>• Inconsistent intake process</li>
                    <li>• Delayed response times</li>
                    <li>• Manual documentation</li>
                    <li>• Limited after-hours coverage</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="mb-4">After LegalClerk.ai</h3>
                  <ul className="space-y-2 text-primary/80 small-text">
                    <li>• 40% increase in case intake</li>
                    <li>• Standardized intake process</li>
                    <li>• Immediate response to all calls</li>
                    <li>• Automated documentation</li>
                    <li>• 24/7 emergency coverage</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-secondary/10 rounded-xl">
                <blockquote className="text-primary/90 italic text-center">
                  "The emergency response feature has been a game-changer. We never miss a time-sensitive 
                  accident case anymore, and our clients appreciate the immediate attention they receive."
                </blockquote>
                <div className="text-center mt-4">
                  <p className="font-semibold text-primary">Sarah Johnson</p>
                  <p className="text-primary/60 small-text">Managing Partner, Johnson & Associates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Never Miss Another Accident Case?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Join personal injury firms already using our specialized solution to capture more cases and serve clients better.
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
