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
              <strong className="text-white">Building AI Agents</strong>, and <strong className="text-white">Generative
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

        {/* Contact Links */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
          <div className="flex justify-center gap-4 text-gray-400">
            <a
              href="mailto:gemereth.max@gmail.com"
              className="hover:text-blue-400 transition duration-200"
            >
              📧 gemereth.max@gmail.com
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/matthew-gemereth-711193203"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              💼 LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://github.com/gemerethmax"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              💻 GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
