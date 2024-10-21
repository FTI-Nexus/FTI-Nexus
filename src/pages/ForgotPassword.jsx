import Bar from "../partials/SubHeader";


const ForgotPassword = () => {
 


    return (
    <>
        <div className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
            {/* bar */}
            <Bar />

            {/* Content */}
            <div className="w-full max-w-md mt-16 px-6 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
                    <p className="mt-2 text-gray-600 text-sm">Enter your email to receive a password reset link.</p>
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
                            className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Remembered your password?  
                        <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"> Sign In</a>
                    </p>
                </div>
            </div>

        </div>
    </>
    )
}

export default ForgotPassword;