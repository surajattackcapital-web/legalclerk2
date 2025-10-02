import Layout from '@/components/Layout'

export default function Privacy() {
  return (
    <Layout>
      <div className="section-spacing">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-primary/80 text-lg">
              Last updated: January 15, 2024
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                LegalClerk.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our legal answering service and related services (collectively, the "Service").
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p className="mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Law firm information and professional credentials</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Client information provided through our answering services</li>
                <li>Communication preferences and service requirements</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
              <p className="mb-4">
                We automatically collect certain information when you use our Service:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, features used)</li>
                <li>Call logs and recordings (with appropriate consent)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.3 Protected Health Information (PHI)</h3>
              <p className="mb-4">
                In the course of providing legal answering services, we may collect and process Protected Health Information (PHI) as defined under HIPAA. We maintain strict safeguards to protect this information in accordance with applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Providing and maintaining our legal answering services</li>
                <li>Processing client intake and lead qualification</li>
                <li>Scheduling appointments and managing calendars</li>
                <li>Improving our services and developing new features</li>
                <li>Communicating with you about your account and our services</li>
                <li>Complying with legal obligations and regulatory requirements</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Marketing and promotional communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-3">4.1 Service Providers</h3>
              <p className="mb-4">
                We may share information with trusted third-party service providers who assist us in operating our Service, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Cloud hosting and data storage providers</li>
                <li>Payment processing services</li>
                <li>Communication and messaging platforms</li>
                <li>Analytics and monitoring services</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.2 Legal Requirements</h3>
              <p className="mb-4">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold mb-3">4.3 Business Transfers</h3>
              <p className="mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. HIPAA Compliance</h2>
              <p className="mb-4">
                As a provider of services to law firms that may handle Protected Health Information (PHI), we maintain compliance with the Health Insurance Portability and Accountability Act (HIPAA). Our HIPAA compliance measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Business Associate Agreements (BAAs) with covered entities</li>
                <li>Administrative, physical, and technical safeguards</li>
                <li>Regular risk assessments and security evaluations</li>
                <li>Employee training on HIPAA requirements</li>
                <li>Incident response procedures for potential breaches</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specific retention periods include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Account information: Retained while your account is active and for a reasonable period thereafter</li>
                <li>Call recordings: Retained according to your preferences and legal requirements</li>
                <li>Client data: Retained in accordance with legal and professional obligations</li>
                <li>Marketing data: Retained until you opt out or request deletion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Your Rights and Choices</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>

              <h3 className="text-xl font-semibold mb-3">8.1 General Rights</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">8.2 California Privacy Rights (CCPA)</h3>
              <p className="mb-4">
                California residents have additional rights under the California Consumer Privacy Act, including the right to know what personal information is collected and how it's used, the right to delete personal information, and the right to opt-out of the sale of personal information.
              </p>

              <h3 className="text-xl font-semibold mb-3">8.3 European Privacy Rights (GDPR)</h3>
              <p className="mb-4">
                If you are in the European Economic Area, you have rights under the General Data Protection Regulation, including the right to access, rectify, erase, restrict, port, and object to the processing of your personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our Service. You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links</h2>
              <p className="mb-4">
                Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
              <p className="mb-4">
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-primary/5 p-6 rounded-xl">
                <p className="mb-2"><strong>LegalClerk.ai Privacy Team</strong></p>
                <p className="mb-2">Email: privacy@legalclerk.ai</p>
                <p className="mb-2">Phone: 1-800-LEGAL-AI</p>
                <p className="mb-2">Address: 123 Legal Street, Suite 100, Legal City, LC 12345</p>
                <p>Data Protection Officer: dpo@legalclerk.ai</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}
