'use client'

import { motion } from 'framer-motion'

interface HowItWorksProps {
  title?: string
  subtitle?: string
  className?: string
}

export default function HowItWorks({
  title = "How It Works",
  subtitle = "You don't need IT support or training manuals to get started. LegalClerk is designed to be up and running in minutes — not weeks.",
  className = ""
}: HowItWorksProps) {
  const steps = [
    {
      step: "1",
      title: "Sign Up",
      description: "Start your free trial or choose a plan that fits your call volume. No setup fee. No annual contracts."
    },
    {
      step: "2", 
      title: "Customize Your Intake Flow",
      description: "Tell us what you want LegalClerk to ask, capture, and qualify. Use our proven templates or build your own script — in plain English."
    },
    {
      step: "3",
      title: "Forward Your Calls",
      description: "Route calls to your dedicated AI receptionist number. We handle every call from the first ring, 24/7."
    },
    {
      step: "4",
      title: "Track Every Lead",
      description: "Receive structured intake summaries, synced appointments, and CRM-ready lead profiles — all automatically."
    },
    {
      step: "5",
      title: "Refine Anytime",
      description: "Update scripts, add questions, change call routing — all from your dashboard. No tech skills required."
    }
  ]

  return (
    <section className={`section-spacing bg-white ${className}`}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4">{title}</h2>
          <p className="text-text-secondary max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step number badge */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10 flex-shrink-0">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="ml-6 flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
