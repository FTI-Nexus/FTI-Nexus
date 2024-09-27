import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
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
import CompleteProfile from "./pages/CompleteProfile";
import { TraderDashboard, InvestorDashboard } from "./Users/DashBoard";
import 'react-toastify/dist/ReactToastify.css';






function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/create-account" element={<CreateAccount />}/>
       <Route path="/about-us" element={<AboutPage />}/>
       <Route path="/contact-us" element={<ContactUs />}/>
       <Route path="/complete-profile" element={<CompleteProfile />}/>
       <Route path="/learn-more" element={<ArticalPage />} />
       <Route path="/reset-password" element={<ResetPassword />}/>
       <Route path="/forgot-password" element={<ForgotPassword />}/>
       <Route path="/trader-dashboard" element={<TraderDashboard />}/>
       <Route path="/investor-dashboard" element={<InvestorDashboard />}/>
       <Route path="/profile" element={<ProfilePage />}/>
       <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
