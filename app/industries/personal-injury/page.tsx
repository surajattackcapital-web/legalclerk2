import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'
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
              <div className="w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1e8fa638caa9b7c1674df_legal.png"
                  alt="Personal Injury Dashboard - Emergency response system"
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
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">PERSONAL INJURY FEATURES</h2>
            <p className="text-primary/80 max-w-2xl mx-auto text-lg">
              Built specifically for personal injury law firms with features that matter most to accident cases.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="card text-center h-full border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1eb8f3988fb988b4ea002_legal1.png"
                  alt="Case Analytics - Track intake and conversion rates"
                  className="w-full h-full object-cover"
                />
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
      <GlobalCTA 
        title="Ready to Never Miss Another Accident Case?"
        subtitle="Join personal injury firms already using our specialized solution to capture more cases and serve clients better."
        buttonText="Start Free Trial"
        buttonLink="/contact"
      />
    </Layout>
  )
}
