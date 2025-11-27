"use client";

import Product from "@/Componants/HomeSections/Product";
import Loading from "@/Componants/Loading/Loading";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://coffee-garden-server.vercel.app/coffees")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.message);
        setLoading(false);
      })
      .catch((err) => toast.error(err?.message));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div className="max-w-7xl mx-auto px-5">
      <title>All Products | Coffee Garden</title>
      <div className="py-10">
        <h1 className="text-3xl font-semibold pb-5 text-center">
          All Products: ({products.length})
        </h1>
        <p className="pb-5 md:w-4/6 mx-auto text-center">
          Discover our curated collection of premium coffees-from classic
          cappuccinos to bold black brews-crafted to delight every coffee lover.
        </p>
        {/* Search items */}
        <div className="py-7 text-center md:text-start">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
              placeholder="Search product name"
            />
          </label>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product, index) => (
            <Product key={index} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
