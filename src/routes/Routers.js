import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StripeContainer from "../components/Stripe/StripeContainer";
import { Home, AllFood, FoodDetails, Checkout, Contact } from "../pages";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<StripeContainer />} />
      <Route path="/allFood" element={<AllFood />} />
      <Route path="/allFood/:id" element={<FoodDetails />} />
    </Routes>
  );
};

export default Routers;
