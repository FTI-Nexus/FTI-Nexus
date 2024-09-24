import { useState } from "react";

const Bar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
      <nav className="bg-gray-100 fixed top-0 left-0 w-full z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Website Logo */}
            <div className="flex items-center">
              <a href="/"><img
                src="https://img.icons8.com/?size=50&id=dnnhw9tu3iTE&format=png&color=000000"
                alt="Logo"
                className="mr-3"
              /></a>
              <a href="/"><span className="text-xl font-bold text-indigo-700">FTI Nexus</span></a>
            </div>
  
            {/* Language Switcher */}
            <div className="hidden md:flex items-center ">
              <select
                className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Language Switcher"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
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
                      strokeWidth="3"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
          </div>
        </div>

        {/* Mobile Menu - Shows when isOpen is true */}
        {isOpen && (
            <div className="md:hidden px-6 pt-4 pb-4 shadow-md bg-gray-100">
              <a href="#" className="block text-gray-700 py-2  hover:text-indigo-600">Top Market</a>
              <a href="#" className="block text-gray-700 py-2  hover:text-indigo-600">Founded</a>
              <a href="#" className="block text-gray-700 py-2  hover:text-indigo-600">Promotion</a>
              <a href="#" className="block text-gray-700 mb-5 py-2  hover:text-indigo-600">About Us</a>
              <a href="/login" className="block text-center text-indigo-700 py-2 rounded-lg border hover:text-indigo-600">Log In</a>
              <a href="/create-account" className="block text-center bg-indigo-700 text-white px-4 py-2 mt-2 rounded-lg hover:bg-indigo-800">Register</a>
            </div>
          )}


      </nav>
    );
  };

  export default Bar