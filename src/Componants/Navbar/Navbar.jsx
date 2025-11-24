"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <nav className="w-full mx-auto bg-[#372727]">
          <div className="md:h-16 flex gap-1 items-center justify-center">
            
            <Link className="text-white" href="/about">About</Link>
            <Image
              src="/assets/logo1.png"
              alt="logo"
              width={60}
              height={60}
              className="md:w-14 w-10"
            />
            <h1 className="md:text-2xl text-xl font-bold text-white">
              Espresso Emporium
            </h1>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
