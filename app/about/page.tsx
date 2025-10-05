import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About LegalClerk.ai</h1>
            <p className="text-xl text-primary/80 leading-relaxed">
              We're revolutionizing how law firms handle client communication with AI-powered 
              receptionist services that are secure, compliant, and always available.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="mb-4">Empowering Law Firms</h3>
                <p className="text-primary/80 mb-6">
                  We believe every law firm deserves professional, reliable client communication 
                  that works 24/7. Our AI receptionist ensures no potential client goes unanswered, 
                  helping firms grow while maintaining the highest standards of service.
                </p>
                <p className="text-primary/80">
                  Built by legal professionals for legal professionals, we understand the unique 
                  challenges and compliance requirements of the legal industry.
                </p>
              </div>
              <div className="bg-card-bg rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <p className="text-primary/60">Mission Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              These core principles guide everything we do at LegalClerk.ai.
            </p>
          </div>
          
          <div className="grid-responsive">
            <div className="card">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="mb-3">Security First</h3>
              <p className="text-primary/80 small-text">
                HIPAA compliance and SOC2 certification ensure your client data is always protected.
              </p>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="mb-3">Client Focused</h3>
              <p className="text-primary/80 small-text">
                Every feature is designed to improve client experience and firm efficiency.
              </p>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="mb-3">Innovation</h3>
              <p className="text-primary/80 small-text">
                Cutting-edge AI technology that evolves with your practice needs.
              </p>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="mb-3">Partnership</h3>
              <p className="text-primary/80 small-text">
                We're not just a vendor - we're your partner in growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-card-bg/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Legal and technology experts working together to serve your firm.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="mb-2">Legal Team</h3>
              <p className="text-primary/60 small-text">Former attorneys and legal professionals</p>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👩‍💻</span>
              </div>
              <h3 className="mb-2">Tech Team</h3>
              <p className="text-primary/60 small-text">AI and software engineering experts</p>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍🔧</span>
              </div>
              <h3 className="mb-2">Support Team</h3>
              <p className="text-primary/60 small-text">Dedicated customer success specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GlobalCTA 
        title="Ready to Work With Us?"
        subtitle="Let's discuss how LegalClerk.ai can transform your firm's client communication."
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />
    </Layout>
  )
}
