import Bar from "../partials/SubHeader";


const ResetPassword = () => {
 


    return (
    <>
        <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
            {/* bar */}
            <Bar />

            {/* Content */}
            <div className="w-full max-w-md mt-16 px-6 py-8 ">
                <div className="text-center mb-6">
                {/* <a href="/"><img
                    src="https://img.icons8.com/?size=50&id=dnnhw9tu3iTE&format=png&color=000000"
                    alt="Logo"
                    className="mx-auto mb-4"
                /></a> */}
                <h1 className="text-2xl font-semibold text-gray-700">Reset Password</h1>
                </div>

                <form  className="space-y-6">
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