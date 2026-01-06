function Projects() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Page Header */}
        <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
        <div className="w-24 h-1 bg-blue-500 mb-8"></div>
        <p className="text-xl text-gray-400 mb-12">
          A showcase of my work demonstrating full-stack development skills.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1: This Portfolio Site */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500 transition duration-200">
            <div className="bg-gradient-to-br from-blue-900 to-slate-800 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🌐</div>
                <p className="text-white font-semibold">Portfolio Website</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Personal Portfolio Site</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A responsive portfolio website built with React, Vite, and Tailwind CSS.
                Features routing, modern UI design, and optimized performance.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm rounded-full border border-blue-700">React</span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm rounded-full border border-blue-700">Vite</span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm rounded-full border border-blue-700">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm rounded-full border border-blue-700">React Router</span>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/gemerethmax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded transition duration-200"
                >
                  View Code
                </a>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200">
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          {/* Placeholder Project 2 */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden opacity-60">
            <div className="bg-gradient-to-br from-purple-900 to-slate-800 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🚀</div>
                <p className="text-white font-semibold">Coming Soon</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Project In Development</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Additional projects will be added here as they're completed. Check back soon!
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Planned Features:</h4>
                <ul className="text-gray-500 text-sm space-y-1 ml-4">
                  <li>• Full-stack PERN implementation</li>
                  <li>• RESTful API design</li>
                  <li>• User authentication</li>
                  <li>• Database integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Placeholder Project 3 */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden opacity-60">
            <div className="bg-gradient-to-br from-green-900 to-slate-800 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🤖</div>
                <p className="text-white font-semibold">Coming Soon</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">AI/ML Project</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                An AI or data-focused project leveraging my machine learning and data analysis skills.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Planned Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-700">Python</span>
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-700">Pandas</span>
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-700">AI/ML</span>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Project 4 */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden opacity-60">
            <div className="bg-gradient-to-br from-orange-900 to-slate-800 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">📊</div>
                <p className="text-white font-semibold">Coming Soon</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Data Visualization Project</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A data analysis and visualization project demonstrating data manipulation and presentation skills.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Planned Features:</h4>
                <ul className="text-gray-500 text-sm space-y-1 ml-4">
                  <li>• Data cleaning and preprocessing</li>
                  <li>• Interactive visualizations</li>
                  <li>• Statistical analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            More projects will be added as they're completed. This portfolio is actively being developed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
