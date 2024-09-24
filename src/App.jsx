import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ArticalPage from "./pages/ArticalPage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/create-account" element={<CreateAccount />}/>
       <Route path="/learn-more" element={<ArticalPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
