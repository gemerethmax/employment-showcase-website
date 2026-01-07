import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-lg border-b border-slate-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hidden md:block font-hero text-2xl font-bold hover:text-blue-400 transition">
          Max Gemereth
        </Link>
        <div className="flex gap-4 md:gap-6 mx-auto md:mx-0">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link to="/resume" className="hover:text-blue-400 transition">
            Resume
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
