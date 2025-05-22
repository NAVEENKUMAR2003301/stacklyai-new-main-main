import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "../src/pages/Home/Home";
import Header from "./components/Header";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer";
import ForgetPg from "./pages/forgetPage/ForgetPg";
import Api from "./pages/API/Api";
import Pricing from "./pages/PricingPage/Pricing";
import Contact from "./pages/ContactPg/Contact";
import HeroForgetPg from "./pages/forgetPage/HeroForgetPg";
import Otp from "./pages/forgetPage/Otp";
import ResetPassword from "./pages/forgetPage/ResetPassword";
import ResetPopup from "./pages/forgetPage/ResetPopup";
import Billing from "./pages/PricingPage/Billing";
import Payment from "./pages/PricingPage/Payment";
import UiPlans from "./pages/PricingPage/UiPlans";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Api" element={<Api/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Billing" element={<Billing/>}/>
        <Route path="/UiPlans" element={<UiPlans/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/HeroForgetPg" element={<HeroForgetPg/>}/>
        <Route path="/Otp" element={<Otp/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
        <Route path="/ResetPopup" element={<ResetPopup/>}/>
        <Route path="/ForgetPg" element={<ForgetPg/>}/>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>

      <Footer />
    </div>
  );
}
