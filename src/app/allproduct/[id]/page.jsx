"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoCheckbox } from "react-icons/io5";
import { FaBan } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const ProductDetails = ({ params }) => {
    const { id } = React.use(params)
    const [product, setProduct] = useState([]);

    useEffect(() => {
         fetch(
           `https://coffee-store-espresso-emporium-server-1yc0.onrender.com/productDetails/${id}`
         )
           .then((res) => res.json())
           .then((data) => {
             setProduct(data);
           });
    })

    

     const {
       name,
       available,
       chef,
       details,
       image,
       price,
       rating,
       supplier,
       taste,
       category,
     } = product || {};
    

    return (
      <div>
        <div className="md:w-3/4 p-3 md:p-0 mx-auto m-10">
          <div>
            <Link href={"/"} className="bg-[#331A15] btn rounded-md text-white">
              <MdKeyboardDoubleArrowLeft />
              Back To Home
            </Link>
          </div>

          <div className="card card-side bg-base-300 mt-4 shadow-sm h-full md:p-6 w-full">
            <div className="flex flex-col md:flex-row items-center p-5 md:p-0 md:gap-20">
              <figure className=" w-full md:flex-1 rounded-lg">
                <img
                  className="md:w-96 w-full rounded-lg"
                  src={image}
                  alt="This is Product image"
                />
              </figure>
              <div className="md:flex-1 mt-7 md:mt-0 w-full">
                <h1 className="text-4xl text-[#331A15] font-semibold pb-3">
                  {category}
                </h1>
                <h1 className="text-xl font-semibold">
                  Name: <span className="text-xs font-normal">{name}</span>
                </h1>
                <h1 className="text-xl font-semibold">
                  Chef: <span className="text-xs font-normal">{chef}</span>
                </h1>
                <h1 className="text-xl font-semibold">
                  Price:{" "}
                  <span className="text-xs font-normal font-serif">
                    ৳ {price}
                  </span>
                </h1>
                <h1 className="text-xl font-semibold">
                  Available:{" "}
                  <span className="text-xs font-normal">
                    {available ? (
                      <IoCheckbox className="text-success text-base ml-2 inline-block" />
                    ) : (
                      <FaBan className="text-base ml-2 inline-block text-error" />
                    )}
                  </span>
                </h1>
                <h1 className="text-xl font-semibold">
                  Rating:{" "}
                  <span className="text-xs font-normal font-serif">
                    {rating}
                  </span>
                </h1>
                <h1 className="text-xl font-semibold">
                  Supplier:{" "}
                  <span className="text-xs font-normal font-serif">
                    {supplier}
                  </span>
                </h1>
                <h1 className="text-xl font-semibold">
                  Taste:{" "}
                  <span className="text-xs font-normal font-serif">
                    {taste}
                  </span>
                </h1>
                <h1 className="text-xl font-semibold">
                  Details:{" "}
                  <span className="text-xs font-normal font-serif">
                    {details}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;