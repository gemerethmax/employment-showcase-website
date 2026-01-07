function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-blue-500 mb-8 mx-auto"></div>
        </div>
        <p className="text-xl text-gray-400 mb-12 text-center">
          I'm actively seeking opportunities in full-stack development, React, data analysis,
          and AI/ML-adjacent roles. Let's connect!
        </p>

        <div className="max-w-2xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:gemereth.max@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition duration-200"
                    >
                      gemereth.max@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💼</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/matthew-gemereth-711193203"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition duration-200"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💻</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">GitHub</h3>
                    <a
                      href="https://github.com/gemerethmax"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition duration-200"
                    >
                      View my code
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location & Availability</h3>
                    <p className="text-gray-400 text-sm">
                      Metro Atlanta (On-site/Hybrid)
                      <br />
                      Remote (Anywhere)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Note */}
            <div className="mt-8 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
