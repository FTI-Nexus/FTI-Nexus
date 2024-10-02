import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { auth, db } from "../components/firebase"; 
import SignUpwithGoogle from "../components/SignUpWithGoogle";
import { Toaster, toast } from "react-hot-toast";
import Bar from "../partials/SubHeader";



const CreateAccount = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    countryOfOrigin: "",
    phone: "",
    accountType: ""
  });

  const [error, setError] = useState(null);
  const [verificationSent, setVerificationSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleAccountCreation = async () => {
    if (!formData.password || !formData.confirmpassword) {
      setError("Passwords cannot be blank.");
      return;
    }

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

      await sendEmailVerification(user);
      setVerificationSent(true);
      toast.success("Verification email sent. Please check your inbox.");
      nextStep();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    let intervalId;
    if (verificationSent) {
      intervalId = setInterval(async () => {
        const user = auth.currentUser;
        await user.reload();
        if (user.emailVerified) {
          setEmailVerified(true);
          clearInterval(intervalId);
        }
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [verificationSent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    
    try {
      await user.reload();
      if (user.emailVerified) {
        await setDoc(doc(db, "users", user.uid), {
          email: formData.email,
          firstName: formData.firstname,
          lastName: formData.lastname,
          gender: formData.gender,
          dateOfBirth: formData.dob,
          countryOfOrigin: formData.country,
          phone: formData.phone,
          accountType: formData.accountType,
          createdAt: new Date().toISOString()
        });

        // Send data to API Endpoint
        const response = await axios.post('https://fti-nexus-backend.onrender.com/api/v1/auth/signup', {
          email: formData.email,
          firstName: formData.firstname,
          lastName: formData.lastname,
          gender: formData.gender,
          dateOfBirth: formData.dob,
          countryOfOrigin: formData.country,
          phone: formData.phone,
          accountType: formData.accountType,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        

        if (!response.ok) {
          throw new Error("Failed to send data to API EndPoint");
        }

        window.location.href = "/complete-profile";
      } else {
        setError("Please verify your email before proceeding.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center m-h-screen bg-gray-50">
      <Toaster />
      <Bar />
      <div className="w-full max-w-md mt-20 py-8 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
          {step === 1 && "Create Account"}
          {step === 2 && "Verify Email"}
          {step === 3 && "Enter Name"}
          {step === 4 && "Enter Gender"}
          {step === 5 && "Enter Date of Birth"}
          {step === 6 && "Enter Phone Number"}
          {step === 7 && "Select Account Type"}
          {step === 8 && "Select Country"}
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
                <span className="border-t w-full border-gray-600"></span>
                <span className="px-4 text-gray-700 text-sm">or</span>
                <span className="border-t w-full border-gray-600"></span>
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
              <p>We sent a verification email to {formData.email}. Please check your inbox and verify your email.</p>
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
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Proceed
              </button>
            </>
          )}

          {/* Step 3: Enter Name */}
          {step === 3 && (
            <>
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
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

          {/* Step 4: Enter Gender */}
          {step === 4 && (
            <>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
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

          {/* Step 5: Enter Date of Birth */}
          {step === 5 && (
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

          {/* Step 6: Enter Phone Number */}
          {step === 6 && (
            <>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
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

          {/* Step 7: Select Account Type */}
          {step === 7 && (
            <>
              <div>
                <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Account Type</label>
                <select
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  required
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                >
                  <option value="">Select account type</option>
                  <option value="trader">Trader Account</option>
                  <option value="investor">Investor Account</option>
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

          {/* Step 8: Select Country */}
          {step === 8 && (
            <>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  autoComplete="country"
                  required
                  className="text-black mt-1 px-4 py-2 bg-white border border-gray-300 shadow-sm rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full transition ease-in-out duration-150"
                >
                  <option value="">Select your country</option>
                  {[
                    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
                    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
                    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
                    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
                    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
                    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
                    "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica",
                    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
                    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
                    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
                    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
                    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
                    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
                    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
                    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
                    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
                    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
                    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
                    "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
                    "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
                    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
                    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
                    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal",
                    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
                    "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
                    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
                    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
                    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
                    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
                    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                  ].map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>

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