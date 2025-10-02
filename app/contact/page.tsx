import Layout from '@/components/Layout'

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-primary/80 leading-relaxed">
              Ready to transform your law firm's client communication? Let's discuss how 
              LegalClerk.ai can help your practice grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card">
                <h2 className="mb-6">Schedule a Free Demo</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="input-field w-full"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="input-field w-full"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field w-full"
                      placeholder="john@lawfirm.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input-field w-full"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="firmName" className="block text-sm font-medium text-primary mb-2">
                      Law Firm Name *
                    </label>
                    <input
                      type="text"
                      id="firmName"
                      name="firmName"
                      required
                      className="input-field w-full"
                      placeholder="Smith & Associates"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="practiceArea" className="block text-sm font-medium text-primary mb-2">
                      Practice Area
                    </label>
                    <select
                      id="practiceArea"
                      name="practiceArea"
                      className="input-field w-full"
                    >
                      <option value="">Select Practice Area</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="criminal-defense">Criminal Defense</option>
                      <option value="family-law">Family Law</option>
                      <option value="immigration">Immigration</option>
                      <option value="general-practice">General Practice</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="input-field w-full resize-none"
                      placeholder="Tell us about your current client intake process and how we can help..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Schedule Free Demo
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm">📧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Email</h3>
                        <p className="text-primary/80">hello@legalclerk.ai</p>
                        <p className="text-primary/60 small-text">We respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Phone</h3>
                        <p className="text-primary/80">1-800-LEGAL-AI</p>
                        <p className="text-primary/60 small-text">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm">💬</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">Live Chat</h3>
                        <p className="text-primary/80">Available on our website</p>
                        <p className="text-primary/60 small-text">Instant support during business hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Promise */}
                <div className="card bg-secondary/10 border border-secondary/20">
                  <h3 className="text-secondary mb-3">Quick Response Promise</h3>
                  <ul className="space-y-2 text-primary/80 small-text">
                    <li>✓ Demo scheduled within 24 hours</li>
                    <li>✓ Custom proposal within 48 hours</li>
                    <li>✓ Implementation support included</li>
                    <li>✓ 30-day money-back guarantee</li>
                  </ul>
                </div>

                {/* FAQ Link */}
                <div className="card">
                  <h3 className="mb-3">Have Questions?</h3>
                  <p className="text-primary/80 small-text mb-4">
                    Check out our frequently asked questions for quick answers about our services.
                  </p>
                  <a href="/faqs" className="text-secondary hover:text-orange-600 transition-colors">
                    View FAQs →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
