import Layout from '@/components/Layout'
import Link from 'next/link'

export default function GeneralPractice() {
  const features = [
    {
      title: 'Multi-Practice Support',
      description: 'Flexible system that adapts to various practice areas and case types.',
      icon: '⚖️'
    },
    {
      title: 'Flexible Intake Forms',
      description: 'Customizable intake forms that can be adapted for different practice areas.',
      icon: '📋'
    },
    {
      title: 'Case Type Routing',
      description: 'Intelligent routing to appropriate attorneys based on case type and expertise.',
      icon: '🔄'
    },
    {
      title: 'General Consultations',
      description: 'Professional handling of general legal consultations and inquiries.',
      icon: '💬'
    },
    {
      title: 'Referral Management',
      description: 'Systematic tracking and management of client referrals and case transfers.',
      icon: '🤝'
    },
    {
      title: 'Comprehensive Coverage',
      description: '24/7 coverage for all types of legal matters and client inquiries.',
      icon: '🕐'
    }
  ]

  const practiceAreas = [
    {
      area: 'Business Law',
      description: 'Contracts, corporate formation, and business disputes',
      icon: '🏢'
    },
    {
      area: 'Real Estate',
      description: 'Property transactions, disputes, and landlord-tenant matters',
      icon: '🏠'
    },
    {
      area: 'Estate Planning',
      description: 'Wills, trusts, and probate administration',
      icon: '📜'
    },
    {
      area: 'Employment Law',
      description: 'Workplace disputes, discrimination, and labor issues',
      icon: '👔'
    },
    {
      area: 'Personal Injury',
      description: 'Accident cases, medical malpractice, and product liability',
      icon: '🚗'
    },
    {
      area: 'Family Law',
      description: 'Divorce, custody, and domestic relations matters',
      icon: '👨‍👩‍👧‍👦'
    }
  ]

  const benefits = [
    'Handle diverse practice areas efficiently',
    'Flexible system that grows with your practice',
    'Professional service for all client types',
    'Comprehensive coverage for all legal matters',
    'Streamlined intake for multiple practice areas',
    'Cost-effective solution for general practice'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">General Practice Law Firms</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Comprehensive AI receptionist and intake system for general practice law firms. 
                Handle diverse practice areas with one flexible solution.
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
                <span className="text-primary/60 small-text">✓ Multi-Practice</span>
                <span className="text-primary/60 small-text">✓ Flexible Forms</span>
                <span className="text-primary/60 small-text">✓ 24/7 Coverage</span>
              </div>
            </div>
            <div>
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">🏛️</span>
                  </div>
                  <p className="text-primary/60">General Practice Dashboard</p>
                  <p className="small-text text-primary/40">Multi-practice management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Supported Practice Areas</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Our flexible system supports a wide range of practice areas common in general practice law firms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">{area.icon}</span>
                </div>
                <h3 className="mb-3">{area.area}</h3>
                <p className="text-primary/80 small-text">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">General Practice Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Comprehensive features designed for the diverse needs of general practice law firms.
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

      {/* Flexibility Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Flexible & Scalable Solution</h2>
                <p className="text-primary/80 mb-6">
                  Our system is designed to grow with your practice, adapting to new practice areas 
                  and changing client needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Easy addition of new practice areas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Customizable intake forms for each practice area</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Flexible routing based on case type and attorney expertise</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Scalable pricing that grows with your practice</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <p className="text-primary/60">Flexible Configuration</p>
                  <p className="small-text text-primary/40">Adapt to your practice needs</p>
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
                <h2 className="mb-6">Why General Practice Firms Choose Us</h2>
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
                  <p className="text-primary/60">Practice Analytics</p>
                  <p className="small-text text-primary/40">Track performance across practice areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="text-center mb-8">
                <h2 className="mb-4">Success Story: Smith & Associates</h2>
                <p className="text-primary/80">
                  See how this general practice firm streamlined their diverse practice areas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-4">Before LegalClerk.ai</h3>
                  <ul className="space-y-2 text-primary/80 small-text">
                    <li>• Inconsistent intake across practice areas</li>
                    <li>• Manual case routing and assignment</li>
                    <li>• Limited after-hours coverage</li>
                    <li>• Difficulty tracking diverse case types</li>
                    <li>• High administrative overhead</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="mb-4">After LegalClerk.ai</h3>
                  <ul className="space-y-2 text-primary/80 small-text">
                    <li>• Standardized intake across all practice areas</li>
                    <li>• Automated case routing and assignment</li>
                    <li>• 24/7 coverage for all legal matters</li>
                    <li>• Comprehensive case tracking and analytics</li>
                    <li>• 50% reduction in administrative tasks</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-secondary/10 rounded-xl">
                <blockquote className="text-primary/90 italic text-center">
                  "The flexibility of the system has been perfect for our general practice. 
                  We can handle everything from real estate to family law with one integrated solution. 
                  The automated routing saves us hours every week."
                </blockquote>
                <div className="text-center mt-4">
                  <p className="font-semibold text-primary">Robert Smith</p>
                  <p className="text-primary/60 small-text">Managing Partner, Smith & Associates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Streamline Your General Practice?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Handle all your practice areas efficiently with one comprehensive solution.
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
