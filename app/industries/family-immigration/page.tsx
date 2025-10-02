import Layout from '@/components/Layout'
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
              <div className="bg-card-bg rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <p className="text-primary/60">Family & Immigration Dashboard</p>
                  <p className="small-text text-primary/40">Bilingual support system</p>
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
          <div className="text-center mb-12">
            <h2 className="mb-4">Bilingual Support Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Specialized features designed for family and immigration law practices.
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

      {/* Cultural Sensitivity Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Cultural Sensitivity & Understanding</h2>
                <p className="text-primary/80 mb-6">
                  Our bilingual team understands the cultural nuances and sensitivities 
                  involved in family and immigration law matters.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Understanding of family dynamics in different cultures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Sensitivity to immigration-related fears and concerns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Respect for religious and cultural practices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-primary/80 small-text">Awareness of domestic violence cultural factors</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <p className="text-primary/60">Cultural Training</p>
                  <p className="small-text text-primary/40">Specialized cultural sensitivity training</p>
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
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-primary/60">Client Satisfaction</p>
                  <p className="small-text text-primary/40">95% satisfaction rate</p>
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
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Serve Your Community Better?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Expand your practice and serve diverse communities with professional bilingual support.
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
