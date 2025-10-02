'use client'

import Layout from '@/components/Layout'
import Link from 'next/link'
import { useState } from 'react'

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(9)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const blogPosts = [
    {
      title: "10 Steps to Master Legal SEO for Law Firms",
      excerpt: "Master legal SEO with these proven strategies to boost your law firm's online visibility, attract more qualified leads, and dominate local search results.",
      date: "2024-01-20",
      category: "Legal Marketing",
      slug: "10-steps-to-master-legal-seo-for-law-firms",
      readTime: "12 min read"
    },
    {
      title: "Top 10 Legal Blogs Every Law Firm Should Follow",
      excerpt: "Discover the guidance and precedent you need to achieve big things within your law firm with these outstanding legal blogs that provide valuable insights.",
      date: "2024-01-18",
      category: "Legal Resources",
      slug: "top-10-legal-blogs-every-law-firm-should-follow",
      readTime: "10 min read"
    },
    {
      title: "Legal Lead Generation: 10 Proven Strategies for Law Firms",
      excerpt: "Discover proven lead generation strategies that will help your law firm attract more qualified clients, increase case volume, and grow your practice.",
      date: "2024-01-16",
      category: "Business Development",
      slug: "legal-lead-generation-10-proven-strategies-for-law-firms",
      readTime: "14 min read"
    },
    {
      title: "What Is a Virtual Receptionist and Why Your Law Firm Needs One",
      excerpt: "Discover how virtual receptionists can transform your law firm's client intake process, boost productivity, and capture more qualified leads 24/7.",
      date: "2024-01-15",
      category: "Legal Technology",
      slug: "what-is-virtual-receptionist-law-firms",
      readTime: "8 min read"
    },
    {
      title: "24/7 Legal Answering Service: The Complete Guide for Law Firms",
      excerpt: "Learn why 24/7 answering services are essential for law firms and how they can help you never miss another potential client call.",
      date: "2024-01-12",
      category: "Client Intake",
      slug: "24-7-legal-answering-service-guide",
      readTime: "6 min read"
    },
    {
      title: "AI Receptionist vs Human Receptionist: Which Is Better for Law Firms?",
      excerpt: "Compare AI and human receptionist services to determine the best solution for your law firm's unique needs and budget.",
      date: "2024-01-10",
      category: "AI Technology",
      slug: "ai-vs-human-receptionist-law-firms",
      readTime: "7 min read"
    },
    {
      title: "Legal Intake Automation: How to Streamline Your Client Onboarding",
      excerpt: "Discover how automated legal intake systems can improve efficiency, reduce errors, and enhance client experience.",
      date: "2024-01-08",
      category: "Process Automation",
      slug: "legal-intake-automation-guide",
      readTime: "9 min read"
    },
    {
      title: "Bilingual Legal Receptionist Services: Expanding Your Client Base",
      excerpt: "Learn how bilingual receptionist services can help law firms serve diverse communities and capture more clients.",
      date: "2024-01-05",
      category: "Client Services",
      slug: "bilingual-legal-receptionist-services",
      readTime: "5 min read"
    },
    {
      title: "HIPAA Compliance in Legal Answering Services: What You Need to Know",
      excerpt: "Understand HIPAA requirements for legal answering services and learn how to protect sensitive client information while maintaining compliance.",
      date: "2024-01-03",
      category: "Compliance & Security",
      slug: "hipaa-compliance-in-legal-answering-services-what-you-need-to-know",
      readTime: "7 min read"
    },
    {
      title: "Cost-Effective Legal Answering Service Solutions for Small Law Firms",
      excerpt: "Discover budget-friendly legal answering service solutions that provide maximum value without breaking the budget for small law firms.",
      date: "2024-01-01",
      category: "Cost Management",
      slug: "cost-effective-legal-answering-service-solutions",
      readTime: "6 min read"
    },
    {
      title: "Personal Injury Law Firm Answering Service: Complete Guide for Maximum Case Capture",
      excerpt: "Learn how specialized personal injury answering services can help law firms capture more high-value cases and never miss potential clients.",
      date: "2023-12-30",
      category: "Practice Areas",
      slug: "personal-injury-law-firm-answering-service-guide",
      readTime: "8 min read"
    },
    {
      title: "Criminal Defense Law Firm Answering Service: Best Practices for Maximum Case Capture",
      excerpt: "Discover best practices for criminal defense answering services that handle sensitive cases with professionalism and confidentiality.",
      date: "2023-12-28",
      category: "Practice Areas",
      slug: "criminal-defense-law-firm-answering-service-best-practices",
      readTime: "7 min read"
    },
    {
      title: "Family Law Answering Service Solutions: Handling Sensitive Cases with Care",
      excerpt: "Learn how specialized family law answering services handle sensitive cases with empathy and professionalism while capturing valuable clients.",
      date: "2023-12-25",
      category: "Practice Areas",
      slug: "family-law-answering-service-solutions",
      readTime: "6 min read"
    },
    {
      title: "Legal Answering Service Integration Guide: Connecting Your Systems for Maximum Efficiency",
      excerpt: "Learn how to integrate your legal answering service with existing law firm systems for seamless data flow and improved efficiency.",
      date: "2023-12-22",
      category: "Technology & Integration",
      slug: "legal-answering-service-integration-guide",
      readTime: "8 min read"
    },
    {
      title: "Legal Answering Service Pricing Guide: How to Choose the Right Plan for Your Law Firm",
      excerpt: "Understand legal answering service pricing models, hidden costs, and how to choose the right plan for your firm's needs and budget.",
      date: "2023-12-20",
      category: "Pricing & Costs",
      slug: "legal-answering-service-pricing-guide",
      readTime: "7 min read"
    },
    {
      title: "Legal Answering Service Mistakes to Avoid: Common Pitfalls That Cost Law Firms Clients",
      excerpt: "Learn about common legal answering service mistakes that cost law firms clients and how to avoid them for maximum ROI.",
      date: "2023-12-18",
      category: "Best Practices",
      slug: "legal-answering-service-mistakes-to-avoid",
      readTime: "6 min read"
    },
    {
      title: "Legal Answering Service ROI Calculator: Measure Your Investment Returns",
      excerpt: "Learn how to calculate the return on investment for legal answering services with formulas, examples, and tools for accurate measurement.",
      date: "2023-12-15",
      category: "ROI & Analytics",
      slug: "legal-answering-service-roi-calculator",
      readTime: "5 min read"
    },
    {
      title: "Legal Answering Service Trends 2024: What Law Firms Need to Know",
      excerpt: "Discover the key trends shaping legal answering services in 2024, from AI integration to enhanced security and compliance measures.",
      date: "2023-12-12",
      category: "Industry Trends",
      slug: "legal-answering-service-trends-2024",
      readTime: "6 min read"
    }
  ]

  // Filter posts based on selected category
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))

  // Reset visible posts when category changes
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category)
    setVisiblePosts(9)
  }

  return (
    <Layout>
      <div className="section-spacing">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="mb-4">Legal Technology Blog</h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Stay updated with the latest insights on legal technology, client intake automation, 
              and best practices for law firm growth.
            </p>
          </div>

          {/* Categories Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleCategoryClick('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === null 
                    ? 'bg-secondary text-white' 
                    : 'bg-secondary/10 hover:bg-secondary/20 text-secondary'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category 
                      ? 'bg-secondary text-white' 
                      : 'bg-secondary/10 hover:bg-secondary/20 text-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="card hover-lift animate-scale-in group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h2>
                <p className="text-primary/80 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-primary/60">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisiblePosts(prev => Math.min(prev + 6, filteredPosts.length))}
                className="btn-primary px-8 py-3 text-lg"
              >
                Load More Articles
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center mt-12">
              <div className="card max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-4">No articles found</h3>
                <p className="text-primary/80 mb-4">
                  No articles found in the "{selectedCategory}" category.
                </p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="btn-primary"
                >
                  View All Articles
                </button>
              </div>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <div className="card max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-primary/80 mb-6">
                Get the latest insights on legal technology and law firm growth strategies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button className="btn-primary px-6 py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}