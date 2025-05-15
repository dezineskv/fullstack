import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/global.css";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  // fetch product by id
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setSingleProduct(response.data.data);
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
        setLoading(false); // Set loading to false on error
      });
  }, [id, products]); // Empty dependency array means this runs only once on mount

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!singleProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <div className="text-center mx-auto w-full flex ">
        <div className="max-w[1440px] mx-auto">
          <h1>Product Details</h1>
          <div className="text-black mx-auto pb-4">
            <div className="max-w-[500px] border-2 rounded-lgoverflow-hidden shadow-lg ">
              <div className="mx-auto pt-6 pl-6 pr-6 pb-0">
                <img
                  className="prod-img mx-auto"
                  src={singleProduct.img}
                  alt="product image"
                />
              </div>
              <div className="align-middle">
                <div className="text-black font-bold text-xl mb-2">
                  {singleProduct.title}
                </div>
                <p className="text-black text-base">
                  {singleProduct.description}
                </p>
                <p className="text-black text-base">${singleProduct.price}</p>
              </div>
            </div>
            <div className="px-6 mt-4 pt-8 pb-2">
              <br />
              <Link to="/products">All Products</Link>
            </div>
            {/* <div className="px-6 mt-4 pt-8 pb-2 mb-4">
             <button onClick={editProd} className="rounded-full bg-black">Edit</button>
             <br/>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
