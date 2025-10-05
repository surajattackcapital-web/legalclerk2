'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface GlobalCTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
  className?: string
}

export default function GlobalCTA({
  title = "Get Started with LegalClerk.ai Today",
  subtitle = "Book a free demo and see how AI can transform your firm's intake process.",
  buttonText = "Book My Demo",
  buttonLink = "/contact",
  className = ""
}: GlobalCTAProps) {
  return (
    <section className={`section-spacing bg-gray-50 ${className}`}>
      <div className="container-custom">
        <motion.div
          className="rounded-2xl p-12 text-center shadow-lg mx-auto"
          style={{ 
            background: 'linear-gradient(360deg, rgba(106, 11, 162, 0.1), rgba(221, 103, 34, 0.1))',
            width: '850px',
            maxWidth: '100%'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-text-primary mb-4">{title}</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Link 
            href={buttonLink}
            className="bg-primary text-white hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg text-center inline-block"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
