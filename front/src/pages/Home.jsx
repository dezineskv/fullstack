import React from "react";
import { Link } from "react-router-dom";
// import "../styles/global.css";
import ProductsList from "./ProductsList";

function Home() {
  return (
    <>
      <div className="bg-slate-500 flex flex-row w-full h-full">
        <Link to="/products">See all products</Link>
      </div>
      <ProductsList />
    </>
  );
}

export default Home;
