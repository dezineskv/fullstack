import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/global.css";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("error");
      });
  });

  return (
    <>
      <div className="max-w-[1440px] flex flex-col justify-center mx-auto text-center">
        <h1 className="text-black">Products</h1>
        {products.map((product) => (
          // <Link key={product._id} to={`/products/delete/${product._id}`}>Delete
          <div key={product._id}>
            {product.title}
            <br />
            <Link to={`/products/delete/${product._id}`}>Delete</Link>
            <br />
            <Link to={`/products/${product._id}`}>See Product</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsList;
