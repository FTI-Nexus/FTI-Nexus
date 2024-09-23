import Bar from "../partials/SubHeader"


const Login = () => {
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
                <h1 className="text-2xl font-semibold text-gray-700">Sign In</h1>
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

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                    >
                        Remember Me
                    </label>
                    </div>

                    <div className="text-sm">
                    <a
                        href="/reset-password"
                        className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                    >
                        Forgot Password?
                    </a>
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Sign In
                    </button>
                </div>
                </form>

                <div className="mt-6 flex items-center justify-between">
                <span className="border-t w-full border-gray-300"></span>
                <span className="px-4 text-gray-400 text-sm">or</span>
                <span className="border-t w-full border-gray-300"></span>
                </div>

                <div className="mt-6">
                <button
                    type="button"
                    className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-white hover:bg-gray-50"
                >
                    <img
                    src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                    />
                    Sign in with Google
                </button>
                </div>

                <p className="mt-6 text-center text-sm text-gray-500">
                Don’t have an account?{" "}
                <a
                    href="/create-account"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Register here
                </a>
                </p>
            </div>
        </div>
    </>
    )
}

export default Login;