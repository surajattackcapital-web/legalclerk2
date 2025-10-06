'use client'

import Layout from '@/components/Layout'
import AnimatedSection from '@/components/AnimatedSection'
import GlobalCTA from '@/components/GlobalCTA'
import HowItWorks from '@/components/HowItWorks'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="section-spacing"
        style={{ background: 'linear-gradient(360deg, rgba(106, 11, 162, 0.1), rgba(221, 103, 34, 0.1))' }}
      >
        <div className="container-custom">
          <div className="hero-grid">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance capitalize" 
                style={{ 
                  lineHeight: '1.3em',
                  background: 'linear-gradient(-6deg, #6a0ba2, #dd6722)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Never miss a new client with our AI legal answering service
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                Automate your law firm's call answering, 24/7 — bilingual, HIPAA-compliant, and fully customizable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-primary text-white hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg text-center btn-mobile">
                  Book a Demo
                </Link>
                <Link href="/pricing" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-center btn-mobile">
                  See Pricing
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-[530px] h-full rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.prod.website-files.com/67e305e6047ac35569c07df9/68288863f729d7cf3652ebd4_ChatGPT%20Image%20May%2017%2C%202025%2C%2006_30_08%20PM.avif"
                  alt="AI Legal Receptionist"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Trusted by firms nationwide</h2>
          </motion.div>
          
          {/* Infinite Slider */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll px-8">
              {/* First set of logos */}
              <div className="flex items-center gap-16 shrink-0 ml-5">
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/6830b137ce6ec800ba11921f/6830b137ce6ec800ba119377_670fcdfe86008302c92ff935_Join%20Arena%20Logo.svg"
                    alt="Join Arena"
                    className="max-h-12 w-auto"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/6830b137ce6ec800ba11921f/6830b137ce6ec800ba11926f_6688ef97a1ca4757574d8d11_swadesai-logo.svg"
                    alt="SwadesAI"
                    className="max-h-12 w-auto"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/65e83d0d73b28eadcaaca421/688b84e64dabb6c3379e1efa_Scribe%20Health%20Logo.svg"
                    alt="Scribe Health"
                    className="max-h-12 w-auto"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/65e83d0d73b28eadcaaca421/688b8e99b1c6c73cb6b15cc2_Powerdialer%20Logo-p-500.webp"
                    alt="Powerdialer"
                    className="max-h-12 w-auto"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/65e83d0d73b28eadcaaca421/68249dabdfb3d327e0b4cc5a_66ac693510a63e69bfe65dec_OpticIntellect%20Logo-p-500.avif"
                    alt="OpticIntellect"
                    className="max-h-12 w-auto"
                  />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-16 shrink-0">
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/6830b137ce6ec800ba11921f/6830b137ce6ec800ba119377_670fcdfe86008302c92ff935_Join%20Arena%20Logo.svg"
                    alt="Join Arena"
                    className="max-h-12 w-auto"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/6830b137ce6ec800ba11921f/6830b137ce6ec800ba11926f_6688ef97a1ca4757574d8d11_swadesai-logo.svg"
                    alt="SwadesAI"
                    className="max-h-12 w-auto"
                  />
              </div>
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/65e83d0d73b28eadcaaca421/688b84e64dabb6c3379e1efa_Scribe%20Health%20Logo.svg"
                    alt="Scribe Health"
                    className="max-h-12 w-auto"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/65e83d0d73b28eadcaaca421/688b8e99b1c6c73cb6b15cc2_Powerdialer%20Logo-p-500.webp"
                    alt="Powerdialer"
                    className="max-h-12 w-auto"
                  />
              </div>
                <div className="w-32 h-16 flex items-center justify-center opacity-60">
                  <img 
                    src="https://cdn.prod.website-files.com/65e83d0d73b28eadcaaca421/68249dabdfb3d327e0b4cc5a_66ac693510a63e69bfe65dec_OpticIntellect%20Logo-p-500.avif"
                    alt="OpticIntellect"
                    className="max-h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Why Law Firms Choose LegalClerk.ai</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Reduce missed calls, automate intake, and improve client experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI-Powered Receptionist",
                description: "Advanced AI handles client inquiries, schedules appointments, and provides instant responses 24/7."
              },
              {
                icon: "🔒",
                title: "HIPAA Compliant",
                description: "Full compliance with healthcare privacy regulations and SOC2 certification for maximum security."
              },
              {
                icon: "🌍",
                title: "Bilingual Support",
                description: "English and Spanish support to serve diverse client bases effectively and inclusively."
              },
              {
                icon: "📞",
                title: "24/7 Availability",
                description: "Never miss a call with round-the-clock coverage including weekends and holidays."
              },
              {
                icon: "🔗",
                title: "Seamless Integrations",
                description: "Connect with Airtable, Zapier, and your existing legal software stack effortlessly."
              },
              {
                icon: "📈",
                title: "Proven ROI",
                description: "Increase client intake by up to 40% while reducing operational costs significantly."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="card hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 hover-glow">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="mb-4">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
            </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Pricing Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Simple, Transparent Pricing</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Choose the plan that fits your firm's needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99",
                period: "/month",
                features: [
                  "Up to 100 calls/month",
                  "Basic AI receptionist",
                  "Email notifications",
                  "Standard integrations"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Pro",
                price: "$199",
                period: "/month", 
                features: [
                  "Up to 500 calls/month",
                  "Advanced AI features",
                  "Bilingual support",
                  "Priority support",
                  "Custom workflows"
                ],
                cta: "Get Started",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: [
                  "Unlimited calls",
                  "White-label solution",
                  "Dedicated support",
                  "Custom integrations",
                  "SLA guarantee"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`card hover-lift relative ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-text-secondary ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-primary mr-3">✓</span>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={plan.name === "Enterprise" ? "/contact" : "/pricing"}
                  className="w-full bg-primary text-white hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center block"
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Loved by Law Firms Nationwide</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                firm: "Johnson & Associates",
                quote: "LegalClerk.ai has transformed our client intake. We've seen a 40% increase in qualified leads since implementing their service.",
                image: "👩‍💼"
              },
              {
                name: "Michael Rodriguez",
                firm: "Rodriguez Law Group",
                quote: "The bilingual support is incredible. We can now serve our Spanish-speaking clients much more effectively.",
                image: "👨‍💼"
              },
              {
                name: "Jennifer Chen",
                firm: "Chen Legal Services",
                quote: "Never missing a call has been a game-changer. Our clients appreciate the immediate response and professionalism.",
                image: "👩‍⚖️"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="card hover-lift"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-text-secondary text-sm">{testimonial.firm}</p>
              </div>
            </div>
                <p className="text-text-secondary italic">"{testimonial.quote}"</p>
                <div className="mt-4 text-primary">★★★★★</div>
              </motion.div>
            ))}
              </div>
            </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get quick answers to the most common questions about our AI legal answering service
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Can I use LegalClerk only after hours or on weekends?",
                answer: "Absolutely. Whether you need a full-time law firm answering service or just support during off-hours, LegalClerk adjusts to your needs. You control when the AI receptionist picks up."
              },
              {
                question: "Is LegalClerk trained in legal intake and terminology?",
                answer: "Yes, our AI is specifically trained in legal terminology and intake procedures. It understands the nuances of different practice areas and can handle complex legal inquiries professionally."
              },
              {
                question: "Will LegalClerk sound like a real person?",
                answer: "Yes, our AI uses advanced natural language processing to sound completely natural and human-like. Clients often can't tell they're speaking with an AI receptionist."
              },
              {
                question: "Can LegalClerk integrate with my CRM or calendar?",
                answer: "Absolutely! We integrate seamlessly with popular legal software including Clio, MyCase, Airtable, Zapier, and many others. Custom integrations are available for Enterprise plans."
              },
              {
                question: "Do you support multilingual client intake?",
                answer: "Yes, we offer full bilingual support in English and Spanish, with additional languages available. Our AI can seamlessly switch between languages based on client preference."
              },
              {
                question: "Is my client data secure?",
                answer: "Yes, we are fully HIPAA-compliant and SOC2 certified. We maintain the highest standards of data security and privacy protection for all client information."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                  <span className="text-gray-600 text-xl font-light">
                    {openFAQ === index ? '×' : '+'}
                  </span>
                </button>
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{ height: openFAQ === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pt-4 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help. Schedule a free consultation to discuss your firm's specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary btn-mobile">
                  Schedule Consultation
                </Link>
                <Link href="/faqs" className="btn-secondary btn-mobile">
                  View All FAQs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <GlobalCTA />
    </Layout>
  )
}
