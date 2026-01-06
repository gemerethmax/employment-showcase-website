import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Add backend email functionality later
    setStatus('Message sent! (Note: Backend not yet implemented)')
    console.log('Form data:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
        <div className="w-24 h-1 bg-blue-500 mb-8"></div>
        <p className="text-xl text-gray-400 mb-12">
          I'm actively seeking opportunities in full-stack development, React, data analysis,
          and AI/ML-adjacent roles. Let's connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition duration-200 resize-none"
                  placeholder="Tell me about the opportunity or project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center text-green-400 font-semibold mt-4">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

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
