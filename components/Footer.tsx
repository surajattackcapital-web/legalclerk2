import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'AI Receptionist', href: '/solutions/ai-receptionist' },
        { name: 'Legal Intake Automation', href: '/solutions/legal-intake' },
        { name: '24/7 Answering Service', href: '/solutions/24-7-service' },
        { name: 'Bilingual Support', href: '/solutions/bilingual' },
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Personal Injury', href: '/industries/personal-injury' },
        { name: 'Criminal Defense', href: '/industries/criminal-defense' },
        { name: 'Family & Immigration', href: '/industries/family-immigration' },
        { name: 'General Practice', href: '/industries/general-practice' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  ]

  return (
    <footer className="bg-primary border-t border-primary-light">
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1 animate-fade-in">
            <Link href="/" className="flex items-center space-x-2 mb-4 group focus:outline-none">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-secondary group-hover:text-primary-light transition-colors duration-300">LegalClerk.ai</span>
            </Link>
            <p className="text-secondary/90 small-text leading-relaxed">
              Professional AI receptionist and 24/7 answering service for law firms. 
              HIPAA compliant with seamless integrations.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className={`animate-fade-in animate-stagger-${index + 1}`}>
              <h3 className="text-secondary font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-secondary/80 hover:text-primary-light transition-colors duration-300 small-text hover:translate-x-1 transform inline-block focus:outline-none"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary/70 small-text">
              © {currentYear} LegalClerk.ai. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-secondary/70 small-text hover:text-primary-light transition-colors duration-300">HIPAA Compliant</span>
              <span className="text-secondary/70 small-text hover:text-primary-light transition-colors duration-300">SOC2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
