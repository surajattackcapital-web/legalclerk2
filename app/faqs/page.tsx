import Layout from '@/components/Layout'
import GlobalCTA from '@/components/GlobalCTA'

export default function FAQs() {
  const faqs = [
    {
      question: "What is a legal answering service?",
      answer: "A legal answering service is a specialized call handling service designed specifically for law firms. It provides 24/7 professional receptionist services, legal intake, lead qualification, and appointment scheduling. Unlike generic answering services, legal answering services employ receptionists trained in legal terminology, client confidentiality requirements, and the unique needs of different practice areas."
    },
    {
      question: "How much does a legal answering service cost?",
      answer: "Legal answering service costs typically range from $200-$800 per month, depending on call volume and features. This is significantly more cost-effective than hiring a full-time receptionist, which can cost $3,000-$5,000 monthly including salary, benefits, and overhead. Most services offer flexible plans that can be adjusted based on your firm's needs and call volume."
    },
    {
      question: "What makes LegalClerk.ai different from other legal answering services?",
      answer: "LegalClerk.ai stands out with our specialized legal training, HIPAA compliance, bilingual support, and seamless integrations with popular legal case management software. Our receptionists are specifically trained in legal intake procedures and understand the urgency and confidentiality requirements of legal matters. We also offer AI-powered features combined with human oversight for the best of both worlds."
    },
    {
      question: "Is your legal answering service HIPAA compliant?",
      answer: "Yes, LegalClerk.ai is fully HIPAA compliant and SOC2 certified. We understand the importance of protecting sensitive client information and have implemented comprehensive security measures, including encrypted communications, secure data storage, and strict confidentiality protocols. All our receptionists are trained in HIPAA requirements and attorney-client privilege."
    },
    {
      question: "Do you offer bilingual legal answering services?",
      answer: "Yes, we provide comprehensive bilingual support in English and Spanish. Our bilingual receptionists are trained in legal terminology in both languages and can effectively communicate with Spanish-speaking clients. This service helps law firms serve diverse communities and capture leads that might otherwise be lost due to language barriers."
    },
    {
      question: "How quickly can you set up a legal answering service for my law firm?",
      answer: "Setup typically takes 1-2 weeks from signup to full operation. Our team will work with you to understand your firm's specific needs, develop customized call scripts and intake procedures, set up integrations with your case management software, and train our receptionists on your unique requirements. We'll test the system thoroughly before going live."
    },
    {
      question: "What integrations do you offer with legal case management software?",
      answer: "We integrate seamlessly with all major legal case management systems including Clio, MyCase, PracticePanther, Smokeball, Lawmatics, and many others. Our integrations automatically update your CRM with new client information, call details, and appointment bookings, eliminating the need for manual data entry and ensuring your case files are always up to date."
    },
    {
      question: "Can your legal answering service handle emergency calls?",
      answer: "Absolutely. We understand that legal emergencies don't follow business hours. Our 24/7 service includes immediate call transfer capabilities for urgent matters. We can patch emergency calls directly to you or your on-call attorney, ensuring that time-sensitive legal issues receive immediate attention. Our receptionists are trained to identify and prioritize emergency situations."
    },
    {
      question: "How do you ensure quality and consistency in your legal answering service?",
      answer: "We maintain high quality through comprehensive training programs, regular quality monitoring, and ongoing education. All our receptionists undergo extensive legal intake training and receive regular updates on legal procedures and terminology. We also provide detailed call logs and performance reports so you can monitor the quality of service your clients receive."
    },
    {
      question: "What types of law firms can benefit from your legal answering service?",
      answer: "Our service benefits all types of law firms, from solo practitioners to large firms. We have specialized experience with personal injury, criminal defense, family law, immigration, employment law, and many other practice areas. Our receptionists are trained to understand the specific needs and terminology of different legal specialties, ensuring appropriate handling of each type of case."
    },
    {
      question: "Do you provide call recording and transcription services?",
      answer: "Yes, we offer optional call recording and transcription services. This feature helps with quality assurance, training, and maintaining detailed records of client communications. All recordings are stored securely and can be accessed through your client portal. Transcription services are particularly valuable for complex legal matters where detailed documentation is essential."
    },
    {
      question: "How do you handle spam calls and unwanted solicitations?",
      answer: "We automatically filter and block spam calls, robocalls, and unwanted solicitations. Our system blocks over 20 million known spammers and continuously updates our spam database. You can also provide your own block list of specific numbers you want to avoid. This ensures that only legitimate client calls reach our receptionists, saving you time and improving service quality."
    },
    {
      question: "Can I customize the call scripts and procedures for my law firm?",
      answer: "Absolutely. We work with each law firm to develop customized call scripts and procedures that reflect your firm's unique voice, values, and practice areas. Our team will learn about your specific requirements, client base, and preferences to ensure that our receptionists represent your firm professionally and consistently."
    },
    {
      question: "What happens if I'm not satisfied with the service?",
      answer: "We offer a risk-free trial period and satisfaction guarantee. If you're not completely satisfied with our service, we'll work with you to address any concerns or provide a full refund. Our goal is to ensure that every law firm we serve is completely satisfied with the quality and value of our legal answering service."
    },
    {
      question: "Do you offer mobile app access for managing calls and messages?",
      answer: "Yes, we provide a comprehensive mobile app that gives you real-time access to call logs, messages, appointment schedules, and client information. You can receive instant notifications for new calls and messages, review call recordings, and manage your account settings from anywhere. The app is available for both iOS and Android devices."
    }
  ]

  return (
    <Layout>
      <div className="section-spacing">
        <div className="container-custom max-w-5xl">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="mb-6 text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about legal answering services, 
              virtual receptionists for law firms, and how LegalClerk.ai can help your practice.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 pr-4 flex-1 no-underline">
                        {faq.question}
                      </h3>
                      <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full h-px bg-primary mb-4"></div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <div className="card max-w-3xl mx-auto border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Still Have Questions?</h3>
                <p className="text-primary/80 mb-8 text-lg leading-relaxed">
                  Our legal answering service experts are here to help. Contact us for a free consultation 
                  and learn how we can help your law firm never miss another client call.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="/contact" className="btn-primary btn-mobile">
                    Contact Us
                  </a>
                  <a href="/pricing" className="btn-secondary btn-mobile">
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <GlobalCTA 
        title="Ready to Get Started?"
        subtitle="Join hundreds of law firms already using LegalClerk.ai to never miss another client call."
        buttonText="Start Free Trial"
        buttonLink="/contact"
      />
    </Layout>
  )
}