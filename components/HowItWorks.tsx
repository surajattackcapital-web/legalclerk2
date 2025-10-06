'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

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
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  
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

  // Scroll-based progress calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight

      // Calculate how much of the section has been scrolled through
      // Start animation earlier - when section is 50% of viewport height away
      const sectionStart = sectionTop - (windowHeight * 0.5)
      const sectionEnd = sectionTop + sectionHeight
      const scrollProgress = Math.max(0, Math.min(1, (scrollTop - sectionStart) / (sectionEnd - sectionStart)))
      
      // Convert scroll progress to active step (0-4)
      const newActiveStep = Math.min(steps.length - 1, Math.floor(scrollProgress * steps.length))
      
      setActiveStep(newActiveStep)
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [steps.length])

  return (
    <section ref={sectionRef} className={`section-spacing bg-white ${className}`}>
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
            {/* Background line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Animated progress line */}
            <motion.div 
              className="absolute left-8 top-0 w-0.5 bg-primary"
              initial={{ height: 0 }}
              animate={{ 
                height: activeStep >= 0 ? `${((activeStep + 1) / steps.length) * 100}%` : '0%'
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step number badge */}
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10 flex-shrink-0 transition-all duration-500 ${
                    index <= activeStep ? 'bg-primary scale-110' : 'bg-gray-300'
                  }`}
                >
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="ml-6 flex-1">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    index <= activeStep ? 'text-primary' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed transition-opacity duration-300 ${
                    index <= activeStep ? 'text-text-secondary opacity-100' : 'text-text-secondary opacity-60'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
