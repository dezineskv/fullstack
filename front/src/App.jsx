import React, { createContext, useState, useEffect } from "react";
import "./styles/global.css";
import axios from "axios";
import ProductsList from "./pages/ProductsList";
import SingleProduct from "./pages/SingleProduct";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import GetProduct from "./pages/GetProduct";

export const ProdContext = createContext();

function App() {
  const localData = localStorage.getItem("products");
  const data = JSON.parse(localData) || [];

  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState();

  return (
    <ProdContext.Provider value={[products, setProducts]}>
      <>
        <Header />
        <Routes>
          <Route element={<MainLayout />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/delete/:id" element={<SingleProduct />} />
          <Route path="/products/:id" element={<GetProduct />} />
        </Routes>
      </>
    </ProdContext.Provider>
  );
}

export default App;
