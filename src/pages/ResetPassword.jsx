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


  const ResetPassword = () => {
    return (
    <>
        <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
            {/* bar */}
            <Bar />

            {/* Content */}
            <div className="w-full max-w-md mt-16 px-6 py-8 ">
                <div className="text-center mb-6">
                <a href="/"><img
                    src="https://via.placeholder.com/50"
                    alt="Logo"
                    className="mx-auto mb-4"
                /></a>
                <h1 className="text-2xl font-semibold text-gray-700">Reset Password</h1>
                </div>

                <form className="space-y-6">
                <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                    placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Password
                    </label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                    placeholder="Enter your password"
                    />
                </div>

                <div>
                    <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Confirm Password
                    </label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                    placeholder="Enter your password"
                    />
                </div>

           

                <div>
                    <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Reset Password
                    </button>
                </div>
                </form>


              
            </div>
        </div>
    </>
    )
}

export default ResetPassword;