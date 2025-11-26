"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Product from "./Product";
import { GiCoffeeCup } from "react-icons/gi";
import Link from "next/link";
import Loading from "../Loading/Loading";


const OurPopulerProducts = () => {
  const [currProducts, setCurrProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/populer/coffees")
      .then((res) => res.json())
      .then((products) => {
        setCurrProducts(products);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: `${err?.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);

  if (loading) {
    return <Loading></Loading>
  }
    return (
      <>
        <div>
          <div className="relative mb-10 max-w-7xl mx-auto">
            <div className="absolute md:top-27 lg:top-18 top-15 z-50">
              <img
                className="lg:w-45 md:w-30 w-19"
                src="/assets/more/4.png"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 right-0 z-50">
              <img
                className="lg:w-55 md:w-45 w-23"
                src="/assets/more/5.png"
                alt=""
              />
            </div>
            <p className="text-center text-xs pt-5">--- Sip & Savor ---</p>
            <h1 className="text-3xl text-[#331A15] font-semibold text-center py-3">
              Our Popular Products
            </h1>
            <div className="flex items-center justify-center">
              <Link href="/addproduct" className="bg-[#331A15] btn rounded-md text-white">
                Add Coffee <GiCoffeeCup />
              </Link>
            </div>
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-3 md:px-0 md:w-3/4 mx-auto">
                {currProducts.map((product) => (
                  <Product
                    key={product._id}
                    setCurrProducts={setCurrProducts}
                    currProducts={currProducts}
                    product={product}
                  ></Product>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default OurPopulerProducts;
