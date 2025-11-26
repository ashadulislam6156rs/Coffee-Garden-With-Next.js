"use client";
import Link from "next/link";
import React from "react";
import { FaBan, FaEye } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";

const Product = ({ product }) => {
  const { _id, name, available, chef, image, price, rating } = product || {};

  return (
    <div>
      <div className="card card-side hover:bg-base-200 transition-colors duration-700 hover:scale-97 ease-in-out bg-base-300 p-5 shadow-sm pr-4 md:pr-6 md:p-6 flex flex-col gap-5 justify-between items-center">
        <div className="w-full space-y-5">
          <figure className="w-full h-96 overflow-hidden">
            <img
              className="w-full h-96 rounded-lg"
              src={image}
              alt="This is Product image"
            />
          </figure>
          <div className="w-full">
            <h1 className="texrt-xl font-semibold">
              Name: <span className="text-xs font-normal">{name}</span>
            </h1>
            <h1 className="texrt-xl font-semibold">
              Chef: <span className="text-xs font-normal">{chef}</span>
            </h1>
            <h1 className="texrt-xl font-semibold">
              Price:{" "}
              <span className="text-xs font-normal font-serif">৳ {price}</span>
            </h1>
            <h1 className="texrt-xl font-semibold">
              Rating:{" "}
              <span className="text-xs font-normal font-serif">{rating}</span>
            </h1>
            <h1 className="texrt-xl font-semibold">
              Available:{" "}
              <span className="text-xs font-normal">
                {available ? (
                  <IoCheckbox className="text-success text-base ml-2 inline-block" />
                ) : (
                  <FaBan className="text-base ml-2 inline-block text-error" />
                )}
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full">
          <Link
            href={`/allproduct/${_id}`}
            title="View Details"
            className="btn bg-[#372727] text-white w-full p-2"
          >
            <FaEye className="text-base mr-1" /> <span>View Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
