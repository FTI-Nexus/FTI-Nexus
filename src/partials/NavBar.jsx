import { useState } from "react";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <nav className="bg-gray-50  py-4 md:py-4 sticky top-0 z-10 md:relative">
          <div className="container mx-auto flex justify-between items-center px-6">
            {/* Left Section: Logo and Navigation Links */}
            <div className="flex items-center space-x-6">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <a href="/"><img
                  src="https://img.icons8.com/?size=100&id=dnnhw9tu3iTE&format=png&color=000000"
                  alt="Logo"
                  className="h-10 w-10"
                /></a>
                <a href="/"><span className="font-bold md:text-xl text-indigo-800">FTI Nexus</span></a>
              </div>

              {/* Links - Hidden on mobile, visible on md screens and above */}
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-indigo-600">Top Market</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">Founded</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">Promotion</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">About Us</a>
              </div>
            </div>

            {/* Right Section: Buttons and Language Icon */}
            <div className="flex items-center space-x-6">
              <a
                href="/login"
                className="text-gray-700 hover:text-white px-4 py-2 rounded-lg border hover:bg-indigo-800 hidden md:inline-block"
              >
                Log In
              </a>
              <a
                href="/create-account"
                className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 hidden md:inline-block"
              >
                Register
              </a>
              <div className="hidden md:flex items-center">
                <select
                  className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Language Switcher"
                >
                  <option value="en">En</option>
                  <option value="de">De</option>
                  <option value="fr">Fr</option>
                </select>
              </div>

              {/* Hamburger Menu Icon */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu - Shows when isOpen is true */}
          {isOpen && (
            <div className="md:hidden px-6 pt-4 pb-4 shadow-md bg-gray-50">
              <a href="#" className="block text-gray-700 py-2 hover:text-indigo-600">Top Market</a>
              <a href="#" className="block text-gray-700 py-2 hover:text-indigo-600">Founded</a>
              <a href="#" className="block text-gray-700 py-2 hover:text-indigo-600">Promotion</a>
              <a href="#" className="block text-gray-700 mb-5 py-2 hover:text-indigo-600">About Us</a>
              <a href="/login" className="block text-center text-indigo-700 py-2 rounded-lg border hover:text-indigo-600">Log In</a>
              <a href="/create-account" className="block text-center bg-indigo-700 text-white px-4 py-2 mt-2 rounded-lg hover:bg-indigo-800">Register</a>
            </div>
          )}
        </nav>
        </>
    )
}

export default NavBar;