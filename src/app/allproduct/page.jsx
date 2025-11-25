"use client";

import Product from "@/Componants/HomeSections/Product";
import Loading from "@/Componants/Loading/Loading";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://coffee-store-espresso-emporium-server-1yc0.onrender.com/coffees"
    )
      .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false)
      });
  });
    
    if (loading) {
      return <Loading></Loading>
  }
    return (
      <div className="max-w-7xl mx-auto px-5">
        <div className="py-10">
          <h1 className="text-3xl font-semibold pb-5">
            All Products: ({products.length})
          </h1>
          <div className="grid grid-cols-2 gap-5">
            {products.map((product, index) => (
              <Product key={index} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    );
};

export default AllProducts;
