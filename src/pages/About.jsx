function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Page Header */}
        <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
        <div className="w-24 h-1 bg-blue-500 mb-12"></div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            I'm transitioning into tech with a strong foundation in software engineering,
            data, and applied AI—bringing a disciplined, self-directed approach to learning
            and problem-solving.
          </p>
        </section>

        {/* Technical Background */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Technical Background</h2>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              I've completed five technical certifications, including a <strong className="text-white">150-hour
              Full-Stack Engineering certification</strong>, <strong className="text-white">Data & Programming
              Foundations for AI</strong> (39 hours), <strong className="text-white">Python 3</strong> (24 hours),
              <strong className="text-white"> Building AI Agents</strong>, and <strong className="text-white">Generative
              AI for Everyone</strong>. I'm currently completing a <strong className="text-white">95-hour Data Scientist:
              Machine Learning Specialist certification</strong> focused on statistics, data analysis, and machine
              learning fundamentals.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I work across <strong className="text-blue-400">HTML, CSS, JavaScript, Python, JSX, React, Redux,
              and TailwindCSS</strong>, with hands-on experience in the <strong className="text-blue-400">PERN stack</strong>
              (PostgreSQL, Express.js, React, Node.js). I've built RESTful APIs, implemented OAuth authentication,
              written SQL queries, and managed code with Git/GitHub and npm. I'm comfortable with modern development
              workflows, iterative debugging, and data wrangling using <strong className="text-blue-400">Pandas</strong>,
              alongside foundational knowledge in probability, linear algebra, and AI/ML concepts.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My AI experience includes working with <strong className="text-blue-400">generative AI systems</strong> and
              <strong className="text-blue-400"> AI agent design</strong>, with particular interest in LLMs and automation.
            </p>
          </div>
        </section>

        {/* What I Bring Beyond Code */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">What I Bring Beyond Code</h2>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              Before tech, I spent 5 years as a <strong className="text-white">licensed real estate professional</strong> at
              Century 21 Results in Cumming, GA, where I closed <strong className="text-white">50+ transactions totaling
              over $15 million</strong> in sales volume. This experience taught me:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-300">
                <strong className="text-blue-400">Analytical thinking</strong> and translating ambiguous problems
                into concrete requirements
              </li>
              <li className="text-gray-300">
                <strong className="text-blue-400">Clear communication</strong> with technical and non-technical stakeholders
              </li>
              <li className="text-gray-300">
                <strong className="text-blue-400">Product-focused mindset</strong> shaped by managing high-stakes,
                client-facing projects
              </li>
              <li className="text-gray-300">
                <strong className="text-blue-400">Persistence</strong> when working through complex or unfamiliar challenges
              </li>
              <li className="text-gray-300">
                <strong className="text-blue-400">Attention to detail</strong> (hundreds of legal contracts will do
                that to you)
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              I'm comfortable learning new tools quickly, working independently while staying highly coachable, and
              I value clean, maintainable solutions, thoughtful UX, and data-driven decision-making.
            </p>
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">What I'm Looking For</h2>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm actively seeking opportunities aligned with:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300">• Junior Software Developer / Junior Full-Stack Engineer</li>
              <li className="text-gray-300">• React Developer</li>
              <li className="text-gray-300">• Data Specialist / Data Analyst</li>
              <li className="text-gray-300">• AI/ML-adjacent roles</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              ...where I can continue building production-ready skills and contribute to practical, user-focused,
              data-driven products.
            </p>
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
              <p className="text-blue-300 font-semibold">
                Available for on-site or hybrid roles in Metro Atlanta, or remote positions anywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <div className="mt-8 mb-8 flex justify-center gap-6">
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

export default About
