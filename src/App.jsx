import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { auth } from "./components/firebase";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ArticalPage from "./pages/ArticalPage";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./components/ProfilePage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Disclaimer from "./components/Disclaimer";
import Loader from "./partials/Loader";  
import { TraderDashboard, InvestorDashboard } from "./Users/DashBoard";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState(null); // Initialize user as null
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Set loading to false once auth state is determined
    });

    return () => unsubscribe(); 
  }, []);

  useEffect(() => {
    setLoading(true); // Start loading on route change

    switch (location.pathname) {
      case '/login':
        document.title = 'Login - FTI Nexus - Trading & Investment Platform';
        break;
      case '/create-account':
        document.title = 'Create Account - FTI Nexus - Trading & Investment Platform';
        break;
      case '/profile':
        document.title = 'Profile - FTI Nexus - Trading & Investment Platform';
        break;
      case '/about-us':
        document.title = 'About Us - FTI Nexus - Trading & Investment Platform';
        break;
      case '/contact-us':
        document.title = 'Contact Us - FTI Nexus - Trading & Investment Platform';
        break;
      case '/trader-dashboard':
        document.title = 'Trader Dashboard - FTI Nexus - Trading & Investment Platform';
        break;
      case '/investor-dashboard':
        document.title = 'Investor Dashboard - FTI Nexus - Trading & Investment Platform';
        break;
      default:
        document.title = 'FTI Nexus - Trading & Investment Platform';
    }
  }, [location]);

  return (
    <React.Fragment>
      {loading && <Loader />}  {/* Show Loader while loading */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/learn-more" element={<ArticalPage />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/trader-dashboard" element={user ? <TraderDashboard /> : <Navigate to="/login" />} />
        <Route path="/investor-dashboard" element={user ? <InvestorDashboard /> : <Navigate to="/login" />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
}

function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RootApp;
