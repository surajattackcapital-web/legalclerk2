import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-[75rem] mx-auto">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance" style={{ lineHeight: '1.3em' }}>
                #1 Legal Answering Service - 24/7 AI Receptionist for Law Firms
              </h1>
              <p className="text-xl md:text-2xl text-primary/80 leading-relaxed max-w-3xl mx-auto">
                Professional 24/7 legal answering service with HIPAA compliance, bilingual support, 
                and seamless integrations. Trusted by thousands of attorneys nationwide. Never miss another client call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary btn-mobile hover-lift">
                  Book Free Demo
                </Link>
                <Link href="/pricing" className="btn-secondary btn-mobile hover-lift">
                  View Pricing
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-6 pt-4">
                <span className="text-primary/60 small-text animate-fade-in animate-stagger-1">✓ HIPAA Compliant</span>
                <span className="text-primary/60 small-text animate-fade-in animate-stagger-2">✓ SOC2 Certified</span>
                <span className="text-primary/60 small-text animate-fade-in animate-stagger-3">✓ 24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose LegalClerk.ai - The Best Legal Answering Service?</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Built specifically for law firms with the security, compliance, and features you need. 
              Our virtual receptionists are trained in legal intake procedures and understand the unique needs of attorneys.
            </p>
          </div>
          
          <div className="grid-responsive">
            <div className="card animate-scale-in hover-lift">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 hover-glow">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="mb-3">AI-Powered</h3>
              <p className="text-primary/80 small-text">
                Advanced AI handles client inquiries, schedules appointments, and provides instant responses.
              </p>
            </div>
            
            <div className="card animate-scale-in animate-stagger-1 hover-lift">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 hover-glow">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="mb-3">HIPAA Compliant</h3>
              <p className="text-primary/80 small-text">
                Full compliance with healthcare privacy regulations and SOC2 certification.
              </p>
            </div>
            
            <div className="card animate-scale-in animate-stagger-2 hover-lift">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 hover-glow">
                <span className="text-xl">🌍</span>
              </div>
              <h3 className="mb-3">Bilingual Support</h3>
              <p className="text-primary/80 small-text">
                English and Spanish support to serve diverse client bases effectively.
              </p>
            </div>
            
            <div className="card animate-scale-in animate-stagger-3 hover-lift">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 hover-glow">
                <span className="text-xl">🔗</span>
              </div>
              <h3 className="mb-3">Seamless Integrations</h3>
              <p className="text-primary/80 small-text">
                Connect with Airtable, Zapier, and your existing legal software stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Legal Answering Service Solutions for Every Practice Area</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              From personal injury to criminal defense, we have specialized virtual receptionist solutions 
              for your practice area with trained legal intake specialists.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card animate-slide-in-left hover-lift">
              <h3 className="mb-3">Personal Injury Law Firms</h3>
              <p className="text-primary/80 mb-4">
                Specialized legal intake for accident cases with immediate response to potential clients. 
                Our receptionists understand personal injury terminology and urgency.
              </p>
              <Link href="/industries/personal-injury" className="text-secondary hover:text-orange-600 transition-colors group">
                Learn More <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
              </Link>
            </div>
            
            <div className="card animate-slide-in-right animate-stagger-1 hover-lift">
              <h3 className="mb-3">Criminal Defense Attorneys</h3>
              <p className="text-primary/80 mb-4">
                Urgent response system for time-sensitive criminal defense inquiries. 
                24/7 availability for arrests and emergency legal matters.
              </p>
              <Link href="/industries/criminal-defense" className="text-secondary hover:text-orange-600 transition-colors group">
                Learn More <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
              </Link>
            </div>

            <div className="card animate-slide-in-left animate-stagger-2 hover-lift">
              <h3 className="mb-3">Family Law Practice</h3>
              <p className="text-primary/80 mb-4">
                Compassionate handling of divorce, custody, and domestic violence cases 
                with immediate referral to available attorneys.
              </p>
              <Link href="/industries/family-immigration" className="text-secondary hover:text-orange-600 transition-colors group">
                Learn More <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Answering Service Features */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Complete Legal Answering Service Features</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Our comprehensive legal answering service includes everything your law firm needs 
              to capture leads and provide exceptional client service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card animate-scale-in hover-lift">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 hover-glow">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="mb-3">24/7 Call Answering</h3>
              <p className="text-primary/80 small-text">
                Round-the-clock call coverage including weekends and holidays. Never miss a potential client call.
              </p>
            </div>
            
            <div className="card animate-scale-in animate-stagger-1 hover-lift">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 hover-glow">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="mb-3">Legal Intake & Lead Qualification</h3>
              <p className="text-primary/80 small-text">
                Trained receptionists perform detailed legal intake and qualify leads based on your criteria.
              </p>
            </div>
            
            <div className="card animate-scale-in animate-stagger-2 hover-lift">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 hover-glow">
                <span className="text-xl">📅</span>
              </div>
              <h3 className="mb-3">Appointment Scheduling</h3>
              <p className="text-primary/80 small-text">
                Direct calendar integration for booking consultations and client meetings with follow-up reminders.
              </p>
            </div>
            
            <div className="card animate-scale-in animate-stagger-3 hover-lift">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 hover-glow">
                <span className="text-xl">💳</span>
              </div>
              <h3 className="mb-3">Payment Processing</h3>
              <p className="text-primary/80 small-text">
                Collect consultation fees and retainers over the phone with secure payment processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-4 animate-bounce-in">Ready to Transform Your Client Intake?</h2>
          <p className="text-primary/90 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-1">
            Join hundreds of law firms already using LegalClerk.ai to never miss another opportunity.
          </p>
          <Link href="/contact" className="bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg text-center hover-lift animate-scale-in animate-stagger-2">
            Get Started Today
          </Link>
        </div>
      </section>
    </Layout>
  )
}
