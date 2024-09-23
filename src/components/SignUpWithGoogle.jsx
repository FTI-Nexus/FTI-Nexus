import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";


const SignUpwithGoogle = () => {
  const [loading, setLoading] = useState(false);  // Loading state to show progress

  const googleSignin = async () => {
    setLoading(true);  // Set loading to true when sign-in starts
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        await setDoc(
          doc(db, "Users", user.uid),
          {
            email: user.email,
            firstName: user.displayName,
            photo: user.photoURL,
            lastName: "", // Can be updated later if needed
          },
          { merge: true }  // Avoid overwriting existing user data
        );

        toast.success("User logged in successfully!", {
          position: "top-center",
        });

        // Navigate to profile page
        window.location.href = '/profile'
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      
      // Handling Firebase error codes for better UX
      if (error.code === 'auth/popup-closed-by-user') {
        toast.error('Sign-in popup closed by user. Please try again.', {
          position: "top-center",
        });
      } else if (error.code === 'auth/network-request-failed') {
        toast.error('Network error. Please check your connection and try again.', {
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
      <button
        onClick={googleSignin}
        type="button"
        className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-white hover:bg-gray-50"
        disabled={loading}  // Disable the button while loading
      >
        <img
          src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        {loading ? "Signing in..." : "Sign up with Google"}
      </button>
    </div>
  );
};

export default SignUpwithGoogle;
