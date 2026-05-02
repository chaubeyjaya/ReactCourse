import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-white text-xl font-bold">MyApp</h1>

      {/* Links */}
      <ul className="flex gap-6 text-white">
        <li>
          <Link to="/" className="hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </li>
        <li>
          <Link to="/course" className="hover:text-gray-200">Course</Link>
        </li>
      </ul>


    </nav>
  )
}

export default Navbar