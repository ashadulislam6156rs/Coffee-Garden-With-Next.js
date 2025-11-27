"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { IoCheckbox } from "react-icons/io5";
import { FaBan } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { AuthContext } from "@/Context/AuthContext";
import ManageMyProducts from "@/app/(Deshboard)/manageproducts/page";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";
import ErrorProductNotFound from "@/Componants/Error/ErrorProductNotFound";
import Loading from "@/Componants/Loading/Loading";

const ProductDetails = ({ params }) => {
  const { productId } = React.use(params);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://coffee-garden-server.vercel.app/productDetails/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false)
      })
      .catch(() => {
         setLoading(false);
      });
  }, [productId]);

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
    userName,
    userPhoto,
    userEmail,
  } = product || {};

  if (loading) {
    return <Loading></Loading>;
  }

  if (!product || !productId) {
    return <ErrorProductNotFound></ErrorProductNotFound>;
  }

  return (
    <PrivateRoute>
      <div className="max-w-7xl mx-auto">
        <title>Product Details | Coffee Garden</title>
        <div className="md:w-3/4 p-3 md:p-0 mx-auto m-10">
          <div>
            <div>
              <Link
                href={"/"}
                className="bg-[#331A15] btn rounded-md text-white"
              >
                <MdKeyboardDoubleArrowLeft />
                Back To Home
              </Link>
            </div>

            <div className="card flex flex-col bg-base-300 mt-4 shadow-sm h-full md:p-6 w-full">
              <div className="flex flex-col md:flex-row items-center p-5 md:p-0 md:gap-20">
                <figure className=" w-full md:flex-1 rounded-lg">
                  <img
                    className="md:w-96 lg:h-[500px] w-full rounded-lg"
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
              <div className="flex gap-4 mt-5 items-center">
                <div>
                  <img
                    className="w-24 h-24 rounded-full"
                    src={userPhoto}
                    alt="photo"
                  />
                </div>
                <div>
                  <h1 className="font-bold">{userName}</h1>
                  <h2>{userEmail}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {user?.email === userEmail && <ManageMyProducts></ManageMyProducts>}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default ProductDetails;
