import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { auth } from "../components/firebase";
import SignInwithGoogle from "../components/SignInWithGoogle";
import { signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import Bar from "../partials/SubHeader";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false); 
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [rememberMe, setRememberMe] = useState(false); // State for Remember Me
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked); // Update Remember Me state
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sign in with Firebase
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            console.log("User logged in Successfully");

            // Send data to your backend login API
            const response = await axios.post('https://fti-nexus-backend.onrender.com/api/v1/auth/login', {
                email: formData.email,
                password: formData.password,
                rememberMe, // Send Remember Me state to backend
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // If API returns a success response
            if (response.status === 201 || response.status === 200) {
                const token = response.data.token; // JWT token from API

                // Save token in cookie or sessionStorage based on Remember Me state
                if (rememberMe) {
                    // Store token in a cookie with 30 days expiration
                    const expirationTime = 30 * 24 * 60 * 60; // 30 days in seconds
                    document.cookie = `authToken=${token}; max-age=${expirationTime}; path=/`;
                } else {
                    // Store token in sessionStorage (expires on session end)
                    sessionStorage.setItem("authToken", token);
                }

                // Redirect user after successful login
                navigate("/profile");
                toast.success("User logged in successfully", {
                    position: 'top-right',
                });
            } else {
                throw new Error("Failed to log in via API");
            }
        } catch (error) {
            // Handle errors
            setError(error.response?.data?.message || 'Login failed, please try again.');
            toast.error(error.response?.data?.message || 'Email or password is incorrect', {
                position: "top-right",
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <Bar />
            <Toaster />
            <div className="w-full max-w-md mt-20 py-8 px-6">
                <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Sign In</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Enter your password"
                                className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-3 text-sm text-gray-600"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember-me"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember Me
                            </label>
                        </div>
                        
                        <div>
                            <a href="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                    >
                        {loading ? "Signing" : "Sign In"}
                    </button>

                    <div className="mt-6 flex items-center justify-between">
                        <span className="border-t w-full border-gray-600"></span>
                        <span className="px-4 text-gray-700 text-sm">or</span>
                        <span className="border-t w-full border-gray-600"></span>
                    </div>

                    <SignInwithGoogle />

                    <div className="text-sm text-center">
                        <p className="text-sm font-medium text-gray-700">Don’t have an account? <a href="/create-account" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Register here</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
