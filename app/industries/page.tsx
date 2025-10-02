import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Industries() {
  const industries = [
    {
      title: 'Personal Injury Law Firms',
      description: 'Specialized intake for accident cases with immediate response to potential clients and emergency situations.',
      features: [
        'Emergency response protocols',
        'Accident scene documentation',
        'Medical record collection',
        'Insurance company communication',
        'Client status updates'
      ],
      href: '/industries/personal-injury',
      icon: '🚗',
      stats: '40% increase in case intake'
    },
    {
      title: 'Criminal Defense Law Firms',
      description: 'Urgent response system for time-sensitive criminal defense inquiries and bail situations.',
      features: [
        '24/7 emergency response',
        'Bail bond coordination',
        'Court date scheduling',
        'Client confidentiality protocols',
        'Urgent message delivery'
      ],
      href: '/industries/criminal-defense',
      icon: '⚖️',
      stats: 'Never miss a bail call'
    },
    {
      title: 'Family & Immigration Law',
      description: 'Sensitive handling of family matters and immigration cases with cultural sensitivity.',
      features: [
        'Bilingual support (English/Spanish)',
        'Cultural sensitivity training',
        'Document translation services',
        'Family emergency protocols',
        'Immigration status tracking'
      ],
      href: '/industries/family-immigration',
      icon: '👨‍👩‍👧‍👦',
      stats: '95% client satisfaction'
    },
    {
      title: 'General Practice Firms',
      description: 'Comprehensive support for diverse practice areas with flexible intake processes.',
      features: [
        'Multi-practice area support',
        'Flexible intake forms',
        'Case type routing',
        'General legal consultations',
        'Referral management'
      ],
      href: '/industries/general-practice',
      icon: '🏛️',
      stats: '50% reduction in missed calls'
    }
  ]

  const benefits = [
    {
      title: 'Specialized Expertise',
      description: 'Our team understands the unique needs and urgency of different practice areas.',
      icon: '🎯'
    },
    {
      title: 'Customized Workflows',
      description: 'Tailored intake processes and response protocols for each practice area.',
      icon: '⚙️'
    },
    {
      title: 'Industry Compliance',
      description: 'Full compliance with legal industry standards and client confidentiality requirements.',
      icon: '🔒'
    },
    {
      title: 'Proven Results',
      description: 'Track record of success across all major practice areas and firm sizes.',
      icon: '📈'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Solutions for Every Practice Area</h1>
            <p className="text-xl text-primary/80 leading-relaxed">
              Specialized AI receptionist and answering services tailored to the unique needs 
              of different legal practice areas. From personal injury to immigration law.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{industry.icon}</span>
                  </div>
                  <div>
                    <h3 className="mb-2">{industry.title}</h3>
                    <p className="text-primary/80 small-text mb-3">{industry.description}</p>
                    <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold inline-block">
                      {industry.stats}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <span className="text-secondary">✓</span>
                      <span className="text-primary/80 small-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={industry.href}
                  className="text-secondary hover:text-orange-600 transition-colors font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Industry-Specific Solutions?</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Generic solutions don't work for specialized legal practices. Our industry-specific 
              approach ensures better results and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-primary/80 small-text">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Success Stories by Practice Area</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              See how law firms in different practice areas have transformed their client intake with our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🚗</span>
                </div>
                <div>
                  <h3 className="mb-1">Personal Injury Firm</h3>
                  <p className="text-primary/60 small-text">Johnson & Associates</p>
                </div>
              </div>
              <blockquote className="text-primary/80 italic mb-4">
                "Since implementing LegalClerk.ai, we've seen a 40% increase in case intake. 
                The emergency response feature has been crucial for accident cases."
              </blockquote>
              <div className="text-secondary small-text font-semibold">
                +40% case intake increase
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <h3 className="mb-1">Immigration Law Firm</h3>
                  <p className="text-primary/60 small-text">Rodriguez Immigration Law</p>
                </div>
              </div>
              <blockquote className="text-primary/80 italic mb-4">
                "The bilingual support has been incredible. Our Spanish-speaking clients 
                feel more comfortable and we've expanded our client base significantly."
              </blockquote>
              <div className="text-secondary small-text font-semibold">
                95% client satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of law firms already using our industry-specific solutions to grow their practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-primary text-secondary hover:bg-primary/90">
              Schedule Demo
            </Link>
            <Link href="/pricing" className="btn-primary bg-primary/20 text-primary hover:bg-primary/30">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
