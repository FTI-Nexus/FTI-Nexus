import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/firebase"; 
import SignUpwithGoogle from "../components/SignUpWithGoogle";
import { Toaster, toast } from "react-hot-toast";
import Bar from "../partials/SubHeader";



const CreateAccount = () => {
  const [loading, setLoading] = useState(false);  // Loading state for sign-in process
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const countryCodes = {
    "Afghanistan":"AF", "Albania":"AL", "Algeria":"DZ", "Andorra":"AD", "Angola":"AO", "Antigua and Barbuda":"AG",
    "Argentina":"AR", "Armenia":"AM", "Australia":"AU", "Austria":"AT", "Azerbaijan":"AZ", "Bahamas":"BS", "Bahrain":"BH",
    "Bangladesh":"BD", "Barbados":"BB", "Belarus":"BY", "Belgium":"BE", "Belize":"BZ", "Benin":"BJ", "Bhutan":"BT",
    "Bolivia":"BO", "Bosnia and Herzegovina":"BA", "Botswana":"BW", "Brazil":"BR", "Brunei":"BN", "Bulgaria":"BG",
    "Burkina Faso":"BF", "Burundi":"BI", "Cabo Verde":"CV", "Cambodia":"KH", "Cameroon":"CM", "Canada":"CA",
    "Central African Republic":"CF", "Chad":"TD", "Chile":"CL", "China":"CN", "Colombia":"CO", "Comoros":"KM",
    "Congo, Democratic Republic of the":"CD", "Congo, Republic of the":"CG", "Costa Rica":"CR",
    "Croatia":"HR", "Cuba":"CU", "Cyprus":"CY", "Czech Republic":"CZ", "Denmark":"DK", "Djibouti":"DJ", "Dominica":"DM",
    "Dominican Republic":"DO", "Ecuador":"ER", "Egypt":"EG", "El Salvador":"SV", "Equatorial Guinea":"GQ",
    "Eritrea":"ER", "Estonia":"EE", "Eswatini":"SZ", "Ethiopia":"ET", "Fiji":"FJ", "Finland":"FI", "France":"FR", "Gabon":"GA",
    "Gambia":"GM", "Georgia":"GE", "Germany":"DE", "Ghana":"GH", "Greece":"GR", "Grenada":"GD", "Guatemala":"GT", "Guinea":"GN",
    "Guinea-Bissau":"GW", "Guyana":"GY", "Haiti":"HT", "Honduras":"HN", "Hungary":"HU", "Iceland":"IS", "India":"IN",
    "Indonesia":"ID", "Iran":"IR", "Iraq":"IQ", "Ireland":"IE", "Israel":"IL", "Italy":"IT", "Jamaica":"JM", "Japan":"JP",
    "Jordan":"JO", "Kazakhstan":"KZ", "Kenya":"KE", "Kiribati":"KI", "Korea, North":"KP", "Korea, South":"KR", "Kosovo":"KO",
    "Kuwait":"KW", "Kyrgyzstan":"KG", "Laos":"LA", "Latvia":"LV", "Lebanon":"LB", "Lesotho":"LS", "Liberia":"LR", "Libya":"LY",
    "Liechtenstein":"LI", "Lithuania":"LT", "Luxembourg":"LU", "Madagascar":"MG", "Malawi":"MW", "Malaysia":"MY",
    "Maldives":"MV", "Mali":"ML", "Malta":"MT", "Marshall Islands":"MH", "Mauritania":"MR", "Mauritius":"MU", "Mexico":"MX",
    "Micronesia":"FM", "Moldova":"MD", "Monaco":"MC", "Mongolia":"MN", "Montenegro":"ME", "Morocco":"MA", "Mozambique":"MZ",
    "Myanmar":"MM", "Namibia":"NA", "Nauru":"NR", "Nepal":"NP", "Netherlands":"NL", "New Zealand":"NZ", "Nicaragua":"NI",
    "Niger":"NE", "Nigeria":"NG", "North Macedonia":"MK", "Norway":"NO", "Oman":"OM", "Pakistan":"PK", "Palau":"PW",
    "Panama":"PA", "Papua New Guinea":"PG", "Paraguay":"PY", "Peru":"PE", "Philippines":"PH", "Poland":"PL", "Portugal":"PT",
    "Qatar":"QA", "Romania":"RO", "Russia":"RU", "Rwanda":"RW", "Saint Kitts and Nevis":"KN", "Saint Lucia":"LC",
    "Saint Vincent and the Grenadines":"VC", "Samoa":"WS", "San Marino":"SM", "Saudi Arabia":"SA", "Senegal":"SN",
    "Serbia":"RS", "Seychelles":"SC", "Sierra Leone":"SL", "Singapore":"SG", "Slovakia":"SK", "Slovenia":"SI",
    "Solomon Islands":"SB", "Somalia":"SO", "South Africa":"ZA", "South Sudan":"SS", "Spain":"ES", "Sri Lanka":"LK",
    "Sudan":"SD", "Suriname":"SR", "Sweden":"SE", "Switzerland":"CH", "Syria":"SY", "Taiwan":"TW", "Tajikistan":"TJ",
    "Tanzania":"TZ", "Thailand":"TH", "Timor-Leste":"TL", "Togo":"TG", "Tonga":"TO", "Trinidad and Tobago":"TT",
    "Tunisia":"TN", "Turkey":"TR", "Turkmenistan":"TM", "Tuvalu":"TV", "Uganda":"UG", "Ukraine":"UA", "United Arab Emirates":"AE",
    "United Kingdom":"UK", "United States":"US", "Uruguay":"UY", "Uzbekistan":"UZ", "Vanuatu":"VU", "Vatican City":"VA",
    "Venezuela":"VE", "Vietnam":"VN", "Yemen":"YE", "Zambia":"ZM", "Zimbabwe":"ZW"

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
          firstName: formData.firstName,
          lastName: formData.lastName,
          gender: formData.gender,
          dateOfBirth: formData.dateOfBirth,
          countryOfOrigin: formData.countryOfOrigin,
          phone: formData.phone,
          accountType: formData.accountType,
          createdAt: new Date().toISOString()
        });

        // Send data to API Endpoint
        const response = await axios.post('https://fti-nexus-backend.onrender.com/api/v1/auth/signup', {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          gender: formData.gender,
          dateOfBirth: formData.dateOfBirth,
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

        navigate('/profile');
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
          {step === 8 && "Select Country"}
          {step === 7 && "Select Account Type"}
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
                  value={formData.firstName}
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
                  value={formData.lastName}
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
                  value={formData.dateOfBirth}
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number (e.g. +18062542589)"
                  className="text-black mt-1 px-3 py-2 bg-gray-50 border shadow-sm border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  const phoneNumberPattern = /^\+\d{11,15}$/;
                  if (!phoneNumberPattern.test(formData.phone)) {
                    toast.error('Please enter a valid phone number in the format +18062542589',{
                      position: "top-center"
                    });
                    return;
                  }
                  nextStep(); 
                }}
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Next
              </button>
            </>
          )}


          {/* Step 8: Select Account Type */}
          {step === 8 && (
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
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                {loading ? "Processing" : "Done"}
              </button>
            </>
          )}

          {/* Step 7: Select Country */}
          {step === 7 && (
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
                  {Object.keys(countryCodes).map(country => (
                    <option key={country} value={countryCodes[country]}>
                      {country}
                    </option>
                  ))}
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

          
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateAccount;