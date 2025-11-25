"use client";
import Link from "next/link";
import React from "react";
import { FaBan, FaEye, FaRegEdit } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const Product = ({ product, setCurrProducts, currProducts }) => {
  const { _id, name, available, chef, image, price } = product || {};

  const handleDeletProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (currProducts.length <= 6) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "This Product Delete Not Possible. Please Add new Product!",
            showConfirmButton: false,
            timer: 1500,
          });

          return;
        } else {
          fetch(
            `https://coffee-store-espresso-emporium-server-1yc0.onrender.com/coffees/`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Product has been deleted.",
                  icon: "success",
                });
                // const products = currProducts.filter((pro) => pro._id !== _id);
                // setCurrProducts(products);
              }
            })
            .catch((err) => {
              Swal.fire({
                position: "top-center",
                icon: "error",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 1500,
              });
            });
        }
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-300 shadow-sm pr-4 md:pr-6 md:p-6 flex gap-3 justify-between items-center">
        <div className="flex gap-5 items-center realtive">
          <figure className="w-30 h-45 overflow-hidden">
            <img
              className="w-30 rounded-lg"
              src={image}
              alt="This is Product image"
            />
          </figure>
          <div className="">
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
        <div className="flex flex-col gap-2 absolute z-100 right-5">
          <Link
            href="/"
            title="View Details"
            className="btn btn-square bg-[#D2B48C] text-white w-fit h-fit p-2"
          >
            <FaEye />
          </Link>
          <Link
           href={"/"}
            title="Edit Product"
            className="btn bg-[#3C393B] btn-square text-white w-fit h-fit p-2"
          >
            <FaRegEdit />
          </Link>
          <button
            onClick={() => handleDeletProduct()}
            title="Delet Product"
            className="btn bg-[#EA4744] text-white btn-square w-fit h-fit p-2"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
