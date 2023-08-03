import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/pages/Home/Home";
import Dishes from "../Components/pages/Dishes/Dishes";
import Booking  from "../Components/pages/Booking/Booking";
import AboutUs from "../Components/pages/AboutUs/AboutUs";
import NotFound from "../Components/pages/NotFound/NotFound";

const LayoutRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/services" element={<Booking />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default LayoutRoutes;
