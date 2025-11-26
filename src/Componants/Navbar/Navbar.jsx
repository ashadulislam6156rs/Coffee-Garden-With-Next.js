"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/Context/AuthContext";
import Deshboard from "./Deshboard";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const { user } = useContext(AuthContext);

  // ** Active Path
  const pathname = usePathname();
  const linkClass = (path) =>
    pathname === path
      ? "text-[#d1b48c] font-semibold" 
      : " hover:text-[#d1b48c]";

  return (
    <div className="max-w-7xl mx-auto bg-[#372727]">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm text-black dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="btn-ghost hover:bg-transparent">
                <Link href={"/"} className={linkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/allproduct"} className={linkClass("/allproduct")}>
                  All Products
                </Link>
              </li>
              <li>
                <Link href={"/about"} className={linkClass("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className={linkClass("/contact")}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn btn-ghost hover:bg-transparent text-white text-base"
          >
            <Image src="/assets/logo1.png" alt="image" width={40} height={55} />
            CoffeeGarden
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white menu-horizontal px-1">
            <li className="">
              <Link href={"/"} className={linkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/allproduct"} className={linkClass("/allproduct")}>
                All Products
              </Link>
            </li>
            <li>
              <Link href={"/about"} className={linkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className={linkClass("/contact")}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          {user ? (
            <Deshboard></Deshboard>
          ) : (
            <Link className="btn btn-md text-base" href={"/login"}>
              LogIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
