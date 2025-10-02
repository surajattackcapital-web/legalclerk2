import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Bilingual() {
  const features = [
    {
      title: 'Native Spanish Speakers',
      description: 'Professional operators who are native Spanish speakers with legal terminology expertise.',
      icon: '🗣️'
    },
    {
      title: 'Cultural Sensitivity',
      description: 'Understanding of cultural nuances and communication preferences for diverse clients.',
      icon: '🌍'
    },
    {
      title: 'Legal Terminology',
      description: 'Expert knowledge of legal terms and concepts in both English and Spanish.',
      icon: '⚖️'
    },
    {
      title: 'Seamless Switching',
      description: 'Ability to switch between languages mid-conversation based on client preference.',
      icon: '🔄'
    },
    {
      title: 'Document Translation',
      description: 'Translation services for intake forms and legal documents.',
      icon: '📄'
    },
    {
      title: 'Cultural Context',
      description: 'Understanding of immigration law nuances and cultural considerations.',
      icon: '🏛️'
    }
  ]

  const benefits = [
    {
      title: 'Expanded Client Base',
      description: 'Serve Spanish-speaking clients who may not have access to other legal services',
      icon: '👥'
    },
    {
      title: 'Better Communication',
      description: 'Clear, accurate communication in the client\'s preferred language',
      icon: '💬'
    },
    {
      title: 'Cultural Understanding',
      description: 'Sensitivity to cultural differences and communication styles',
      icon: '🤝'
    },
    {
      title: 'Increased Trust',
      description: 'Clients feel more comfortable and trusting when communicating in their native language',
      icon: '❤️'
    }
  ]

  const practiceAreas = [
    'Immigration Law',
    'Personal Injury',
    'Family Law',
    'Criminal Defense',
    'Employment Law',
    'Workers\' Compensation'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">Bilingual Support (English & Spanish)</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Serve your diverse client base with professional bilingual support. 
                Native Spanish speakers with legal expertise provide culturally sensitive service.
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
                <span className="text-primary/60 small-text">✓ Native Speakers</span>
                <span className="text-primary/60 small-text">✓ Legal Expertise</span>
                <span className="text-primary/60 small-text">✓ Cultural Sensitivity</span>
              </div>
            </div>
            <div>
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <p className="text-primary/60">Bilingual Support</p>
                  <p className="small-text text-primary/40">English & Spanish</p>
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
            <h2 className="mb-4">Professional Bilingual Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Comprehensive bilingual support designed specifically for legal practices.
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

      {/* Benefits Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Bilingual Support Matters</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Serving Spanish-speaking clients effectively can significantly expand your practice and improve outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="mb-2">{benefit.title}</h3>
                    <p className="text-primary/80 small-text">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Specialized Practice Areas</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Our bilingual team has expertise in various practice areas that commonly serve Spanish-speaking clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {practiceAreas.map((area, index) => (
              <div key={index} className="card text-center">
                <h3 className="small-text font-semibold">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How Bilingual Support Works</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Seamless language support that adapts to your client's needs and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3">Language Detection</h3>
              <p className="text-primary/80 small-text">
                Our system automatically detects the client's preferred language and routes accordingly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3">Expert Handling</h3>
              <p className="text-primary/80 small-text">
                Native speakers with legal expertise handle the call with cultural sensitivity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3">Seamless Integration</h3>
              <p className="text-primary/80 small-text">
                All information is captured and integrated into your existing case management system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <blockquote className="text-xl text-primary/90 mb-6 italic">
                "The bilingual support has been a game-changer for our immigration practice. 
                Our Spanish-speaking clients feel more comfortable and we've seen a significant 
                increase in case conversions."
              </blockquote>
              <div className="text-primary/80">
                <p className="font-semibold">Maria Rodriguez</p>
                <p className="small-text">Immigration Attorney, Rodriguez & Associates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Serve Spanish-Speaking Clients?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Expand your practice and serve your community better with professional bilingual support.
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
