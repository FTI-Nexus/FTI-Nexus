import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import CompleteProfile from "./pages/CompleteProfile";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./Users/TraderDashboard";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";





function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/create-account" element={<CreateAccount />}/>
       <Route path="/about-us" element={<AboutPage />} />
       <Route path="/contact" element={<ContactUs />} />
       <Route path="/complete-profile" element={<CompleteProfile />}/>
       <Route path="/not-found" element={<NotFoundPage />}/>
       <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
