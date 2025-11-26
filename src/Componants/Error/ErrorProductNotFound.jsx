import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


const ErrorProductNotFound = () => {
  return (
    <>
      <title>Error Coffee Not Found</title>
      <div className="flex justify-center items-center py-10 pb-20 px-3">
        <div className=" w-full h-full flex justify-between items-center flex-col gap-5">
          <img className="w-50 pt-10" src="/assets/404/App-Error.png" alt="image" />
          <h1 className="text[#001931] font-bold text-4xl uppercase">
            OPPS! Product Not Found.
          </h1>
          <p className="text-[#627382] text-base">
            The Product you are requesting is not found on your system. Please
            try another Products.
          </p>
          <Link href={"/allproduct"} className="bg-[#331A15] btn rounded-md text-white">
            <MdKeyboardDoubleArrowLeft />
            Back To Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorProductNotFound;
