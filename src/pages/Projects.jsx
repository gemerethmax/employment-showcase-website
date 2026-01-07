function Projects() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Page Header */}
        <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
        <div className="w-24 h-1 bg-blue-500 mb-8"></div>
        <p className="text-xl text-gray-400 mb-12">
          A showcase of my work demonstrating software development skills.
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
                  href="https://github.com/gemerethmax/employment-showcase-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded transition duration-200"
                >
                  View Code
                </a>
                <a
                  href="https://maxgemereth.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Happy Hour Swipe */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-purple-500 transition duration-200">
            <div className="bg-gradient-to-br from-purple-900 to-slate-800 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🌆</div>
                <p className="text-white font-semibold">Full-Stack PERN App</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Happy Hour Swipe</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Metro-Atlanta happy hour discovery app with Tinder-style swipe interface. Features JWT authentication, PostgreSQL database, real-time filtering, and retro 60s/70s themed UI with neon effects.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full border border-purple-700">PostgreSQL</span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full border border-purple-700">Express</span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full border border-purple-700">React</span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full border border-purple-700">Node.js</span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-sm rounded-full border border-purple-700">JWT Auth</span>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/gemerethmax/happy-hour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded transition duration-200"
                >
                  View Code
                </a>
                <a
                  href="https://happy-hour-api-561p.onrender.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Life Expectancy and GDP Analysis */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-green-500 transition duration-200">
            <div className="bg-gradient-to-br from-green-900 to-slate-800 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">📊</div>
                <p className="text-white font-semibold">Data Analysis Project</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Life Expectancy and GDP Analysis</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Analyzed the relationship between GDP and life expectancy across multiple countries (2000-2015). Developed visualizations uncovering key trends, correlations, and disparities in growth using Python-based data analysis libraries.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-700">Python</span>
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-700">Pandas</span>
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-700">Matplotlib</span>
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-700">Seaborn</span>
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-700">Jupyter</span>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/gemerethmax/Life-Expectancy-and-GDP-Starter/blob/main/life_expectancy_gdp.ipynb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200"
                >
                  View Notebook
                </a>
              </div>
            </div>
          </div>

          {/* Project 4: NFL Survivor Pool Analysis */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-orange-500 transition duration-200">
            <div className="bg-gradient-to-br from-orange-900 to-slate-800 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🏈</div>
                <p className="text-white font-semibold">Predictive Analytics</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">NFL Survivor Pool Analysis</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Data-driven decision support system for NFL survivor pool optimization. Developed Python-based solution leveraging Vegas odds, predictive modeling, and probabilistic reasoning to optimize contrarian pick strategies.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-900/30 text-orange-400 text-sm rounded-full border border-orange-700">Python</span>
                  <span className="px-3 py-1 bg-orange-900/30 text-orange-400 text-sm rounded-full border border-orange-700">Pandas</span>
                  <span className="px-3 py-1 bg-orange-900/30 text-orange-400 text-sm rounded-full border border-orange-700">NumPy</span>
                  <span className="px-3 py-1 bg-orange-900/30 text-orange-400 text-sm rounded-full border border-orange-700">Jupyter</span>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/gemerethmax/data_foundations_final_project/blob/main/notebooks/survivor_pool_analysis.ipynb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded transition duration-200"
                >
                  View Notebook
                </a>
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
