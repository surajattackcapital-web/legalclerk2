import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function LegalSEOMastery() {
  return (
    <Layout>
      <div className="section-spacing">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                Legal Marketing
              </span>
            </div>
            <h1 className="mb-4">10 Steps to Master Legal SEO for Law Firms</h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Stop losing clients to competitors who show up first on Google. Here's your complete roadmap to dominating local search results and attracting high-value legal clients.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-primary/60">
              <span>January 20, 2024</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              alt="Law firm SEO strategy with analytics dashboard showing search rankings"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
              <p className="text-lg font-medium text-orange-800 mb-2">💡 The Reality Check</p>
              <p className="text-orange-700">
                While you're reading this, your competitors are probably already ranking higher than you on Google. 
                Every day you wait is another day potential clients find them instead of you. But here's the good news: 
                with the right strategy, you can turn this around faster than you think.
              </p>
            </div>

            <p className="text-xl text-primary/90 mb-8">
              Picture this: Sarah, a 34-year-old marketing manager, just got rear-ended on her way to work. 
              She's shaken up, her car is damaged, and she needs legal help. What's the first thing she does? 
              She pulls out her phone and searches "car accident lawyer near me."
            </p>

            <p className="mb-8">
              <strong>Here's the million-dollar question:</strong> Will your law firm be the first one she sees, 
              or will she scroll past your listing to find a competitor who's already captured her attention? 
              The difference between these two scenarios often comes down to one thing: <em>legal SEO mastery</em>.
            </p>

            <p className="mb-8">
              I've worked with dozens of law firms over the years, and I've seen the same pattern repeat itself. 
              Firms that invest in proper SEO strategies see their client intake increase by 200-400% within 6-12 months. 
              Those that ignore it? They're still wondering why their phone isn't ringing.
            </p>

            <h2 className="mt-16 mb-8">1. Know Your Legal Audience (This Changes Everything)</h2>
            
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Law firm client personas and target audience analysis"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="font-medium text-blue-800 mb-2">🎯 The Client Persona Exercise</p>
              <p className="text-blue-700">
                Before you write a single word of content, you need to get inside your ideal client's head. 
                This isn't just marketing fluff – it's the foundation of everything that follows.
              </p>
            </div>

            <p>
              Let me share a story that illustrates this perfectly. I worked with a personal injury firm that was struggling to attract clients. 
              Their website was generic, talking about "experienced attorneys" and "proven results." Sound familiar?
            </p>

            <p>
              Then we did something simple but powerful: we created detailed client personas. We discovered that their ideal client wasn't just 
              "someone who was injured" – they were typically working-class individuals, often the primary breadwinner, who were terrified about 
              how they'd pay their bills while recovering.
            </p>

            <p>
              <strong>The game-changer:</strong> Instead of talking about "legal expertise," we started addressing their real fears: 
              "Will I lose my job?" "How will I pay my mortgage?" "What if the insurance company tries to lowball me?"
            </p>

            <p>
              Within three months, their conversion rate increased by 180%. Why? Because they stopped talking like lawyers and started talking 
              like human beings who understood their clients' real problems.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Your Action Items:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create 3-5 detailed client personas (age, income, fears, goals, search behavior)</li>
                <li>Interview past clients to understand their decision-making process</li>
                <li>Identify the specific language your clients use when describing their problems</li>
                <li>Map out their emotional journey from problem to solution</li>
              </ul>
            </div>

            <h2 className="mt-16 mb-8">2. Spy on Your Competitors (Legally, of Course)</h2>
            
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Competitive analysis dashboard showing law firm rankings and strategies"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            <p>
              Here's something that might surprise you: your competitors are probably doing SEO research on <em>you</em> right now. 
              The question is, are you doing the same to them?
            </p>

            <p>
              I once helped a small family law firm compete against a much larger, well-established practice in their city. 
              The big firm had been dominating search results for years, and my client felt like David facing Goliath.
            </p>

            <p>
              But here's what we discovered during our competitive analysis: while the big firm had great rankings, their content was dry, 
              corporate, and completely impersonal. They were talking <em>at</em> potential clients instead of <em>to</em> them.
            </p>

            <p>
              <strong>The opportunity:</strong> We positioned my client as the "human" alternative. Instead of "comprehensive legal services," 
              we talked about "helping families navigate their most difficult moments." Instead of "experienced attorneys," 
              we shared real stories of families we'd helped.
            </p>

            <p>
              Within 8 months, they were ranking #2 for "divorce lawyer [city name]" – right behind the big firm, but with a much higher 
              conversion rate because their content actually resonated with people going through difficult times.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-green-800">🔍 Your Competitive Intelligence Checklist:</h4>
              <ul className="list-disc pl-6 space-y-2 text-green-700">
                <li>Identify your top 5 local competitors</li>
                <li>Analyze their top-ranking pages and content themes</li>
                <li>Check their backlink profiles (who's linking to them?)</li>
                <li>Monitor their social media presence and engagement</li>
                <li>Look for content gaps you can fill better</li>
                <li>Track their Google My Business reviews and responses</li>
              </ul>
            </div>

            <h2 className="mt-16 mb-8">3. Find the Keywords Your Clients Actually Use (Not What You Think They Use)</h2>
            
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Keyword research tools and search analytics for law firms"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <p className="font-medium text-purple-800 mb-2">💬 The Language Gap</p>
              <p className="text-purple-700">
                Here's a common mistake I see: lawyers write content using legal jargon, but their clients search using everyday language. 
                This mismatch is costing you clients every single day.
              </p>
            </div>

            <p>
              Let me give you a perfect example. A criminal defense attorney I worked with was targeting keywords like "criminal defense representation" 
              and "legal advocacy services." Sounds professional, right?
            </p>

            <p>
              But when we looked at what people were actually searching for, we found terms like "got arrested what do I do," "DUI lawyer help," 
              and "criminal charges against me." These searches were happening 10x more frequently than the "professional" terms.
            </p>

            <p>
              <strong>The breakthrough:</strong> We rewrote their content to match how people actually talk when they're in trouble. 
              Instead of "comprehensive criminal defense," we used "help when you're facing criminal charges." 
              Instead of "experienced legal representation," we said "lawyer who understands what you're going through."
            </p>

            <p>
              The result? Their organic traffic increased by 340% in six months, and their phone started ringing with qualified leads who felt 
              like the firm actually understood their situation.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-yellow-800">🎯 Keyword Research That Actually Works:</h4>
              <ul className="list-disc pl-6 space-y-2 text-yellow-700">
                <li><strong>Use Google's "People Also Ask" section</strong> - These are real questions your clients have</li>
                <li><strong>Check Google Autocomplete</strong> - Type your practice area + "lawyer" and see what suggestions appear</li>
                <li><strong>Analyze competitor content</strong> - What keywords are they ranking for?</li>
                <li><strong>Use Answer The Public</strong> - Free tool that shows question-based keywords</li>
                <li><strong>Talk to your receptionist</strong> - What questions do people ask when they call?</li>
                <li><strong>Monitor social media</strong> - How do people describe their legal problems on Facebook/Twitter?</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">📊 The Keyword Hierarchy Framework:</h4>
              <div className="space-y-3">
                <div>
                  <strong>Primary Keywords (1-2 per page):</strong> High-volume, high-competition terms like "personal injury lawyer [city]"
                </div>
                <div>
                  <strong>Secondary Keywords (3-5 per page):</strong> Related terms like "car accident attorney," "slip and fall lawyer"
                </div>
                <div>
                  <strong>Long-tail Keywords (5-10 per page):</strong> Specific phrases like "what to do after a car accident in [city]"
                </div>
                <div>
                  <strong>Question-based Keywords:</strong> "How much does a personal injury lawyer cost?" "Do I need a lawyer for a car accident?"
                </div>
              </div>
            </div>

            <h2 className="mt-16 mb-8">4. Mobile-First: Because Your Clients Are on Their Phones (Not Their Desktops)</h2>
            
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Person using smartphone to search for legal services"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            <p>
              Here's a statistic that should make you sit up and pay attention: <strong>68% of all legal searches now happen on mobile devices.</strong> 
              That means if your website isn't optimized for mobile, you're literally turning away two-thirds of your potential clients.
            </p>

            <p>
              I remember working with a family law firm that was frustrated because their website looked great on desktop but was a disaster on mobile. 
              The contact form was impossible to fill out, the phone number was too small to tap, and the navigation was a nightmare.
            </p>

            <p>
              When we fixed their mobile experience, something incredible happened. Their conversion rate from mobile visitors increased by 240% in just 
              three months. Why? Because suddenly, people could actually use their website on their phones.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <p className="font-medium text-red-800 mb-2">📱 The Mobile Reality Check</p>
              <p className="text-red-700">
                Think about it: when someone has a legal emergency, they're not sitting at their computer. 
                They're on their phone, probably stressed out, and they need to find help fast. 
                If your website doesn't work on their phone, they'll find someone else's that does.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-blue-800">🚀 Mobile Optimization Checklist:</h4>
              <ul className="list-disc pl-6 space-y-2 text-blue-700">
                <li><strong>Page Speed:</strong> Your site should load in under 3 seconds on mobile</li>
                <li><strong>Touch-Friendly Buttons:</strong> Make sure buttons are at least 44px tall</li>
                <li><strong>Readable Text:</strong> Use at least 16px font size for body text</li>
                <li><strong>Easy Navigation:</strong> Simple menu structure that works with thumbs</li>
                <li><strong>Click-to-Call:</strong> Make your phone number tappable</li>
                <li><strong>Contact Forms:</strong> Short, simple forms that are easy to fill out</li>
                <li><strong>Local Information:</strong> Make your address and hours easy to find</li>
              </ul>
            </div>

            <p>
              <strong>Pro tip:</strong> Test your website on an actual phone, not just your computer's browser. 
              You'll be surprised at how different the experience can be. Better yet, ask a friend or family member 
              to try to find your contact information on their phone. If they struggle, your potential clients will too.
            </p>

            <h2 className="mt-16 mb-8">5. Dominate Your Local Market (Because That's Where Your Clients Are)</h2>
            
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Local business map and location-based marketing for law firms"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            
            <p>
              Here's the truth: unless you're handling international cases, you don't need to compete globally. 
              You need to dominate your local market. And here's the good news – local SEO is often easier to master than national SEO.
            </p>

            <p>
              I worked with a personal injury firm in a mid-sized city who was getting crushed by bigger firms in their market. 
              They felt like they couldn't compete with the massive advertising budgets of the "ambulance chasers" in their area.
            </p>

            <p>
              But we discovered something powerful: while the big firms were focused on broad, generic terms, 
              we could dominate hyper-local searches. Instead of competing for "personal injury lawyer," 
              we targeted "car accident lawyer [specific neighborhood]" and "slip and fall attorney [local landmark]."
            </p>

            <p>
              <strong>The result:</strong> Within 6 months, they were ranking #1 for 15 different local search terms, 
              and their local client base increased by 180%. They weren't just competing with the big firms – 
              they were beating them in their own backyard.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-green-800">🏆 Local SEO Domination Strategy:</h4>
              <ul className="list-disc pl-6 space-y-2 text-green-700">
                <li><strong>Google My Business:</strong> Claim and optimize your listing with photos, reviews, and accurate info</li>
                <li><strong>Local Keywords:</strong> Target "[practice area] lawyer [city/neighborhood]" variations</li>
                <li><strong>Local Content:</strong> Write about local cases, community involvement, local legal issues</li>
                <li><strong>Local Citations:</strong> Get listed in local directories, bar associations, chamber of commerce</li>
                <li><strong>Local Reviews:</strong> Encourage satisfied clients to leave Google reviews</li>
                <li><strong>Local Events:</strong> Sponsor local events and get mentioned in local media</li>
              </ul>
            </div>

            <h2 className="mt-16 mb-8">6. Write for Humans, Not Robots (The Content That Actually Converts)</h2>
            
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Content writing and copywriting for law firm websites"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            
            <p>
              Here's where most law firms go wrong: they write content that sounds like it was written by a lawyer for other lawyers. 
              But your clients aren't lawyers – they're regular people with real problems who need real help.
            </p>

            <p>
              I worked with a criminal defense attorney who was writing blog posts with titles like "Understanding the Nuances of Criminal Procedure." 
              Nobody was reading them because nobody searches for "nuances of criminal procedure."
            </p>

            <p>
              We changed the approach completely. Instead of legal jargon, we wrote about real problems: "What to Do If You're Arrested," 
              "How to Handle a DUI Stop," "What Happens at Your First Court Appearance." The difference was night and day.
            </p>

            <p>
              <strong>The key insight:</strong> Write like you're explaining the situation to a friend who's never been in legal trouble before. 
              Use simple language, real examples, and address the fears and concerns your clients actually have.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-orange-800">✍️ Content That Converts Checklist:</h4>
              <ul className="list-disc pl-6 space-y-2 text-orange-700">
                <li><strong>Answer Real Questions:</strong> What do people actually ask when they call you?</li>
                <li><strong>Use Simple Language:</strong> Write at an 8th-grade reading level</li>
                <li><strong>Include Real Examples:</strong> Share case studies (with permission) or hypothetical scenarios</li>
                <li><strong>Address Fears:</strong> What keeps your clients up at night?</li>
                <li><strong>Provide Value:</strong> Give away useful information that helps people</li>
                <li><strong>Include Clear CTAs:</strong> Tell people exactly what to do next</li>
              </ul>
            </div>

            <h2 className="mt-16 mb-8">7. Speed Matters (More Than You Think)</h2>
            
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Website speed optimization and performance metrics"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            
            <p>
              Here's a harsh truth: if your website takes more than 3 seconds to load, you're losing clients. 
              In fact, 53% of mobile users will abandon a site that takes longer than 3 seconds to load.
            </p>

            <p>
              I had a client whose website was beautiful but took 8 seconds to load on mobile. They were losing 60% of their visitors before the page even finished loading. 
              When we optimized their site speed, their conversion rate increased by 150% in just two months.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-red-800">⚡ Speed Optimization Essentials:</h4>
              <ul className="list-disc pl-6 space-y-2 text-red-700">
                <li><strong>Optimize Images:</strong> Compress and resize images before uploading</li>
                <li><strong>Use a CDN:</strong> Content delivery networks speed up loading worldwide</li>
                <li><strong>Minimize Plugins:</strong> Every plugin slows down your site</li>
                <li><strong>Choose Good Hosting:</strong> Don't cheap out on hosting – it matters</li>
                <li><strong>Enable Caching:</strong> Cached pages load much faster</li>
              </ul>
            </div>

            <h2 className="mt-16 mb-8">8. Build Authority (The Long Game That Pays Off)</h2>
            
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Law firm authority building and backlink strategies"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            
            <p>
              Google wants to rank websites that other websites trust. This is called "authority," and it's built through quality backlinks, 
              mentions, and citations from reputable sources.
            </p>

            <p>
              The best way to build authority? Create content so valuable that other people want to link to it. 
              Write the definitive guide to your practice area. Share insights that other lawyers can't or won't share. 
              Become the go-to expert in your field.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-purple-800">🎯 Authority Building Strategy:</h4>
              <ul className="list-disc pl-6 space-y-2 text-purple-700">
                <li><strong>Guest Post:</strong> Write for legal blogs and industry publications</li>
                <li><strong>Get Listed:</strong> Submit to legal directories and bar association websites</li>
                <li><strong>Local Citations:</strong> Get mentioned in local business directories</li>
                <li><strong>Media Mentions:</strong> Reach out to local journalists with story ideas</li>
                <li><strong>Speaking Engagements:</strong> Present at local events and conferences</li>
              </ul>
            </div>

            <h2 className="mt-16 mb-8">The Bottom Line: SEO Success Takes Action, Not Just Knowledge</h2>
            
            <p>
              Here's what I want you to understand: reading this guide won't improve your SEO. 
              <strong>Implementing these strategies will.</strong>
            </p>

            <p>
              I've seen too many law firms get excited about SEO, bookmark articles like this one, and then never actually do anything. 
              Meanwhile, their competitors are implementing these exact strategies and stealing their clients.
            </p>

            <p>
              The firms that succeed with SEO are the ones that take action. They don't wait for the "perfect" time or the "perfect" website. 
              They start with what they have and improve as they go.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mb-8 border-l-4 border-orange-400">
              <h3 className="text-2xl font-semibold mb-4 text-orange-800">🚨 The Urgency Factor</h3>
              <p className="text-orange-700 mb-4">
                Every day you wait is another day your competitors are getting stronger. Every day you delay is another day 
                potential clients are finding other lawyers instead of you.
              </p>
              <p className="text-orange-700 mb-6">
                But here's the good news: you don't have to do everything at once. Start with one strategy. 
                Master it. Then move to the next one. Small, consistent actions compound into massive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-orange-600 hover:bg-orange-700">
                  Start Your SEO Journey Today
                </Link>
                <Link href="/solutions/legal-intake" className="btn-secondary border-orange-300 text-orange-700 hover:bg-orange-50">
                  See How We Can Help
                </Link>
              </div>
            </div>

            <h2 className="mt-16 mb-8">Your Next Steps (Don't Skip This Part)</h2>
            
            <p>
              I want you to succeed. That's why I'm giving you a specific action plan. Don't just read this and move on – 
              actually do these things:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4 text-blue-800">📋 Your 30-Day SEO Action Plan:</h4>
              <div className="space-y-3 text-blue-700">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <strong>Week 1:</strong> Create detailed client personas and research your top 10 keywords
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <strong>Week 2:</strong> Optimize your Google My Business listing and claim all local citations
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <strong>Week 3:</strong> Write and publish 3 pieces of content targeting your main keywords
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <strong>Week 4:</strong> Optimize your website speed and mobile experience
                  </div>
                </div>
              </div>
            </div>

            <p>
              <strong>Remember:</strong> SEO is a marathon, not a sprint. But the sooner you start, the sooner you'll see results. 
              And in the legal industry, where every client can be worth thousands of dollars, even a small improvement in your search rankings 
              can have a massive impact on your bottom line.
            </p>

            <p>
              The question isn't whether you can afford to invest in SEO. The question is whether you can afford not to.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
