import React, { useState, useEffect } from "react";
import "./styles/global.css"
import axios from "axios";
import ProductsList from "./pages/ProductsList";
import SingleProduct from "./pages/SingleProduct";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<MainLayout />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
