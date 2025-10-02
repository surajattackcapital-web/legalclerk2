import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for solo practitioners and small firms',
      features: [
        'Up to 200 calls/month',
        'Basic AI receptionist',
        'Email notifications',
        'Standard integrations',
        'Email support',
        'HIPAA compliance'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing law firms',
      features: [
        'Up to 500 calls/month',
        'Advanced AI with custom responses',
        'SMS notifications',
        'All integrations (Airtable, Zapier)',
        'Priority support',
        'Bilingual support (English/Spanish)',
        'Custom intake forms',
        'Analytics dashboard'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large firms with complex needs',
      features: [
        'Unlimited calls',
        'Custom AI training',
        'Dedicated account manager',
        'White-label options',
        'API access',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantees',
        'On-site training'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  const addOns = [
    {
      name: 'Additional Calls',
      price: '$1.50',
      description: 'Per call beyond your plan limit'
    },
    {
      name: 'Custom Integrations',
      price: '$199',
      description: 'One-time setup fee for custom integrations'
    },
    {
      name: 'Priority Support',
      price: '$99',
      description: 'Per month for faster response times'
    },
    {
      name: 'White-label Solution',
      price: '$299',
      description: 'Per month to brand as your own service'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-primary/80 leading-relaxed">
              Choose the plan that fits your firm's needs. All plans include HIPAA compliance, 
              SOC2 certification, and our core AI receptionist features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`card relative ${plan.popular ? 'ring-2 ring-secondary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    <span className="text-primary/60">{plan.period}</span>
                  </div>
                  <p className="text-primary/80 small-text">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span className="text-primary/80 small-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                  className={`w-full text-center block py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Add-on Services</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Enhance your plan with additional services tailored to your firm's needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="card text-center">
                <h3 className="mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-secondary mb-2">{addon.price}</div>
                <p className="text-primary/80 small-text">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Pricing FAQ</h2>
            
            <div className="space-y-8">
              <div className="card">
                <h3 className="mb-3">Is there a setup fee?</h3>
                <p className="text-primary/80">
                  No setup fees for Starter and Professional plans. Enterprise plans may include 
                  custom setup costs based on your specific requirements.
                </p>
              </div>
              
              <div className="card">
                <h3 className="mb-3">Can I change plans anytime?</h3>
                <p className="text-primary/80">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect 
                  at the start of your next billing cycle.
                </p>
              </div>
              
              <div className="card">
                <h3 className="mb-3">What happens if I exceed my call limit?</h3>
                <p className="text-primary/80">
                  Additional calls are charged at $1.50 per call. You'll receive notifications 
                  as you approach your limit and can upgrade your plan anytime.
                </p>
              </div>
              
              <div className="card">
                <h3 className="mb-3">Do you offer discounts for annual billing?</h3>
                <p className="text-primary/80">
                  Yes! Save 20% when you pay annually. Contact our sales team for custom 
                  enterprise pricing and volume discounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4">Ready to Get Started?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
            Start your free trial today. No credit card required. Cancel anytime.
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
