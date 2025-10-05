import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'
import Link from 'next/link'

export default function CriminalDefense() {
  const features = [
    {
      title: '24/7 Emergency Response',
      description: 'Immediate response to arrest calls and bail situations at any time.',
      icon: '🚨'
    },
    {
      title: 'Bail Bond Coordination',
      description: 'Professional coordination with bail bond companies and court systems.',
      icon: '🔗'
    },
    {
      title: 'Court Date Scheduling',
      description: 'Automated scheduling and reminders for court appearances and hearings.',
      icon: '📅'
    },
    {
      title: 'Client Confidentiality',
      description: 'Strict confidentiality protocols for sensitive criminal defense matters.',
      icon: '🔒'
    },
    {
      title: 'Urgent Message Delivery',
      description: 'Immediate notification system for time-sensitive legal matters.',
      icon: '📞'
    },
    {
      title: 'Family Communication',
      description: 'Professional communication with family members during difficult times.',
      icon: '👨‍👩‍👧‍👦'
    }
  ]

  const emergencyTypes = [
    {
      type: 'Arrest Calls',
      description: 'Immediate response to arrest situations and bail coordination',
      icon: '🚔'
    },
    {
      type: 'Court Emergencies',
      description: 'Urgent court date changes and hearing notifications',
      icon: '⚖️'
    },
    {
      type: 'Family Emergencies',
      description: 'Sensitive communication with family members during crisis',
      icon: '👥'
    },
    {
      type: 'Bail Situations',
      description: '24/7 bail bond coordination and release procedures',
      icon: '💰'
    }
  ]

  const benefits = [
    'Never miss a time-sensitive arrest call',
    'Professional handling of sensitive situations',
    '24/7 availability for emergencies',
    'Strict confidentiality and security',
    'Improved client and family communication',
    'Reduced stress for attorneys and staff'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">Criminal Defense Law Firms</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Specialized 24/7 emergency response system for criminal defense attorneys. 
                Never miss another arrest call or time-sensitive legal matter.
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
                <span className="text-primary/60 small-text">✓ 24/7 Emergency</span>
                <span className="text-primary/60 small-text">✓ Bail Coordination</span>
                <span className="text-primary/60 small-text">✓ Confidential</span>
              </div>
            </div>
            <div>
              <div className="w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1e8fa638caa9b7c1674df_legal.png"
                  alt="Criminal Defense Dashboard - Emergency Response System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Emergency Response Types</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Our system is designed to handle the most critical situations in criminal defense law.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyTypes.map((type, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{type.icon}</span>
                  </div>
                  <div>
                    <h3 className="mb-2">{type.type}</h3>
                    <p className="text-primary/80 small-text">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">CRIMINAL DEFENSE FEATURES</h2>
            <p className="text-primary/80 max-w-2xl mx-auto text-lg">
              Specialized features designed for the unique needs of criminal defense practice.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="card text-center h-full border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Emergency Response Process</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Streamlined process for handling time-sensitive criminal defense matters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3">Immediate Response</h3>
              <p className="text-primary/80 small-text">
                Emergency call received and immediately routed to available attorney.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3">Information Gathering</h3>
              <p className="text-primary/80 small-text">
                Collect essential details about the situation and client needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3">Attorney Connection</h3>
              <p className="text-primary/80 small-text">
                Immediate connection with appropriate criminal defense attorney.
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
                <h2 className="mb-6">Why Criminal Defense Firms Choose Us</h2>
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
                  alt="Emergency Analytics - Track response times and outcomes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Security & Confidentiality</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Your clients' sensitive information is protected with the highest security standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="mb-3">End-to-End Encryption</h3>
              <p className="text-primary/80 small-text">
                All communications and data are encrypted using military-grade security.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="mb-3">Attorney-Client Privilege</h3>
              <p className="text-primary/80 small-text">
                Strict protocols to maintain attorney-client privilege and confidentiality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="mb-3">Secure Data Storage</h3>
              <p className="text-primary/80 small-text">
                All case information stored in secure, compliant data centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GlobalCTA 
        title="Ready for 24/7 Emergency Coverage?"
        subtitle="Never miss another arrest call or time-sensitive criminal defense matter."
        buttonText="Start Free Trial"
        buttonLink="/contact"
      />
    </Layout>
  )
}
