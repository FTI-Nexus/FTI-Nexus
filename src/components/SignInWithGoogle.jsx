import axios from 'axios';
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase"; 
import { ToastContainer, toast } from "react-toastify";
import { setDoc, doc, getDoc } from "firebase/firestore";

const SignInwithGoogle = () => {
  const [loading, setLoading] = useState(false);  // Loading state for sign-in process

  const googleSignin = async () => {
    setLoading(true);  // loading set to true when sign-in starts
    const provider = new GoogleAuthProvider();

    try {
      // Sign in with Google popup
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const firstName = user.displayName.split(" ")[0]; // Get first name
        const lastName = user.displayName.split(" ")[1] || ""; // Get last name if possible

        //Check if the user exists in Firestore
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          // If user doesn't exist, store their data in Firestore
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            firstName,
            lastName,
            photo: user.photoURL,
          });
          console.log("User saved in Firestore!");
        } else {
          toast.info("User already exists in Firestore", {
            position: "top-center",
          });
        }

        // Send Google user data to API Endpoint for sign-in
        const response = await axios.post('https://your-backend-url/api/v1/auth/signin/google', {
          email: user.email,
          uid: user.uid,
          firstName,
          lastName,
          photo: user.photoURL, 
        });

        if (response.status === 200) {
          // Successfully signed in, redirect to the desired page
          toast.success("Signed in successfully!", {
            position: "top-center",
          });
          window.location.href = "/trader-dashboard";
        } else {
          toast.error("Failed to sign in. Please try again.", {
            position: "top-center",
          });
        }
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

  return (
    <div className="mt-6">
      <ToastContainer />
      {/* Google Sign-In Button */}
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
        {loading ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
};

export default SignInwithGoogle;
