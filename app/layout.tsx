import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'LegalClerk.ai - #1 Legal Answering Service | 24/7 AI Receptionist for Law Firms',
  description: 'Professional 24/7 legal answering service with HIPAA compliance, bilingual support, and seamless integrations. Trusted by thousands of attorneys nationwide. Never miss another client call.',
  keywords: 'legal answering service, law firm answering service, 24/7 legal receptionist, virtual receptionist for lawyers, legal intake automation, law firm call center, legal answering service pricing, best legal answering service, HIPAA compliant answering service, bilingual legal receptionist, legal answering service reviews, law firm phone answering service, legal answering service features, legal answering service benefits, legal answering service comparison, legal answering service cost, legal answering service software, legal answering service integration, legal answering service training, legal answering service support',
  openGraph: {
    title: 'LegalClerk.ai - #1 Legal Answering Service | 24/7 AI Receptionist for Law Firms',
    description: 'Professional 24/7 legal answering service with HIPAA compliance, bilingual support, and seamless integrations. Trusted by thousands of attorneys nationwide.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LegalClerk.ai - #1 Legal Answering Service for Law Firms',
    description: 'Professional 24/7 legal answering service with HIPAA compliance, bilingual support, and seamless integrations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-text-primary">
        <div className="animate-fade-in">
          {children}
        </div>
      </body>
    </html>
  )
}
