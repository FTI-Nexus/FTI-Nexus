import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

const SignInwithGoogle = () => {
  const googleLogin = async () => {
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
          { merge: true } // Merge in case user already exists
        );

        toast.success("User logged in successfully!", {
          position: "top-center",
        });

        // Navigate to profile page
        window.location.href = "/profile";
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      toast.error("Login failed, please try again.", {
        position: "top-center",
      });
    }
  };

  
  return (
        <>
            <div className="mt-6">
                <button
                    onClick={googleLogin}
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
        </>
  );
}
export default SignInwithGoogle;
