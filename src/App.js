import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from './components/AdminRoute';
import HomeScreen from './screens/HomeScreen';
// import './App.css';
import "./App.scss"

import ContactScreen from "./screens/ContactScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import BecomeVolunteerScreen from "./screens/BecomeVolunteerScreen";
import GallaryScreen from "./screens/GallaryScreen";
import OurTeamScreen from "./screens/OurTeamScreen";
import DonateScreen from "./screens/DonateScreen";
import RegisterScreen from "./screens/RegisterScreen";

// Admin login routes
import AdminRouteApp from "./AdminPanel/src/Routes/AdminRouteApp";
import TermCondition from "./screens/TermCondition";
import CanclledPayment from "./screens/CanclledPayment";
import Refund from "./screens/Refund";
import "./AdminPanel/src/index.scss"
function App() {
  console.log("apppp call")
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/login" element={<AdminLogin />} exact /> */}
        {/* <Route exact path="/admin/*" element={<AdminRouteApp />} /> */}
        {/* <Route path="/dashboard" element={<AdminRoute component={AdminRouteApp} />} exact /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} exact /> */}
        <Route path="/admin/*" element={<AdminRouteApp />} exact />
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/contact-us" element={<ContactScreen />} exact />
        <Route path="/about-us" element={<AboutUsScreen />} exact />
        <Route path="/become-volunteer" element={<BecomeVolunteerScreen />} exact />
        <Route path="/gallary" element={<GallaryScreen />} exact />
        <Route path="/our-team" element={<OurTeamScreen />} exact />
        <Route path="/donate" element={<DonateScreen />} exact />
        <Route path="/register" element={<RegisterScreen />} exact />
        <Route path="/terms-condition" element={<TermCondition />} exact />
        <Route path="/cancle-payment" element={<CanclledPayment />} exact />
        <Route path="/refund" element={<Refund />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
