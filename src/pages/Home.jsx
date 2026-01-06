import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        {/* Hero Section */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm <span className="text-blue-400">Max Gemereth</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
          From Real Estate to Full-Stack Development
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Junior Full-Stack Developer with a foundation in AI, data, and the PERN stack.
          After 5 years managing $15M+ in real estate transactions, I'm applying the same
          ownership, discipline, and attention to detail to building software.
        </p>

        <p className="text-md text-gray-500 mb-12">
          Available for on-site/hybrid roles in Metro Atlanta or remote positions.
        </p>

        {/* Certificates Section */}
        <div className="mb-12 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Training</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Full-Stack Engineering */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 hover:border-blue-500 transition duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-white">Full-Stack Engineer</h4>
                <span className="text-green-400 text-sm font-medium">✓ Complete</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">150 hours</p>
              <p className="text-gray-500 text-xs">PERN Stack, Data Structures, Algorithms, Web Security</p>
            </div>

            {/* ML Specialist (In Progress) */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 hover:border-blue-500 transition duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-white">ML Specialist</h4>
                <span className="text-yellow-400 text-sm font-medium">⟳ In Progress</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">95 hours</p>
              <p className="text-gray-500 text-xs">Statistics, Data Analysis, Machine Learning</p>
            </div>

            {/* AI/Data Foundations */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 hover:border-blue-500 transition duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-white">AI & Data Foundations</h4>
                <span className="text-green-400 text-sm font-medium">✓ Complete</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">39 hours</p>
              <p className="text-gray-500 text-xs">Programming Foundations, AI Concepts</p>
            </div>

            {/* Python 3 */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 hover:border-blue-500 transition duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-white">Python 3</h4>
                <span className="text-green-400 text-sm font-medium">✓ Complete</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">24 hours</p>
              <p className="text-gray-500 text-xs">Core Python Programming</p>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-slate-700">
            <p className="text-xl font-semibold text-blue-400">300+ hours of technical training</p>
            <p className="text-sm text-gray-500 mt-1">+ AI Agents & Generative AI coursework</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
          >
            View Projects
          </Link>
          <Link
            to="/resume"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
          >
            View Resume
          </Link>
          <Link
            to="/contact"
            className="border-2 border-gray-500 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Contact Me
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/matthew-gemereth-711193203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-200"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://github.com/gemerethmax"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-200"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="mailto:gemereth.max@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition duration-200"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
