

const Bar = () => {
    return (
      <nav className="bg-gray-100 fixed top-0 left-0 w-full z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Website Logo */}
            <div className="flex items-center">
              <a href="/"><img
                src="https://via.placeholder.com/40"
                alt="Logo"
                className="mr-3"
              /></a>
              <a href="/"><span className="text-xl font-bold text-indigo-700">FTI Nexus</span></a>
            </div>
  
            {/* Language Switcher */}
            <div className="flex items-center">
              <select
                className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Language Switcher"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Bar