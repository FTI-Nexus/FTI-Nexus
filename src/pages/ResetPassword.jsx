import Bar from "../partials/SubHeader";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { db } from "../components/firebase"; 
import { doc, updateDoc } from "firebase/firestore"; 

const CreateNewPassword = () => {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            // setError("Passwords do not match");
            toast.error("Passwords do not match", {
                position: "top-right",
            });
            return;
        }

        try {
            // API response to set new password
            const response = await axios.post('https://fti-nexus-backend.onrender.com/api/v1/auth/reset-password', {
                password: formData.password, 
                token: 'user-reset-token', // This will be replace with actual token
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                toast.success("Password updated successfully", {
                    position: 'top-right',
                });

                // After successful password reset, update Firestore data
                const userRef = doc(db, "users", user.uid);
                await updateDoc(userRef, {
                    passwordUpdated: true, 
                    passwordResetTimestamp: new Date(), // Log the time of the reset
                });

                window.location.href = "/login"; // Redirect to login after success
            } else {
                throw new Error("Failed to update password");
            }
        } catch (error) {
            setError(error.message);
            toast.error(error.message, {
                position: "top-right",
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer />
            <Bar />
            <div className="w-full max-w-md mt-20 py-8 px-6">
                <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Create New Password</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your new password"
                            className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="Confirm your new password"
                            className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateNewPassword;
