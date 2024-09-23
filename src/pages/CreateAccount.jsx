import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { auth, db } from "../components/firebase"; 
import SignUpwithGoogle from "../components/SignUpWithGoogle";
import { toast } from "react-hot-toast";
import Bar from "../partials/SubHeader";



const CreateAccount = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    verificationCode: "",
    name: "",
    dob: "",
    country: "",
    phone: ""
  });

  const [error, setError] = useState(null);
  const [verificationSent, setVerificationSent] = useState(false); // Track email verification
  const [emailVerified, setEmailVerified] = useState(false); // Track whether the email is verified
  
  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Go to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle account creation and send email verification
  const handleAccountCreation = async () => {
     // Check if either password field is blank
    if (!formData.password || !formData.confirmpassword) {
      setError("Passwords cannot be blank.");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmpassword) {
      setError("Passwords do not match.");
      return;
    }


    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      setVerificationSent(true); // Mark verification email sent
      toast.success("Verification email sent. Please check your inbox.", {
        position:'top-right'
      });
      nextStep();
    } catch (err) {
      setError(err.message);
    }
  };

  // Poll for email verification status
  useEffect(() => {
    let intervalId;
    if (verificationSent) {
      intervalId = setInterval(async () => {
        const user = auth.currentUser;
        await user.reload(); // Reload user state to check verification status
        if (user.emailVerified) {
          setEmailVerified(true); // Enable the button when verified
          clearInterval(intervalId); // Stop polling after verification
        }
      }, 3000); // Check every 3 seconds
    }

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalId);
  }, [verificationSent]);

  // Final submit (after verifying the email)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    
    try {
      await user.reload(); // Refresh user data

      if (user.emailVerified) {
        // Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          email: formData.email,
          name: formData.name,
          dob: formData.dob,
          country: formData.country,
          phone: formData.phone,
          createdAt: new Date().toISOString()
        });

        console.log("User data saved to Firestore:", formData);
        window.location.href = "/complete-profile"; // Redirect after successful form submission
      } else {
        setError("Please verify your email before proceeding.");
      }
    } catch (err) {
      setError(err.message);
      console.error("Error saving user data:", err);
    }
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center m-h-screen bg-gray-100">
      <Bar />
      <div className="w-full max-w-md mt-16 py-8 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
          {step === 1 && "Create Account"}
          {step === 2 && "Verify Email"}
          {step === 3 && "Enter Name"}
          {step === 4 && "Enter Date of Birth"}
          {step === 5 && "Enter Phone Number"}
          {step === 6 && "Select Country"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Email and Password */}
          {step === 1 && (
            <>
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
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
              </div>
              <div>
                <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
                <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-3 text-sm text-gray-600"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                </button>
                
                {error && (
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
                
                </div>
              </div>
              <button
                type="button"
                onClick={handleAccountCreation}
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Register
              </button>

              <div className="mt-6 flex items-center justify-between">
                <span className="border-t w-full border-gray-300"></span>
                <span className="px-4 text-gray-400 text-sm">or</span>
                <span className="border-t w-full border-gray-300"></span>
              </div>

              <SignUpwithGoogle />

              <div className="text-sm text-center">
                <p className="text-sm font-medium text-gray-700">Already have an Account? <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in Here</a> </p>
              </div>
            </>
          )}

          {/* Step 2: Email Verification */}
          {step === 2 && (
            <>
              <div>
                <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
                  Verification Code
                </label>
                <p className="text-sm text-gray-500">
                  We sent a verification code to {formData.email}. Please check your inbox and verify your email.
                </p>
              </div>

              <button
                type="button"
                onClick={async () => {
                  const user = auth.currentUser;
                  await user.reload();
                  
                  if (user.emailVerified) {
                    nextStep();
                  } else {
                    setError("Please verify your email before proceeding.");
                  }
                }}
                className={`w-full px-4 py-2 font-bold text-white ${
                  emailVerified ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400'
                } rounded-md`}
                disabled={!emailVerified}
              >
                Proceed
              </button>
            </>
          )}

          {/* Step 3: Name */}
          {step === 3 && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Next
              </button>
            </>
          )}

          {/* Step 4: Date of Birth */}
          {step === 4 && (
            <>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Next
              </button>
            </>
          )}

          {/* Step 5: Country */}
          {step === 6 && (
            <>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                >
                  <option value="">Select your country</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Next
              </button>
            </>
          )}

          {/* Step 6: Phone Number */}
          {step === 5 && (
            <>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
                
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Submit
              </button>
            </>
          )}

          
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateAccount;