import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  AllFood,
  FoodDetails,
  Card,
  Checkout,
  Login,
  Register,
  Contact,
} from "../pages";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/allFood" element={<AllFood />} />
      <Route path="/allFood/:id" element={<FoodDetails />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
};

export default Routers;
