import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'
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
      <section className="section-spacing bg-gradient-to-br from-violet-100 to-purple-100">
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
              <div className="w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/689c73d07808650584716dc0_blin.webp"
                  alt="Bilingual Support - English & Spanish Legal Services"
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
            <h2 className="mb-4">Professional Bilingual Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Comprehensive bilingual support designed specifically for legal practices.
            </p>
          </div>
          
          <div className="grid-3x3">
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
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Why Bilingual Support Matters</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Expanded Client Base</span>
                      <p className="text-primary/80 small-text">Serve Spanish-speaking clients who may not have access to other legal services</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Better Communication</span>
                      <p className="text-primary/80 small-text">Clear, accurate communication in the client's preferred language</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Cultural Understanding</span>
                      <p className="text-primary/80 small-text">Sensitivity to cultural differences and communication styles</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <div>
                      <span className="text-primary font-semibold">Increased Trust</span>
                      <p className="text-primary/80 small-text">Build stronger relationships with clients who feel understood and respected</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/689c6ca9df73b5284706284c_lawfirm.webp"
                  alt="Why Bilingual Support Matters - Law Firm Diversity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
      <section className="section-spacing bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">How Bilingual Support Works</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Seamless language support that adapts to your client's needs and preferences
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Language Detection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our system automatically detects the client's preferred language and routes accordingly.
                  </p>
                </div>
                {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center z-10">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Expert Handling</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Native speakers with legal expertise handle the call with cultural sensitivity.
                  </p>
                </div>
                {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center z-10">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="card text-center h-full border border-border-light hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Seamless Integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All information is captured and integrated into your existing case management system.
                  </p>
                </div>
              </div>
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
      <GlobalCTA 
        title="Ready to Serve Spanish-Speaking Clients?"
        subtitle="Expand your practice and serve your community better with professional bilingual support."
        buttonText="Start Free Trial"
        buttonLink="/contact"
      />
    </Layout>
  )
}
