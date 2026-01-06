function Resume() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">Max Gemereth</h1>
          <p className="text-xl text-gray-400 mb-4">Junior Full-Stack Developer</p>
          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <a href="mailto:gemereth.max@gmail.com" className="hover:text-blue-400">gemereth.max@gmail.com</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/matthew-gemereth-711193203" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
            <span>•</span>
            <a href="https://github.com/gemerethmax" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          </div>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-200">
            Download PDF
          </button>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Professional Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            Junior Full-Stack Developer with a foundation in AI, data programming, and the PERN stack. Transitioning from 5 years
            as a licensed real estate agent, where I closed 50+ transactions totaling $15M+ in sales volume. Currently completing
            a 95-hour Data Scientist: Machine Learning Specialist certification. Proven track record of ownership, discipline, and
            managing multiple high-stakes projects. Seeking opportunities to apply technical skills and business acumen to build
            impactful, data-driven software solutions.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Languages & Frontend</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• JavaScript (ES6+), Python 3, HTML5, CSS3, JSX</li>
                <li>• React, Redux, TailwindCSS</li>
                <li>• Responsive Design, Modern Development Workflows</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Backend & APIs</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Node.js, Express.js</li>
                <li>• RESTful API Development</li>
                <li>• OAuth Authentication, Web Security</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Database</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• PostgreSQL, SQL</li>
                <li>• Database Design & Queries</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Data & Analysis</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Pandas (Data Wrangling, Cleaning, Visualization)</li>
                <li>• Data Analysis, Statistics</li>
                <li>• Probability, Linear Algebra (Foundational)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">AI & Machine Learning</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Generative AI Systems</li>
                <li>• AI Agents & Automation</li>
                <li>• LLMs & AI Agent Design</li>
                <li>• Machine Learning Fundamentals (in progress)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Tools & Practices</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Git & GitHub, npm</li>
                <li>• Iterative Debugging</li>
                <li>• Clean, Maintainable Code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Education & Certifications</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">Codecademy</h3>
            <div className="ml-4 mt-2 space-y-3">
              <div>
                <div className="flex justify-between">
                  <p className="font-semibold text-blue-400">Full-Stack Engineer Certificate (150 hours)</p>
                  <p className="text-gray-500">2024 – 2025</p>
                </div>
                <p className="text-gray-400 text-sm">PERN Stack (PostgreSQL, Express.js, React, Node.js), Data Structures, Algorithms, Web Security</p>
              </div>

              <div>
                <div className="flex justify-between">
                  <p className="font-semibold text-blue-400">Data & Programming Foundations for AI (39 hours)</p>
                  <p className="text-gray-500">2025</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <p className="font-semibold text-blue-400">Python 3 Certificate (24 hours)</p>
                  <p className="text-gray-500">2025</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <p className="font-semibold text-yellow-400">Data Scientist: Machine Learning Specialist Certificate (95 hours)</p>
                  <p className="text-gray-500">In Progress, 2025</p>
                </div>
                <p className="text-gray-400 text-sm">Statistics, Data Analysis, Machine Learning Fundamentals</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Additional Coursework</h3>
            <ul className="ml-4 mt-2 text-gray-300 space-y-1">
              <li>• Building AI Agents | 2024</li>
              <li>• Generative AI for Everyone | 2024</li>
            </ul>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Professional Experience</h2>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-white">Licensed Real Estate Agent</h3>
                <p className="text-blue-400">Century 21 Results | Cumming, GA</p>
              </div>
              <p className="text-gray-500">2021 – 2026</p>
            </div>
            <ul className="ml-4 text-gray-300 space-y-2">
              <li>• Closed 50+ residential transactions totaling over $15 million in sales volume</li>
              <li>• Managed multiple concurrent client projects with strict timelines and regulatory compliance</li>
              <li>• Translated complex technical and legal information for non-technical stakeholders</li>
              <li>• Negotiated contracts and coordinated cross-functional teams including lenders, attorneys, and inspectors</li>
              <li>• Maintained meticulous attention to detail across hundreds of legal documents</li>
              <li>• Developed marketing strategies and client communication systems to scale business operations</li>
              <li>• Demonstrated consistent self-motivation and ownership in commission-based environment</li>
            </ul>
          </div>
        </section>

        {/* Transferable Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Transferable Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="font-semibold text-blue-400 mb-2">Project Management & Execution</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Managed 50+ concurrent transactions</li>
                <li>• Coordinated cross-functional teams</li>
                <li>• 100% accuracy across legal contracts</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="font-semibold text-blue-400 mb-2">Communication & Collaboration</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Negotiated complex agreements</li>
                <li>• Translated technical info for stakeholders</li>
                <li>• Built long-term client relationships</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="font-semibold text-blue-400 mb-2">Business & Ownership</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Self-motivated, commission-based work</li>
                <li>• 5-year tenure demonstrates reliability</li>
                <li>• Developed marketing & sales strategies</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="font-semibold text-blue-400 mb-2">Analytical & Problem-Solving</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Data-driven decision making</li>
                <li>• Persistent through complex challenges</li>
                <li>• Product-focused mindset</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="text-center bg-blue-900/20 border border-blue-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-2">Availability</h3>
          <p className="text-blue-300">
            Available for on-site or hybrid roles in Metro Atlanta, or remote positions anywhere.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Resume
