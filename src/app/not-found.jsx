import Link from 'next/link';
import React from 'react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

const notFound = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="text-center mt-10">
            {" "}
            <Link href={"/"} className="bg-[#331A15] btn rounded-md text-white">
                            <MdKeyboardDoubleArrowLeft />
                            Back To Home
                          
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img src="/assets/404/404.gif" alt="image" />
          </div>
        </div>
      </div>
    );
};

export default notFound;