import React, { useContext } from "react";
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
import AfterBilling from "./pages/AfterPricing/AfterBilling";
import AfterPayment from "./pages/AfterPricing/AfterPayment";
import AfterUiPlans from "./pages/AfterPricing/AfterUiPlans";
import AfterPay from "./pages/AfterPricing/AfterPay";
import AfterConformationPage from "./pages/AfterPricing/AfterConformationPage";
import Profile from "./pages/Profile/Profile";
import AfterHome from "./pages/AfterSignHome/AfterHome";
import Form from "./pages/Home/Form";
import HeroProfile from "./pages/Profile/HeroProfile";
import Myplan from "./pages/Profile/Myplan";
import Mybilling from "./pages/Profile/Mybilling";
import HelpCenter from "./pages/Profile/HelpCenter";
import ExteriorForm from "./pages/AfterSignHome/ExteriorForm";
import OutdoorForm from "./pages/AfterSignHome/OutdoorForm";
import { UserContext } from "./context/UserContext";
import AfterProducts from "./pages/AfterProductPage/AfterProducts";
import AfterPricing from "./pages/AfterPricing/AfterPricing";

export default function App() {
  const { userInfo } = useContext(UserContext);
  return (
    <div className="overflow-x-hidden">
      <Header />

      <Routes>
        {userInfo.userId ? (
          <Route path="/" element={<AfterHome />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        {userInfo.userId ? (
          <Route path="/AfterProducts" element={<AfterProducts />} />
        ) : (
          <Route path="/Products" element={<Products />} />
        )}
        {userInfo.userId ? (
          <Route path="/Pricing" element={<AfterPricing />} />
        ) : (
          <Route path="/AfterPricing" element={<Pricing />} />
        )}

        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/AfterBilling" element={<AfterBilling />} />
        <Route path="/AfterUiPlans" element={<AfterUiPlans />} />
        <Route path="/AfterPay" element={<AfterPay />} />
        <Route
          path="/AfterConformationPage"
          element={<AfterConformationPage />}
        />
        <Route path="/AfterPayment" element={<AfterPayment />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/HeroForgetPg" element={<HeroForgetPg />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ResetPopup" element={<ResetPopup />} />
        <Route path="/ForgetPg" element={<ForgetPg />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/HeroProfile" element={<HeroProfile />} />
        <Route path="/Myplan" element={<Myplan />} />
        <Route path="/Mybilling" element={<Mybilling />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/ExteriorForm" element={<ExteriorForm />} />
        <Route path="/OutdoorForm" element={<OutdoorForm />} />
        <Route path="/AfterProducts" element={<AfterProducts />} />
      </Routes>

      <Footer />
    </div>
  );
}
