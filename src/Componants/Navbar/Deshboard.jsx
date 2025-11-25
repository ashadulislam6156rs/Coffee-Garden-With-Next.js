"use client"
import { AuthContext } from '@/Context/AuthContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Deshboard = () => {

    const { user, userLogOut, setUser } = useContext(AuthContext);


     const handleLogOut = () => {
       userLogOut()
         .then(() => {
           toast.success("Your logout is successful.");
           setUser(null);
         })
         .then((err) => toast.error(err?.message));
     };



    return (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div title='User Profile' className="w-10 h-10 rounded-full border-2 border-[#fff8ec] flex justify-center items-center">
            <img
              className="w-9 h-9 rounded-full "
              alt="image"
              src={user?.photoURL}
            />
          </div>
        </div>
        <ul
          tabIndex="-1"
          id="userNavbar"
          className="menu menu-md mt-5 dropdown-content bg-base-100 rounded-box z-100 w-62 p-2 shadow-md shadow-[#0124445a]"
        >
          <li className="mb-2 shadow-md cursor-pointer ">
            <Link
              href={"/"}
              className="flex gap-2 items-center bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
            >
              {/* <HiOutlineHome className="text-base" /> */}
              Edite Profile
            </Link>
          </li>

          <li className="mb-2 shadow-md cursor-pointer ">
            <Link
              href={"/"}
              className="flex gap-2 items-center bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
            >
              {/* <HiOutlineHome className="text-base" /> */}
              Add Product
            </Link>
          </li>
          <li className="mb-2 shadow-md cursor-pointer ">
            <Link
              href={"/"}
              className="flex gap-2 items-center bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
            >
              {/* <HiOutlineHome className="text-base" /> */}
              Manage Products
            </Link>
          </li>
          <li>
            <button
              className="bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] py-1.5 font-semibold"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
};

export default Deshboard;