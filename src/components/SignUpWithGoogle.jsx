import axios from 'axios'; 
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';



const SignUpwithGoogle = () => {
  const [loading, setLoading] = useState(false);  // Loading state for sign-in process
  const [formData, setFormData] = useState({ dateOfBirth: "", gender: "", countryOfOrigin: "" }); // State for additional info
  const [additionalInfo, setAdditionalInfo] = useState(false); // State to show additional form
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const googleSignin = async () => {
    setLoading(true);  // Set loading to true when sign-in starts
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const firstName = user.displayName.split(" ")[0]; // Get first name
        const lastName = user.displayName.split(" ")[1] || ""; // Get last name

        // Store Google user data in Firestore
        await setDoc(
          doc(db, "users", user.uid),
          {
            email: user.email,
            firstName,
            lastName,
            photo: user.photoURL,
          },
          { merge: true } // Avoid overwriting existing user data
        );

        // After successful sign-in, the form for DOB, Gender, and Country will appear
        setAdditionalInfo(true);
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);

      if (error.code === "auth/popup-closed-by-user") {
        toast.error("Sign-in popup closed. Please try again.", {
          position: "top-center",
        });
      } else if (error.code === "auth/network-request-failed") {
        toast.error("Network error. Please check your connection and try again.", {
          position: "top-center",
        });
      } else {
        toast.error("Login failed, please try again.", {
          position: "top-center",
        });
      }
    } finally {
      setLoading(false);  // Set loading to false when sign-in is complete
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here the full data will be sent to API Endpoint
    try {
      const response = await axios.post('https://fti-nexus-backend.onrender.com/api/v1/auth/signup/google', {
        email: auth.currentUser.email,
        firstName: auth.currentUser.displayName.split(" ")[0],
        lastName: auth.currentUser.displayName.split(" ")[1] || "",
        photo: auth.currentUser.photoURL,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        countryOfOrigin: formData.countryOfOrigin,
      });

      if (response.status === 200) {
        toast.success("User signed in and data sent to API successfully!", {
          position: "top-center",
        });
        navigate("/profile");
      } else {
        toast.error("Failed to send data to API", {
          position: "top-center",
        });
      }
    } catch (apiError) {
      console.error("Error sending data to API:", apiError);
      toast.error("Error communicating with server", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="mt-6">
      <ToastContainer />
      {!additionalInfo ? (
        // Google Sign-In Button
        <button
          onClick={googleSignin}
          type="button"
          className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-white hover:bg-gray-50"
          disabled={loading} // Disable the button while loading
        >
          <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          {loading ? "Signing up..." : "Sign up with Google"}
        </button>
      ) : (
        // Form to collect DOB, Gender, Country after Google sign-in
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Country of Origin</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter your country"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUpwithGoogle;
