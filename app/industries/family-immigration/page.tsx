import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'
import Link from 'next/link'

export default function FamilyImmigration() {
  const features = [
    {
      title: 'Bilingual Support',
      description: 'Native Spanish speakers with legal expertise for immigration and family law matters.',
      icon: '🗣️'
    },
    {
      title: 'Cultural Sensitivity',
      description: 'Understanding of cultural nuances and family dynamics in different communities.',
      icon: '🌍'
    },
    {
      title: 'Document Translation',
      description: 'Professional translation services for legal documents and forms.',
      icon: '📄'
    },
    {
      title: 'Family Emergency Protocols',
      description: 'Sensitive handling of family emergencies and urgent situations.',
      icon: '🚨'
    },
    {
      title: 'Immigration Status Tracking',
      description: 'Automated tracking of immigration case status and deadlines.',
      icon: '📋'
    },
    {
      title: 'Multi-language Forms',
      description: 'Intake forms available in multiple languages for better accessibility.',
      icon: '📝'
    }
  ]

  const practiceAreas = [
    {
      area: 'Immigration Law',
      description: 'Green cards, citizenship, deportation defense, and visa applications',
      icon: '🛂'
    },
    {
      area: 'Family Law',
      description: 'Divorce, custody, adoption, and domestic violence cases',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      area: 'Domestic Violence',
      description: 'Protective orders, emergency legal assistance, and safety planning',
      icon: '🛡️'
    },
    {
      area: 'Child Custody',
      description: 'Custody arrangements, visitation rights, and child support',
      icon: '👶'
    }
  ]

  const benefits = [
    'Serve diverse communities effectively',
    'Build trust with Spanish-speaking clients',
    'Reduce language barriers in legal processes',
    'Improve client understanding and satisfaction',
    'Expand your practice to underserved communities',
    'Cultural sensitivity in sensitive family matters'
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="text-balance">Family & Immigration Law</h1>
              <p className="text-xl text-primary/80 leading-relaxed">
                Specialized bilingual support for family and immigration law firms. 
                Serve diverse communities with cultural sensitivity and legal expertise.
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
                <span className="text-primary/60 small-text">✓ Bilingual Support</span>
                <span className="text-primary/60 small-text">✓ Cultural Sensitivity</span>
                <span className="text-primary/60 small-text">✓ Document Translation</span>
              </div>
            </div>
            <div>
              <div className="w-full max-w-md h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/689c73d07808650584716dc0_blin.webp"
                  alt="Family & Immigration Dashboard - Bilingual Support System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Specialized Practice Areas</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Comprehensive support for family and immigration law practice areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{area.icon}</span>
                  </div>
                  <div>
                    <h3 className="mb-2">{area.area}</h3>
                    <p className="text-primary/80 small-text">{area.description}</p>
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
            <h2 className="mb-4 text-3xl font-bold text-gray-800">BILINGUAL SUPPORT FEATURES</h2>
            <p className="text-primary/80 max-w-2xl mx-auto text-lg">
              Specialized features designed for family and immigration law practices.
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

      {/* Cultural Sensitivity Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">CULTURAL SENSITIVITY & UNDERSTANDING</h2>
              <p className="text-primary/80 max-w-3xl mx-auto text-lg leading-relaxed">
                Our bilingual team understands the cultural nuances and sensitivities 
                involved in family and immigration law matters.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="card h-full border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">Family Dynamics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Understanding of family dynamics in different cultures and how they impact legal proceedings and client relationships.
                  </p>
                </div>
              </div>
              
              <div className="group">
                <div className="card h-full border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🛂</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">Immigration Concerns</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sensitivity to immigration-related fears and concerns, providing reassurance and clear communication throughout the process.
                  </p>
                </div>
              </div>
              
              <div className="group">
                <div className="card h-full border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🕌</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">Religious Practices</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Respect for religious and cultural practices, ensuring legal services accommodate diverse belief systems and traditions.
                  </p>
                </div>
              </div>
              
              <div className="group">
                <div className="card h-full border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">Domestic Violence Awareness</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Awareness of domestic violence cultural factors and how they may influence reporting, seeking help, and legal proceedings.
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
                <h2 className="mb-6">Why Choose Our Bilingual Support?</h2>
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
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68e1ee03a276b3c16c539e3a_legal3.png"
                  alt="Client Satisfaction - 95% satisfaction rate"
                  className="w-full h-full object-cover"
                />
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
                <h2 className="mb-4">Success Story: Rodriguez Immigration Law</h2>
                <p className="text-primary/80">
                  See how this immigration law firm expanded their practice with our bilingual support.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-4">Before LegalClerk.ai</h3>
                  <ul className="space-y-2 text-primary/80 small-text">
                    <li>• Limited Spanish-speaking client base</li>
                    <li>• Language barriers in intake process</li>
                    <li>• Cultural misunderstandings</li>
                    <li>• Manual translation services</li>
                    <li>• Limited after-hours coverage</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="mb-4">After LegalClerk.ai</h3>
                  <ul className="space-y-2 text-primary/80 small-text">
                    <li>• 200% increase in Spanish-speaking clients</li>
                    <li>• Seamless bilingual intake process</li>
                    <li>• Cultural sensitivity and understanding</li>
                    <li>• Professional translation services</li>
                    <li>• 24/7 bilingual coverage</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-secondary/10 rounded-xl">
                <blockquote className="text-primary/90 italic text-center">
                  "The bilingual support has been incredible. Our Spanish-speaking clients feel 
                  more comfortable and we've been able to serve our community much better. 
                  The cultural sensitivity training really makes a difference."
                </blockquote>
                <div className="text-center mt-4">
                  <p className="font-semibold text-primary">Maria Rodriguez</p>
                  <p className="text-primary/60 small-text">Founding Attorney, Rodriguez Immigration Law</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GlobalCTA 
        title="Ready to Serve Your Community Better?"
        subtitle="Expand your practice and serve diverse communities with professional bilingual support."
        buttonText="Start Free Trial"
        buttonLink="/contact"
      />
    </Layout>
  )
}
