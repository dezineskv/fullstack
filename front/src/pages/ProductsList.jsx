import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/global.css";
import toast from "react-hot-toast";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState();

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

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [setProducts, products]);

  return (
    <>
      <div className="max-w-[1440px] flex flex-col justify-center mx-auto text-center">
        <h1 className="text-black">Products</h1>
        {products.map((product) => (
          // <Link key={product._id} to={`/products/delete/${product._id}`}>Delete
          <div
            key={product._id}
            className="flex flex-row justify-between border-b-2 w-[50vw] mx-auto"
          >
            {product.title}
            <div>
              <Link to={`/products/${product._id}`}>See Product</Link>
            </div>
            <div>
              <Link to={`/products/delete/${product._id}`}>Delete</Link>
              {/* <button
                onClick={() => {
                  deleteProduct();
                }}
              >
                Delete Product
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsList;
